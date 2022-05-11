import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Col, Container, Row, ThemeProvider } from 'react-bootstrap';
import Header from './components/layout/Header';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider
                breakpoints={['lg', 'md', 'sm', 'xs']}
            >
                <Container fluid className='App-main-container'>
                    <Row>
                        <Col>
                            <Header />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Routes>
                                <Route path="/" element={<div>Home</div>} />
                                <Route path="/content" element={<div>Content</div>} />
                            </Routes>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div>Footer</div>
                        </Col>
                    </Row>
                </Container>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
