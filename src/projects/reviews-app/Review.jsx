/* eslint-disable react/prop-types */
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = ({name, job, image, text, handlePrevNext, handleSurprise}) => {
    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>            
            <h2 className="author">{name}</h2>          
            <p className="job">{job}</p>
            <p className="info">{text}</p>

            <div className="btn-container">
                <button className="prev-btn" onClick={() => handlePrevNext("prev")}>
                    <span> <FaChevronLeft /> </span>
                </button>

                <button className="next-btn" onClick={() => handlePrevNext("next")}>
                    <span> <FaChevronRight /> </span>
                </button>
            </div>

            <button className="btn btn-hipster" onClick={() => handleSurprise()}>Surprise me</button> 
        </article>
    );
}

export default Review;