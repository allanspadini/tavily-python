"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3719],{5680:(e,t,a)=>{a.d(t,{xA:()=>h,yg:()=>u});var n=a(6540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(a),d=i,u=p["".concat(l,".").concat(d)]||p[d]||m[d]||r;return a?n.createElement(u,o(o({ref:t},h),{},{components:a})):n.createElement(u,o({ref:t},h))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4645:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(8168),i=(a(6540),a(5680));const r={},o="Tavily API for Data Enrichment",s={unversionedId:"use-cases/data-enrichment/data-enrichment",id:"use-cases/data-enrichment/data-enrichment",isDocsHomePage:!1,title:"Tavily API for Data Enrichment",description:"\ud83d\udca1 Why Use Tavily API for Data Enrichment?",source:"@site/docs/use-cases/data-enrichment/data-enrichment.md",sourceDirName:"use-cases/data-enrichment",slug:"/use-cases/data-enrichment/data-enrichment",permalink:"/docs/use-cases/data-enrichment/data-enrichment",editUrl:"https://github.com/tavily-ai/tavily-python/tree/master/docs/docs/use-cases/data-enrichment/data-enrichment.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"LlamaIndex",permalink:"/docs/integrations/llamaindex"},next:{title:"Tavily API for  Company Research",permalink:"/docs/use-cases/company-research/company-research"}},l=[{value:"\ud83d\udca1 Why Use Tavily API for Data Enrichment?",id:"-why-use-tavily-api-for-data-enrichment",children:[],level:2},{value:"Example Jupyter Notebook Overview",id:"example-jupyter-notebook-overview",children:[{value:"Overview of the Enrich Agent Class",id:"overview-of-the-enrich-agent-class",children:[],level:3}],level:2},{value:"Possible Improvements",id:"possible-improvements",children:[],level:2}],c={toc:l},h="wrapper";function p(e){let{components:t,...r}=e;return(0,i.yg)(h,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"tavily-api-for-data-enrichment"},"Tavily API for Data Enrichment"),(0,i.yg)("h2",{id:"-why-use-tavily-api-for-data-enrichment"},"\ud83d\udca1 Why Use Tavily API for Data Enrichment?"),(0,i.yg)("p",null,"Tavily API offers several advantages for enhancing datasets:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Advanced Search Capabilities"),": Tavily utilizes advanced search algorithms to gather relevant information from various online sources, making it ideal for filling in missing data points.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Real-time Data Retrieval"),": By querying live sources, Tavily ensures that the data used for enrichment is up-to-date and relevant.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Scalable and Efficient"),": Tavily can handle multiple queries simultaneously, allowing you to process large datasets efficiently and reduce overall execution time."))),(0,i.yg)("h2",{id:"example-jupyter-notebook-overview"},"Example Jupyter Notebook Overview"),(0,i.yg)("p",null,"The following ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/tavily-ai/use-cases/blob/main/data-enrichment/data_enrichment_agent.ipynb"},"Jupyter Notebook")," illustrates how to build an AI agent that leverages the Tavily API for data enrichment."),(0,i.yg)("p",null,"The system employs the LangGraph Framework to orchestrate the workflow, managing two agents: a Data Agent and an Enrich Agent. The Data Agent is responsible for retrieving, processing, and loading data into a DataFrame, as well as saving the enriched data in various formats, such as CSV, Excel, or Google Sheets. Meanwhile, the Enrich Agent automates the process of filling in missing data within the dataset. It utilizes Tavily's search capabilities to collect relevant information from the web and employs an OpenAI model to generate search queries and extract the necessary data points. The use of asynchronous tasks allows multiple rows to be processed concurrently, increasing the efficiency of the data enrichment process."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Alt Text",src:a(3458).A})),(0,i.yg)("h3",{id:"overview-of-the-enrich-agent-class"},"Overview of the Enrich Agent Class"),(0,i.yg)("p",null,"Below is a partial implementation of the ",(0,i.yg)("inlineCode",{parentName:"p"},"EnrichAgent")," class, highlighting its key components without showing all the internal details:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},'class EnrichAgent():\n    def __init__(self):\n        # Initialize settings\n        self.MAX_COLS_PER_PASS = 5\n        self.MAX_PASSES = 5\n        self.model = ChatOpenAI(model="gpt-4o", temperature=0)\n\n    def is_missing_value(self, value):\n        """\n        Check if a value is considered missing.\n        """\n        ...\n\n    async def generate_search_query(self, head, columns):\n        """\n        Generate a search query for missing columns.\n        """\n        prompt = f"""You are a researcher with the task of filling in a spreadsheet...\n        """\n        response = await self.model.ainvoke(messages)\n        return response.content.strip(\'\\\'"\')\n\n    async def fill_in_row(self, df, head, row_index, columns, search_query):\n        """\n        Call Tavily API to retrieve information using the search_query and prompt OpenAI to extract column values from the response\n        """\n        entry = str(df.iloc[row_index][head[0]])\n        ...\n        # Process Tavily API response\n        ...\n\n    async def run(self, state: AgentState):\n        """\n        Main function to for running the Enrichment Process\n        """\n        df = state[\'raw_data\'].copy()\n        ...\n        # Loop through rows and apply enrichment\n        ...\n\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"MAX_COLS_PER_PASS"),": This sets the maximum number of columns that the agent will try to fill in during a single operation, which can help in managing the complexity of the data retrieval and processing tasks."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"MAX_PASSES"),": This defines the maximum number of attempts the agent will make to fill in missing data across the dataset. By setting a limit, the agent avoids getting stuck in endless loops if the data cannot be fully retrieved."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"generate_search_query"),": This function generates a search query tailored to fill in specific missing columns. It constructs a prompt using the column headers and fields that need data, and then uses the OpenAI model to generate a suitable search query. This query is used to interact with the Tavily API for data retrieval."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"fill_in_row"),": This function attempts to fill in the missing data for a given row in the DataFrame. It constructs a search query for Tavily by replacing a placeholder ($ENTRY) with the actual entry being queried. After receiving the Tavily response, it uses OpenAI to interpret the data and fill in the missing fields. It ensures consistency by creating examples from existing data for the model to refer to during data extraction."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"run"),": This function is the main driver of the enrichment process. It starts by generating a general search query and then attempts to fill in as many missing fields as possible for each row using asynchronous tasks. The function loops through the dataset for a predefined number of passes, each time attempting to fill in missing fields with data retrieved from Tavily and processed by OpenAI.")),(0,i.yg)("h2",{id:"possible-improvements"},"Possible Improvements"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Customize Workflow for Specific Use Cases"),": Define more predefined workflows tailored to specific use cases, such as company data enrichment. This could include field-specific scraping techniques to ensure data consistency and enhance the search query by incorporating the values of certain fields to improve the likelihood of obtaining accurate results.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Enhanced API Feature Utilization"),": Utilize specific features of the Tavily API, such as the 'include domain' option, to refine searches and improve data accuracy. For instance, if website links are available in the dataset, using the 'include domain' feature allows the search to be targeted to specific domains, thereby enhancing the relevance and precision of the retrieved information.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Search Query Enhancement"),": Enhance search queries by incorporating additional field values alongside the main entry field. For example, if the data enrichment task involves gathering information about a person, and their company affiliation is also available, it can be beneficial to include the company name in the search query along with their name to improve the accuracy of the results.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Integrate LangGraph with Tools"),": Bind the LangGraph framework with various tools and configure tavily web search as one of these tools. This will allow for more flexible and dynamic query generation and data retrieval.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Incorporate a Local Database"),": Add a local database as an additional data source for the agent. This can help to cross-reference information and verify the accuracy of the enriched data."))))}p.isMDXComponent=!0},3458:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/flow-19f810f04c944b11ffdda721637b0e48.png"}}]);