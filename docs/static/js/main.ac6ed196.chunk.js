(this["webpackJsonpreact-nhtsa"]=this["webpackJsonpreact-nhtsa"]||[]).push([[0],{10:function(e,a,t){e.exports=t(16)},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(9),i=t.n(r),l=(t(15),t(3)),o=t(4),c=t(6),d=t(5),h=t(1),m=t(7),u="https://one.nhtsa.gov/webapi/api/Recalls/vehicle",p=t(2),v=t.n(p),y=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(d.a)(a).call(this,e))).state={isLoaded:!1,years:[]},t.handleChange=t.handleChange.bind(Object(h.a)(t)),t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"handleChange",value:function(e){var a=e.target.value;this.props.onChange(a),v()("select").blur()}},{key:"componentDidMount",value:function(){v.a.ajax({url:u+"?format=json",dataType:"jsonp"}).done(function(e){for(var a=[],t=1;t<e.Count;t++)a.push(e.Results[t].ModelYear);this.setState({isLoaded:!0,years:a})}.bind(this))}},{key:"render",value:function(){var e=this.state,a=e.isLoaded,t=e.years;return s.a.createElement("div",{className:"selectdiv",id:"year"},s.a.createElement("select",{onChange:this.handleChange},s.a.createElement("option",{value:""},"Year:"),a?t.map((function(e){return s.a.createElement("option",{value:e,key:e.toString()},e)})):""))}}]),a}(s.a.Component),g=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(d.a)(a).call(this,e))).state={isLoaded:!1,year:"",makes:[]},t.handleChange=t.handleChange.bind(Object(h.a)(t)),t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"handleChange",value:function(e){var a=e.target.value;this.props.onChange(a),v()("select").blur()}},{key:"componentDidUpdate",value:function(){var e=this.props.year;if(!(this.state.isLoaded&&e===this.state.year||0===e.length)){var a=this;v.a.ajax({url:u+"/modelyear/"+e+"?format=json",dataType:"jsonp"}).done((function(e){for(var t=[],n=0;n<e.Count;n++)t.push(e.Results[n].Make);a.setState({isLoaded:!0,makes:t,year:e.Results[0].ModelYear})}))}}},{key:"render",value:function(){var e=this.state,a=e.makes,t=e.year,n=e.isLoaded;return s.a.createElement("div",{className:"selectdiv",id:"make"},s.a.createElement("select",{defaultValue:"",onChange:this.handleChange},s.a.createElement("option",{value:""},"Make:"),n&&this.props.year===t?a.map((function(e){return s.a.createElement("option",{value:e.replace("/&/g","_"),key:e},e)})):""))}}]),a}(s.a.Component),k=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(d.a)(a).call(this,e))).state={isLoaded:!1,year:"",make:"",models:[]},t.handleChange=t.handleChange.bind(Object(h.a)(t)),t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"handleChange",value:function(e){var a=e.target.value;this.props.onChange(a),v()("select").blur()}},{key:"componentDidUpdate",value:function(){var e=this.props,a=e.year,t=e.make;if(!(this.state.isLoaded&&a===this.state.year&&t===this.state.make||0===a.length||0===t.length)){var n=this;v.a.ajax({url:u+"/modelyear/"+a+"/make/"+t+"?format=json",dataType:"jsonp",year:a,make:t}).done((function(e){for(var a=[],t=0;t<e.Count;t++)a.push(e.Results[t].Model);n.setState({isLoaded:!0,models:a,year:this.year,make:this.make})}))}}},{key:"render",value:function(){var e=this.state,a=e.models,t=e.year,n=e.make,r=e.isLoaded;return s.a.createElement("div",{className:"selectdiv",id:"model"},s.a.createElement("select",{defaultValue:"",onChange:this.handleChange},s.a.createElement("option",{value:""},"Model:"),r&&this.props.year===t&&this.props.make===n?a.map((function(e){return s.a.createElement("option",{value:e.replace("/&/g","_"),key:e},e)})):""))}}]),a}(s.a.Component),b=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(d.a)(a).call(this,e))).state={isLoaded:!1,year:"",make:"",model:"",campaigns:[]},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"componentDidUpdate",value:function(){var e=this.props,a=e.year,t=e.make,n=e.model,s=this.state.isLoaded;if(!s||a!==this.state.year||t!==this.state.make||n!==this.state.model)if(0!==a.length&&0!==t.length&&0!==n.length){var r=this;v.a.ajax({url:u+"/modelyear/"+a+"/make/"+t+"/model/"+n+"?format=json",dataType:"jsonp",year:a,make:t,model:n}).done((function(e){var a=e.Results;r.setState({isLoaded:!0,campaigns:a,year:this.year,make:this.make,model:this.model})}))}else s&&this.setState({isLoaded:!1,campaigns:[],make:"",model:"",year:""})}},{key:"render",value:function(){var e=this.state.campaigns,a={fontWeight:"bold"},t={fontWeight:"bold",textAlign:"center"};return s.a.createElement("div",{className:"campaignBox"},0===e.length?"":e.map((function(e){return s.a.createElement("div",{key:e.NHTSACampaignNumber,className:"campaign"},s.a.createElement("div",null,s.a.createElement("span",{style:a},"Campaign Number"),": ",e.NHTSACampaignNumber),s.a.createElement("div",null,s.a.createElement("span",{style:a},"Report Received Date"),": ",(n=e.ReportReceivedDate)?new Date(parseInt(n.substr(6))).toString().split(" ").slice(0,4).join(" "):""),s.a.createElement("div",null,s.a.createElement("div",{style:t},"Summary"),e.Summary),s.a.createElement("div",null,s.a.createElement("div",{style:t},"Problem"),e.Conequence),s.a.createElement("div",null,s.a.createElement("div",{style:t},"Remedy"),e.Remedy));var n})))}}]),a}(s.a.Component),f=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(d.a)(a).call(this,e))).state={year:"",make:"",model:"",parent:0},t.changeYear=t.changeYear.bind(Object(h.a)(t)),t.changeMake=t.changeMake.bind(Object(h.a)(t)),t.changeModel=t.changeModel.bind(Object(h.a)(t)),t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"changeYear",value:function(e){this.setState({year:e,make:"",model:""})}},{key:"changeMake",value:function(e){this.setState({make:e,model:""})}},{key:"changeModel",value:function(e){this.setState({model:e})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"selectBox"},s.a.createElement(y,{onChange:this.changeYear}),s.a.createElement(g,{onChange:this.changeMake,year:this.state.year}),s.a.createElement(k,{onChange:this.changeModel,year:this.state.year,make:this.state.make})),s.a.createElement(b,{year:this.state.year,make:this.state.make,model:this.state.model}))}}]),a}(s.a.Component);i.a.render(s.a.createElement(f,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.ac6ed196.chunk.js.map