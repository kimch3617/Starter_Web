import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState(null);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChange = (event) => {
    setDollar(event.target.value);
  };

  const onSelect = (event) => {
    const coin = coins.find((coin) => coin.id === event.target.value)
    setSelectedCoin(coin);
    console.log(coin);
  };

  return (
    <div>
      <h1>The Coins! {coins.length}</h1>
      <input type="number" value={dollar} onChange={onChange} />
      <h2>
        Available Coin: ${dollar}, {selectedCoin ? dollar / selectedCoin.quotes.USD.price : ""}
      </h2>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onSelect} value={selectedCoin ? selectedCoin.id : ""}>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.id}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
