import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import './ProductList.css';

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        name: 'Snake Plant',
        image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?auto=format&fit=crop&w=400&q=80',
        description: 'Removes toxins and releases oxygen at night.',
        cost: '$18',
      },
      {
        name: 'Spider Plant',
        image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=400&q=80',
        description: 'Easy to grow and great at purifying air.',
        cost: '$14',
      },
      {
        name: 'Peace Lily',
        image: 'https://images.unsplash.com/photo-1620127252536-03bdfcf6d5f0?auto=format&fit=crop&w=400&q=80',
        description: 'Elegant white blooms and strong air-cleaning power.',
        cost: '$22',
      },
      {
        name: 'Boston Fern',
        image: 'https://images.unsplash.com/photo-1585637071091-b45c3aac2d8b?auto=format&fit=crop&w=400&q=80',
        description: 'Lush, feathery fronds that humidify the air.',
        cost: '$16',
      },
      {
        name: 'Rubber Plant',
        image: 'https://images.unsplash.com/photo-1616500163246-742c76e1c14f?auto=format&fit=crop&w=400&q=80',
        description: 'Glossy leaves and excellent toxin removal.',
        cost: '$25',
      },
      {
        name: 'Areca Palm',
        image: 'https://images.unsplash.com/photo-1598880940371-c756e015e8c9?auto=format&fit=crop&w=400&q=80',
        description: 'A natural humidifier with feathery fronds.',
        cost: '$28',
      },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      {
        name: 'Lavender',
        image: 'https://images.unsplash.com/photo-1498091815776-d84e5c5f8850?auto=format&fit=crop&w=400&q=80',
        description: 'Calming fragrance known to help you relax.',
        cost: '$15',
      },
      {
        name: 'Jasmine',
        image: 'https://images.unsplash.com/photo-1591958911259-bee2173bdcc5?auto=format&fit=crop&w=400&q=80',
        description: 'Sweetly scented night-blooming flowers.',
        cost: '$19',
      },
      {
        name: 'Gardenia',
        image: 'https://images.unsplash.com/photo-1597055181300-e3877e942799?auto=format&fit=crop&w=400&q=80',
        description: 'Rich, creamy blossoms with a heavenly scent.',
        cost: '$24',
      },
      {
        name: 'Rosemary',
        image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=400&q=80',
        description: 'Woodsy herb fragrance, great for the kitchen.',
        cost: '$12',
      },
      {
        name: 'Mint',
        image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=400&q=80',
        description: 'Crisp, refreshing aroma and easy to grow.',
        cost: '$10',
      },
      {
        name: 'Eucalyptus',
        image: 'https://images.unsplash.com/photo-1587334207805-6e21b8e7c2fb?auto=format&fit=crop&w=400&q=80',
        description: 'Invigorating scent that clears the senses.',
        cost: '$20',
      },
    ],
  },
  {
    category: 'Insect Repellent Plants',
    plants: [
      {
        name: 'Citronella',
        image: 'https://images.unsplash.com/photo-1628520923312-5c3e3a3f1f3d?auto=format&fit=crop&w=400&q=80',
        description: 'Natural mosquito repellent for patios.',
        cost: '$17',
      },
      {
        name: 'Marigold',
        image: 'https://images.unsplash.com/photo-1597055181449-b3e4c1c1f9b3?auto=format&fit=crop&w=400&q=80',
        description: 'Bright blooms that keep pests away.',
        cost: '$9',
      },
      {
        name: 'Lemongrass',
        image: 'https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b1a?auto=format&fit=crop&w=400&q=80',
        description: 'Citrusy scent that deters mosquitoes.',
        cost: '$13',
      },
      {
        name: 'Basil',
        image: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=400&q=80',
        description: 'Culinary herb that also repels flies.',
        cost: '$11',
      },
      {
        name: 'Catnip',
        image: 'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?auto=format&fit=crop&w=400&q=80',
        description: 'Naturally repels mosquitoes and delights cats.',
        cost: '$12',
      },
      {
        name: 'Chrysanthemum',
        image: 'https://images.unsplash.com/photo-1572454591674-2739f30f2f92?auto=format&fit=crop&w=400&q=80',
        description: 'Contains natural compounds that repel insects.',
        cost: '$16',
      },
    ],
  },
];

function ProductList({ onCartClick, onAboutUsClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div className="product-list-page">
      <nav className="navbar">
        <div className="navbar-brand">
          <span onClick={(e) => { e.preventDefault(); }} className="brand-title">
            Paradise Nursery
          </span>
        </div>
        <div className="navbar-links">
          <a href="/" className="nav-link" onClick={(e) => e.preventDefault()}>
            Home
          </a>
          <a href="/plants" className="nav-link" onClick={(e) => e.preventDefault()}>
            Plants
          </a>
          <a href="/cart" className="nav-link cart-link" onClick={onCartClick}>
            <span className="cart-icon" role="img" aria-label="cart">🛒</span>
            <span className="cart-count">{totalCartItems}</span>
          </a>
        </div>
      </nav>

      <div className="product-list-header">
        <h1>Our Plant Collection</h1>
        <p>Browse our hand-picked houseplants, grouped by category.</p>
      </div>

      {plantsArray.map((categoryGroup) => (
        <div className="category-section" key={categoryGroup.category}>
          <h2 className="category-title">{categoryGroup.category}</h2>
          <div className="product-grid">
            {categoryGroup.plants.map((plant) => (
              <div className="product-card" key={plant.name}>
                <img src={plant.image} alt={plant.name} className="product-image" />
                <h3 className="product-name">{plant.name}</h3>
                <p className="product-description">{plant.description}</p>
                <p className="product-cost">{plant.cost}</p>
                <button
                  className="add-to-cart-button"
                  disabled={addedToCart[plant.name]}
                  onClick={() => handleAddToCart(plant)}
                >
                  {addedToCart[plant.name] ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
