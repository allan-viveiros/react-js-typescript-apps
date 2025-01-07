/* eslint-disable react/prop-types */
import { toast } from "react-toastify";

const SingleColor = ({color, index}) => {
    const { hex, weight } = color;

    const saveToClipboard = async () => {
        if (navigator.clipboard) {
            try {
                await navigator.clipboard.writeText(`#${hex}`);
                toast.success("Color copied to clipboard");
            }
            catch (error) {
                toast.error(error.message);
            }
        }
        else {
            toast.error("The Clipboard access is not available!");
        }
    }

    return (
        <article className={index > 10 ? "color color-light" : "color"} style={{backgroundColor: `#${hex}`}} onClick={saveToClipboard}>
            <p className="percent-value">{weight}%</p>
            <p className="color-value" style={{textTransform: "uppercase"}}>#{hex}</p>    
        </article>
    )
}

export default SingleColor;