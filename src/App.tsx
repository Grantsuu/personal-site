import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container, Row, ThemeProvider } from 'react-bootstrap';
import { Footer, Navigation, ScrollToTopButton } from 'components/layout';
import { Contact, Home } from 'views';
import { routeNames } from 'routes';
import './App.css';

function App() {

    useEffect(() => {
        document.title = "Brand Name";
    }, [])

    return (
        <ThemeProvider
            breakpoints={['lg', 'md', 'sm', 'xs']}
        >
            <Container fluid>
                <Row>
                    <Navigation />
                </Row>
                <Row>
                    <Routes>
                        <Route path={routeNames.HOME} element={<Home />} />
                        <Route path={routeNames.ABOUT} element={<div>About</div>} />
                        <Route path={routeNames.CONTACT} element={<Contact />} />
                    </Routes>
                </Row>
                <Row>
                    <Footer />
                </Row>
                <ScrollToTopButton />
            </Container>
        </ThemeProvider>
    );
}

export default App;
