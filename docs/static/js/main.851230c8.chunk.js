(this["webpackJsonpreact-nhtsa"]=this["webpackJsonpreact-nhtsa"]||[]).push([[0],{10:function(e,a,t){e.exports=t(16)},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(9),i=t.n(r),l=(t(15),t(3)),o=t(4),c=t(6),h=t(5),d=t(1),m=t(7),u="https://one.nhtsa.gov/webapi/api/Recalls/vehicle",p=t(2),v=t.n(p),y=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(h.a)(a).call(this,e))).state={isLoaded:!1,years:[]},t.handleChange=t.handleChange.bind(Object(d.a)(t)),t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"handleChange",value:function(e){var a=e.target.value;this.props.onChange(a),v()("select").blur()}},{key:"componentDidMount",value:function(){v.a.ajax({url:u+"?format=json",dataType:"jsonp"}).done(function(e){for(var a=[],t=1;t<e.Count;t++)a.push(e.Results[t].ModelYear);this.setState({isLoaded:!0,years:a})}.bind(this))}},{key:"render",value:function(){var e=[];return this.state.isLoaded&&(e=this.state.years.map((function(e){return s.a.createElement("option",{value:e,key:e.toString()},e)}))),s.a.createElement("div",{className:"selectdiv",id:"year"},s.a.createElement("select",{onChange:this.handleChange},s.a.createElement("option",{value:""},"Year:"),e))}}]),a}(s.a.Component),g=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(h.a)(a).call(this,e))).state={isLoaded:!1,year:"",makes:[]},t.handleChange=t.handleChange.bind(Object(d.a)(t)),t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"handleChange",value:function(e){var a=e.target.value;this.props.onChange(a),v()("select").blur()}},{key:"componentDidUpdate",value:function(){var e=this.props.year;this.state.isLoaded&&e===this.state.year||0===e.length||v.a.ajax({url:u+"/modelyear/"+e+"?format=json",dataType:"jsonp"}).done(function(e){for(var a=[],t=0;t<e.Count;t++)a.push(e.Results[t].Make);this.setState({isLoaded:!0,makes:a,year:e.Results[0].ModelYear})}.bind(this))}},{key:"render",value:function(){var e=[];return this.state.isLoaded&&this.props.year===this.state.year&&(e=this.state.makes.map((function(e){return s.a.createElement("option",{value:e.replace("/&/g","_"),key:e},e)}))),s.a.createElement("div",{className:"selectdiv",id:"make"},s.a.createElement("select",{defaultValue:"",onChange:this.handleChange},s.a.createElement("option",{value:""},"Make:"),e))}}]),a}(s.a.Component),k=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(h.a)(a).call(this,e))).state={isLoaded:!1,year:"",make:"",models:[]},t.handleChange=t.handleChange.bind(Object(d.a)(t)),t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"handleChange",value:function(e){var a=e.target.value;this.props.onChange(a),v()("select").blur()}},{key:"componentDidUpdate",value:function(){var e=this.props.year,a=this.props.make;if(!(this.state.isLoaded&&e===this.state.year&&a===this.state.make||0===e.length||0===a.length)){var t=this;v.a.ajax({url:u+"/modelyear/"+e+"/make/"+a+"?format=json",dataType:"jsonp",year:e,make:a}).done((function(e){for(var a=[],n=0;n<e.Count;n++)a.push(e.Results[n].Model);t.setState({isLoaded:!0,models:a,year:this.year,make:this.make})}))}}},{key:"render",value:function(){var e=[];return this.state.isLoaded&&this.props.year===this.state.year&&this.props.model===this.state.model&&(e=this.state.models.map((function(e){return s.a.createElement("option",{value:e.replace("/&/g","_"),key:e},e)}))),s.a.createElement("div",{className:"selectdiv",id:"model"},s.a.createElement("select",{defaultValue:"",onChange:this.handleChange},s.a.createElement("option",{value:""},"Model:"),e))}}]),a}(s.a.Component),b=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(h.a)(a).call(this,e))).state={isLoaded:!1,year:"",make:"",model:"",campaigns:[]},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"componentDidUpdate",value:function(){var e=this.props.year,a=this.props.make,t=this.props.model;if(!this.state.isLoaded||e!==this.state.year||a!==this.state.make||t!==this.state.model)if(0!==e.length&&0!==a.length&&0!==t.length){var n=this;v.a.ajax({url:u+"/modelyear/"+e+"/make/"+a+"/model/"+t+"?format=json",dataType:"jsonp",year:e,make:a,model:t}).done((function(e){var a=e.Results;n.setState({isLoaded:!0,campaigns:a,year:this.year,make:this.make,model:this.model})}))}else this.state.isLoaded&&this.setState({isLoaded:!1,campaigns:[],make:"",model:"",year:""})}},{key:"render",value:function(){var e=[],a={fontWeight:"bold"},t={fontWeight:"bold",textAlign:"center"};return this.state.campaigns.length&&(e=this.state.campaigns.map((function(e){return s.a.createElement("div",{key:e.NHTSACampaignNumber,className:"campaign"},s.a.createElement("div",null,s.a.createElement("span",{style:a},"Campaign Number"),": ",e.NHTSACampaignNumber),s.a.createElement("div",null,s.a.createElement("span",{style:a},"Report Received Date"),": ",(n=e.ReportReceivedDate,new Date(parseInt(n.substr(6))).toString().split(" ").slice(0,4).join(" "))),s.a.createElement("div",null,s.a.createElement("div",{style:t},"Summary"),e.Summary),s.a.createElement("div",null,s.a.createElement("div",{style:t},"Problem"),e.Conequence),s.a.createElement("div",null,s.a.createElement("div",{style:t},"Remedy"),e.Remedy));var n}))),s.a.createElement("div",{className:"campaignBox"},e)}}]),a}(s.a.Component),f=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(h.a)(a).call(this,e))).state={year:"",make:"",model:"",parent:0},t.changeYear=t.changeYear.bind(Object(d.a)(t)),t.changeMake=t.changeMake.bind(Object(d.a)(t)),t.changeModel=t.changeModel.bind(Object(d.a)(t)),t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"changeYear",value:function(e){this.setState({year:e,make:"",model:""})}},{key:"changeMake",value:function(e){this.setState({make:e,model:""})}},{key:"changeModel",value:function(e){this.setState({model:e})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"selectBox"},s.a.createElement(y,{onChange:this.changeYear}),s.a.createElement(g,{onChange:this.changeMake,year:this.state.year}),s.a.createElement(k,{onChange:this.changeModel,year:this.state.year,make:this.state.make})),s.a.createElement(b,{year:this.state.year,make:this.state.make,model:this.state.model}))}}]),a}(s.a.Component);i.a.render(s.a.createElement(f,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.851230c8.chunk.js.map