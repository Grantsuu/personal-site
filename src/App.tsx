import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container, Row, ThemeProvider } from 'react-bootstrap';
import { Footer, Navigation, ScrollToTopButton } from 'components/layout';
import { Contact, Home } from 'views';

import './App.css';

function App() {

    useEffect(() => {
        document.title = "Brand Name";
    }, [])

    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        >
            <Container fluid className="p-0">
                <Row className="m-0">
                    <Navigation />
                </Row>
                <Row className="m-0">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<div>About</div>} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Row>
                <Row className="m-0">
                    <Footer />
                </Row>
                <ScrollToTopButton />
            </Container>
        </ThemeProvider>
    );
}

export default App;
