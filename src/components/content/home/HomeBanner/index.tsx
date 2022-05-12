import { Container } from 'react-bootstrap';
import image1 from '../../../../assets/carousel/image1.jpg'
import './index.css'

function HomeBanner() {
    return (
        <Container fluid className="home-banner-container">
            <img
                src={image1}
                alt="Home banner"
            />
            <div className="overlay-text-centered">
                <h1><u><b>Brand Name</b></u></h1>
            </div>
        </Container>
    )
}

export  default HomeBanner;