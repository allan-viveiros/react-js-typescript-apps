import { useState, useEffect } from "react";
import Tour from "./Tour";
import Loading from "./Loading";

const url = "https://www.course-api.com/react-tours-project";

const ToursList= () => {
    const [tours, setTours] = useState([]);
    const [load, setLoad] = useState(true);

    function fetchTours() {
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Error: Network response was not ok.");
            })
            .then((tours) => {
                setTours(tours);
            })
            .catch((error) => {
                console.log("Error:", error);
            });
    }

    useEffect(() => {        
        fetchTours();
        
        setTimeout(() => {
            setLoad(false);
        }, 2000);

    }, []);

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    }

    if (load) {
        return (
            <Loading />
        )
    }

    return (        
        <section className="tour-container">
            <h1>Tours List</h1>
            {
                tours.length === 0 
                ? <button className="btn btn-block" onClick={() => fetchTours()}>Refresh</button>
                : <h4>{tours.length} Tours founded!</h4>
            }            
            <div className="title">
                <h2>Our Tours</h2>
                <div className="title-underline"></div>
            </div>
            <div className="tours">
                {
                    tours.map((tour) => {
                        return (
                            <Tour key={tour.id} {...tour} removeTour={removeTour} />
                        )
                    })
                }
            </div>
            
        </section>             
    )
}

export default ToursList;
