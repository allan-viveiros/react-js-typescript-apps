import Values from "values.js";
import ColorForm from "./ColorForm";
import ColorList from "./ColorList";
import { useState } from "react";
import { toast } from "react-toastify";

const ColorGeneratorApp = () => {
    const [colorShades, setColorShades] = useState(new Values("#f58566").all(10));

    const handleColorSubmit = (e, color) => {
        e.preventDefault();

        try {
            const newColor = new Values(color).all(10);
            setColorShades(newColor);            
        }
        catch (error) {
            toast.error(error.message);
        }        
    }

    return (
        <section className="color-section-wrapper">
            <h2>Color Generator App</h2>

            <ColorForm handleColorSubmit={handleColorSubmit} />
            <ColorList colorShades={colorShades} />
        </section>
    )
}

export default ColorGeneratorApp;