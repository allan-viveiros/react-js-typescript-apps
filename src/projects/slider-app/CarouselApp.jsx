import { useEffect, useState } from "react";
import { longList } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const CarouselApp = () => {
    const [carouselIndex, setCarouselIndex] = useState(0);

    const handlePrevNext = (buttonId) => {
        if(buttonId === "btn-next") {
            setCarouselIndex((currentIndex) => {
                const newIndex = (currentIndex + 1) % longList.length;

                return newIndex;
            });
        }
        else {
            setCarouselIndex((currentIndex) => {
                const newIndex = (currentIndex - 1 + longList.length) % longList.length;

                return newIndex;
            });
        }
    }

    useEffect(() => {
        let nextSlider = setInterval(() => {
            handlePrevNext("btn-next");
        }, 2000);

        return () => {
            clearInterval(nextSlider);
        }

    }, [carouselIndex]);

    return (
        <>
            <h2>Carousel</h2>
            <section className="slider-container">
                {
                    longList.map((person, personIndex) => {
                        const { id, image, name, title, quote } = person;

                        return (
                            <article 
                            key={id}
                            className="slide" 
                            style={{transform: `translateX(${100 * (personIndex - carouselIndex)}%)`,
                                    opacity: personIndex === carouselIndex ? 1 : 0,
                                    visibility: personIndex === carouselIndex ? 'visible' : 'hidden'
                                    }}
                            >
                                <img src={image} alt={name} className="person-img" />
                                <h5 className="name">{name}</h5>
                                <p className="title">{title}</p>
                                <p className="text">{quote}</p>
                                <FaQuoteRight className="icon" />
                            </article>
                        );
                    })
                }

                <button type="button" className="prev" onClick={() => handlePrevNext("btn-prev")}> <FiChevronLeft /> </button>
                <button type="button" className="next" onClick={() => handlePrevNext("btn-next")}> <FiChevronRight /> </button>
            </section>
        </>
        
    )
}

export default CarouselApp;
