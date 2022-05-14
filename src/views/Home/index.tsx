import { Container, Tabs, Tab } from 'react-bootstrap';
import GraphicsCarousel from '../../components/content/graphics/GraphicsCarousel';
import GraphicsBanner from '../../components/content/graphics/GraphicsBanner';
import TextImageSide from '../../components/content/text/TextImageSide';
import './index.css'

function Home() {
    return (
        <Container fluid className="shadow p-0">
            <Container fluid className="p-0">
                <Tabs defaultActiveKey="carousel" id="uncontrolled-tab-example" className="">
                    <Tab eventKey="carousel" title="Carousel">
                        <GraphicsCarousel />
                    </Tab>
                    <Tab eventKey="banner" title="Banner">
                        <GraphicsBanner />
                    </Tab>
                    <Tab eventKey="none" title="No Image">
                    </Tab>
                </Tabs>
            </Container>
            <Container fluid className="p-0 bg-white">
                <Tabs defaultActiveKey="tab1" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="tab1" title="Tab 1">
                        <TextImageSide align="left"/>
                    </Tab>
                </Tabs>
            </Container>
        </Container>
    )
}

export default Home;