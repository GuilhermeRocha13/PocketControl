namespace PocketControl.Models
{
    public class Despesa
    {
        public int Id { get; set; } // Identificador único
        public string Nome { get; set; } // Nome da despesa
        public string Categoria { get; set; } // Categoria (ex.: Alimentação, Transporte)
        public DateTime Data { get; set; } // Data da despesa
    }
}
