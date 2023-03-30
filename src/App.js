import './App.css';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { watchlistPriceUpdateAction } from './redux/actions/watchlistAction';
import { Watchlist } from './components/Watchlist';
import axios from 'axios';

const client = new W3CWebSocket(
  `wss://ws.twelvedata.com/v1/quotes/price?apikey=${process.env.REACT_APP_API_KEY}`
);

const request = {
  action: 'subscribe',
  params: {
    symbols: 'AAPL,INFY,QQQ,MQ1,IXIC,VFIAX,TRP,SVI,MEDV',
  },
};

function App() {
  const dispatch = useDispatch();
  const watchListSymbols = [
    'AAPL',
    'INFY',
    'QQQ',
    'MQ1',
    'IXIC',
    'VFIAX',
    'TRP',
    'SVI',
    'MEDV',
  ];

  useEffect(() => {
    watchListSymbols.forEach((symbol) => {
      axios
        .get(
          `https://api.twelvedata.com/price?symbol=${symbol}&apikey=${process.env.REACT_APP_API_KEY}`
        )
        .then((response) => {
          const payload = {
            symbol: 'AAPL',
            price: response.data.price,
          };
          dispatch(watchlistPriceUpdateAction(payload));
        });
    });

    client.onopen = () => {
      client.send(JSON.stringify(request));
    };

    client.onmessage = (message) => {
      let messageJson = JSON.parse(message.data);
      if (messageJson.event === 'price') {
        dispatch(watchlistPriceUpdateAction(messageJson));
      }
    };
  }, []);

  return (
    <div className="App">
      <Watchlist />
    </div>
  );
}

export default App;
