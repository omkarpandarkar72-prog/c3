import { Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList.jsx';
import CartItem from './components/CartItem/CartItem.jsx';
import AboutUs from './components/AboutUs.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}

function Landing() {
  return (
    <main className="landing">
      <div className="hero">
        <p className="eyebrow">Bring nature home</p>
        <h1>Paradise Nursery</h1>
        <p>Beautiful houseplants selected to make every room feel alive.</p>
        <Link className="primary-btn" to="/plants">Get Started</Link>
      </div>
    </main>
  );
}