import { Col, Container, Stack, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ContactFormW } from 'components/widgets';
import './index.css'

function Contact() {
    return (
        <Container fluid className="p-0 my-3">
            <div className="text-center">
                <h1>Contact Us</h1>
            </div>
            <Stack direction="vertical" className="text-center">
                <div>+1 (888) 888-8888</div>
                <div>
                    <Link
                        to='#'
                        onClick={(e) => {
                            window.open("mailto:YourEmailHere@website.com");
                            e.preventDefault();
                        }}
                    >
                        YourEmailHere@website.com
                    </Link>
                </div>
            </Stack>
            <Row className="m-0 justify-content-center">
                <Col xxs={12} xs={12} sm={8} md={8} lg={6} xl={6} xxl={6}>
                    <div>
                        <hr className="mx-auto"></hr>
                        <ContactFormW />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;