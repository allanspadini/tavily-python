"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9747],{5680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>g});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},y=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),p=d(a),c=r,g=p["".concat(s,".").concat(c)]||p[c]||u[c]||o;return a?n.createElement(g,i(i({ref:t},y),{},{components:a})):n.createElement(g,i({ref:t},y))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7182:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(8168),r=(a(6540),a(5680));const o={},i="Getting Started with Tavily Hybrid RAG",l={unversionedId:"python-sdk/tavily-hybrid-rag/getting-started",id:"python-sdk/tavily-hybrid-rag/getting-started",isDocsHomePage:!1,title:"Getting Started with Tavily Hybrid RAG",description:"We're excited to announce the release of the Tavily Hybrid RAG feature in version 0.3.7 of our Python package! We're looking forward to seeing what you build with it! Please note that this feature is still in beta. If you encounter any bugs, please report them to support@tavily.com.",source:"@site/docs/python-sdk/tavily-hybrid-rag/getting-started.md",sourceDirName:"python-sdk/tavily-hybrid-rag",slug:"/python-sdk/tavily-hybrid-rag/getting-started",permalink:"/docs/python-sdk/tavily-hybrid-rag/getting-started",editUrl:"https://github.com/tavily-ai/tavily-python/tree/master/docs/docs/python-sdk/tavily-hybrid-rag/getting-started.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Examples",permalink:"/docs/python-sdk/tavily-search/examples"},next:{title:"API Reference",permalink:"/docs/python-sdk/tavily-hybrid-rag/api-reference"}},s=[{value:"\ud83d\udce6 Installing",id:"-installing",children:[],level:2},{value:"\ud83d\udee0\ufe0f Setup",id:"\ufe0f-setup",children:[{value:"MongoDB setup",id:"mongodb-setup",children:[],level:3},{value:"Cohere API Key",id:"cohere-api-key",children:[],level:3},{value:"Tavily Hybrid RAG Client setup",id:"tavily-hybrid-rag-client-setup",children:[],level:3}],level:2},{value:"Usage",id:"usage",children:[{value:"Simple Tavily Hybrid RAG example",id:"simple-tavily-hybrid-rag-example",children:[],level:3},{value:"Adding retrieved data to the database",id:"adding-retrieved-data-to-the-database",children:[],level:3}],level:2}],d={toc:s},y="wrapper";function p(e){let{components:t,...a}=e;return(0,r.yg)(y,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"getting-started-with-tavily-hybrid-rag"},"Getting Started with Tavily Hybrid RAG"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"We're excited to announce the release of the Tavily Hybrid RAG feature in version 0.3.7 of our Python package! We're looking forward to seeing what you build with it! Please note that this feature is still in beta. If you encounter any bugs, please report them to ",(0,r.yg)("a",{parentName:"p",href:"mailto:support@tavily.com"},"support@tavily.com"),".")),(0,r.yg)("p",null,"Tavily Hybrid RAG is an extension of the Tavily Search API built to retrieve relevant data from both the web and an existing database collection. This way, a RAG agent can combine web sources and locally available data to perform its tasks. Additionally, data queried from the web that is not yet in the database can optionally be inserted into it. This will allow similar searches in the future to be answered faster, without the need to query the web again."),(0,r.yg)("h2",{id:"-installing"},"\ud83d\udce6 Installing"),(0,r.yg)("p",null,"You'll need to ",(0,r.yg)("a",{parentName:"p",href:"/docs/python-sdk/getting-started"},"install our Python package"),", as well as a Python database client. Currently, we only support MongoDB through ",(0,r.yg)("a",{parentName:"p",href:"https://pypi.org/project/pymongo/"},"PyMongo"),"."),(0,r.yg)("h2",{id:"\ufe0f-setup"},"\ud83d\udee0\ufe0f Setup"),(0,r.yg)("h3",{id:"mongodb-setup"},"MongoDB setup"),(0,r.yg)("p",null,"You will need to have a MongoDB collection with a vector search index. You can follow the ",(0,r.yg)("a",{parentName:"p",href:"https://www.mongodb.com/docs/atlas/atlas-vector-search/vector-search-type/"},"MongoDB Documentation")," to learn how to set this up."),(0,r.yg)("h3",{id:"cohere-api-key"},"Cohere API Key"),(0,r.yg)("p",null,"By default, embedding and ranking use the Cohere API, our recommended option. Unless you want to provide a custom embedding and ranking function, you'll need to get an API key from ",(0,r.yg)("a",{parentName:"p",href:"https://cohere.ai/"},"Cohere")," and set it as an environment variable named ",(0,r.yg)("inlineCode",{parentName:"p"},"CO_API_KEY"),"."),(0,r.yg)("p",null,"If you decide to stick with Cohere, please note that you'll need to install the Cohere Python package as well:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"pip install cohere\n")),(0,r.yg)("h3",{id:"tavily-hybrid-rag-client-setup"},"Tavily Hybrid RAG Client setup"),(0,r.yg)("p",null,"Once you are done setting up your database, you'll need to create a MongoDB Client as well as a Tavily Hybrid RAG Client."),(0,r.yg)("p",null,"A minimal setup would look like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'from pymongo import MongoClient\nfrom tavily import TavilyHybridClient\n\ndb = MongoClient("mongodb+srv://YOUR_MONGO_URI")["YOUR_DB"]\n\nhybrid_rag = TavilyHybridClient(\n    api_key="tvly-YOUR_API_KEY",\n    db_provider="mongodb",\n    collection=db.get_collection("YOUR_COLLECTION"),\n    index="YOUR_VECTOR_SEARCH_INDEX",\n    embeddings_field="YOUR_EMBEDDINGS_FIELD",\n    content_field="YOUR_CONTENT_FIELD"\n)\n')),(0,r.yg)("p",null,"Each of these parameters are explained more in detail in the ",(0,r.yg)("a",{parentName:"p",href:"/docs/python-sdk/tavily-hybrid-rag/api-reference"},"Tavily Hybrid RAG API Reference")),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("p",null,"Once you create the proper clients, you can easily start searching. A few simple examples are shown below. They assume you've followed earlier steps. You can use most of the Tavily Search parameters with Tavily Hybrid RAG as well."),(0,r.yg)("h3",{id:"simple-tavily-hybrid-rag-example"},"Simple Tavily Hybrid RAG example"),(0,r.yg)("p",null,"This example will look for context about Leo Messi on the web and in the local database."),(0,r.yg)("p",null,"Here, we get 5 sources, both from our database and from the web, but we want to exclude ",(0,r.yg)("inlineCode",{parentName:"p"},"unwanted-domain.com")," from our web search results:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"results = hybrid_rag.search(\"Who is Leo Messi?\", max_results=5, exclude_domains=['unwanted-domain.com'])\n")),(0,r.yg)("p",null,"Here, we want to prioritize the number of local sources, so we will get 2 foreign (web) sources, and 5 sources from our database:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'results = hybrid_rag.search("Who is Leo Messi?",  max_local=5, max_foreign=2)\n')),(0,r.yg)("p",null,"Note: The sum of ",(0,r.yg)("inlineCode",{parentName:"p"},"max_local")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"max_foreign")," can exceed ",(0,r.yg)("inlineCode",{parentName:"p"},"max_results"),", but only the top ",(0,r.yg)("inlineCode",{parentName:"p"},"max_results")," results will be returned."),(0,r.yg)("h3",{id:"adding-retrieved-data-to-the-database"},"Adding retrieved data to the database"),(0,r.yg)("p",null,"If you want to add the retrieved data to the database, you can do so by setting the ",(0,r.yg)("inlineCode",{parentName:"p"},"save_foreign")," parameter to ",(0,r.yg)("inlineCode",{parentName:"p"},"True"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'results = hybrid_rag.search("Who is Leo Messi?", save_foreign=True)\n')),(0,r.yg)("p",null,"This will use our default saving function, which stores the content and its embedding."))}p.isMDXComponent=!0}}]);