import { Button, Container } from 'react-bootstrap';
import image1 from 'assets/carousel/image1.jpg';
import './index.css';

function GraphicsBanner() {
    return (
        <Container fluid className="position-relative p-0">
            <img
                src={image1}
                alt="Banner graphic"
                className="img-fluid d-block w-100 graphics-shared-main-img"
            />
            <div className="position-absolute d-block w-100 top-50 text-center text-light">
                <div className="display-3 shared-text-shadow">Brand Name</div>
                <div className="h4 shared-text-shadow">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <Button href="/about" size="lg">
                    Learn more
                </Button>
            </div>
        </Container>
    )
}

export  default GraphicsBanner;