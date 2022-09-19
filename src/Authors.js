import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import AuthorCard from "./AuthorCard";


const Authors = ({ authors }) => {
    return (
        <Container className="mt-5">
            <Row md={4} className="g-2" data-testid="author-row">
                <AuthorCard authors={authors}></AuthorCard>
            </Row>
        </Container>
    )
}

export default Authors