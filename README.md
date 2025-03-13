# Angular2Demo



-Create a database call EmployeeAngularDB
-Then create following table and insert some sample data

USE [EmployeeAngularDB]
GO

/****** Object:  Table [dbo].[Employees]    Script Date: 13/03/2025 7:33:48 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Employees](
	[code] [nvarchar](50) NOT NULL,
	[name] [nvarchar](50) NULL,
	[gender] [nvarchar](50) NULL,
	[annualSalary] [decimal](18, 3) NULL,
	[dateOfBirth] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


