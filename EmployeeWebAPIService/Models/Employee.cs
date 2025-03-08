using System;
using System.Collections.Generic;

namespace EmployeeWebAPIService.Models;

public partial class Employee
{
    public string Code { get; set; } = null!;

    public string? Name { get; set; }

    public string? Gender { get; set; }

    public decimal? AnnualSalary { get; set; }

    public string? DateOfBirth { get; set; }
}
