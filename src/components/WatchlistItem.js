import React from 'react';
import '../styles/watchlistItem.css';

export const WatchlistItem = (props) => {
  return (
    <div className="watchlist-item-container">
      <span className="symbol">{props.stock.symbol}</span>
      <div className="price">
        <span>${props.stock.price}</span>
      </div>
    </div>
  );
};
