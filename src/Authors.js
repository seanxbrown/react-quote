import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import AuthorCard from "./AuthorCard"


const Authors = ({ authors }) => {
    return (
        <Container className="mt-5">
            <Row md={4} className="g-2">
                <AuthorCard authors={authors}></AuthorCard>
            </Row>
            <a href="#navbarComponent" className="my-5">Return to top</a>
        </Container>
    )
}

export default Authors