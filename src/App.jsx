import React, { useState } from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';

function App() {
  // 'landing' | 'products' | 'cart'
  const [currentPage, setCurrentPage] = useState('landing');
  const [showAboutUs, setShowAboutUs] = useState(false);

  const handleGetStartedClick = () => {
    setCurrentPage('products');
  };

  const handleAboutUsClick = (e) => {
    e.preventDefault();
    setShowAboutUs(true);
  };

  const handleContinueShopping = (e) => {
    if (e) e.preventDefault();
    setCurrentPage('products');
  };

  const handleCartClick = (e) => {
    if (e) e.preventDefault();
    setCurrentPage('cart');
  };

  if (showAboutUs) {
    return <AboutUs onBack={() => setShowAboutUs(false)} />;
  }

  return (
    <div>
      {currentPage === 'landing' && (
        <div className="landing-page">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <h2>Where Green Meets Serenity</h2>
            <p>
              Welcome to Paradise Nursery, your trusted destination for premium
              houseplants. We are passionate about connecting people with
              nature by delivering healthy, beautiful plants that purify your
              air, soothe your senses, and bring life to any space.
            </p>
            <button className="get-started-button" onClick={handleGetStartedClick}>
              Get Started
            </button>
            <div style={{ marginTop: '1.5rem' }}>
              <a
                href="/about"
                onClick={handleAboutUsClick}
                style={{ color: '#ffffff', textDecoration: 'underline', cursor: 'pointer' }}
              >
                Learn more about us
              </a>
            </div>
          </div>
        </div>
      )}

      {currentPage === 'products' && (
        <ProductList onCartClick={handleCartClick} onAboutUsClick={handleAboutUsClick} />
      )}

      {currentPage === 'cart' && (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default App;
