import { Container, Tabs, Tab } from 'react-bootstrap';
import { BannerW, CarouselW, FeaturetteW } from 'components/widgets';
import './index.css'

function Home() {
    return (
        <Container fluid className="p-0">
            <Container fluid className="p-0">
                <Tabs defaultActiveKey="carousel" id="uncontrolled-tab-example">
                    <Tab eventKey="carousel" title="Carousel">
                        <CarouselW />
                    </Tab>
                    <Tab eventKey="banner" title="Banner">
                        <BannerW />
                    </Tab>
                    <Tab eventKey="none" title="No Image">
                    </Tab>
                </Tabs>
            </Container>
            <Container fluid className="p-0 bg-light">
                <Tabs defaultActiveKey="tab1" id="uncontrolled-tab-example">
                    <Tab eventKey="tab1" title="Tab 1">
                        <FeaturetteW align="right" />
                        <FeaturetteW align="left" />
                    </Tab>
                </Tabs>
            </Container>
        </Container>
    )
}

export default Home;