
import { Routes, Route, Link } from 'react-router-dom';

import ProductList from './components/ProductList/ProductList.jsx';
import CartItem from './components/CartItem/CartItem.jsx';
import AboutUs from './components/AboutUs.jsx';

export default function App() {
  return (
    <Routes>
      {/* Paradise Nursery Landing Page */}
      <Route path="/" element={<Landing />} />

      {/* Plant Products */}
      <Route path="/plants" element={<ProductList />} />

      {/* Shopping Cart */}
      <Route path="/cart" element={<CartItem />} />

      {/* About Paradise Nursery */}
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}

/* Landing Page */
function Landing() {
  return (
    <main className="landing">
      <div className="hero">
        <p className="eyebrow">🌿 Bring Nature Home</p>

        <h1>Paradise Nursery</h1>

        <p>
          Discover beautiful, healthy, and easy-to-care-for houseplants
          selected to make every home and office feel fresh and alive.
        </p>

        <Link className="primary-btn" to="/plants">
          Get Started
        </Link>
      </div>
    </main>
  );
}
