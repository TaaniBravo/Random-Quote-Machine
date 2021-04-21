import QuoteBox from "./components/QuoteBox";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <main className="App">
      <Container>
        <QuoteBox />
      </Container>
    </main>
  );
};

// https://api.quotable.io/random

export default App;
