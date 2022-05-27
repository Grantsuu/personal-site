import { Container, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ContactFormW } from 'components/widgets';
import './index.css'

function Contact() {
    return (
        <Container fluid className="p-0 my-3">
            <Stack direction="vertical" className="text-center">
                <div className="">
                    <h1>Contact Us</h1>
                </div>
                <Stack direction="horizontal" className="p-2 w-50 mx-auto">
                    <div>
                        Email:
                        <Link
                            to='#'
                            onClick={(e) => {
                                window.open("mailto:YourEmailHere@website.com");
                                e.preventDefault();
                            }}
                            className="ms-1"
                        >
                            YourEmailHere@website.com
                        </Link>
                    </div>
                    <div className="ms-auto">Phone: +1 (888) 888-8888</div>
                </Stack>
                <hr className="w-50 mx-auto"></hr>
                <div>
                    <ContactFormW />
                </div>
            </Stack>
        </Container>
    )
}

export default Contact;