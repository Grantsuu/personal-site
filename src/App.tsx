import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, Row, ThemeProvider } from 'react-bootstrap';
import { Footer, Navigation, ScrollToTopButton } from 'components/layout';
import { Contact, Home } from 'views';
import './App.css';

function App() {

    useEffect(() => {
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
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<div>About</div>} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </Row>
                    <Row>
                        <Footer />
                    </Row>
                    <ScrollToTopButton />
                </Container>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
