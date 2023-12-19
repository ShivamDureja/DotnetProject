using Microsoft.EntityFrameworkCore;

namespace CustomerApi.Models
{
    public class CustomerDbContext : DbContext
    {
        public CustomerDbContext()
        {
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("server=LAPTOP-RIO0KCVU\\SQLEXPRESS;database=custdb;integrated security = true");
        }
        public DbSet<Customer> Customers { get; set; }
    }
}
