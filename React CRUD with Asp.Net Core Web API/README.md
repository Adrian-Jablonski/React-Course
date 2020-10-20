## ASP.NET Setup
- Select ASP.NET Core Web Application
- Then Select API as project template and uncheck Configure for HTTPS
- Install Microsoft.EntityFrameworkCore, Microsoft.EntityFrameworkCore.SqlServer, and Microsoft.EntityFrameworkCore.Tools NuGet Packages ( Should all be same version )
- To create database and add table through migration, go to 
	- Tools --> NuGet Package Manager Console
	- Run Add-Migration "MigrationName"
	- Then Run Update-Database

## Enable CORS
- Install Microsoft.AspNetCore.Cors NuGet Package
- Add the following lines to Startup.cs
	- services.AddCors();
	-  app.UseCors(options =>
		options.WithOrigins("http://localhost:3000")
		.AllowAnyHeader()
		.AllowAnyMethod());