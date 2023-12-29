using Microsoft.EntityFrameworkCore;

namespace CustomerApi.Models
{
    public class CustomerDbContext : DbContext
    {
        public CustomerDbContext(DbContextOptions<CustomerDbContext> options) : base(options) { }
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("server=LAPTOP-RIO0KCVU\\SQLEXPRESS;database=custdb;integrated security = true;Encrypt = false");
        }
        public DbSet<Customer> Customers { get; set; }
    }
}
