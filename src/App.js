import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/App.css";
import { SavedQuotes } from "./components/SavedQuotes.js";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Search from "./Search";
import Authors from "./Authors";
import Footer from "./components/Footer";

function App() {
  const [quotesList, setQuotesList] = useState([]);
  const [currentQuote, setCurrentQuote] = useState({});
  const [warningMesage, setWarningMessage] = useState("");
  const [displayWarningBox, setDisplayWarningBox] = useState(false);
  const [authors, setAuthors] = useState([]);

  async function getRandomQuote() {
    const response = await fetch("https://api.quotable.io/random", {mode: "cors"});
    const quote = await response.json();
    setCurrentQuote(quote);
  }

  async function getQuoteFromSpecificPerson(event) {
    event.preventDefault();
    const authorName = document.querySelector("#authorInput").value;

    //Using this search without entering a name is equivalent to a random search. This prevents that redundancy from occurring.
    if (!authorName) {
      setWarningMessage("Please enter a name to use this search, or try a random search");
      setDisplayWarningBox(true);
      return
    }

    const response = await fetch(`https://api.quotable.io/random?author=${authorName}`, {mode: "cors"});
    const quote = await response.json();

    if (quote.statusCode === 404) {
      setWarningMessage("No quotes found for that person.");
      setDisplayWarningBox(true);
      return
    } else {
      setCurrentQuote(quote); 
    }
  }

  function saveQuote() {
    //Prevents saving when no author is selected
    if (!currentQuote.author) {
      return
    }

    //Prevents multiple identical quotes being saved
    for (let i = 0; i < quotesList.length; i++) {
      if (currentQuote._id === quotesList[i]._id) {
        setWarningMessage("Quote already saved.");
        setDisplayWarningBox(true);
        return
      }
    }
    const newSavedQuotesList = [...quotesList].concat(currentQuote);
    saveToLocalStorage(newSavedQuotesList);
    
  }

  function saveToLocalStorage(newSavedQuotesList) {
    localStorage.setItem("quotesInLocalStorage", JSON.stringify(newSavedQuotesList));
    getFromLocalStorage();
  }

  function getFromLocalStorage() {
    const quotesFromLocalStorage = JSON.parse( localStorage.getItem("quotesInLocalStorage") );
    setQuotesList(quotesFromLocalStorage);
    
  }

  function removeQuote(event) {
    const filteredQuotes = [...quotesList].filter(quote => {
      return quote._id !== event.target.parentElement.id
    });
    saveToLocalStorage(filteredQuotes);
  }

  function closeWarning() {
    setDisplayWarningBox(false);    
  }

  useEffect(() => {
    const quotesFromLocalStorage = JSON.parse( localStorage.getItem("quotesInLocalStorage") );
    if (quotesFromLocalStorage) {
      setQuotesList(quotesFromLocalStorage);
    }
  }, [])

  useEffect (() => {

    //Function to get all authors from API. Authors used to populate datalist and author section
    async function getAllAuthors() {
      const response = await fetch("https://quotable.io/authors?sortBy=quoteCount&order=desc&limit=150", {mode: "cors"});
      const arrayOfAuthors = await response.json();
      arrayOfAuthors.results.sort((a, b) => a["name"] > b["name"])
      setAuthors(arrayOfAuthors.results)
    }

    getAllAuthors()
  }, [])

  return (
    <BrowserRouter>
        <Container fluid className="App">
        <NavbarComponent></NavbarComponent>
        <Routes>
        <Route path="/react-quotes" element={<Search authors={authors} closeWarning={closeWarning} saveQuote={saveQuote} currentQuote={currentQuote} displayWarningBox={displayWarningBox} warningMesage={warningMesage} getRandomQuote={getRandomQuote} getQuoteFromSpecificPerson={getQuoteFromSpecificPerson}></Search>}></Route>
        <Route path="/react-quotes/authors" element={<Authors authors={authors}></Authors>}></Route>
        <Route path="/react-quotes/savedquotes" element={<SavedQuotes listOfSavedQuotes={quotesList} removeQuote={removeQuote}></SavedQuotes>}></Route>
        </Routes>
        <Footer></Footer>
      </Container>
    </BrowserRouter>

  );
}

export default App;
