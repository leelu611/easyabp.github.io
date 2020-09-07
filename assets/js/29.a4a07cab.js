(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{746:function(t,s,e){"use strict";e.r(s);var n=e(103),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"abp-settingui"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#abp-settingui"}},[t._v("#")]),t._v(" Abp.SettingUi")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.Abp.SettingUi.Domain.Shared",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/nuget/v/EasyAbp.Abp.SettingUi.Domain.Shared.svg?style=flat-square",alt:"NuGet"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.Abp.SettingUi.Domain.Shared",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/nuget/dt/EasyAbp.Abp.SettingUi.Domain.Shared.svg?style=flat-square",alt:"NuGet Download"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://www.github.com/EasyAbp/Abp.SettingUi",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/github/stars/EasyAbp/Abp.SettingUi?style=social",alt:"GitHub stars"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("An "),e("a",{attrs:{href:"http://abp.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("ABP"),e("OutboundLink")],1),t._v(" module used to manage ABP settings")]),t._v(" "),e("p",[e("img",{attrs:{src:"/modules/Abp.SettingUi/images/demo.png",alt:"demo"}})]),t._v(" "),e("blockquote",[e("p",[t._v("If you are using ABP version <2.1.1, please see "),e("a",{attrs:{href:"https://github.com/wakuflair/Abp.SettingManagement.Mvc.UI",target:"_blank",rel:"noopener noreferrer"}},[t._v("Abp.SettingManagement.Mvc.UI"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"features"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[t._v("#")]),t._v(" Features")]),t._v(" "),e("ul",[e("li",[t._v("Manage ABP setting values via UI")]),t._v(" "),e("li",[t._v("Support localization")]),t._v(" "),e("li",[t._v("Group settings")]),t._v(" "),e("li",[t._v("Display settings with appropriate input controls")])]),t._v(" "),e("h2",{attrs:{id:"online-demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#online-demo"}},[t._v("#")]),t._v(" Online Demo")]),t._v(" "),e("p",[t._v("We have launched an online demo for this module: "),e("a",{attrs:{href:"https://settingui.samples.easyabp.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://settingui.samples.easyabp.io"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Install the following NuGet packages. ("),e("a",{attrs:{href:"https://github.com/EasyAbp/EasyAbpGuide/blob/master/How-To.md#add-nuget-packages",target:"_blank",rel:"noopener noreferrer"}},[t._v("see how"),e("OutboundLink")],1),t._v(")")]),t._v(" "),e("ul",[e("li",[t._v("EasyAbp.Abp.SettingUi.Application")]),t._v(" "),e("li",[t._v("EasyAbp.Abp.SettingUi.Domain.Shared")]),t._v(" "),e("li",[t._v("EasyAbp.Abp.SettingUi.HttpApi")]),t._v(" "),e("li",[t._v("(Optional) EasyAbp.Abp.SettingUi.HttpApi.Client")]),t._v(" "),e("li",[t._v("(Optional) EasyAbp.Abp.SettingUi.Web")])])])]),t._v(" "),e("blockquote",[e("p",[t._v("The "),e("code",[t._v("EasyAbp.Abp.SettingUi.HttpApi.Client")]),t._v(" package should be installed if your application is "),e("a",{attrs:{href:"https://docs.abp.io/en/abp/latest/Startup-Templates/Application#tiered-structure",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tiered structure"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Add "),e("code",[t._v("DependsOn(typeof(AbpSettingUiXxxModule))")]),t._v(" attribute to configure the module dependencies. ("),e("a",{attrs:{href:"https://github.com/EasyAbp/EasyAbpGuide/blob/master/How-To.md#add-module-dependencies",target:"_blank",rel:"noopener noreferrer"}},[t._v("see how"),e("OutboundLink")],1),t._v(")")])]),t._v(" "),e("li",[e("p",[t._v("Add localization resource to SettingUi")]),t._v(" "),e("p",[t._v("In order to let SettingUi module use localization resources from this application, we need to add them to "),e("code",[t._v("SettingUiResource")]),t._v(":")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("MyAbpApp.Domain.Shared")]),t._v(" project - "),e("code",[t._v("MyAbpAppDomainSharedModule")]),t._v(" class")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token generic-method"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Configure")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("AbpLocalizationOptions"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token range operator"}},[t._v("..")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Resources\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token generic-method"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("SettingUiResource"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddVirtualJson")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/Localization/MyAbpApp"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])])])]),t._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("ol",[e("li",[e("p",[t._v('Add permissions ("Setting UI" - "Tenant") to the roles you want.')]),t._v(" "),e("p",[e("img",{attrs:{src:"/modules/Abp.SettingUi/images/permission.png",alt:"permission"}})])]),t._v(" "),e("li",[e("p",[t._v('Refresh the browser then you can use "Administration" - "Settings" menu to see all ABP built-in settings')])])]),t._v(" "),e("h2",{attrs:{id:"manage-custom-settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#manage-custom-settings"}},[t._v("#")]),t._v(" Manage custom settings")]),t._v(" "),e("p",[t._v("Beside ABP built-in settings, you can also use this module to manage your own settings.")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Define a setting")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("MyAbpApp.Domain")]),t._v(" project - "),e("code",[t._v("Settings/MyAbpAppSettingDefinitionProvider")]),t._v(" class")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyAbpAppSettingDefinitionProvider")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token type-list"}},[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SettingDefinitionProvider")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Define")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ISettingDefinitionContext")]),t._v(" context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("SettingDefinition")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Connection.Ip"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Setting name")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Default value")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("L")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DisplayName:Connection.Ip"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Display name")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("L")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Description:Connection.Ip"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Description")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("LocalizableString")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("L")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" LocalizableString"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token generic-method"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Create")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("MyAbpAppResource"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ul",[e("li",[t._v('The setting name is "Connection.Ip"')]),t._v(" "),e("li",[t._v('Provide a default value: "127.0.0.1"')]),t._v(" "),e("li",[t._v("Set the "),e("code",[t._v("DisplayName")]),t._v(" and "),e("code",[t._v("Description")]),t._v(" to a localizable string by using a helper method "),e("code",[t._v("L")]),t._v('. The format "DisplayName:{SettingName}" is the convention recommended by ABP')])]),t._v(" "),e("blockquote",[e("p",[t._v("For ABP setting system, please see "),e("a",{attrs:{href:"https://docs.abp.io/en/abp/latest/Settings",target:"_blank",rel:"noopener noreferrer"}},[t._v("Settings document"),e("OutboundLink")],1)])])])])]),t._v(" "),e("li",[e("p",[t._v("Define localization resources for the setting, for demonstration purpose, we defined English and Chinese localization resources")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("MyAbpApp.Domain.Shared")]),t._v(" project")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("Localization/MyAbpApp/en.json")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"culture"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"en"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"texts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ...\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"DisplayName:Connection.Ip"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IP"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Description:Connection.Ip"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The IP address of the server."')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("Localization/MyAbpApp/zh-Hans.json")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"culture"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zh-Hans"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"texts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ...\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"DisplayName:Connection.Ip"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IP"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Description:Connection.Ip"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"服务器的IP地址."')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])])])]),t._v(" "),e("li",[e("p",[t._v("Relaunch the application, we can see the setting displayed, and the localization also works")]),t._v(" "),e("p",[e("img",{attrs:{src:"/modules/Abp.SettingUi/images/custom-setting.png",alt:"custom-setting"}})])])]),t._v(" "),e("h2",{attrs:{id:"grouping"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grouping"}},[t._v("#")]),t._v(" Grouping")]),t._v(" "),e("p",[t._v('You may notice that our custom setting is displayed in "Others" tab, and "Others" card, these are the default group display names called "Group1" and "Group2" respectively:')]),t._v(" "),e("p",[e("img",{attrs:{src:"/modules/Abp.SettingUi/images/group.png",alt:"group"}})]),t._v(" "),e("p",[t._v("So how can we custom the group of the setting? There are two ways:")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Use "),e("code",[t._v("WithProperty")]),t._v(" method")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("WithProperty")]),t._v(" method is a method provided by ABP "),e("code",[t._v("SettingDefinition")]),t._v(" class, we can directly use it in setting defining:")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("MyAbpApp.Domain")]),t._v(" project - "),e("code",[t._v("Settings/MyAbpAppSettingDefinitionProvider")]),t._v(" class")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[t._v("context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("SettingDefinition")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Connection.Ip"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Setting name")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Default value")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("L")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DisplayName:Connection.Ip"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Display name")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("L")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Description:Connection.Ip"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Description")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithProperty")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SettingUiConst"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Group1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Server"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithProperty")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SettingUiConst"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Group2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Connection"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("ul",[e("li",[t._v("The constants "),e("code",[t._v("Group1")]),t._v(" and "),e("code",[t._v("Group2")]),t._v(" are defined in the "),e("code",[t._v("SettingUiConst")]),t._v(" class")]),t._v(" "),e("li",[t._v('Set the "Server" to "Group1", and "Connection" to "Group2"')])])])]),t._v(" "),e("p",[t._v("Then we should provide the localization resource for these two group names:")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("MyAbpApp.Domain.Shared")]),t._v(" project")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("Localization/MyAbpApp/en.json")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"culture"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"en"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"texts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ...\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Server"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Server"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Connection"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Connection"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("Localization/MyAbpApp/zh-Hans.json")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"culture"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zh-Hans"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"texts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ...\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Server"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"服务器"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Connection"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"连接"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])])]),t._v(" "),e("p",[t._v("Relaunch the application and see if the group names are correctly set")]),t._v(" "),e("p",[e("img",{attrs:{src:"/modules/Abp.SettingUi/images/group-name.png",alt:"group-name"}})])]),t._v(" "),e("li",[e("p",[t._v("Use setting property file")]),t._v(" "),e("p",[t._v("Another way of setting group is use the setting property file, which is provided by the SettingUi module. It's useful when you can not easily modify the setting definition, or you want to put the grouping information into one single place.")]),t._v(" "),e("p",[t._v("For demonstration in this way, let's define a new setting:")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("MyAbpApp.Domain")]),t._v(" project - "),e("code",[t._v("Settings/MyAbpAppSettingDefinitionProvider")]),t._v(" class")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[t._v("new SettingDefinition(\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Connection.Port"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v(".ToString()"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    L("),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DisplayName:Connection.Port"')]),t._v(")"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    L("),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Description:Connection.Port"')]),t._v(")\n)\n")])])])])]),t._v(" "),e("blockquote",[e("p",[t._v("The steps of adding localization for this setting are omitted.")])]),t._v(" "),e("p",[t._v('Then we need to create a new json file with arbitrary filename, however the path must be "/SettingProperties", because SettingUi module will look for the setting property files from this path.')]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("MyAbpApp.Domain.Shared")]),t._v(" project - "),e("code",[t._v("/SettingProperties/MySettingProperties.json")]),t._v(" file")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Connection.Port"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Group1"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Server"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Group2"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Connection"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ul",[e("li",[t._v("The setting name "),e("code",[t._v("Connection.Port")]),t._v(" as the key of the JSON object")]),t._v(" "),e("li",[t._v('Use "Group1" and "Group2" to set the grouping names')])])]),t._v(" "),e("li",[e("p",[t._v("Relaunch the application to see the new grouped setting")]),t._v(" "),e("p",[e("img",{attrs:{src:"/modules/Abp.SettingUi/images/group-by-setting-property-file.png",alt:"group-by-setting-property-file"}})])])])])]),t._v(" "),e("h2",{attrs:{id:"setting-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-types"}},[t._v("#")]),t._v(" Setting types")]),t._v(" "),e("p",[t._v('By default a setting value is string type, which will be rendered as a text input control in UI. We can custom it simply by providing a setting property "Type":')]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("MyAbpApp.Domain.Shared")]),t._v(" project - "),e("code",[t._v("/SettingProperties/MySettingProperties.json")]),t._v(" file")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Connection.Port"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Group1"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Server"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Group2"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Connection"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ul",[e("li",[t._v('Set the "Connection.Port" setting type to "number"')])])])]),t._v(" "),e("p",[t._v("No need to relaunch the application, just press F5 to refresh the browser, you should be able to see the effect immediately:")]),t._v(" "),e("p",[e("img",{attrs:{src:"/modules/Abp.SettingUi/images/type-number.png",alt:"type-number"}})]),t._v(" "),e("p",[t._v('Now the input type changed to "number", and the frontend validations also work.')]),t._v(" "),e("blockquote",[e("p",[t._v("The setting types can also be configured through "),e("code",[t._v("WithProperty")]),t._v(" method, like "),e("code",[t._v('WithProperty("Type", "number")')])])]),t._v(" "),e("p",[t._v("For now SettingUi support following setting types:")]),t._v(" "),e("ul",[e("li",[t._v("text (default)")]),t._v(" "),e("li",[t._v("number")]),t._v(" "),e("li",[t._v("checkbox")]),t._v(" "),e("li",[t._v("select\n"),e("ul",[e("li",[e("p",[t._v('Needs an additional property "Options" to provide select options, which is a string separated by a vertical bar (|)')]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Connection.Protocol"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Group1"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Server"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Group2"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Connection"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"select"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Options"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"|HTTP|TCP|RDP|FTP|SFTP"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),e("p",[t._v("The render result:")]),t._v(" "),e("p",[e("img",{attrs:{src:"/modules/Abp.SettingUi/images/selet.png",alt:"selection"}})])])])])]),t._v(" "),e("p",[t._v("This is the end of the tutorial. Through this tutorial, you should be able to easily manage your settings using SettingUi. The source of the tutorial can be found in the "),e("a",{attrs:{href:"https://github.com/EasyAbp/Abp.SettingUi/tree/master/sample",target:"_blank",rel:"noopener noreferrer"}},[t._v("sample folder"),e("OutboundLink")],1)]),t._v(" "),e("h1",{attrs:{id:"localization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#localization"}},[t._v("#")]),t._v(" Localization")]),t._v(" "),e("p",[t._v("The SettingUI module uses ABP's localization system to display the localization information of the settings.The languages currently supported are:")]),t._v(" "),e("ul",[e("li",[t._v("en")]),t._v(" "),e("li",[t._v("zh-Hans")])]),t._v(" "),e("p",[t._v("The localization resource files are under "),e("code",[t._v("/Localization/SettingUi")]),t._v(" of the "),e("code",[t._v("EasyAbp.Abp.SettingUi.Domain.Shared")]),t._v(" project.")]),t._v(" "),e("p",[t._v("You can add more resource files to make this module support more languages. Welcome PRs 😊 .")]),t._v(" "),e("blockquote",[e("p",[t._v("For ABP's localization system, please see "),e("a",{attrs:{href:"https://docs.abp.io/en/abp/latest/Localization",target:"_blank",rel:"noopener noreferrer"}},[t._v("the document"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=a.exports}}]);