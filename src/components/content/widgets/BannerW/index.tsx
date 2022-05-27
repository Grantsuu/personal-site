import { Button, Container } from 'react-bootstrap';
import {ImageC, TextOverlayC} from 'components/common';
import image1 from 'assets/carousel/image1.jpg';
import './index.css';

function BannerW() {
    return (
        <Container fluid className="position-relative p-0">
            <ImageC
                fluid
                large
                src={image1}
                alt="banner"
            />
            {/* <div className="position-absolute d-block w-100 top-50 text-center text-light">
                <div className="display-3 shared-text-shadow">Brand Name</div>
                <div className="h4 shared-text-shadow">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <Button href="/about" size="lg">
                    Learn more
                </Button>
            </div> */}
            <TextOverlayC
                className="top-50 text-center text-light"
                element={<Button href="/about" size="lg">Learn more</Button>}
            />
        </Container>
    )
}

export  default BannerW;