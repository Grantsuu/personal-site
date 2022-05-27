import { Button, Container, Form } from 'react-bootstrap';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css';

function ContactFormW() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container className="p-3 w-50 bg-light text-start">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label><FontAwesomeIcon icon={['far', 'user']} size="lg" className="me-2"/>Full Name*</Form.Label>
                    <Form.Control required type="text" placeholder="Enter full name" />
                    <Form.Control.Feedback type="invalid">
                        Please enter your name.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label><FontAwesomeIcon icon={['far', 'envelope']} size="lg" className="me-2"/>Email address*</Form.Label>
                    <Form.Control required type="email" placeholder="Enter email address" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    <Form.Control.Feedback type="invalid">
                        Please enter your email address.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label><FontAwesomeIcon icon={['fas', 'phone']} size="lg" className="me-2"/>Phone</Form.Label>
                    <Form.Control type="phone" placeholder="Enter phone number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Message*</Form.Label>
                    <Form.Control required as="textarea" placeholder="Enter your message" style={{ height: '9rem' }} />
                    <Form.Control.Feedback type="invalid">
                        Please enter your message.
                    </Form.Control.Feedback>
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default ContactFormW;