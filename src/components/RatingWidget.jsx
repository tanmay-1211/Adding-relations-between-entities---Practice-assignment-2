import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './RatingWidget.css';

function RatingWidget({ productId, onRatingSubmit }) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = () => {
    if (rating < 1 || rating > 5) {
      alert("Please select a rating between 1 and 5.");
      return;
    }
    onRatingSubmit(productId, rating);
    setRating(0);
    setHoveredRating(0);
  };

  return (
    <div className="rating-widget">
      {[1, 2, 3, 4, 5].map(star => (
        <span
          key={star}
          className={`star ${star <= (hoveredRating || rating) ? 'filled' : ''}`}
          onMouseEnter={() => setHoveredRating(star)}
          onMouseLeave={() => setHoveredRating(0)}
          onClick={() => setRating(star)}
        >
          ★
        </span>
      ))}
      <br />
      <button onClick={handleSubmit}>Submit Rating</button>
    </div>
  );
}

RatingWidget.propTypes = {
  productId: PropTypes.number.isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default RatingWidget;