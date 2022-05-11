import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../Logo';
import './index.css';

function Header() {
    return (
        <Container fluid className='Header-container'>
            <Row>
                <Col className='Header-logo' md={2}>
                    <Logo />
                </Col>
                <Col>
                    Navigation
                </Col>
                <Col md={2}>
                    User
                </Col>
            </Row>
        </Container>
    )
}

export default Header;