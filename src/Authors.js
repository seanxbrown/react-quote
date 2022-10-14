import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import AuthorCard from "./AuthorCard";
import Alert from "react-bootstrap/Alert";


const Authors = ({ authors }) => {

    return authors.length === 0 ? 
        <Alert variant="danger">No authors available. Please refresh or try again later</Alert> 
        : <Container className="mt-5">
            <Row md={4} className="g-2" data-testid="author-row">
                <AuthorCard authors={authors} />
            </Row>
        </Container>   
}

export default Authors