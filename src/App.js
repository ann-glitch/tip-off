import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [tip, setTip] = useState("");

  useEffect(() => {
    fetchTip();
  }, []);

  const fetchTip = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        const { advice } = res.data.slip;
        setTip(advice);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="app">
      <div className="card">
        <div className="heading">{tip}</div>
        <button className="button" onClick={fetchTip}>
          <span>TIP ME OFF...</span>
        </button>
      </div>
    </div>
  );
};

export default App;
