import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom"

const NavbarComponent = () => {

    return (
        <Navbar expand="lg" id="navbarComponent" className="border-bottom border-light">
            <Container>
                <Link className="navbar-brand" to="/react-quotes"> Inspiration Bank </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Link className="nav-link" to="/react-quotes/authors">Popular Authors</Link>
                    <Link className="nav-link" to="/react-quotes/savedquotes">Saved Quotes</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavbarComponent