import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../CartSlice.jsx';

const plants = [
  {id:1,name:'Snake Plant',category:'Low Light',price:24.99,image:'https://images.unsplash.com/photo-1593482892290-f54927ae2a26?auto=format&fit=crop&w=700&q=80'},
  {id:2,name:'ZZ Plant',category:'Low Light',price:29.99,image:'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80'},
  {id:3,name:'Peace Lily',category:'Low Light',price:22.50,image:'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80'},
  {id:4,name:'Pothos',category:'Low Light',price:18.99,image:'https://images.unsplash.com/photo-1614594575921-ae1c5f7d1e95?auto=format&fit=crop&w=700&q=80'},
  {id:5,name:'Cast Iron Plant',category:'Low Light',price:27.00,image:'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80'},
  {id:6,name:'Chinese Evergreen',category:'Low Light',price:31.50,image:'https://images.unsplash.com/photo-1616764830288-2a7f5e0e5f1d?auto=format&fit=crop&w=700&q=80'},
  {id:7,name:'Monstera Deliciosa',category:'Tropical',price:39.99,image:'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80'},
  {id:8,name:'Bird of Paradise',category:'Tropical',price:45.00,image:'https://images.unsplash.com/photo-1597055181300-d6f60a3d2b6b?auto=format&fit=crop&w=700&q=80'},
  {id:9,name:'Calathea Orbifolia',category:'Tropical',price:34.99,image:'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=700&q=80'},
  {id:10,name:'Rubber Plant',category:'Tropical',price:32.99,image:'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80'},
  {id:11,name:'Fiddle Leaf Fig',category:'Tropical',price:49.99,image:'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80'},
  {id:12,name:'Areca Palm',category:'Tropical',price:36.50,image:'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=700&q=80'},
  {id:13,name:'Aloe Vera',category:'Succulents',price:16.99,image:'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80'},
  {id:14,name:'Jade Plant',category:'Succulents',price:19.99,image:'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=700&q=80'},
  {id:15,name:'Haworthia',category:'Succulents',price:14.50,image:'https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=700&q=80'},
  {id:16,name:'Echeveria',category:'Succulents',price:13.99,image:'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80'},
  {id:17,name:'String of Pearls',category:'Succulents',price:21.99,image:'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80'},
  {id:18,name:'Zebra Haworthia',category:'Succulents',price:15.99,image:'https://images.unsplash.com/photo-1519336056116-bc0f177b36f2?auto=format&fit=crop&w=700&q=80'}
];

export { plants };

export default function ProductList() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const categories = [...new Set(plants.map(plant => plant.category))];

  return (
    <div className="page">
      <nav className="navbar">
        <Link className="brand" to="/">Paradise Nursery</Link>
        <div className="nav-links">
          <Link to="/">Home</Link><Link to="/plants">Plants</Link>
          <Link className="cart-link" to="/cart">Cart 🛒 <span>{count}</span></Link>
        </div>
      </nav>

      <header className="listing-head">
        <h1>Our Houseplants</h1>
        <p>Choose from plants for every space and experience level.</p>
      </header>

      {categories.map(category => (
        <section key={category}>
          <h2>{category}</h2>
          <div className="grid">
            {plants.filter(p => p.category === category).map(plant => {
              const added = items.some(item => item.id === plant.id);
              return (
                <article className="card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <div className="card-body">
                    <h3>{plant.name}</h3>
                    <p>${plant.price.toFixed(2)}</p>
                    <button disabled={added} onClick={() => dispatch(addToCart(plant))}>
                      {added ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}