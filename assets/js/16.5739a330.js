(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{733:function(t,e,a){"use strict";a.r(e);var r=a(103),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"abp-eventbus-cap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abp-eventbus-cap"}},[t._v("#")]),t._v(" Abp.EventBus.CAP")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.Abp.EventBus.CAP",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/nuget/v/EasyAbp.Abp.EventBus.CAP.svg?style=flat-square",alt:"NuGet"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.Abp.EventBus.CAP",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/nuget/dt/EasyAbp.Abp.EventBus.CAP.svg?style=flat-square",alt:"NuGet Download"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("This is a repository integrated "),a("a",{attrs:{href:"https://github.com/dotnetcore/CAP/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CAP"),a("OutboundLink")],1),t._v(" with "),a("a",{attrs:{href:"https://github.com/abpframework/abp",target:"_blank",rel:"noopener noreferrer"}},[t._v("ABP"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"eventbus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eventbus"}},[t._v("#")]),t._v(" EventBus")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(' public override void ConfigureServices(ServiceConfigurationContext context)\n  {\n       var configuration = context.Services.GetConfiguration();\n      \n       context.AddCapEventBus(capOptions =>\n       {\n             capOptions.UseInMemoryStorage();\n             capOptions.UseRabbitMQ("localhost");//UseRabbitMQ 服务器地址配置，支持配置IP地址和密码\n             capOptions.UseDashboard();//CAP2.X版本以后官方提供了Dashboard页面访问。\n       });\n }\n')])])])])}),[],!1,null,null,null);e.default=n.exports}}]);