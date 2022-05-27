import { Button, Container } from 'react-bootstrap';
import { ImageC, TextOverlayC } from 'components/common';
import { routeNames } from 'routes';
import './index.css';

function BannerW() {
    return (
        <Container fluid className="position-relative p-0">
            <ImageC
                fluid
                large
                src="https://picsum.photos/1000"
                alt="banner"
            />
            <TextOverlayC
                title="Brand Name"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                className="top-50 text-center text-light"
                element={<Button href={routeNames.ABOUT} size="lg">Learn more</Button>}
            />
        </Container>
    )
}

export default BannerW;