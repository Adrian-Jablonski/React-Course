## ASP.NET Setup
- Select ASP.NET Core Web Application
- Then Select API as project template and uncheck Configure for HTTPS
- Install Microsoft.EntityFrameworkCore, Microsoft.EntityFrameworkCore.SqlServer, and Microsoft.EntityFrameworkCore.Tools NuGet Packages
- To create database and add table through migration, go to 
	- Tools --> NuGet Package Manager Console
	- Run Add-Migration "MigrationName"
	- Then Run Update-Database