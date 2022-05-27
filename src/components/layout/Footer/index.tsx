import { Button, Container, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "components/common/index.css"

function Footer() {

    return (
        <Container fluid className="d-flex p-0 text-center">
            <Stack direction="vertical" className="">
                <div className="bg-secondary py-4">
                    <Button className="mx-1 p-0 common-btn-circle" variant="dark">
                        <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" />
                    </Button>
                    <Button className="mx-1 p-0 common-btn-circle" variant="dark">
                        <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
                    </Button>
                    <Button className="mx-1 p-0 common-btn-circle" variant="dark">
                        <FontAwesomeIcon icon={['fab', 'google']} size="2x" />
                    </Button>
                    <Button className="mx-1 p-0 common-btn-circle" variant="dark">
                        <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
                    </Button>
                    <Button className="mx-1 p-0 common-btn-circle" variant="dark">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
                    </Button>
                </div>
                <div className="bg-dark text-white py-2">
                    <div>
                        © 2022 Brand Name. All rights reserved.
                    </div>
                    <div>
                        Website design by Granto
                    </div>
                </div>
            </Stack>
        </Container>
    )
}

export default Footer;