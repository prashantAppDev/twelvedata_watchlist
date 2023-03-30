import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/watchlist.css';
import { WatchlistItem } from './WatchlistItem';

export const Watchlist = () => {
  const state = useSelector((state) => state.watchlistReducer);
  return (
    <>
      <div className="watchlist-container">
        <h2 className="watchlist-heading">Watchlist</h2>
        {state.map((stock) => (
          <WatchlistItem key={stock.symbol} stock={stock} />
        ))}
      </div>
    </>
  );
};
