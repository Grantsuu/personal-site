import '../index.css';

interface PropsTextOverlayC extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    title?: string;
    subTitle?: string;
    element?: React.ReactElement;
}

const TextOverlayC = ({title, subTitle, element, ...props}: PropsTextOverlayC) => {

    // these attributes allow the text to be overlayed on the image
    let outerDivClass = "position-absolute d-block w-100";

    props.className += " " + outerDivClass;

    return (
        <div {...props}>
            <>
                <div className="display-3 shared-text-shadow">Brand Name</div>
                <div className="h4 common-text-shadow">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                {element}
            </>
        </div>
    )
}

export default TextOverlayC;