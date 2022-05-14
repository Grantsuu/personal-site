import { Container, Row, Col } from 'react-bootstrap';
import image from '../../../../assets/text-image.jpeg';
import "./index.css"

interface TextImageSideProps {
    align: string
}

function TextImageSide({ align }: TextImageSideProps) {

    return (
        <Container className="p-5">
            <Row>
                <Col md={7} className="d-flex align-items-center">
                    <div>
                        <h1>Featurette header text</h1>
                        <h3>A meaningful caption</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </Col>
                <Col md={5} className="d-flex justify-content-center">
                    <img
                        src={image}
                        alt="Placeholder image"
                        width="400px"
                        height="400px"
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default TextImageSide;