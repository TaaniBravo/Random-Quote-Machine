import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./style.css";

const QuoteBox = () => {
  const [state, setState] = useState({
    content: "",
    author: ""
  });

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(data => {
        setState({
          ...state,
          content: data.content,
          author: data.author
        });
      });
  }, []);

  const handleClick = () => {
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(data => {
        setState({
          ...state,
          content: data.content,
          author: data.author
        });
      });
  };

  return (
    <div id="quote-box">
      <p id="text">
        <span id="quote-symbol">''</span>
        {state.content}
      </p>
      <p id="author">- {state.author}</p>
      <div className="button-container">
        <a
          href={`https://twitter.com/intent/tweet?text=${state.content}%0D%0A-${state.author}`}
          id="tweet-quote"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-twitter-square"></i>
        </a>
        <a
          href="https://twitter.com/intent/tweet"
          id="tweet-quote"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-tumblr-square"></i>
        </a>
        <Button id="new-quote" onClick={handleClick}>
          New Quote
        </Button>
      </div>
    </div>
  );
};

export default QuoteBox;
