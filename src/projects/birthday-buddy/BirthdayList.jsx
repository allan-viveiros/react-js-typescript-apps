import { useState } from "react";
import data from "./data";
import Person from "./Person";

const BirthdayList = () => {
    const [people, setPeople] = useState(data);

    const clearUser = (e) => {        
        const userId = parseInt(e.target.id);
        const newPeople = people.filter((person) => person.id !== userId);
        setPeople(newPeople);
    }

    return (
        <section className="birthday-container">
            <h1>Birthday Buddy</h1>
            <h4>{people.length} birthdays today</h4>

            {
                people.map((person) => {
                    return (
                        <Person key={person.id} personId={person.id} image={person.image} age={person.age} name={person.name} clearUser={clearUser} />
                    )
                })
            }

            <button className="btn btn-block" onClick={() => setPeople([])}>Clear All</button>
        </section>
    )
}

export default BirthdayList;