import React from 'react';
import PropTypes from 'prop-types';
import RatingWidget from './RatingWidget';
import './ProductCard.css';

function ProductCard({ product, onRatingSubmit }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Average Rating: {product.avgRating.toFixed(1)} ⭐</p>
      <RatingWidget
        productId={product.id}
        onRatingSubmit={onRatingSubmit}
      />
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default ProductCard;