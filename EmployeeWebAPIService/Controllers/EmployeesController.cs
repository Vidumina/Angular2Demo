using EmployeeWebAPIService.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EmployeeWebAPIService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {

        private readonly EmployeeDbContext _dbcontext;

        public EmployeesController(EmployeeDbContext dbContext)
        {
            this._dbcontext = dbContext;

        }


        [HttpGet]
        public async Task<IEnumerable<Employee>> Get()
        {
            return await _dbcontext.Employees.ToListAsync();

        }


        [HttpGet("{code}")]
        public async Task<ActionResult<Employee>> Get(string code)
        {
            var employee = await _dbcontext.Employees.FirstOrDefaultAsync(e => e.Code == code);

            if (employee == null)
            {
                return NotFound();
            }

            return employee;

        }
    }
}
