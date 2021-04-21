import "./App.css";
import QuoteBox from "./components/QuoteBox";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <div className="App">
      <Container>
        <QuoteBox />
      </Container>

      <footer id="footer">
        Taani Maama -{" "}
        <a
          href="https://github.com/TaaniBravo/Random-Quote-Machine"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Code
        </a>
      </footer>
    </div>
  );
};

// https://api.quotable.io/random

export default App;
