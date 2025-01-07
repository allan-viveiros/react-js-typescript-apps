/* eslint-disable react/prop-types */
import { useState } from "react";

const ColorForm = ({handleColorSubmit}) => {
    const [color, setColor] = useState("");
    
    return (
        <div className="color-container">
            <form className="color-form" onSubmit={(e) => handleColorSubmit(e, color)}>
                <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
                <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />

                <button type="submit" className="btn" style={{backgroundColor: color}}>Submit</button>
            </form>
        </div>
    )
}

export default ColorForm;