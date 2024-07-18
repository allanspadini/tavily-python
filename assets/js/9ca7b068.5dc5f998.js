"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7303],{5680:(e,n,t)=>{t.d(n,{xA:()=>y,yg:()=>c});var a=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},y=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),g=p(t),u=i,c=g["".concat(s,".").concat(u)]||g[u]||d[u]||r;return t?a.createElement(c,l(l({ref:n},y),{},{components:t})):a.createElement(c,l({ref:n},y))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[g]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6272:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=t(8168),i=(t(6540),t(5680));const r={},l="Python SDK",o={unversionedId:"tavily-api/python-sdk",id:"tavily-api/python-sdk",isDocsHomePage:!1,title:"Python SDK",description:"The Python SDK allows for easy interaction with the Tavily API, offering the full range of our search functionality directly from your Python programs. Easily integrate smart search capabilities into your applications, harnessing Tavily's powerful search features.",source:"@site/docs/tavily-api/python-sdk.md",sourceDirName:"tavily-api",slug:"/tavily-api/python-sdk",permalink:"/docs/tavily-api/python-sdk",editUrl:"https://github.com/tavily-ai/tavily-python/tree/master/docs/docs/tavily-api/python-sdk.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/docs/tavily-api/introduction"},next:{title:"Rest API",permalink:"/docs/tavily-api/rest_api"}},s=[{value:"\ud83d\udce6 Installing",id:"-installing",children:[],level:2},{value:"\ud83d\udee0\ufe0f Usage",id:"\ufe0f-usage",children:[{value:"Getting and printing the full Search API response",id:"getting-and-printing-the-full-search-api-response",children:[],level:3},{value:"Generating context for a RAG Application",id:"generating-context-for-a-rag-application",children:[],level:3},{value:"Getting a quick answer to a question",id:"getting-a-quick-answer-to-a-question",children:[],level:3}],level:2},{value:"\ud83d\udcda API Methods",id:"-api-methods",children:[{value:"Client",id:"client",children:[],level:3},{value:"Methods",id:"methods",children:[],level:3},{value:"Keyword Arguments (optional)",id:"keyword-arguments-optional",children:[],level:3},{value:"Search Responses",id:"search-responses",children:[],level:3}],level:2},{value:"\u26a0\ufe0f Error Handling",id:"\ufe0f-error-handling",children:[],level:2},{value:"\ud83d\udcdd License",id:"-license",children:[],level:2},{value:"\ud83d\udc8c Contact",id:"-contact",children:[],level:2}],p={toc:s},y="wrapper";function g(e){let{components:n,...t}=e;return(0,i.yg)(y,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"python-sdk"},"Python SDK"),(0,i.yg)("p",null,"The Python SDK allows for easy interaction with the Tavily API, offering the full range of our search functionality directly from your Python programs. Easily integrate smart search capabilities into your applications, harnessing Tavily's powerful search features."),(0,i.yg)("h2",{id:"-installing"},"\ud83d\udce6 Installing"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"pip install tavily-python\n")),(0,i.yg)("h2",{id:"\ufe0f-usage"},"\ud83d\udee0\ufe0f Usage"),(0,i.yg)("p",null,"Below are some code snippets that show you how to interact with our API. The different steps and components of this code are explained in more detail in the ",(0,i.yg)("a",{parentName:"p",href:"#-api-methods"},"API Methods")," section."),(0,i.yg)("h3",{id:"getting-and-printing-the-full-search-api-response"},"Getting and printing the full Search API response"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},'from tavily import TavilyClient\n\n# Step 1. Instantiating your TavilyClient\ntavily_client = TavilyClient(api_key="tvly-YOUR_API_KEY")\n\n# Step 2. Executing a simple search query\nresponse = tavily_client.search("Who is Leo Messi?")\n\n# Step 3. That\'s it! You\'ve done a Tavily Search!\nprint(result)\n')),(0,i.yg)("p",null,"This is equivalent to directly querying our REST API."),(0,i.yg)("h3",{id:"generating-context-for-a-rag-application"},"Generating context for a RAG Application"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},'from tavily import TavilyClient\n\n# Step 1. Instantiating your TavilyClient\ntavily_client = TavilyClient(api_key="tvly-YOUR_API_KEY")\n\n# Step 2. Executing a context search query\ncontext = tavily_client.get_search_context(query="What happened during the Burning Man floods?")\n\n# Step 3. That\'s it! You now have a context string that you can feed directly into your RAG Application\nprint(context)\n')),(0,i.yg)("p",null,"This is how you can generate precise and fact-based context for your RAG application in one line of code."),(0,i.yg)("h3",{id:"getting-a-quick-answer-to-a-question"},"Getting a quick answer to a question"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},'from tavily import TavilyClient\n\n# Step 1. Instantiating your TavilyClient\ntavily_client = TavilyClient(api_key="tvly-YOUR_API_KEY")\n\n# Step 2. Executing a Q&A search query\nanswer = tavily_client.qna_search(query="Who is Leo Messi?")\n\n# Step 3. That\'s it! Your question has been answered!\nprint(answer)\n')),(0,i.yg)("p",null,"This is how you get accurate and concise answers to questions, in one line of code. Perfect for usage by LLMs!"),(0,i.yg)("h2",{id:"-api-methods"},"\ud83d\udcda API Methods"),(0,i.yg)("h3",{id:"client"},"Client"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},(0,i.yg)("strong",{parentName:"p"},"NEW!")," We have released a Beta of our asynchronous Tavily client. It is available in version ",(0,i.yg)("inlineCode",{parentName:"p"},"0.3.4")," of our Python package. The asynchronous client's interface is identical to the synchronous client's, the only difference being that all methods are asynchronous. Try it now with the ",(0,i.yg)("inlineCode",{parentName:"p"},"AsyncTavilyClient")," class!")),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"TavilyClient")," class is the entry point to interacting with the Tavily API. Kickstart your journey by instantiating it with your API key. If you want to use Tavily asynchronously, you will need to instantiate an ",(0,i.yg)("inlineCode",{parentName:"p"},"AsyncTavilyClient")," instead."),(0,i.yg)("p",null,"Once you do so, you're ready to search the Web in one line of code! All you need is to pass a ",(0,i.yg)("inlineCode",{parentName:"p"},"str")," as a ",(0,i.yg)("inlineCode",{parentName:"p"},"query")," to one of our methods (detailed below) and you'll start searching!"),(0,i.yg)("h3",{id:"methods"},"Methods"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"search")),"(query, **kwargs)"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Performs a Tavily Search query and returns the response as a well-structured ",(0,i.yg)("inlineCode",{parentName:"li"},"dict"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Additional parameters")," can be provided as keyword arguments (detailed below). The keyword arguments supported by this method are: ",(0,i.yg)("inlineCode",{parentName:"li"},"search_depth"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"topic"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"max_results"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"include_domains"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"exclude_domains"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"include_answer"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"include_raw_content"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"include_images"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"use_cache"),". "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Returns")," a ",(0,i.yg)("inlineCode",{parentName:"li"},"dict")," with all related response fields. If you decide to use the asynchronous client, returns a ",(0,i.yg)("inlineCode",{parentName:"li"},"coroutine")," resolving to that ",(0,i.yg)("inlineCode",{parentName:"li"},"dict"),". The details of the exact response format are given in the ",(0,i.yg)("a",{parentName:"li",href:"#search-responses"},"Search Responses")," section."))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"get_search_context")),"(query, **kwargs)"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Performs a Tavily Search query and returns a ",(0,i.yg)("inlineCode",{parentName:"li"},"str")," of content and sources within the provided token limit. It's useful for getting only related content from retrieved websites without having to deal with context extraction and token management."),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("strong",{parentName:"li"},"core parameter")," for this function is ",(0,i.yg)("inlineCode",{parentName:"li"},"max_tokens"),", an ",(0,i.yg)("inlineCode",{parentName:"li"},"int"),". It defaults to ",(0,i.yg)("inlineCode",{parentName:"li"},"4000"),". It is provided as a keyword argument."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Additional parameters")," can be provided as keyword arguments (detailed below). The keyword arguments supported by this method are: ",(0,i.yg)("inlineCode",{parentName:"li"},"search_depth"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"topic"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"max_results"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"include_domains"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"exclude_domains"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"use_cache"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Returns")," a ",(0,i.yg)("inlineCode",{parentName:"li"},"str")," containing the content and sources of the results. If you decide to use the asynchronous client, returns a ",(0,i.yg)("inlineCode",{parentName:"li"},"coroutine")," resolving to that ",(0,i.yg)("inlineCode",{parentName:"li"},"str"),"."))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"qna_search")),"(query, **kwargs)"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Performs a search and returns a string containing an answer to the original query. This is optimal to be used as a tool for AI agents."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Additional parameters")," can be provided as keyword arguments (detailed below). The keyword arguments supported by this method are: ",(0,i.yg)("inlineCode",{parentName:"li"},"search_depth")," (defaults to ",(0,i.yg)("inlineCode",{parentName:"li"},'"advanced"'),"), ",(0,i.yg)("inlineCode",{parentName:"li"},"topic"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"max_results"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"include_domains"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"exclude_domains"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"use_cache"),", "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Returns")," a ",(0,i.yg)("inlineCode",{parentName:"li"},"str")," containing a short answer to the search query. If you decide to use the asynchronous client, returns a ",(0,i.yg)("inlineCode",{parentName:"li"},"coroutine")," resolving to that ",(0,i.yg)("inlineCode",{parentName:"li"},"str"),".")))),(0,i.yg)("h3",{id:"keyword-arguments-optional"},"Keyword Arguments (optional)"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"search_depth"),": str")," - The depth of the search. It can be ",(0,i.yg)("inlineCode",{parentName:"p"},'"basic"')," or ",(0,i.yg)("inlineCode",{parentName:"p"},'"advanced"'),". Default is ",(0,i.yg)("inlineCode",{parentName:"p"},'"basic"')," unless specified otherwise in a given method.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"topic"),": str")," - The category of the search. This will determine which of our agents will be used for the search. Currently, only ",(0,i.yg)("inlineCode",{parentName:"p"},'"general"')," and ",(0,i.yg)("inlineCode",{parentName:"p"},'"news"')," are supported. Default is ",(0,i.yg)("inlineCode",{parentName:"p"},'"general"'),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"max_results"),": int")," -  The maximum number of search results to return. Default is ",(0,i.yg)("inlineCode",{parentName:"p"},"5"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"include_images"),": bool")," -  Include a list of query-related images in the response. Default is ",(0,i.yg)("inlineCode",{parentName:"p"},"False"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"include_answer"),": bool")," -  Include a short answer to original query. Default is ",(0,i.yg)("inlineCode",{parentName:"p"},"False"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"include_raw_content"),": bool")," -  Include the cleaned and parsed HTML content of each search result. Default is ",(0,i.yg)("inlineCode",{parentName:"p"},"False"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"include_domains"),": list","[str]")," -  A list of domains to specifically include in the search results. Default is ",(0,i.yg)("inlineCode",{parentName:"p"},"None"),", which includes all domains. Please note that this feature is only available when using the ",(0,i.yg)("inlineCode",{parentName:"p"},'"general"')," search ",(0,i.yg)("inlineCode",{parentName:"p"},"topic"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"exclude_domains"),": list","[str]")," -  A list of domains to specifically exclude from the search results. Default is ",(0,i.yg)("inlineCode",{parentName:"p"},"None"),", which doesn't exclude any domains. Please note that this feature is only available when using the ",(0,i.yg)("inlineCode",{parentName:"p"},'"general"')," search ",(0,i.yg)("inlineCode",{parentName:"p"},"topic"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"use_cache"),": bool")," -  Use the cached web search results. Default is ",(0,i.yg)("inlineCode",{parentName:"p"},"True"),". If ",(0,i.yg)("inlineCode",{parentName:"p"},"False")," is passed, a new web search will be done before generating your search results."))),(0,i.yg)("h3",{id:"search-responses"},"Search Responses"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"answer"),": str"),"- The answer to your search query. This will be ",(0,i.yg)("inlineCode",{parentName:"p"},"None")," unless ",(0,i.yg)("inlineCode",{parentName:"p"},"include_answer")," is set to ",(0,i.yg)("inlineCode",{parentName:"p"},"True"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"query"),": str")," - Your search query.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"response_time"),": float")," - Your search result response time.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"images"),": list","[str]")," - A list of query-related image URLs.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"results"),": list")," - A list of sorted search results ranked by relevancy. Each result is in the following format:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"title"),": str")," - The title of the search result URL."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"url"),": str")," - The URL of the search result."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"content"),": str")," - The most query related content from the scraped URL. We use proprietary AI and algorithms to extract only the most relevant content from each URL, to optimize for context quality and size."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"raw_content"),": str")," - The parsed and cleaned HTML of the site. For now includes parsed text only. Please note that this will be ",(0,i.yg)("inlineCode",{parentName:"li"},"None")," unless ",(0,i.yg)("inlineCode",{parentName:"li"},"include_raw_content")," is set to ",(0,i.yg)("inlineCode",{parentName:"li"},"True"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"score"),": float")," - The relevance score of the search result."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"published_date"),": str (optional)")," - The publication date of the source. This is only available if you are using ",(0,i.yg)("inlineCode",{parentName:"li"},'"news"')," as your search ",(0,i.yg)("inlineCode",{parentName:"li"},"topic"),".")))),(0,i.yg)("p",null,"When you send a search query, the response ",(0,i.yg)("inlineCode",{parentName:"p"},"dict")," you receive will be in the following format:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},'response = {\n  "query" = "The query provided in the request",\n  "answer" = "A short answer to the query", # This will be None if include_answer is set to False in the request\n  "follow_up_questions": None, # This feature is still in development\n  "images" = [\n    "Image 1 URL",\n    "Image 2 URL",\n    "Image 3 URL",\n    "Image 4 URL",\n    "Image 5 URL"\n  ], # This will be an empty list if include_images is not set to True\n  "results" = [\n    {\n      "title": "Source 1 Title",\n      "url": "Source 1 URL",\n      "content": "Source 1 Content",\n      "score": 0.99 # This is the "relevancy" score of the source. It ranges from 0 to 1.\n    },\n    {\n      "title": "Source 2 Title",\n      "url": "Source 2 URL",\n      "content": "Source 2 Content",\n      "score": 0.97\n    },\n  ] # This list will have max_results elements\n}\n')),(0,i.yg)("h2",{id:"\ufe0f-error-handling"},"\u26a0\ufe0f Error Handling"),(0,i.yg)("p",null,"The Tavily Python SDK includes comprehensive error handling to ensure smooth interaction with the API. Below are the specific exceptions that might be raised during usage:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Missing API Key"),": If no API key is provided when initializing the ",(0,i.yg)("inlineCode",{parentName:"p"},"TavilyClient"),", a ",(0,i.yg)("inlineCode",{parentName:"p"},"tavily.MissingAPIKeyError")," will be raised. Ensure you pass a valid API key to the ",(0,i.yg)("inlineCode",{parentName:"p"},"TavilyClient")," during instantiation."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-python"},'from tavily import TavilyClient, MissingAPIKeyError\n\ntry:\n    tavily_client = TavilyClient(api_key="")\nexcept MissingAPIKeyError:\n    print("API key is missing. Please provide a valid API key.")\n'))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Invalid API Key"),": If the API key provided is invalid, a ",(0,i.yg)("inlineCode",{parentName:"p"},"tavily.InvalidAPIKeyError")," will be raised when sending a search query. Double-check that your API key is correct and active."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-python"},'from tavily import TavilyClient, InvalidAPIKeyError\n\ntavily_client = TavilyClient(api_key="invalid-api-key")\n\ntry:\n    response = tavily_client.search("Who is Leo Messi?")\nexcept InvalidAPIKeyError:\n    print("Invalid API key provided. Please check your API key.")\n'))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Usage Limit Exceeded"),": If the API key provided is valid but the request fails due to exceeding the rate limit, surpassing the plan's monthly limit, or hitting the key's pre-set monthly limit, a ",(0,i.yg)("inlineCode",{parentName:"p"},"tavily.UsageLimitExceededError")," will be raised. Consider upgrading your plan or checking your usage limits."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-python"},'from tavily import TavilyClient, UsageLimitExceededError\n\ntavily_client = TavilyClient(api_key="valid-api-key")\n\ntry:\n    response = tavily_client.search("Who is Leo Messi?")\nexcept UsageLimitExceededError:\n    print("Usage limit exceeded. Please check your plan\'s usage limits or consider upgrading.")\n')))),(0,i.yg)("p",null,"These errors ensure that you are aware of the specific issues related to your API key usage, allowing you to take appropriate actions to resolve them."),(0,i.yg)("h2",{id:"-license"},"\ud83d\udcdd License"),(0,i.yg)("p",null,"This project is licensed under the terms of the MIT license."),(0,i.yg)("h2",{id:"-contact"},"\ud83d\udc8c Contact"),(0,i.yg)("p",null,"If you are encountering issues while using Tavily, please email us at ",(0,i.yg)("a",{parentName:"p",href:"mailto:support@tavily.com."},"support@tavily.com.")," We'll be happy to help you."),(0,i.yg)("p",null,"If you want to stay updated on the latest Tavily news and releases, head to our ",(0,i.yg)("a",{parentName:"p",href:"https://community.tavily.com"},"Developer Community")," to learn more!"))}g.isMDXComponent=!0}}]);