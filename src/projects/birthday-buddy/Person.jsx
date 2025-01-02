
// eslint-disable-next-line react/prop-types
const Person = ({personId, image, age, name, clearUser}) => {

    return (
        <article className="person">
            <img src={image} alt={name} className="img" />
            <div>
                <h4>{name}</h4>
                <p>{age} years</p>
            </div>
            <button id={personId} className="btn" onClick={(e) => clearUser(e)}>Remove</button>            
        </article>
    )
}

export default Person;