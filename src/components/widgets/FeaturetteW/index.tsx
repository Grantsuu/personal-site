import { Container, Stack } from 'react-bootstrap';
import { ImageC } from 'components/common';
import "./index.css"

type FeaturetteWAlign = "left" | "right";

interface PropsFeaturetteW {
    align: FeaturetteWAlign
}

/**
 * @description A block of text accompanied by a square image on the side
 * @param align determines which side the image is on 
 */
function FeaturetteW({ align }: PropsFeaturetteW) {

    let leftContent = <></>;
    let rightContent = <></>;

    const textContent = <div>
        <h1 className="display-4">Featurette header text</h1>
        <h3>A meaningful caption</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>

    const imageContent = <ImageC
        rounded
        src="https://picsum.photos/500"
        alt="image"
        width="400rem"
        height="400rem"
    />

    function setAlign() {
        switch (align) {
            case "left":
                leftContent = imageContent;
                rightContent = textContent;
                break;
            case "right":
                leftContent = textContent;
                rightContent = imageContent;
                break;
            default:
                leftContent = textContent;
                rightContent = imageContent;
        }
    }

    setAlign();

    return (
        <Container fluid className="d-block p-5">
            <Stack direction="horizontal" gap={5} className="mx-5">
                <div>
                    {leftContent}
                </div>
                <div>
                    {rightContent}
                </div>
                </Stack>
        </Container>
    )
}

export default FeaturetteW;