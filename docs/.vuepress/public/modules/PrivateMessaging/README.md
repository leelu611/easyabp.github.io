# PrivateMessaging

[![NuGet](https://img.shields.io/nuget/v/EasyAbp.PrivateMessaging.Domain.Shared.svg?style=flat-square)](https://www.nuget.org/packages/EasyAbp.PrivateMessaging.Domain.Shared)
[![NuGet Download](https://img.shields.io/nuget/dt/EasyAbp.PrivateMessaging.Domain.Shared.svg?style=flat-square)](https://www.nuget.org/packages/EasyAbp.PrivateMessaging.Domain.Shared)
[![GitHub stars](https://img.shields.io/github/stars/EasyAbp/PrivateMessaging?style=social)](https://www.github.com/EasyAbp/PrivateMessaging)

An abp application module that allows users to send private messages to each other.

## Online Demo

We have launched an online demo for this module: [https://pm.samples.easyabp.io](https://pm.samples.easyabp.io)

## Installation

1. Install the following NuGet packages. ([see how](https://github.com/EasyAbp/EasyAbpGuide/blob/master/How-To.md#add-nuget-packages))

    * EasyAbp.PrivateMessaging.Application
    * EasyAbp.PrivateMessaging.Application.Contracts
    * EasyAbp.PrivateMessaging.Domain
    * EasyAbp.PrivateMessaging.Domain.Shared
    * EasyAbp.PrivateMessaging.EntityFrameworkCore
    * EasyAbp.PrivateMessaging.HttpApi
    * EasyAbp.PrivateMessaging.HttpApi.Client
    * (Optional) EasyAbp.PrivateMessaging.MongoDB
    * (Optional) EasyAbp.PrivateMessaging.Web

1. Add `DependsOn(typeof(PrivateMessagingXxxModule))` attribute to configure the module dependencies. ([see how](https://github.com/EasyAbp/EasyAbpGuide/blob/master/How-To.md#add-module-dependencies))

1. Add `builder.ConfigurePrivateMessaging();` to the `OnModelCreating()` method in **MyProjectMigrationsDbContext.cs**.

1. Add EF Core migrations and update your database. See: [ABP document](https://docs.abp.io/en/abp/latest/Tutorials/Part-1?UI=MVC#add-new-migration-update-the-database).

## Usage

1. Add permissions to the roles you want.

1. Enjoy this wonderful module.

![Notifications](/modules/PrivateMessaging/images/Notifications.png)
![Write a message](/modules/PrivateMessaging/images/WriteMessage.png)
![Inbox](/modules/PrivateMessaging/images/Inbox.png)
![Read a message](/modules/PrivateMessaging/images/ReadMessage.png)

## Roadmap

- [ ] Add more configurations.
- [ ] Use MongoDB to provide new message notifications.
- [ ] Support Angular UI.
- [ ] Unit tests.

