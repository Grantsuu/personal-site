import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from 'assets/logo.jpeg'


function Navigation() {
    return (
        <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">
                <img
                    src={logo}
                    alt="Brand name logo"
                    width="50rem"
                    className="d-inline-block align-center"
                />{' '}
                Brand Name
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <NavDropdown title="Services" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link>Register</Nav.Link>
                    <Nav.Link>Sign-In</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;