import { Button, Container } from 'react-bootstrap';
import image1 from 'assets/carousel/image1.jpg'
import './index.css'

function GraphicsBanner() {
    return (
        <Container fluid className="graphics-banner-container">
            <img
                src={image1}
                alt="Banner graphic"
            />
            <div className="overlay-text-centered">
                <h1>Brand Name</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Button href="/about" size="lg">
                    Learn more
                </Button>
            </div>
        </Container>
    )
}

export  default GraphicsBanner;