(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{752:function(e,t,a){"use strict";a.r(t);var n=a(103),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"uniappmanagement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uniappmanagement"}},[e._v("#")]),e._v(" UniappManagement")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.UniappManagement.Domain.Shared",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/nuget/v/EasyAbp.UniappManagement.Domain.Shared.svg?style=flat-square",alt:"NuGet"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.UniappManagement.Domain.Shared",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/nuget/dt/EasyAbp.UniappManagement.Domain.Shared.svg?style=flat-square",alt:"NuGet Download"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("实现uni-app的应用版本管理、整包更新、热更新、差量热更新等功能的Abp应用模块")]),e._v(" "),a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Install with "),a("a",{attrs:{href:"https://github.com/EasyAbp/AbpHelper.GUI",target:"_blank",rel:"noopener noreferrer"}},[e._v("AbpHelper"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Coming soon.")])]),e._v(" "),a("li",[a("p",[e._v("Install Manually")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Install "),a("code",[e._v("EasyAbp.UniappManagement.Application")]),e._v(" NuGet package to "),a("code",[e._v("MyProject.Application")]),e._v(" project and add "),a("code",[e._v("[DependsOn(UniappManagementApplicationModule)]")]),e._v(" attribute to the module.")])]),e._v(" "),a("li",[a("p",[e._v("Install "),a("code",[e._v("EasyAbp.UniappManagement.Application.Contracts")]),e._v(" NuGet package to "),a("code",[e._v("MyProject.Application.Contracts")]),e._v(" project and add "),a("code",[e._v("[DependsOn(UniappManagementApplicationContractsModule)]")]),e._v(" attribute to the module.")])]),e._v(" "),a("li",[a("p",[e._v("Install "),a("code",[e._v("EasyAbp.UniappManagement.Domain")]),e._v(" NuGet package to "),a("code",[e._v("MyProject.Domain")]),e._v(" project and add "),a("code",[e._v("[DependsOn(UniappManagementDomainModule)]")]),e._v(" attribute to the module.")])]),e._v(" "),a("li",[a("p",[e._v("Install "),a("code",[e._v("EasyAbp.UniappManagement.Domain.Shared")]),e._v(" NuGet package to "),a("code",[e._v("MyProject.Domain.Shared")]),e._v(" project and add "),a("code",[e._v("[DependsOn(UniappManagementDomainSharedModule)]")]),e._v(" attribute to the module.")])]),e._v(" "),a("li",[a("p",[e._v("Install "),a("code",[e._v("EasyAbp.UniappManagement.EntityFrameworkCore")]),e._v(" NuGet package to "),a("code",[e._v("MyProject.EntityFrameworkCore")]),e._v(" project and add "),a("code",[e._v("[DependsOn(UniappManagementEntityFrameworkCoreModule)]")]),e._v(" attribute to the module.")])]),e._v(" "),a("li",[a("p",[e._v("Install "),a("code",[e._v("EasyAbp.UniappManagement.HttpApi")]),e._v(" NuGet package to "),a("code",[e._v("MyProject.HttpApi")]),e._v(" project and add "),a("code",[e._v("[DependsOn(UniappManagementHttpApiModule)]")]),e._v(" attribute to the module.")])]),e._v(" "),a("li",[a("p",[e._v("Install "),a("code",[e._v("EasyAbp.UniappManagement.HttpApi.Client")]),e._v(" NuGet package to "),a("code",[e._v("MyProject.HttpApi.Client")]),e._v(" project and add "),a("code",[e._v("[DependsOn(UniappManagementHttpApiClientModule)]")]),e._v(" attribute to the module.")])]),e._v(" "),a("li",[a("p",[e._v("Install "),a("code",[e._v("EasyAbp.UniappManagement.MongoDB")]),e._v(" NuGet package to "),a("code",[e._v("MyProject.MongoDB")]),e._v(" project and add "),a("code",[e._v("[DependsOn(UniappManagementMongoDbModule)]")]),e._v(" attribute to the module.")])]),e._v(" "),a("li",[a("p",[e._v("(Optional) If you need MVC UI, install "),a("code",[e._v("EasyAbp.UniappManagement.Web")]),e._v(" NuGet package to "),a("code",[e._v("MyProject.Web")]),e._v(" project and add "),a("code",[e._v("[DependsOn(UniappManagementWebModule)]")]),e._v(" attribute to the module.")])]),e._v(" "),a("li",[a("p",[e._v("Add "),a("code",[e._v("builder.ConfigureUniappManagement();")]),e._v(" to OnModelCreating method in "),a("code",[e._v("MyProjectMigrationsDbContext.cs")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Add EF Core migrations and update your database. See: "),a("a",{attrs:{href:"https://docs.abp.io/en/abp/latest/Tutorials/Part-1?UI=MVC#add-new-migration-update-the-database",target:"_blank",rel:"noopener noreferrer"}},[e._v("ABP document"),a("OutboundLink")],1),e._v(".")])])])])]),e._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Add permissions to the roles you want.")])]),e._v(" "),a("li",[a("p",[e._v("Enjoy this wonderful module.")])])]),e._v(" "),a("p",[a("img",{attrs:{src:"/modules/UniappManagement/images/NewApp.png",alt:"Notifications"}}),e._v(" "),a("img",{attrs:{src:"/modules/UniappManagement/images/AppList.png",alt:"AppList"}}),e._v(" "),a("img",{attrs:{src:"/modules/UniappManagement/images/NewVersion.png",alt:"NewVersion"}}),e._v(" "),a("img",{attrs:{src:"/modules/UniappManagement/images/VersionList.png",alt:"VersionList"}}),e._v(" "),a("img",{attrs:{src:"/modules/UniappManagement/images/WebApis.png",alt:"WebApis"}})]),e._v(" "),a("h2",{attrs:{id:"roadmap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#roadmap"}},[e._v("#")]),e._v(" Roadmap")]),e._v(" "),a("ul",[a("li",[e._v("[ ] Add cache.")]),e._v(" "),a("li",[e._v("[ ] Unit tests.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);