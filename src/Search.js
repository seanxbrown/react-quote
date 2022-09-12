import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {DisplayQuote} from "./components/DisplayQuote.js";
import {SavedQuotes} from "./components/SavedQuotes.js";
import {WarningBox} from "./components/WarningBox.js"




const Search = ({ getQuoteFromSpecificPerson, getRandomQuote, currentQuote, displayWarningBox, warningMesage, closeWarning, saveQuote }) => {
    return (
        <>
        <Form className="mt-1">
            <Form.Group as={Row}>
            <Col md={7} className="mx-auto">
            <Form.Control id="authorInput" className="mt-3 p-3" type="text" placeholder="Search for a famous figure e.g. Albert Einstein"></Form.Control>
            </Col>
            </Form.Group>
            <ButtonGroup className="d-flex mx-auto my-2 g-4">
            <Button type="submit" onClick={getQuoteFromSpecificPerson}>Quote Search</Button>
            <Button type="button" onClick={getRandomQuote}>Random Quote</Button>
            </ButtonGroup>
        </Form>
        {displayWarningBox && <WarningBox message={warningMesage} closeWarning={closeWarning}></WarningBox> }
        {currentQuote.length > 0 && <DisplayQuote author={currentQuote.author} quote={currentQuote.content} tags={currentQuote.tags} id={currentQuote._id} onSave={saveQuote}></DisplayQuote>}
        </>
        
    )
}

export default Search