import { Button, Carousel, Container } from 'react-bootstrap';
import image1 from 'assets/carousel/image1.jpg'
import image2 from 'assets/carousel/image2.jpg'
import image3 from 'assets/carousel/image3.jpg'
import image4 from 'assets/carousel/image4.jpg'
import './index.css';

function GraphicsCarousel() {

    return (
        <Container fluid className="graphics-carousel-container">
            <Carousel>
                <Carousel.Item>
                    <img    
                        src={image1}
                        alt="First slide"
                        className="graphics-shared-main-img"
                    />
                    <Carousel.Caption className="text-left">
                        <h1>First slide label</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button href="/about" size="lg">
                            Learn more
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={image2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className="text-center">
                        <h1>Second slide label</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button href="/service" size="lg">
                            Browse services
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={image3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className="text-right">
                        <h1>Third slide label</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button href="/about" size="lg">
                            Contact us
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={image4}
                        alt="Fourth slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default GraphicsCarousel;