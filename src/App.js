import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Quoter from "./modules/quoter/Quoter.js";

function App() {
  return (
    <div className="App">
      <Quoter />
      <header className="App-footer">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="credits">
        <p>
          <a
            href="https://teban.co.ve"
            target="_blank"
            rel="noopener noreferrer"
          >
            © Estebmaister 2020
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
