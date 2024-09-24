"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1243],{5680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>m});var r=a(6540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=p(a),u=n,m=y["".concat(s,".").concat(u)]||y[u]||g[u]||i;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[y]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5483:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(8168),n=(a(6540),a(5680));const i={},o="Zapier",l={unversionedId:"integrations/zapier",id:"integrations/zapier",isDocsHomePage:!1,title:"Zapier",description:"We're thrilled to announce that Tavily is now available for no-code integration through Zapier, enabling seamless automation and real-time information retrieval for your workflows! \ud83d\ude80",source:"@site/docs/integrations/zapier.md",sourceDirName:"integrations",slug:"/integrations/zapier",permalink:"/docs/integrations/zapier",editUrl:"https://github.com/tavily-ai/tavily-python/tree/master/docs/docs/integrations/zapier.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"LlamaIndex",permalink:"/docs/integrations/llamaindex"},next:{title:"Tavily API for Data Enrichment",permalink:"/docs/use-cases/data-enrichment/data-enrichment"}},s=[{value:"How to Use Tavily API with Zapier",id:"how-to-use-tavily-api-with-zapier",children:[],level:2},{value:"Use Cases for Tavily with Zapier",id:"use-cases-for-tavily-with-zapier",children:[{value:"Tavily + AI Models for Contextual Intelligence (RAG)",id:"tavily--ai-models-for-contextual-intelligence-rag",children:[],level:3}],level:2},{value:"Tips",id:"tips",children:[],level:2},{value:"Example: Execute Brief Company Research for Newly Signed-Up Companies with Tavily and Deliver the Report via Slack",id:"example-execute-brief-company-research-for-newly-signed-up-companies-with-tavily-and-deliver-the-report-via-slack",children:[],level:2},{value:"Getting Started",id:"getting-started",children:[],level:2}],p={toc:s},c="wrapper";function y(e){let{components:t,...i}=e;return(0,n.yg)(c,(0,r.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"zapier"},"Zapier"),(0,n.yg)("p",null,"We're thrilled to announce that ",(0,n.yg)("strong",{parentName:"p"},"Tavily")," is now available for ",(0,n.yg)("strong",{parentName:"p"},"no-code")," integration through ",(0,n.yg)("strong",{parentName:"p"},"Zapier"),", enabling seamless automation and real-time information retrieval for your workflows! \ud83d\ude80"),(0,n.yg)("p",null,"No need to write a single line of code to connect Tavily to your business processes. With Tavily's robust search capabilities, you can pull in the latest online information into any application or workflow. Simply set up ",(0,n.yg)("a",{parentName:"p",href:"https://zapier.com/apps/tavily/integrations"},(0,n.yg)("strong",{parentName:"a"},"Tavily in Zapier"))," to automate research, track real-time news, or feed relevant data into your tools of choice."),(0,n.yg)("h2",{id:"how-to-use-tavily-api-with-zapier"},"How to Use Tavily API with Zapier"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Log in to Zapier")," "),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Create a Zap")," and ",(0,n.yg)("strong",{parentName:"li"},"select a trigger event"),"."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Add an action step with Tavily")," in your workflow:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Setup"),": Connect your Tavily account by pasting your API key."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Configure"),": Enter your search query along with optional parameters, such as selecting a topic (general or news), deciding whether to include raw content from the sources or an answer based on the content found, and specifying particular domains to run the search on"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Test"),": Test your query"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Use the 'results' and optionally the 'answer' generated by Tavily")," in the rest of your workflow, such as:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Sending up-to-date research to your CRM"),(0,n.yg)("li",{parentName:"ul"},"Feeding real-time content into your language model (e.g., GPT models) for additional applications"),(0,n.yg)("li",{parentName:"ul"},"Inserting dynamic info into an email automation tool")))),(0,n.yg)("h2",{id:"use-cases-for-tavily-with-zapier"},"Use Cases for Tavily with Zapier"),(0,n.yg)("h3",{id:"tavily--ai-models-for-contextual-intelligence-rag"},"Tavily + AI Models for Contextual Intelligence (RAG)"),(0,n.yg)("p",null,"Integrate up-to-date information seamlessly into language models like ",(0,n.yg)("strong",{parentName:"p"},"OpenAI")," or ",(0,n.yg)("strong",{parentName:"p"},"Anthropic")," for real-time reliable context generation. Whether you're automating support tickets, crafting summaries, or creating personalized customer insights, Tavily ensures your AI models have the latest information at their fingertips."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Automated Email Generation"),": Use Tavily to create tailored emails based on real-time data")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Meeting Preparation"),": Gather real-time information about meeting participants. For instance, before a client meeting, retrieve their latest news or social media updates and receive a concise summary through your preferred method, ensuring you\u2019re well-informed")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Automated Reporting"),": Utilize Tavily\u2019s online search data to generate reports. Push this information into tools like ",(0,n.yg)("strong",{parentName:"p"},"Google Sheets"),", ",(0,n.yg)("strong",{parentName:"p"},"Notion"),", or ",(0,n.yg)("strong",{parentName:"p"},"Slack")," to create a weekly digest of industry trends or competitor analysis, keeping your team updated effortlessly"))),(0,n.yg)("p",null,"These use cases illustrate how Tavily can enhance workflows and decision-making processes across various applications."),(0,n.yg)("h2",{id:"tips"},"Tips"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Create concise queries for Tavily, and if needed, create multiple Tavily steps"),(0,n.yg)("li",{parentName:"ul"},'If up-to-date news information is required, configure "news" as your topic'),(0,n.yg)("li",{parentName:"ul"},"Add the current date to your queries for relevant, updated information"),(0,n.yg)("li",{parentName:"ul"},"Consider using specific domains to narrow down search results"),(0,n.yg)("li",{parentName:"ul"},"Use an LLM to generate queries for Tavily to enable a more agentic workflow")),(0,n.yg)("h2",{id:"example-execute-brief-company-research-for-newly-signed-up-companies-with-tavily-and-deliver-the-report-via-slack"},"Example: Execute Brief Company Research for Newly Signed-Up Companies with Tavily and Deliver the Report via Slack"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Workflow Steps"),":"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Trigger Event"),": A new company is created in your CRM."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Conduct Company Search"),": Use Tavily to perform a general search using the company's domain (provided by the CRM)."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Retrieve Current Date"),": Capture the current date and pass it to the LLM in the next step."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Generate Search Queries"),": Request the LLM to create 3 concise search queries for Tavily to obtain additional information about the company (e.g., industry, ARR, CEO, CTO). Include the previously gathered data from the company website as context to prevent redundancy. Ask the LLM to incorporate important keywords related to the company to avoid retrieving information about a different company with the same name but in a different industry or domain."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Organize Queries"),": Format the generated queries into separate fields for use in distinct steps."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Configure Queries"),": Set up the 3 queries in Tavily across 3 individual steps."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Extract Structured Data"),": Instruct the LLM to fill in specific details about the company from the gathered data and indicate the sources used for verification. Additionally, instruct the LLM to use the sources extracted from the domain as the ground truth."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Refine Information"),": Format the information for clarity and professionalism."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Send to Slack"),": Deliver the final message to Slack for easy access and sharing.")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"zap",src:a(5998).A})),(0,n.yg)("h2",{id:"getting-started"},"Getting Started"),(0,n.yg)("p",null,"Simply sign up for ",(0,n.yg)("a",{parentName:"p",href:"https://zapier.com/app/home"},(0,n.yg)("strong",{parentName:"a"},"Zapier"))," and ",(0,n.yg)("a",{parentName:"p",href:"https://app.tavily.com/sign-in"},(0,n.yg)("strong",{parentName:"a"},"Tavily"))," and create your first automated workflow in minutes. You can start integrating Tavily into your daily processes to ensure you're always working with the most current, reliable information from across the web!"),(0,n.yg)("p",null,"We\u2019re excited to see what you build on Zapier with our integration! Don\u2019t hesitate to visit our ",(0,n.yg)("a",{parentName:"p",href:"https://community.tavily.com"},"Developer Community")," or reach out at ",(0,n.yg)("a",{parentName:"p",href:"mailto:support@tavily.com"},"support@tavily.com")," for any questions related to this integration."))}y.isMDXComponent=!0},5998:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/zap-178cbec0cb78c6105b0ba84239f6ddd8.png"}}]);