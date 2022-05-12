import { Carousel, Container } from 'react-bootstrap';
import image1 from '../../../../assets/carousel/image1.jpg'
import image2 from '../../../../assets/carousel/image2.jpg'
import image3 from '../../../../assets/carousel/image3.jpg'
import image4 from '../../../../assets/carousel/image4.jpg'
import './index.css';

function HomeCarousel() {

    return (
        <Container fluid className="home-carousel-container">
            <Carousel>
                <Carousel.Item>
                    <img    
                        src={image1}
                        alt="First slide"
                    />
                    <div className="overlay-text-centered">
                        <h1><u><b>Brand Name</b></u></h1>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={image2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={image3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={image4}
                        alt="Fourth slide"
                    />
                    <div className="overlay-text-centered"><h1><u><b>Brand Name</b></u></h1></div>
                    <Carousel.Caption>
                        <h5>Fourth slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default HomeCarousel;