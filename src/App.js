import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/App.css";
import {Header} from "./components/Header.js";
import {DisplayQuote} from "./components/DisplayQuote.js";
import {SavedQuotes} from "./components/SavedQuotes.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ButtonGroup from "react-bootstrap/ButtonGroup";


function App() {
  const [quotesList, setQuotesList] = useState([]);
  const [currentQuote, setCurrentQuote] = useState({});

  async function getRandomQuote() {
    const response = await fetch("https://api.quotable.io/random", {mode: "cors"})
    const quote = await response.json();
    setCurrentQuote(quote)
  }

  async function getQuoteFromSpecificPerson(event) {
    event.preventDefault();
    const authorName = document.querySelector("#authorInput").value;
    const response = await fetch(`https://api.quotable.io/random?author=${authorName}`, {mode: "cors"})
    const quote = await response.json();
    setCurrentQuote(quote);
  }

  function saveQuote() {

    //Prevents saving when no author is selected

    if (!currentQuote.author) {return}

    //Prevents multiple identical quotes being saved

    for (let i = 0; i < quotesList.length; i++) {
      if (currentQuote._id === quotesList[i]._id) {
        alert("Match")
        return
      }
    }

    setQuotesList(quotesList.concat(currentQuote))
  }

  function removeQuote(event) {
    setQuotesList([...quotesList].filter(quote => {
      return quote._id !== event.target.parentElement.id
    }))

  }

  return (
    <Container fluid className="App">
      <Header></Header>
      <Form className="mt-1">
        <Form.Group>
          <Form.Label>Search for a famous figure:</Form.Label>
          <Form.Control id="authorInput" type="text" placeholder="e.g. Albert Einstein"></Form.Control>
        </Form.Group>
        <ButtonGroup className="d-flex">
          <Button type="submit" onClick={getQuoteFromSpecificPerson}>Quote Search</Button>
          <Button type="button" onClick={getRandomQuote}>Random Quote</Button>
        </ButtonGroup>
        
      </Form>
      <DisplayQuote author={currentQuote.author} quote={currentQuote.content} tags={currentQuote.tags} id={currentQuote._id} onSave={saveQuote}></DisplayQuote>
      <SavedQuotes listOfSavedQuotes={quotesList} removeQuote={removeQuote}></SavedQuotes>
    </Container>
  );
}

export default App;
