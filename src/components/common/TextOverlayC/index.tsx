import '../index.css';

interface PropsTextOverlayC extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title?: string;
    subtitle?: string;
    element?: React.ReactElement;
}

const TextOverlayC = ({ title, subtitle, element, ...props }: PropsTextOverlayC) => {

    // these attributes allow the text to be overlayed on the image
    let outerDivClass = "position-absolute d-block w-100";

    props.className += " " + outerDivClass;

    return (
        <div {...props}>
            <>
                <h1 className="display-2 common-text-shadow">{title}</h1>
                <h3 className="common-text-shadow">{subtitle}</h3>
                {element}
            </>
        </div>
    )
}

export default TextOverlayC;