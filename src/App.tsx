import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Col, Container, Row, ThemeProvider } from 'react-bootstrap';
import Navigation from 'components/layout/Navigation';
import Home from 'views/Home';
import './App.css';

function App() {
    
    useEffect(()=>{
        document.title = "Brand Name";
    }, [])

    return (
        <BrowserRouter>
            <ThemeProvider
                breakpoints={['lg', 'md', 'sm', 'xs']}
            >
                <Container fluid>
                    <Row>
                        <Navigation />
                    </Row>
                    <Row>
                        <Col className='p-0'>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<div>About</div>} />
                                <Route path="/contact" element={<div>Contact</div>} />
                            </Routes>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='p-0'>
                            <div>Footer</div>
                        </Col>
                    </Row>
                </Container>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
