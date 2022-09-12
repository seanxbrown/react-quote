import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";





const Search = ({ getQuoteFromSpecificPerson, getRandomQuote }) => {
    return (
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
    )
}

export default Search