/* eslint-disable react/prop-types */
import { useState } from "react";

const Tour = ({id, name, info, image, price, removeTour}) => {
    const [readMore, setReadMore] = useState(false);

    const handleReadMore = () => {
        setReadMore(!readMore);
    }

    return (
        <article className="single-tour">
            <img src={image} alt={name} className="img" />
            <span className="tour-price">${price}</span>
            <div className="tour-info">
                <h5>{name}</h5>
                <p>
                    {readMore ? info : `${info.substring(0, 150)}...`}
                    <button className="info-btn" onClick={() => handleReadMore()} >{readMore ? "Read less" : "Read more"}</button>
                </p>                
                <button id={id} className="btn btn-block delete-btn" onClick={() =>  removeTour(id)}>Not interested</button>
            </div>            
        </article>
    )
}

export default Tour;
