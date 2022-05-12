import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Col, Container, Row, ThemeProvider } from 'react-bootstrap';
import Navigation from './components/layout/Navigation';
import Home from './views/Home';
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
                <Navigation />
                <Container fluid className='App-main-container'>
                    <Row>
                        <Col>
                            <Routes>
                                <Route path="/" element={<Home />} />
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
