import "./App.css";
import QuoteBox from "./components/QuoteBox";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <div className="App">
      <Container>
        <QuoteBox />
      </Container>
    </div>
  );
};

// https://api.quotable.io/random

export default App;
