using Microsoft.AspNetCore.Mvc;
using CustomerApi.Models;
using Microsoft.AspNetCore.Cors;



namespace CustomerApi.Controllers
{
    
    [EnableCors("MyPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : Controller
    {

            private readonly CustomerDbContext _context;

           public CustomersController(CustomerDbContext context)
             {
                _context = context;
             }

        // GET: Customers
        [HttpGet]
        
        public IEnumerable<Customer> GetCustomers()
        {
            return _context.Customers;
        }
        // Get: Customer with Id
        [HttpGet("{id}")]
        
        public IActionResult GetCustomer(int id)
        {
            if(id < 1)
            {
                return BadRequest();
            }
            var customer =  _context.Customers.FirstOrDefault(x => x.CustId == id);
     //       Customer customer = _context.Customers.Find(id);
            if(customer == null)
            {
                return NotFound();
            }
            return Ok(customer);
        }


        //Post Customer with Id
        [HttpPost]
        
        public IActionResult PostCustomer(Customer customer)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _context.Customers.Add(customer);
            _context.SaveChanges();
            return Ok();
        }
        [HttpDelete("{id}")]
        
        public IActionResult DeleteCustomer(int id)
        {
            var customer =  _context.Customers.Find(id);
            if (customer == null)
                return NotFound();
            _context.Customers.Remove(customer);
            _context.SaveChanges();
            return Ok();
        }
    }
}
      