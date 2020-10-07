(this.webpackJsonpproject6=this.webpackJsonpproject6||[]).push([[0],{18:function(e,t,n){e.exports=n(45)},23:function(e,t,n){},24:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(16),o=n.n(i),c=(n(23),n(1)),s=n(3),u=n(4),l=n(6),m=n(5),d=(n(24),n(17)),p=n.n(d),g=(n(42),n(43),function(e){return r.a.createElement("div",{className:"grid-container"},r.a.createElement("h3",null,"Local time"),r.a.createElement("h3",null,"Suggestions"),function(e){var t,n=e.duration,i=e.timeZone,o=e.timeZoneCheck,c=e.meetingFound,s=Object.values(i.startTime),u=Object.values(i.suggestTime);return s.map((function(e,i){t=o[i]?"goodTime":"badTime";var s=u[i];return r.a.createElement(a.Fragment,{key:i},r.a.createElement("p",{className:t},"".concat(e," - ").concat(e+n)),!0===c?r.a.createElement("p",null,"".concat(s," - ").concat(s+n)):r.a.createElement("p",null,"None"))}))}(e.displayResults))}),f=(n(44),function(e){return r.a.createElement("div",{className:"gtm"},r.a.createElement("label",{htmlFor:"selectTimeZone"},"Select Time Zone:"),r.a.createElement("select",{value:e.value,name:e.id,id:"selectTimeZone",onChange:function(t){return e.onSelect(t)}},e.timeZoneList))}),v=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).timeDropDownLoop=function(e,t){for(var n=[r.a.createElement("option",{value:"",key:0}," ",""," ")],a=e;a<t;a++){var i=a;8===e&&i>12&&(i-=12),n.push(r.a.createElement("option",{value:a,key:a}," ",i," "))}return n},e.etcDropDownLoop=function(){return e.props.etcList.map((function(e){var t="GMT ";return e>=0&&(t+="+"),r.a.createElement("option",{value:e,key:e},t+e)}))},e.addOrSubtract=function(t){var n=e.state.duration+t;n<5&&n>0&&e.setState((function(e){return{duration:e.duration+t}}),(function(){e.state.timeZone.hasOwnProperty("location1")&&e.updateResults()}))},e.addNewLocation=function(){for(var t=[],n=0;n<e.state.numLocation;n++)t.push(r.a.createElement(f,{id:n+1,key:n+1,timeZoneList:e.etcDropDownLoop(),onSelect:e.saveTimeZone}));return t},e.saveStartTime=function(t){var n=parseInt(t.target.value);e.setState({initialTime:n},(function(){e.state.timeZone.hasOwnProperty("location1")&&e.updateResults()}))},e.saveTimeZone=function(t){var n=Object(c.a)({},e.state.timeZone);n["location"+t.target.name]=t.target.value,e.setState({timeZone:n},e.updateResults)},e.updateResults=function(){var t=e.state,n=t.initialTime,a=t.duration,r=t.timeZone;e.props.getUserInput(n,a,r)},e.handleClick=function(t){t.preventDefault(),0===e.state.duration?e.setState({errMsg:"Meeting duration cannot be 0"}):e.state.numLocation<3?(e.setState((function(e){return{numLocation:e.numLocation+1,errMsg:""}})),e.addNewLocation()):e.setState({errMsg:"Max. number of locations reached"})},e.state={initialTime:0,duration:0,timeZone:{},numLocation:1,errMsg:""},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{action:""},r.a.createElement("fieldset",{className:"meetingStart"},r.a.createElement("label",{htmlFor:""},"Meeting Start"),r.a.createElement("select",{value:this.state.initialTime,onChange:this.saveStartTime,name:"",id:""},this.timeDropDownLoop(8,19))),r.a.createElement("label",{htmlFor:"meetingDuration"},"Meeting Duration"),r.a.createElement("fieldset",{className:"addSubtract",id:"meetingDuration"},r.a.createElement("span",{className:"srOnly"},"subtract meeting time"),r.a.createElement("i",{className:"fas fa-minus","aria-hidden":"true",tabIndex:0,onClick:function(){return e.addOrSubtract(-1)}}),r.a.createElement("span",null,this.state.duration),r.a.createElement("span",{className:"srOnly"},"add meeting time"),r.a.createElement("i",{className:"fas fa-plus","aria-hidden":"true",tabIndex:0,onClick:function(){return e.addOrSubtract(1)}})),this.addNewLocation(),r.a.createElement("button",{type:"submit",value:"Submit",onClick:this.handleClick},"Add New Location"),r.a.createElement("p",{className:"errMsg"},this.state.errMsg),r.a.createElement("p",{className:"errMsg"},this.props.meetingMsg))}}]),n}(a.Component),h=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).getUserInput=function(t,n,a){e.setState((function(e){return{userInput:Object(c.a)(Object(c.a)({},e.userInput),{},{initialTime:t,duration:n,timeZone:{startTime:a}})}}));var r=Object.values(a).map((function(e){return parseInt(e)})),i=t,o=[],s={location1:i};e.validateTime(r,i,n,o,s),e.setState((function(e){return{userInput:Object(c.a)(Object(c.a)({},e.userInput),{},{timeZone:{startTime:s,suggestTime:s},timeZoneCheck:o})}}));var u=o.every(Boolean),l=Object(c.a)({},s);if(!u)for(var m=[].concat(o),d=0;!u&&d<24;)d++,i+=1,u=e.validateTime(r,i,n,m,l).every(Boolean);u?e.setState((function(e){return{userInput:Object(c.a)(Object(c.a)({},e.userInput),{},{meetingFound:!0,noMeetingsMsg:"",timeZone:Object(c.a)(Object(c.a)({},e.userInput.timeZone),{},{suggestTime:l})})}})):e.setState((function(e){return{userInput:Object(c.a)(Object(c.a)({},e.userInput),{},{meetingFound:!1,noMeetingsMsg:"No meetings found during work hours"})}}))},e.validateTime=function(e,t,n,a,r){for(var i=0;i<e.length;i++){var o=!0,c=t+e[i]-e[0];c<0?c+=24:c>24&&(c-=24);var s=c+n;(c<8||c>19||s<8||s>19)&&(o=!1),a[i]=o,r["location"+(i+1)]=c}return a},e.state={etcList:[],userInput:{meetingFound:!0,noMeetingsMsg:"",duration:0,initialTime:0,timeZone:{startTime:{},suggestTime:{}},timeZoneCheck:[]}},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;p()({url:"http://worldtimeapi.org/api/timezone/Etc"}).then((function(t){var n=t.data;n.pop();var a=n.map((function(e){return parseInt(e.substring(7))}));a[0]=0,a.sort((function(e,t){return e-t}));var r=a.filter((function(e){return e<0})).reverse(),i=a.slice(r.length).concat(r);e.setState({etcList:i})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("header",null,r.a.createElement("h1",null,"What time is it?")),r.a.createElement("div",{className:"flex"},r.a.createElement("div",null,r.a.createElement(v,{etcList:this.state.etcList,getUserInput:this.getUserInput,meetingFound:this.state.userInput.meetingFound,meetingMsg:this.state.userInput.noMeetingsMsg})),r.a.createElement(g,{displayResults:this.state.userInput}))),r.a.createElement("footer",null,r.a.createElement("p",null,"\xa9 Created at"," ",r.a.createElement("a",{href:"https://junocollege.com/",target:"_blank",rel:"noopener noreferrer"},"Juno College"))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.c6301616.chunk.js.map