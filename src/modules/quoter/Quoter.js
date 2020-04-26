import React from "react";
import "./Quoter.css";
import mQuotes from "./quotes.json";

export default class Quoter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: 0,
      quotes: mQuotes,
    };
    this.changeQuote = this.changeQuote.bind(this);
  }
  changeQuote = () =>
    this.setState(() => ({
      currentQuote: Math.floor(Math.random() * this.state.quotes.length),
    }));
  render() {
    return (
      <div className="app">
        <div className="container" id="quote-box">
          <h1>Movies Quote Machine</h1>
          <div className="text">
            <p id="text">
              <i className="quoter-left"></i>
              {this.state.quotes[this.state.currentQuote].phrase}
              {/*<i className="quoter-right"></i>*/}
            </p>
          </div>
          <p id="author">
            - {this.state.quotes[this.state.currentQuote].movie}
            {", "}
            {this.state.quotes[this.state.currentQuote].year}
          </p>

          <br />
          <div className="buttons">
            <button onClick={this.changeQuote} id="new-quote">
              New quote
            </button>
            <a
              className="btn"
              id="tweet-quote"
              href={`https://twitter.com/intent/tweet?text=%22${
                this.state.quotes[this.state.currentQuote].phrase
              }%22%20-${
                this.state.quotes[this.state.currentQuote].movie
              }&via=estebmaister&hashtags=movieFan`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="tweet"></i>
              <span className="label">Tweet</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
