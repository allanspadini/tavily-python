"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5894],{6042:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"building-openai-assistant","metadata":{"permalink":"/blog/building-openai-assistant","source":"@site/blog/2023-11-12-openai-assistant/index.md","title":"How to build an OpenAI Assistant with Internet access","description":"OpenAI has done it again with a groundbreaking DevDay showcasing some of the latest improvements to the OpenAI suite of tools, products and services. One major release was the new Assistants API that makes it easier for developers to build their own assistive AI apps that have goals and can call models and tools.","date":"2023-11-12T00:00:00.000Z","formattedDate":"November 12, 2023","tags":[{"label":"tavily","permalink":"/blog/tags/tavily"},{"label":"search-api","permalink":"/blog/tags/search-api"},{"label":"openai","permalink":"/blog/tags/openai"},{"label":"assistant-api","permalink":"/blog/tags/assistant-api"}],"readingTime":5.855,"truncated":false,"authors":[{"name":"Assaf Elovic","title":"Creator @ GPT Researcher","url":"https://github.com/assafelovic","imageURL":"https://lh3.googleusercontent.com/a/ACg8ocJtrLku69VG_2Y0sJa5mt66gIGNaEBX5r_mgE6CRPEb7A=s96-c","key":"assafe"}],"nextItem":{"title":"How we built GPT Researcher","permalink":"/blog/building-gpt-researcher"}},"content":"OpenAI has done it again with a [groundbreaking DevDay](https://openai.com/blog/new-models-and-developer-products-announced-at-devday) showcasing some of the latest improvements to the OpenAI suite of tools, products and services. One major release was the new [Assistants API](https://platform.openai.com/docs/assistants/overview) that makes it easier for developers to build their own assistive AI apps that have goals and can call models and tools.\\n\\nThe new Assistants API currently supports three types of tools: Code Interpreter, Retrieval, and Function calling. Although you might expect the Retrieval tool to support online information retrieval (such as search APIs or as ChatGPT plugins), it only supports raw data for now such as text or CSV files.\\n\\nThis blog will demonstrate how to leverage the latest Assistants API with online information using the function calling tool.\\n\\nTo skip the tutorial below, feel free to check out the full [Github Gist here](https://gist.github.com/assafelovic/579822cd42d52d80db1e1c1ff82ffffd).\\n\\nAt a high level, a typical integration of the Assistants API has the following steps:\\n\\n- Create an [Assistant](https://platform.openai.com/docs/api-reference/assistants/createAssistant) in the API by defining its custom instructions and picking a model. If helpful, enable tools like Code Interpreter, Retrieval, and Function calling.\\n- Create a [Thread](https://platform.openai.com/docs/api-reference/threads) when a user starts a conversation.\\n- Add [Messages](https://platform.openai.com/docs/api-reference/messages) to the Thread as the user ask questions.\\n- [Run](https://platform.openai.com/docs/api-reference/runs) the Assistant on the Thread to trigger responses. This automatically calls the relevant tools.\\n\\nAs you can see below, an Assistant object includes Threads for storing and handling conversation sessions between the assistant and users, and Run for invocation of an Assistant on a Thread.\\n\\n![OpenAI Assistant Object](./diagram-assistant.jpeg)\\n\\nLet\u2019s go ahead and implement these steps one by one! For the example, we will build a finance GPT that can provide insights about financial questions. We will use the [OpenAI Python SDK v1.2](https://github.com/openai/openai-python/tree/main#installation) and [Tavily Search API](https://tavily.com).\\n\\nFirst things first, let\u2019s define the assistant\u2019s instructions:\\n\\n```python\\nassistant_prompt_instruction = \\"\\"\\"You are a finance expert. \\nYour goal is to provide answers based on information from the internet. \\nYou must use the provided Tavily search API function to find relevant online information. \\nYou should never use your own knowledge to answer questions.\\nPlease include relevant url sources in the end of your answers.\\n\\"\\"\\"\\n```\\nNext, let\u2019s finalize step 1 and create an assistant using the latest [GPT-4 Turbo model](https://github.com/openai/openai-python/tree/main#installation) (128K context), and the call function using the [Tavily web search API](https://tavily.com/):\\n\\n```python\\n# Create an assistant\\nassistant = client.beta.assistants.create(\\n    instructions=assistant_prompt_instruction,\\n    model=\\"gpt-4-1106-preview\\",\\n    tools=[{\\n        \\"type\\": \\"function\\",\\n        \\"function\\": {\\n            \\"name\\": \\"tavily_search\\",\\n            \\"description\\": \\"Get information on recent events from the web.\\",\\n            \\"parameters\\": {\\n                \\"type\\": \\"object\\",\\n                \\"properties\\": {\\n                    \\"query\\": {\\"type\\": \\"string\\", \\"description\\": \\"The search query to use. For example: \'Latest news on Nvidia stock performance\'\\"},\\n                },\\n                \\"required\\": [\\"query\\"]\\n            }\\n        }\\n    }]\\n)\\n```\\n\\nStep 2+3 are quite straight forward, we\u2019ll initiate a new thread and update it with a user message:\\n\\n```python\\nthread = client.beta.threads.create()\\nuser_input = input(\\"You: \\")\\nmessage = client.beta.threads.messages.create(\\n    thread_id=thread.id,\\n    role=\\"user\\",\\n    content=user_input,\\n)\\n```\\n\\nFinally, we\u2019ll run the assistant on the thread to trigger the function call and get the response:\\n\\n```python\\nrun = client.beta.threads.runs.create(\\n    thread_id=thread.id,\\n    assistant_id=assistant_id,\\n)\\n```\\n\\nSo far so good! But this is where it gets a bit messy. Unlike with the regular GPT APIs, the Assistants API doesn\u2019t return a synchronous response, but returns a status. This allows for asynchronous operations across assistants, but requires more overhead for fetching statuses and dealing with each manually.\\n\\n![Status Diagram](./diagram-1.png)\\n\\nTo manage this status lifecycle, let\u2019s build a function that can be reused and handles waiting for various statuses (such as \u2018requires_action\u2019):\\n\\n```python\\n# Function to wait for a run to complete\\ndef wait_for_run_completion(thread_id, run_id):\\n    while True:\\n        time.sleep(1)\\n        run = client.beta.threads.runs.retrieve(thread_id=thread_id, run_id=run_id)\\n        print(f\\"Current run status: {run.status}\\")\\n        if run.status in [\'completed\', \'failed\', \'requires_action\']:\\n            return run\\n```\\n\\nThis function will sleep as long as the run has not been finalized such as in cases where it\u2019s completed or requires an action from a function call.\\n\\nWe\u2019re almost there! Lastly, let\u2019s take care of when the assistant wants to call the web search API:\\n\\n```python\\n# Function to handle tool output submission\\ndef submit_tool_outputs(thread_id, run_id, tools_to_call):\\n    tool_output_array = []\\n    for tool in tools_to_call:\\n        output = None\\n        tool_call_id = tool.id\\n        function_name = tool.function.name\\n        function_args = tool.function.arguments\\n\\n        if function_name == \\"tavily_search\\":\\n            output = tavily_search(query=json.loads(function_args)[\\"query\\"])\\n\\n        if output:\\n            tool_output_array.append({\\"tool_call_id\\": tool_call_id, \\"output\\": output})\\n\\n    return client.beta.threads.runs.submit_tool_outputs(\\n        thread_id=thread_id,\\n        run_id=run_id,\\n        tool_outputs=tool_output_array\\n    )\\n```\\n\\nAs seen above, if the assistant has reasoned that a function call should trigger, we extract the given required function params and pass back to the runnable thread. We catch this status and call our functions as seen below:\\n\\n```python\\nif run.status == \'requires_action\':\\n    run = submit_tool_outputs(thread.id, run.id, run.required_action.submit_tool_outputs.tool_calls)\\n    run = wait_for_run_completion(thread.id, run.id)\\n```\\n\\nThat\u2019s it! We now have a working OpenAI Assistant that can be used to answer financial questions using real time online information. Below is the full runnable code:\\n\\n```python\\nimport os\\nimport json\\nimport time\\nfrom openai import OpenAI\\nfrom tavily import TavilyClient\\n\\n# Initialize clients with API keys\\nclient = OpenAI(api_key=os.environ[\\"OPENAI_API_KEY\\"])\\ntavily_client = TavilyClient(api_key=os.environ[\\"TAVILY_API_KEY\\"])\\n\\nassistant_prompt_instruction = \\"\\"\\"You are a finance expert. \\nYour goal is to provide answers based on information from the internet. \\nYou must use the provided Tavily search API function to find relevant online information. \\nYou should never use your own knowledge to answer questions.\\nPlease include relevant url sources in the end of your answers.\\n\\"\\"\\"\\n\\n# Function to perform a Tavily search\\ndef tavily_search(query):\\n    search_result = tavily_client.get_search_context(query, search_depth=\\"advanced\\", max_tokens=8000)\\n    return search_result\\n\\n# Function to wait for a run to complete\\ndef wait_for_run_completion(thread_id, run_id):\\n    while True:\\n        time.sleep(1)\\n        run = client.beta.threads.runs.retrieve(thread_id=thread_id, run_id=run_id)\\n        print(f\\"Current run status: {run.status}\\")\\n        if run.status in [\'completed\', \'failed\', \'requires_action\']:\\n            return run\\n\\n# Function to handle tool output submission\\ndef submit_tool_outputs(thread_id, run_id, tools_to_call):\\n    tool_output_array = []\\n    for tool in tools_to_call:\\n        output = None\\n        tool_call_id = tool.id\\n        function_name = tool.function.name\\n        function_args = tool.function.arguments\\n\\n        if function_name == \\"tavily_search\\":\\n            output = tavily_search(query=json.loads(function_args)[\\"query\\"])\\n\\n        if output:\\n            tool_output_array.append({\\"tool_call_id\\": tool_call_id, \\"output\\": output})\\n\\n    return client.beta.threads.runs.submit_tool_outputs(\\n        thread_id=thread_id,\\n        run_id=run_id,\\n        tool_outputs=tool_output_array\\n    )\\n\\n# Function to print messages from a thread\\ndef print_messages_from_thread(thread_id):\\n    messages = client.beta.threads.messages.list(thread_id=thread_id)\\n    for msg in messages:\\n        print(f\\"{msg.role}: {msg.content[0].text.value}\\")\\n\\n# Create an assistant\\nassistant = client.beta.assistants.create(\\n    instructions=assistant_prompt_instruction,\\n    model=\\"gpt-4-1106-preview\\",\\n    tools=[{\\n        \\"type\\": \\"function\\",\\n        \\"function\\": {\\n            \\"name\\": \\"tavily_search\\",\\n            \\"description\\": \\"Get information on recent events from the web.\\",\\n            \\"parameters\\": {\\n                \\"type\\": \\"object\\",\\n                \\"properties\\": {\\n                    \\"query\\": {\\"type\\": \\"string\\", \\"description\\": \\"The search query to use. For example: \'Latest news on Nvidia stock performance\'\\"},\\n                },\\n                \\"required\\": [\\"query\\"]\\n            }\\n        }\\n    }]\\n)\\nassistant_id = assistant.id\\nprint(f\\"Assistant ID: {assistant_id}\\")\\n\\n# Create a thread\\nthread = client.beta.threads.create()\\nprint(f\\"Thread: {thread}\\")\\n\\n# Ongoing conversation loop\\nwhile True:\\n    user_input = input(\\"You: \\")\\n    if user_input.lower() == \'exit\':\\n        break\\n\\n    # Create a message\\n    message = client.beta.threads.messages.create(\\n        thread_id=thread.id,\\n        role=\\"user\\",\\n        content=user_input,\\n    )\\n\\n    # Create a run\\n    run = client.beta.threads.runs.create(\\n        thread_id=thread.id,\\n        assistant_id=assistant_id,\\n    )\\n    print(f\\"Run ID: {run.id}\\")\\n\\n    # Wait for run to complete\\n    run = wait_for_run_completion(thread.id, run.id)\\n\\n    if run.status == \'failed\':\\n        print(run.error)\\n        continue\\n    elif run.status == \'requires_action\':\\n        run = submit_tool_outputs(thread.id, run.id, run.required_action.submit_tool_outputs.tool_calls)\\n        run = wait_for_run_completion(thread.id, run.id)\\n\\n    # Print messages from the thread\\n    print_messages_from_thread(thread.id)\\n```\\n\\nThe assistant can be further customized and improved using additional retrieval information, OpenAI\u2019s coding interpreter and more. Also, you can go ahead and add more function tools to make the assistant even smarter.\\n\\nFeel free to drop a comment below if you have any further questions!"},{"id":"building-gpt-researcher","metadata":{"permalink":"/blog/building-gpt-researcher","source":"@site/blog/2023-09-22-gpt-researcher/index.md","title":"How we built GPT Researcher","description":"After AutoGPT was published, we immediately took it for a spin. The first use case that came to mind was autonomous online research. Forming objective conclusions for manual research tasks can take time, sometimes weeks, to find the right resources and information. Seeing how well AutoGPT created tasks and executed them got me thinking about the great potential of using AI to conduct comprehensive research and what it meant for the future of online research.","date":"2023-09-22T00:00:00.000Z","formattedDate":"September 22, 2023","tags":[{"label":"gpt-researcher","permalink":"/blog/tags/gpt-researcher"},{"label":"autonomous-agent","permalink":"/blog/tags/autonomous-agent"},{"label":"opensource","permalink":"/blog/tags/opensource"},{"label":"github","permalink":"/blog/tags/github"}],"readingTime":6.255,"truncated":false,"authors":[{"name":"Assaf Elovic","title":"Creator @ GPT Researcher","url":"https://github.com/assafelovic","imageURL":"https://lh3.googleusercontent.com/a/ACg8ocJtrLku69VG_2Y0sJa5mt66gIGNaEBX5r_mgE6CRPEb7A=s96-c","key":"assafe"}],"prevItem":{"title":"How to build an OpenAI Assistant with Internet access","permalink":"/blog/building-openai-assistant"}},"content":"After [AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) was published, we immediately took it for a spin. The first use case that came to mind was autonomous online research. Forming objective conclusions for manual research tasks can take time, sometimes weeks, to find the right resources and information. Seeing how well AutoGPT created tasks and executed them got me thinking about the great potential of using AI to conduct comprehensive research and what it meant for the future of online research.\\n\\nBut the problem with AutoGPT was that it usually ran into never-ending loops, required human interference for almost every step, constantly lost track of its progress, and almost never actually completed the task.\\n\\nNonetheless, the information and context gathered during the research task were lost (such as keeping track of sources), and sometimes hallucinated.\\n\\nThe passion for leveraging AI for online research and the limitations I found put me on a mission to try and solve it while sharing my work with the world. This is when I created [GPT Researcher](https://github.com/assafelovic/gpt-researcher) \u2014 an open source autonomous agent for online comprehensive research.\\n\\nIn this article, we will share the steps that guided me toward the proposed solution.\\n\\n### Moving from infinite loops to deterministic results\\nThe first step in solving these issues was to seek a more deterministic solution that could ultimately guarantee completing any research task within a fixed time frame, without human interference.\\n\\nThis is when we stumbled upon the recent paper [Plan and Solve](https://arxiv.org/abs/2305.04091). The paper aims to provide a better solution for the challenges stated above. The idea is quite simple and consists of two components: first, devising a plan to divide the entire task into smaller subtasks and then carrying out the subtasks according to the plan.\\n\\n![Planner-Excutor-Model](./planner.jpeg)\\n\\nAs it relates to research, first create an outline of questions to research related to the task, and then deterministically execute an agent for every outline item. This approach eliminates the uncertainty in task completion by breaking the agent steps into a deterministic finite set of tasks. Once all tasks are completed, the agent concludes the research.\\n\\nFollowing this strategy has improved the reliability of completing research tasks to 100%. Now the challenge is, how to improve quality and speed?\\n\\n### Aiming for objective and unbiased results\\nThe biggest challenge with LLMs is the lack of factuality and unbiased responses caused by hallucinations and out-of-date training sets (GPT is currently trained on datasets from 2021). But the irony is that for research tasks, it is crucial to optimize for these exact two criteria: factuality and bias.\\n\\nTo tackle this challenges, we assumed the following:\\n\\n- Law of large numbers \u2014 More content will lead to less biased results. Especially if gathered properly.\\n- Leveraging LLMs for the summarization of factual information can significantly improve the overall better factuality of results.\\n\\nAfter experimenting with LLMs for quite some time, we can say that the areas where foundation models excel are in the summarization and rewriting of given content. So, in theory, if LLMs only review given content and summarize and rewrite it, potentially it would reduce hallucinations significantly.\\n\\nIn addition, assuming the given content is unbiased, or at least holds opinions and information from all sides of a topic, the rewritten result would also be unbiased. So how can content be unbiased? The [law of large numbers](https://en.wikipedia.org/wiki/Law_of_large_numbers). In other words, if enough sites that hold relevant information are scraped, the possibility of biased information reduces greatly. So the idea would be to scrape just enough sites together to form an objective opinion on any topic.\\n\\nGreat! Sounds like, for now, we have an idea for how to create both deterministic, factual, and unbiased results. But what about the speed problem?\\n\\n### Speeding up the research process\\nAnother issue with AutoGPT is that it works synchronously. The main idea of it is to create a list of tasks and then execute them one by one. So if, let\u2019s say, a research task requires visiting 20 sites, and each site takes around one minute to scrape and summarize, the overall research task would take a minimum of +20 minutes. That\u2019s assuming it ever stops. But what if we could parallelize agent work?\\n\\nBy levering Python libraries such as asyncio, the agent tasks have been optimized to work in parallel, thus significantly reducing the time to research.\\n\\n```python\\n# Create a list to hold the coroutine agent tasks\\ntasks = [async_browse(url, query, self.websocket) for url in await new_search_urls]\\n\\n# Gather the results as they become available\\nresponses = await asyncio.gather(*tasks, return_exceptions=True)\\n```\\n\\nIn the example above, we trigger scraping for all URLs in parallel, and only once all is done, continue with the task. Based on many tests, an average research task takes around three minutes (!!). That\u2019s 85% faster than AutoGPT.\\n\\n### Finalizing the research report\\nFinally, after aggregating as much information as possible about a given research task, the challenge is to write a comprehensive report about it.\\n\\nAfter experimenting with several OpenAI models and even open source, I\u2019ve concluded that the best results are currently achieved with GPT-4. The task is straightforward \u2014 provide GPT-4 as context with all the aggregated information, and ask it to write a detailed report about it given the original research task.\\n\\nThe prompt is as follows:\\n```commandline\\n\\"{research_summary}\\" Using the above information, answer the following question or topic: \\"{question}\\" in a detailed report \u2014 The report should focus on the answer to the question, should be well structured, informative, in depth, with facts and numbers if available, a minimum of 1,200 words and with markdown syntax and apa format. Write all source urls at the end of the report in apa format. You should write your report only based on the given information and nothing else.\\n```\\n\\nThe results are quite impressive, with some minor hallucinations in very few samples, but it\u2019s fair to assume that as GPT improves over time, results will only get better.\\n\\n### The final architecture\\nNow that we\u2019ve reviewed the necessary steps of GPT Researcher, let\u2019s break down the final architecture, as shown below:\\n\\n<div align=\\"center\\">\\n<img align=\\"center\\" height=\\"500\\" src=\\"https://cowriter-images.s3.amazonaws.com/architecture.png\\"/>\\n</div>\\n\\nMore specifically:\\n- Generate an outline of research questions that form an objective opinion on any given task.\\n- For each research question, trigger a crawler agent that scrapes online resources for information relevant to the given task.\\n- For each scraped resource, keep track, filter, and summarize only if it includes relevant information.\\n- Finally, aggregate all summarized sources and generate a final research report.\\n\\n### Going forward\\nThe future of online research automation is heading toward a major disruption. As AI continues to improve, it is only a matter of time before AI agents can perform comprehensive research tasks for any of our day-to-day needs. AI research can disrupt areas of finance, legal, academia, health, and retail, reducing our time for each research by 95% while optimizing for factual and unbiased reports within an influx and overload of ever-growing online information.\\n\\nImagine if an AI can eventually understand and analyze any form of online content \u2014 videos, images, graphs, tables, reviews, text, audio. And imagine if it could support and analyze hundreds of thousands of words of aggregated information within a single prompt. Even imagine that AI can eventually improve in reasoning and analysis, making it much more suitable for reaching new and innovative research conclusions. And that it can do all that in minutes, if not seconds.\\n\\nIt\u2019s all a matter of time and what [GPT Researcher](https://github.com/assafelovic/gpt-researcher) is all about."}]}')}}]);