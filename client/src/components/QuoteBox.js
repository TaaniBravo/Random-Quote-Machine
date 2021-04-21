import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

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

  return (
    <div id="quote-box">
      <p>{state.content}</p>
      <p>{state.author}</p>
      <i class="fab fa-tumblr-square"></i>
      <i class="fab fa-twitter-square"></i>
      <Button>New Quote</Button>
    </div>
  );
};

export default QuoteBox;
