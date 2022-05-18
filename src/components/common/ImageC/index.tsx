import {Image, ImageProps} from 'react-bootstrap';

interface PropsImageC extends ImageProps{
    small?: boolean;
    large?: boolean;
}

const largeStyle: React.CSSProperties = {
    height: '35rem',
    objectFit: 'cover'
}

const ImageC = ({large = false, ...props}:PropsImageC) => {

    if (large as boolean) {
        props.className = "d-block w-100";
        props.style = largeStyle;
    }

    return (
        <Image
            {...props}
        />
    )
}

export default ImageC;