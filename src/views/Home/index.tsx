import { Container, Tabs, Tab } from 'react-bootstrap';
import HomeCarousel from '../../components/content/home/HomeCarousel';
import HomeBanner from '../../components/content/home/HomeBanner';
import './index.css'

function Home() {
    return (
        <Container fluid className="shadow">
            <Tabs defaultActiveKey="carousel" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="carousel" title="Carousel">
                    <HomeCarousel />
                </Tab>
                <Tab eventKey="banner" title="Banner">
                    <HomeBanner />
                </Tab>
                <Tab eventKey="none" title="No Image">
                </Tab>
            </Tabs>
        </Container>
    )
}

export default Home;