/* eslint-disable react/prop-types */
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({id, title, info, toggleQuestion, activeId}) => {
    // const [showInfo, setShowInfo] = useState(false);
    const isActiveId = id === activeId;

    return (
        <article className="question">
            <header>
                <h5>{title}</h5>
                <button className="question-btn" onClick={() => toggleQuestion(id)}> 
                    {isActiveId ? <AiOutlineMinus /> : <AiOutlinePlus />} 
                </button>
            </header>
            
            {
                isActiveId && <p>{info}</p>
            }

        </article>
    )
}

export default Question;