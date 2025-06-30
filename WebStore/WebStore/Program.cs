using Microsoft.EntityFrameworkCore;
using WebStore.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddDbContext<MyStoreContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("MyConnectionSalo")));

builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseAuthorization();

app.MapControllers();

app.Run();
