import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ScrollToTopButton() {
    const [visible, setVisible] = useState(false)

    function toggleVisible() {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 0) {
            setVisible(true)
        }
        else if (scrolled <= 1) {
            setVisible(false)
        }
    };

    function scrollToTop() {
        console.log("hello");
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    window.addEventListener('scroll', toggleVisible);

    return (
        <>
            {visible &&
                <Button onClick={scrollToTop} className="position-fixed bottom-0 end-0 m-2 opacity-75" variant="dark" size="lg">
                    <FontAwesomeIcon icon="circle-up" size="2x" />
                </Button>}
        </>
    )
}

export default ScrollToTopButton;