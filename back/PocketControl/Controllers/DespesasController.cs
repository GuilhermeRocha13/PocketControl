using PocketControl.Data;
using PocketControl.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace PocketControl.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DespesasController : ControllerBase
    {
        private readonly DataContext _context;

        public DespesasController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var despesas = await _context.Despesas.ToListAsync();
            return Ok(despesas);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var despesa = await _context.Despesas.FindAsync(id);
            if (despesa == null) return NotFound();
            return Ok(despesa);
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] Despesa despesa)
        {
            _context.Despesas.Add(despesa);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = despesa.Id }, despesa);
        }
    }
}
