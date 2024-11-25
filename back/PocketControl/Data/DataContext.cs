using PocketControl.Models;
using Microsoft.EntityFrameworkCore;

namespace PocketControl.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Despesa> Despesas { get; set; }
    }
}
