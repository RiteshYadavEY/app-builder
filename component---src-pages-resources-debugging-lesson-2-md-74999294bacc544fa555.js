(self.webpackChunkproject_firefly=self.webpackChunkproject_firefly||[]).push([[5958],{69428:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return c},default:function(){return l}});var i=a(22122),o=a(19756),n=(a(15007),a(64983)),p=a(99536),r=["components"],c={},s={_frontmatter:c},d=p.Z;function l(e){var t=e.components,a=(0,o.Z)(e,r);return(0,n.mdx)(d,(0,i.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"lesson-2-debugging-application-code"},"Lesson 2: Debugging Application Code"),(0,n.mdx)("p",null,"To overcome the error that you got in the previous lesson, now open your app inside Adobe Experience Cloud (ExC) Shell on the same Chrome Debug window: ",(0,n.mdx)("a",{parentName:"p",href:"https://experience.adobe.com/?devMode=true#/apps/?localDevUrl=https://localhost:9080"},"https://experience.adobe.com/?devMode=true#/apps/?localDevUrl=https://localhost:9080"),". You might be asked to log in using your Adobe ID. When opened, the UI is almost similar to that when you access it on localhost, except the ExC Shell on top.  "),(0,n.mdx)("p",null,"At this time, the action runs successfully, and you can see the response body of ",(0,n.mdx)("inlineCode",{parentName:"p"},"hello")," action in the browser console."),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50.625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/d6d78c6393e813387d674c1f29fbeb9e/cb523/exc-invoke.webp 320w","/project-firefly/static/d6d78c6393e813387d674c1f29fbeb9e/797b9/exc-invoke.webp 640w","/project-firefly/static/d6d78c6393e813387d674c1f29fbeb9e/4b075/exc-invoke.webp 1280w","/project-firefly/static/d6d78c6393e813387d674c1f29fbeb9e/f3ff0/exc-invoke.webp 1920w","/project-firefly/static/d6d78c6393e813387d674c1f29fbeb9e/90fcf/exc-invoke.webp 2396w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/d6d78c6393e813387d674c1f29fbeb9e/72799/exc-invoke.png 320w","/project-firefly/static/d6d78c6393e813387d674c1f29fbeb9e/6af66/exc-invoke.png 640w","/project-firefly/static/d6d78c6393e813387d674c1f29fbeb9e/21b4d/exc-invoke.png 1280w","/project-firefly/static/d6d78c6393e813387d674c1f29fbeb9e/29114/exc-invoke.png 1920w","/project-firefly/static/d6d78c6393e813387d674c1f29fbeb9e/7f7f8/exc-invoke.png 2396w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/project-firefly/static/d6d78c6393e813387d674c1f29fbeb9e/21b4d/exc-invoke.png",alt:"exc-invoke",title:"exc-invoke",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,"Let's try debugging this action. Go back to the Explorer View in VSCode, open the file ",(0,n.mdx)("inlineCode",{parentName:"p"},"actions/hello/index.js"),". At line 40, it makes a request to the Adobe I/O Runtime API docs at ",(0,n.mdx)("a",{parentName:"p",href:"https://adobeioruntime.net/api/v1/api-docs"},"https://adobeioruntime.net/api/v1/api-docs"),"."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"const apiEndpoint = 'https://adobeioruntime.net/api/v1/api-docs'\nconst res = await fetch(apiEndpoint)\n")),(0,n.mdx)("p",null,"You may want to debug what is returned from this API call to decide what to do next. To debug, you first need a breakpoint at line 40."),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"27.500000000000004%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/db5ff96f4729cd7018b98e54ac3efb27/cb523/set-breakpoint.webp 320w","/project-firefly/static/db5ff96f4729cd7018b98e54ac3efb27/797b9/set-breakpoint.webp 640w","/project-firefly/static/db5ff96f4729cd7018b98e54ac3efb27/4b075/set-breakpoint.webp 1280w","/project-firefly/static/db5ff96f4729cd7018b98e54ac3efb27/713f7/set-breakpoint.webp 1912w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/db5ff96f4729cd7018b98e54ac3efb27/72799/set-breakpoint.png 320w","/project-firefly/static/db5ff96f4729cd7018b98e54ac3efb27/6af66/set-breakpoint.png 640w","/project-firefly/static/db5ff96f4729cd7018b98e54ac3efb27/21b4d/set-breakpoint.png 1280w","/project-firefly/static/db5ff96f4729cd7018b98e54ac3efb27/69d6b/set-breakpoint.png 1912w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/project-firefly/static/db5ff96f4729cd7018b98e54ac3efb27/21b4d/set-breakpoint.png",alt:"set-breakpoint",title:"set-breakpoint",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,"Go back to the Chrome Debug window, access the at inside ExC Shell if not already done: ",(0,n.mdx)("a",{parentName:"p",href:"https://experience.adobe.com/?devMode=true#/apps/?localDevUrl=https://localhost:9080"},"https://experience.adobe.com/?devMode=true#/apps/?localDevUrl=https://localhost:9080"),". Select the ",(0,n.mdx)("inlineCode",{parentName:"p"},"hello")," action and invoke. Your debugger would stop at the breakpoint you set earlier, which allows inspecting values of the variables in your code."),(0,n.mdx)("p",null,(0,n.mdx)("em",{parentName:"p"},"Note: If your code uses Project Firefly ",(0,n.mdx)("a",{parentName:"em",href:"https://github.com/adobe/aio-lib-state"},"State")," or ",(0,n.mdx)("a",{parentName:"em",href:"https://github.com/adobe/aio-lib-files"},"Files")," SDKs, you cannot use this debugging method. More details about it ",(0,n.mdx)("a",{parentName:"em",href:"../../getting_started/common_troubleshooting.md#debugging-errors-with-state-and-files-sdk"},"here"),".")),(0,n.mdx)("p",null,(0,n.mdx)("img",{parentName:"p",src:"https://raw.githubusercontent.com/AdobeDocs/adobeio-codelabs-debugging/master/lessons/assets/debugger-action.gif",alt:"debugger-action"})),(0,n.mdx)("p",null,"You can debug your UI code in the ",(0,n.mdx)("inlineCode",{parentName:"p"},"web-src")," folder in the same way as ",(0,n.mdx)("a",{parentName:"p",href:"lesson2.md"},"debugging action code"),". However, almost every browser comes with handy built-in debugging capabilities, you should leverage these to get the most out of it.  "),(0,n.mdx)("p",null,"Below is an example ran on Firefox."),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.25000000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/fc65759d3491d5e9ac4eaeb17b5784f7/cb523/debugger-ui.webp 320w","/project-firefly/static/fc65759d3491d5e9ac4eaeb17b5784f7/797b9/debugger-ui.webp 640w","/project-firefly/static/fc65759d3491d5e9ac4eaeb17b5784f7/4b075/debugger-ui.webp 1280w","/project-firefly/static/fc65759d3491d5e9ac4eaeb17b5784f7/f3ff0/debugger-ui.webp 1920w","/project-firefly/static/fc65759d3491d5e9ac4eaeb17b5784f7/a662b/debugger-ui.webp 2560w","/project-firefly/static/fc65759d3491d5e9ac4eaeb17b5784f7/e3ad8/debugger-ui.webp 3840w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/fc65759d3491d5e9ac4eaeb17b5784f7/72799/debugger-ui.png 320w","/project-firefly/static/fc65759d3491d5e9ac4eaeb17b5784f7/6af66/debugger-ui.png 640w","/project-firefly/static/fc65759d3491d5e9ac4eaeb17b5784f7/21b4d/debugger-ui.png 1280w","/project-firefly/static/fc65759d3491d5e9ac4eaeb17b5784f7/29114/debugger-ui.png 1920w","/project-firefly/static/fc65759d3491d5e9ac4eaeb17b5784f7/c2d13/debugger-ui.png 2560w","/project-firefly/static/fc65759d3491d5e9ac4eaeb17b5784f7/9b29b/debugger-ui.png 3840w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/project-firefly/static/fc65759d3491d5e9ac4eaeb17b5784f7/21b4d/debugger-ui.png",alt:"debugger-ui",title:"debugger-ui",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-debugging-lesson-2-md-74999294bacc544fa555.js.map