import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../../CartSlice.jsx';

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="page">
      <nav className="navbar">
        <Link className="brand" to="/">Paradise Nursery</Link>
        <div className="nav-links">
          <Link to="/">Home</Link><Link to="/plants">Plants</Link>
          <Link className="cart-link" to="/cart">Cart 🛒 <span>{count}</span></Link>
        </div>
      </nav>

      <div className="cart-page">
        <h1>Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="empty">
            <p>Your cart is empty.</p>
            <Link className="primary-btn" to="/plants">Continue Shopping</Link>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {items.map(item => (
                <article className="cart-row" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-info">
                    <h3>{item.name}</h3>
                    <p>Unit price: ${item.price.toFixed(2)}</p>
                    <p>Item total: <strong>${(item.price * item.quantity).toFixed(2)}</strong></p>
                    <div className="qty">
                      <button onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                      <button className="delete" onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className="summary">
              <h2>Cart Summary</h2>
              <p>Total items: {count}</p>
              <p className="grand">Total: ${total.toFixed(2)}</p>
              <button onClick={() => alert('Coming Soon')}>Checkout</button>
              <Link className="secondary-btn" to="/plants">Continue Shopping</Link>
            </aside>
          </>
        )}
      </div>
    </div>
  );
}