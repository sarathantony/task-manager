"use strict";(self.webpackChunktask_manager=self.webpackChunktask_manager||[]).push([[126],{6126:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var n=r(7294),o=r(2038),a=r(8037),i=r(9633),s=r(4418);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,s=[],l=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(s.push(n.value),s.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return s}}(e,t)||f(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){if(e){if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w={yAxis:[{label:"Response %"}],width:900,height:600,sx:m({},".".concat(a.x.left," .").concat(a.x.label),{transform:"translate(-20px, 0)"})},d=function(e){return"".concat(e,"%")};function h(){var e=(0,n.useMemo)((function(){return Object.entries(i).reduce((function(e,t){var r=y(t,2),n=(r[0],r[1]),o=n.question,a=n.options,i=y(o.split(":"),2),l=i[0],u=(i[1],{});a.forEach((function(e,t){u["answer ".concat(t+1)]=parseInt(e.score.replace("%",""),10)}));var c,m=p(p(p({},s.PR),u),{questionIdx:l});return[].concat(function(e){if(Array.isArray(e))return b(e)}(c=e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(c)||f(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[m])}),[])}),[i]);return n.createElement(o.v,u({dataset:e,xAxis:[{scaleType:"band",dataKey:"questionIdx"}],series:[{dataKey:"answer 1",label:"answer 1",valueFormatter:d},{dataKey:"answer 2",label:"answer 2",valueFormatter:d},{dataKey:"answer 3",label:"answer 3",valueFormatter:d},{dataKey:"answer 4",label:"answer 4",valueFormatter:d}]},w))}},4418:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Bh:()=>p,Do:()=>c,Fo:()=>b,JL:()=>s,PR:()=>w,Sc:()=>f,aO:()=>y,e2:()=>i,tA:()=>u,tK:()=>m,tO:()=>a,wk:()=>l});var a=50,i=0,s=1,l=2,u=o(o(o({},i,"high"),s,"medium"),l,"low"),c=o(o(o({},i,"to do"),s,"in progress"),l,"done"),p=o(o(o({},i,"#FF1919"),s,"#FFA500"),l,"#71BC78"),y={NEXT_STATUS:"NEXT",DELETE_TASK:"DELETE_TASK",EDIT_TASK:"EDIT_TASK",ADD_TASK:"ADD_TASK",SORT_TASKS:"SORT_TASKS"},f=[{id:1,taskName:"Go to Gym",priority:l,status:s,percentCompleted:50},{id:2,taskName:"Restart Learning Solid",priority:l,status:i,percentCompleted:i},{id:3,taskName:"Change Slider to Scroll",priority:s,status:s,percentCompleted:50},{id:4,taskName:"To Publish the Article",priority:s,status:s,percentCompleted:50},{id:5,taskName:"New Task Assignment Task",priority:i,status:l,percentCompleted:100}],b=[{value:"id",title:"Task"},{value:"priority",title:"Priority"},{value:"status",title:"Status"}],m={taskName:"",priority:null},w={"answer 1":0,"answer 2":0,"answer 3":0,"answer 4":0}},9633:e=>{e.exports=JSON.parse('{"1":{"question":"Question 1: What size(s) are you purchasing? Are you buying multiple sizes? Why or why not? Reminder you must buy them in Size 1, 2 or 3 only. Select the one(s) you typically use for daytime use </br> (Please also explain verbally)","options":[{"answer":"1 (Regular, yellow wrapper)","score":"45%"},{"answer":"2 (Long Super, green wrapper)","score":"45.5%"},{"answer":"3 (Extra Long Super, blue wrapper) ","score":"18.2%"}],"participants":"11"},"2":{"question":"Question 2: What was the main reason(s) you went to the restroom? Select up to 2 options </br> (Please select all that apply)","options":[{"answer":"To go to the bathroom","score":"75%"},{"answer":"To check how full my pad was","score":"0%"},{"answer":"To check the placement/bunching of my pad","score":"25%"},{"answer":"It was convenient / $1 Incentive for Taking a Picture","score":"0%"}],"participants":"8"},"3":{"question":"Question 3: What was your main activity between the previous bathroom visit? When you apply your first pad, please select Applying the Pad to my Panties. </br> (Please select all that apply)","options":[{"answer":"Standing / Walking","score":"20%"},{"answer":"Sitting","score":"0%"},{"answer":"Exercising (running, biking, etc.)","score":"0%"},{"answer":"Lying Down (including sleeping)","score":"80%"}],"participants":"8"},"4":{"question":"Question 4: Are you planning to change your pad? </br> (Please select one option)","options":[{"answer":"Yes","score":"12.5%"},{"answer":"No, I will continue to use the pad I have on","score":"87.5%"}],"participants":"8"},"5":{"question":"Question 5: How would you rate this pad on Feels Clean? </br> (Please select one option)","options":[{"answer":"Excellent","score":"100%"},{"answer":"Very Good","score":"0%"},{"answer":"Good","score":"0%"},{"answer":"Fair","score":"0%"}],"participants":"1"}}')}}]);