/* eslint-disable react/prop-types */
import { nanoid } from "nanoid";
import SingleColor from "./SingleColor";

const ColorList = ({colorShades}) => {

    return (
        <div className="colors">
            {
                colorShades.map((color, index) => {
                    return (
                        <SingleColor key={nanoid()} color={color} index={index} />
                    )
                })
            }
        </div>
    )
}

export default ColorList;