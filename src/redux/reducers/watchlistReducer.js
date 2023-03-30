const initialState = [
  { symbol: 'AAPL', price: 0, volume: 0 },
  { symbol: 'INFY', price: 0, volume: 0 },
  { symbol: 'QQQ', price: 0, volume: 0 },
  { symbol: 'MQ1', price: 0, volume: 0 },
  { symbol: 'IXIC', price: 0, volume: 0 },
  { symbol: 'VFIAX', price: 0, volume: 0 },
  { symbol: 'TRP', price: 0, volume: 0 },
  { symbol: 'SVI', price: 0, volume: 0 },
  { symbol: 'MEDV', price: 0, volume: 0 },
];

export const watchlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MESSAGE_RECEIVED':
      const index = state.findIndex(
        (item) => item.symbol === action.payload.symbol
      );
      let newState = [...state];
      newState[index].price = action.payload.price;
      newState[index].volume = action.payload.volume;
      return newState;
    default:
      return state;
  }
};
