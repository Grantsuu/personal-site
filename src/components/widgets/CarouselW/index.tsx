import { Button, Carousel, Container } from 'react-bootstrap';
import image1 from 'assets/carousel/image1.jpg'
import image2 from 'assets/carousel/image2.jpg'
import image3 from 'assets/carousel/image3.jpg'
import { ImageC } from 'components/common';
import { routeNames } from 'routes';
import './index.css';

function CarouselW() {

    return (
        <Container fluid className="p-0">
            <Carousel>
                <Carousel.Item>
                    <ImageC
                        large
                        src={image1}
                        alt="slide 1"
                    />
                    <Carousel.Caption className="text-start">
                        <h1 className="display-3">First slide label</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button href={routeNames.ABOUT} size="lg">
                            Learn more
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ImageC
                        large
                        src={image2}
                        alt="slide 2"
                    />
                    <Carousel.Caption className="text-center">
                        <h1 className="display-3">Second slide label</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button href={routeNames.SERVICE.ONE} size="lg">
                            Browse services
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ImageC
                        large
                        src={image3}
                        alt="slide 3"
                    />
                    <Carousel.Caption className="text-end">
                        <h1 className="display-3">Third slide label</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button href={routeNames.ABOUT} size="lg">
                            Contact us
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ImageC
                        large
                        src="https://picsum.photos/1000"
                        alt="slide 4"
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default CarouselW;