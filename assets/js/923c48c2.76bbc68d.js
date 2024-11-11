"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9623],{5680:(e,n,a)=>{a.d(n,{xA:()=>g,yg:()=>c});var t=a(6540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},g=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=i,c=d["".concat(s,".").concat(m)]||d[m]||y[m]||r;return a?t.createElement(c,l(l({ref:n},g),{},{components:a})):t.createElement(c,l({ref:n},g))}));function c(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1994:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var t=a(8168),i=(a(6540),a(5680));const r={},l="API Reference",o={unversionedId:"javascript-sdk/tavily-search/api-reference",id:"javascript-sdk/tavily-search/api-reference",isDocsHomePage:!1,title:"API Reference",description:"Client",source:"@site/docs/javascript-sdk/tavily-search/api-reference.md",sourceDirName:"javascript-sdk/tavily-search",slug:"/javascript-sdk/tavily-search/api-reference",permalink:"/docs/javascript-sdk/tavily-search/api-reference",editUrl:"https://github.com/tavily-ai/tavily-python/tree/master/docs/docs/javascript-sdk/tavily-search/api-reference.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Getting Started with Tavily Search",permalink:"/docs/javascript-sdk/tavily-search/getting-started"},next:{title:"Getting Started with Tavily Extract",permalink:"/docs/javascript-sdk/tavily-extract/getting-started"}},s=[{value:"Client",id:"client",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Search Responses - <code>TavilySearchResponse</code>",id:"search-responses---tavilysearchresponse",children:[],level:2}],p={toc:s},g="wrapper";function d(e){let{components:n,...a}=e;return(0,i.yg)(g,(0,t.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"api-reference"},"API Reference"),(0,i.yg)("h2",{id:"client"},"Client"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"tavily")," function is the entry point to interacting with the Tavily API. Kickstart your journey by calling it with your API Key."),(0,i.yg)("p",null,"Once you do so, you're ready to search the Web in one line of code! All you need is to pass a ",(0,i.yg)("inlineCode",{parentName:"p"},"string")," as a ",(0,i.yg)("inlineCode",{parentName:"p"},"query")," to one of our methods (detailed below) and you'll start searching!"),(0,i.yg)("h2",{id:"methods"},"Methods"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"search")),"(query, options)"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Performs a Tavily Search query and returns the response as ",(0,i.yg)("inlineCode",{parentName:"li"},"TavilySearchResponse"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Additional parameters")," can be provided in the ",(0,i.yg)("inlineCode",{parentName:"li"},"options")," argument (detailed below). The additional parameters supported by this method are: ",(0,i.yg)("inlineCode",{parentName:"li"},"searchDepth"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"topic"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"days"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"maxResults"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"includeDomains"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"excludeDomains"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"includeAnswer"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"includeRawContent"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"includeImages"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"includeImageDescriptions"),". "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Returns")," a ",(0,i.yg)("inlineCode",{parentName:"li"},"TavilySearchResponse"),". The details of the exact response format are given in the Search Responses section further down."))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"searchContext")),"(query, options)"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Performs a Tavily Search query and returns a ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," of content and sources within the provided token limit. It's useful for getting only related content from retrieved websites without having to deal with context extraction and token management."),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("strong",{parentName:"li"},"core parameter")," for this function is ",(0,i.yg)("inlineCode",{parentName:"li"},"maxTokens"),", a ",(0,i.yg)("inlineCode",{parentName:"li"},"number"),". It defaults to ",(0,i.yg)("inlineCode",{parentName:"li"},"4000"),". It is provided in the ",(0,i.yg)("inlineCode",{parentName:"li"},"options")," argument (detailed below)."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Additional parameters")," can be provided in the ",(0,i.yg)("inlineCode",{parentName:"li"},"options")," argument (detailed below). The additional parameters supported by this method are: ",(0,i.yg)("inlineCode",{parentName:"li"},"searchDepth"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"topic"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"days"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"maxResults"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"includeDomains"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"excludeDomains"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Returns")," a ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," containing the content and sources of the results."))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"searchQNA")),"(query, options)"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Performs a search and returns a ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," containing an answer to the original query. This is optimal to be used as a tool for AI agents."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Additional parameters")," can be provided in the ",(0,i.yg)("inlineCode",{parentName:"li"},"options")," argument (detailed below). The additional parameters supported by this method are: ",(0,i.yg)("inlineCode",{parentName:"li"},"searchDepth")," (defaults to ",(0,i.yg)("inlineCode",{parentName:"li"},'"advanced"'),"), ",(0,i.yg)("inlineCode",{parentName:"li"},"topic"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"days"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"maxResults"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"includeDomains"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"excludeDomains"),". "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Returns")," a ",(0,i.yg)("inlineCode",{parentName:"li"},"string")," containing a short answer to the search query.")))),(0,i.yg)("h2",{id:"options"},"Options"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"searchDepth"),": string")," - The depth of the search. It can be ",(0,i.yg)("inlineCode",{parentName:"p"},'"basic"')," or ",(0,i.yg)("inlineCode",{parentName:"p"},'"advanced"'),". Default is ",(0,i.yg)("inlineCode",{parentName:"p"},'"basic"')," unless specified otherwise in a given method.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"topic"),": string")," - The category of the search. This will determine which of our agents will be used for the search. Currently, only ",(0,i.yg)("inlineCode",{parentName:"p"},'"general"')," and ",(0,i.yg)("inlineCode",{parentName:"p"},'"news"')," are supported. Default is ",(0,i.yg)("inlineCode",{parentName:"p"},'"general"'),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"days"),": number (optional)")," - The number of days back from the current date to include in the search results. This specifies the time frame of data to be retrieved. Please note that this feature is only available when using the ",(0,i.yg)("inlineCode",{parentName:"p"},'"news"')," search ",(0,i.yg)("inlineCode",{parentName:"p"},"topic"),". Default is ",(0,i.yg)("inlineCode",{parentName:"p"},"3"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"maxResults"),": number")," -  The maximum number of search results to return. Default is ",(0,i.yg)("inlineCode",{parentName:"p"},"5"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"includeImages"),": boolean")," -  Include a list of query-related images in the response. Default is ",(0,i.yg)("inlineCode",{parentName:"p"},"False"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"includeImageDescriptions"),": bool")," - When ",(0,i.yg)("inlineCode",{parentName:"p"},"includeImages")," is set to ",(0,i.yg)("inlineCode",{parentName:"p"},"true"),", this option adds descriptive text for each image.  Default is ",(0,i.yg)("inlineCode",{parentName:"p"},"false"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"includeAnswer"),": boolean")," -  Include a short answer to original query. Default is ",(0,i.yg)("inlineCode",{parentName:"p"},"false"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"includeRawContent"),": boolean")," -  Include the cleaned and parsed HTML content of each search result. Default is ",(0,i.yg)("inlineCode",{parentName:"p"},"false"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"includeDomains"),": Arraystring")," -  A list of domains to specifically include in the search results. Default is ",(0,i.yg)("inlineCode",{parentName:"p"},"undefined"),", which includes all domains. ")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"excludeDomains"),": Arraystring")," -  A list of domains to specifically exclude from the search results. Default is ",(0,i.yg)("inlineCode",{parentName:"p"},"undefined"),", which doesn't exclude any domains. "))),(0,i.yg)("h2",{id:"search-responses---tavilysearchresponse"},"Search Responses - ",(0,i.yg)("inlineCode",{parentName:"h2"},"TavilySearchResponse")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"answer"),": string"),"- The answer to your search query. This will be ",(0,i.yg)("inlineCode",{parentName:"p"},"undefined")," unless ",(0,i.yg)("inlineCode",{parentName:"p"},"includeAnswer")," is set to ",(0,i.yg)("inlineCode",{parentName:"p"},"true"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"query"),": string")," - Your search query.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"responseTime"),": number")," - Your search result response time.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"images"),": ArrayTavilyImage")," - A list of query-related image URLs (and descriptions if requested). Each ",(0,i.yg)("inlineCode",{parentName:"p"},"TavilyImage")," consists of a ",(0,i.yg)("inlineCode",{parentName:"p"},"url")," (",(0,i.yg)("inlineCode",{parentName:"p"},"string"),") and a ",(0,i.yg)("inlineCode",{parentName:"p"},"description")," (",(0,i.yg)("inlineCode",{parentName:"p"},"string"),"). If ",(0,i.yg)("inlineCode",{parentName:"p"},"includeImageDescriptions")," is not set to ",(0,i.yg)("inlineCode",{parentName:"p"},"true"),", the ",(0,i.yg)("inlineCode",{parentName:"p"},"description")," will be ",(0,i.yg)("inlineCode",{parentName:"p"},"undefined"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"results"),": ArrayTavilySearchResult")," - A list of sorted search results ranked by relevancy. Each ",(0,i.yg)("inlineCode",{parentName:"p"},"TavilySearchResult")," is in the following format:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"title"),": string")," - The title of the search result URL."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"url"),": string")," - The URL of the search result."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"content"),": string")," - The most query related content from the scraped URL. We use proprietary AI and algorithms to extract only the most relevant content from each URL, to optimize for context quality and size."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"rawContent"),": string")," - The parsed and cleaned HTML of the site. For now includes parsed text only. Please note that this will be ",(0,i.yg)("inlineCode",{parentName:"li"},"undefined")," unless ",(0,i.yg)("inlineCode",{parentName:"li"},"includeRawContent")," is set to ",(0,i.yg)("inlineCode",{parentName:"li"},"true"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"score"),": number")," - The relevance score of the search result."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"strong"},"publishedDate"),": string (optional)")," - The publication date of the source. This is only available if you are using ",(0,i.yg)("inlineCode",{parentName:"li"},'"news"')," as your search ",(0,i.yg)("inlineCode",{parentName:"li"},"topic"),".")))),(0,i.yg)("p",null,"When you send a search query, the response you receive will be in the following format:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},'response = {\n  query: "The query provided in the request",\n  answer: "A short answer to the query",  // This will be None if includeAnswer is set to False in the request\n  images: [ \n    {\n      url: "Image 1 URL",\n      description: "Image 1 Description",  \n    },\n    {\n      url: "Image 2 URL",\n      description: "Image 2 Description",\n    },\n    {\n      url: "Image 3 URL",\n      description: "Image 3 Description",\n    },\n    {\n      url: "Image 4 URL",\n      description: "Image 4 Description",\n    },\n    {\n      url: "Image 5 URL",\n      description: "Image 5 Description",\n    }\n  ], // The description field will be undefined if includeImageDescriptions is not set to true.\n  results: [\n    {\n      title: "Source 1 Title",\n      url: "Source 1 URL",\n      content: "Source 1 Content",\n      score: 0.99  // This is the "relevancy" score of the source. It ranges from 0 to 1.\n    },\n    {\n      title: "Source 2 Title",\n      url: "Source 2 URL",\n      content: "Source 2 Content",\n      score: 0.97\n    }\n  ],  // This list will have maxResults elements\n  "responseTime": 1.09 // This will be your search response time\n}\n')))}d.isMDXComponent=!0}}]);