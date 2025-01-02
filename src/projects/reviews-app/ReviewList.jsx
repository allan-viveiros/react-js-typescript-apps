import { useState } from "react"; 
import Review from "./Review";
import people from "./data";

const ReviewList = () => {
    const [reviewIndex, setReviewIndex] = useState(0);
    const { name, job, image, text} = people[reviewIndex];

    // Handle click event for next and previous buttons
    const handlePrevNext = (buttonType) => {
        if(buttonType === "next") {
            setReviewIndex((currentIndex) => {
                const newIndex = (currentIndex + 1) % people.length;

                return newIndex
            });
        }
        else {
            setReviewIndex((currentIndex) => {
                const newIndex = (currentIndex - 1 + people.length) % people.length;

                return newIndex;
            });
        }
    }

    // generate a random number for the surprise me button
    const handleSurprise = () => {
        let randomIndex = Math.floor(Math.random() * people.length);

        if (randomIndex === reviewIndex) {
            randomIndex = reviewIndex + 1;
        }

        const newIndex = randomIndex % people.length;
        setReviewIndex(newIndex);
    }

    
    return (
        <section className="reviews-container">
            <h2>Review List</h2>            
            
            <Review name={name} job={job} image={image} text={text} handlePrevNext={handlePrevNext} handleSurprise={handleSurprise} />            
        </section>
    );
}

export default ReviewList;