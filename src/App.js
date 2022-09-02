import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/App.css";
import {Header} from "./components/Header.js";
import {DisplayQuote} from "./components/DisplayQuote.js";
import {SavedQuotes} from "./components/SavedQuotes.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function App() {

  const [quotesList, setQuotesList] = useState([]);
  const [currentQuote, setCurrentQuote] = useState({});

  async function getRandomQuote() {
    const response = await fetch("https://api.quotable.io/random", {mode: "cors"})
    const quote = await response.json();
    setCurrentQuote(quote)
    console.log(currentQuote)

  }

  return (
    <div className="App">
      <Header></Header>
      <Form>
        <Form.Group>
          <Form.Label>Search for an Author</Form.Label>
          <Form.Control type="text" placeholder="e.g. Albert Einstein"></Form.Control>
        </Form.Group>
        <Button type="submit">Search</Button>
        <Button type="button" onClick={getRandomQuote}>Random Quote</Button>

      </Form>
      <DisplayQuote author={currentQuote.author} quote={currentQuote.content} tags={currentQuote.tags} id={currentQuote._id}></DisplayQuote>
      <SavedQuotes></SavedQuotes>

      
    </div>
  );
}

export default App;
