using EmployeeWebAPIService.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);



builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:4200") // Replace with your allowed origins
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});



//builder.Services.AddCors(options =>
//{
//    options.AddPolicy("AllowAll",
//        policy =>
//        {
//            policy.AllowAnyOrigin()
//                  .AllowAnyHeader()
//                  .AllowAnyMethod();
//        });
//});



builder.Services.AddDbContext<EmployeeDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("EmployeeDBConnection")));
builder.Services.AddControllers();
builder.Services.AddOpenApi();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();
app.UseCors(); // Apply CORS Policy

app.UseAuthorization();

app.MapControllers();

app.Run();
