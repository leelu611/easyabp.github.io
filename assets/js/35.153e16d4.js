(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{752:function(e,t,a){"use strict";a.r(t);var r=a(103),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"sharedresources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sharedresources"}},[e._v("#")]),e._v(" SharedResources")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.SharedResources.Domain.Shared",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/nuget/v/EasyAbp.SharedResources.Domain.Shared.svg?style=flat-square",alt:"NuGet"}}),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.SharedResources.Domain.Shared",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/nuget/dt/EasyAbp.SharedResources.Domain.Shared.svg?style=flat-square",alt:"NuGet Download"}}),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("An abp application module that allows users to share resources with each other.")]),e._v(" "),a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Install with "),a("a",{attrs:{href:"https://github.com/EasyAbp/AbpHelper.GUI",target:"_blank",rel:"noopener noreferrer"}},[e._v("AbpHelper"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Coming soon.")])]),e._v(" "),a("li",[a("p",[e._v("Install Manually")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Install "),a("code",[e._v("EasyAbp.SharedResources.Application")]),e._v(" NuGet package to "),a("code",[e._v("MyProject.Application")]),e._v(" project and add "),a("code",[e._v("[DependsOn(SharedResourcesApplicationModule)]")]),e._v(" attribute to the module.")])]),e._v(" "),a("li",[a("p",[e._v("Install "),a("code",[e._v("EasyAbp.SharedResources.Application.Contracts")]),e._v(" NuGet package to "),a("code",[e._v("MyProject.Application.Contracts")]),e._v(" project and add "),a("code",[e._v("[DependsOn(SharedResourcesApplicationContractsModule)]")]),e._v(" attribute to the module.")])]),e._v(" "),a("li",[a("p",[e._v("Install "),a("code",[e._v("EasyAbp.SharedResources.Domain")]),e._v(" NuGet package to "),a("code",[e._v("MyProject.Domain")]),e._v(" project and add "),a("code",[e._v("[DependsOn(SharedResourcesDomainModule)]")]),e._v(" attribute to the module.")])]),e._v(" "),a("li",[a("p",[e._v("Install "),a("code",[e._v("EasyAbp.SharedResources.Domain.Shared")]),e._v(" NuGet package to "),a("code",[e._v("MyProject.Domain.Shared")]),e._v(" project and add "),a("code",[e._v("[DependsOn(SharedResourcesDomainSharedModule)]")]),e._v(" attribute to the module.")])]),e._v(" "),a("li",[a("p",[e._v("Install "),a("code",[e._v("EasyAbp.SharedResources.EntityFrameworkCore")]),e._v(" NuGet package to "),a("code",[e._v("MyProject.EntityFrameworkCore")]),e._v(" project and add "),a("code",[e._v("[DependsOn(SharedResourcesEntityFrameworkCoreModule)]")]),e._v(" attribute to the module.")])]),e._v(" "),a("li",[a("p",[e._v("Install "),a("code",[e._v("EasyAbp.SharedResources.HttpApi")]),e._v(" NuGet package to "),a("code",[e._v("MyProject.HttpApi")]),e._v(" project and add "),a("code",[e._v("[DependsOn(SharedResourcesHttpApiModule)]")]),e._v(" attribute to the module.")])]),e._v(" "),a("li",[a("p",[e._v("Install "),a("code",[e._v("EasyAbp.SharedResources.HttpApi.Client")]),e._v(" NuGet package to "),a("code",[e._v("MyProject.HttpApi.Client")]),e._v(" project and add "),a("code",[e._v("[DependsOn(SharedResourcesHttpApiClientModule)]")]),e._v(" attribute to the module.")])]),e._v(" "),a("li",[a("p",[e._v("Install "),a("code",[e._v("EasyAbp.SharedResources.MongoDB")]),e._v(" NuGet package to "),a("code",[e._v("MyProject.MongoDB")]),e._v(" project and add "),a("code",[e._v("[DependsOn(SharedResourcesMongoDbModule)]")]),e._v(" attribute to the module.")])]),e._v(" "),a("li",[a("p",[e._v("(Optional) If you need MVC UI, install "),a("code",[e._v("EasyAbp.SharedResources.Web")]),e._v(" NuGet package to "),a("code",[e._v("MyProject.Web")]),e._v(" project and add "),a("code",[e._v("[DependsOn(SharedResourcesWebModule)]")]),e._v(" attribute to the module.")])]),e._v(" "),a("li",[a("p",[e._v("Add "),a("code",[e._v("builder.ConfigureSharedResources();")]),e._v(" to OnModelCreating method in "),a("code",[e._v("MyProjectMigrationsDbContext.cs")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Add EF Core migrations and update your database. See: "),a("a",{attrs:{href:"https://docs.abp.io/en/abp/latest/Tutorials/Part-1?UI=MVC#add-new-migration-update-the-database",target:"_blank",rel:"noopener noreferrer"}},[e._v("ABP document"),a("OutboundLink")],1),e._v(".")])])])])]),e._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Add permissions to the roles you want.")])]),e._v(" "),a("li",[a("p",[e._v("Create a category.")])]),e._v(" "),a("li",[a("p",[e._v("Create a resource in the category.")])]),e._v(" "),a("li",[a("p",[e._v("Create a resource item in the resource.")])]),e._v(" "),a("li",[a("p",[e._v("Set authorized users of the resource so they can access it.")])])]),e._v(" "),a("p",[a("img",{attrs:{src:"/modules/SharedResources/images/Categories.png",alt:"Categories"}}),e._v(" "),a("img",{attrs:{src:"/modules/SharedResources/images/CreateCategory.png",alt:"CreateCategory"}}),e._v(" "),a("img",{attrs:{src:"/modules/SharedResources/images/Resources.png",alt:"Resources"}}),e._v(" "),a("img",{attrs:{src:"/modules/SharedResources/images/CreateResource.png",alt:"CreateResource"}}),e._v(" "),a("img",{attrs:{src:"/modules/SharedResources/images/ResourceItems.png",alt:"ResourceItems"}}),e._v(" "),a("img",{attrs:{src:"/modules/SharedResources/images/CreateResourceItem.png",alt:"CreateResourceItem"}})]),e._v(" "),a("h2",{attrs:{id:"application-scenario"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-scenario"}},[e._v("#")]),e._v(" Application Scenario")]),e._v(" "),a("h3",{attrs:{id:"video-sharing-sites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#video-sharing-sites"}},[e._v("#")]),e._v(" Video Sharing Sites")]),e._v(" "),a("ul",[a("li",[e._v("Enable users to create their own categories and resources.")]),e._v(" "),a("li",[e._v("Enable users to decide who has access to resources.")])]),e._v(" "),a("h3",{attrs:{id:"free-download-sites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#free-download-sites"}},[e._v("#")]),e._v(" Free Download Sites")]),e._v(" "),a("ul",[a("li",[e._v("Add categories with the "),a("code",[e._v("Set as a common category")]),e._v(" configuration.")]),e._v(" "),a("li",[e._v("Add resource items with the "),a("code",[e._v("Public resource item")]),e._v(" configuration.")])]),e._v(" "),a("h3",{attrs:{id:"paid-knowledge-market"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paid-knowledge-market"}},[e._v("#")]),e._v(" Paid Knowledge Market")]),e._v(" "),a("ul",[a("li",[e._v("Add categories with the "),a("code",[e._v("Set as a common category")]),e._v(" configuration.")]),e._v(" "),a("li",[e._v("Set the free part of resource items to "),a("code",[e._v("Public resource item")]),e._v(".")]),e._v(" "),a("li",[e._v("Use "),a("a",{attrs:{href:"https://github.com/EasyAbp/EShop",target:"_blank",rel:"noopener noreferrer"}},[e._v("EShop"),a("OutboundLink")],1),e._v(" module to sell your courses, when a user buys a course, give him access to related resources.")])]),e._v(" "),a("h2",{attrs:{id:"roadmap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#roadmap"}},[e._v("#")]),e._v(" Roadmap")]),e._v(" "),a("ul",[a("li",[e._v("[ ] Explorer.")]),e._v(" "),a("li",[e._v("[ ] Pages for admin to manage users' categories and resources.")]),e._v(" "),a("li",[e._v("[ ] Unit tests.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);