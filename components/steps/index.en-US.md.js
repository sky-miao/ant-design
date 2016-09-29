webpackJsonp([124,197],{1630:function(t,s,e){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var a=e(1),p=(n(a),e(2));n(p);t.exports={content:["section",["p",["code","Steps"]," is a navigation bar that guides users through the steps of a task. "],["h2","When To Use"],["p","When the task is complicated or has a certain sequence in the series of subtasks, we can decompose it into several steps to make things easier."]],meta:{category:"Components",type:"Navigation",cols:1,title:"Steps",filename:"components/steps/index.en-US.md"},toc:["ul",["li",["a",{href:"#When-To-Use"},"When To Use"]],["li",["a",{href:"#API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:'<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Steps</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>first</span> <span class="token attr-name" >step"</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>second</span> <span class="token attr-name" >step"</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>third</span> <span class="token attr-name" >step"</span> <span class="token punctuation" >/></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Steps</span><span class="token punctuation" >></span></span>'},["code",'<Steps>\n  <Step title="first step" />\n  <Step title="second step" />\n  <Step title="third step" />\n</Steps>']],["h3","Steps"],["p","The whole of the step bar."],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","current"],["td","to set the current step, counting from 0. You can overwrite this state by using ",["code","status"]," of ",["code","Step"]],["td","Number"],["td","0"]],["tr",["td","status"],["td","to specify the status of current step, can be set to one of the following values: ",["code","wait"]," ",["code","process"]," ",["code","finish"]," ",["code","error"]],["td","String"],["td",["code","process"]]],["tr",["td","size"],["td","to specify the size of the step bar, ",["code","default"]," and ",["code","small"]," are currently supported"],["td","String"],["td",["code","default"]]],["tr",["td","direction"],["td","to specify the direction of the step bar, ",["code","horizontal"]," and ",["code","vertical"]," are currently supported"],["td","String"],["td","horizontal"]]]],["h3","Steps.Step"],["p","A single step in the step bar."],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","status"],["td","to specify the status. It will be automatically set by ",["code","current"]," of ",["code","Steps"]," if not configured. Optional values are: ",["code","wait"]," ",["code","process"]," ",["code","finish"]," ",["code","error"]],["td","String"],["td","wait"]],["tr",["td","title"],["td","title of the step"],["td","React.Element"],["td","-"]],["tr",["td","description"],["td","detail of the step, optional property"],["td","React.Element"],["td","-"]],["tr",["td","icon"],["td","icon of the step, optional property"],["td","React.Element"],["td","-"]]]]]}}});