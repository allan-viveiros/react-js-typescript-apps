import { useState } from "react";
import Question from "./Question";
import data from "./data";

const QuestionList = () => {
    const [questions, setQuestions] = useState(data);
    const [activeId, setActiveId] = useState(null);

    const toggleQuestion = (id) => {
        const newActiveId = id === activeId ? null : id;
        setActiveId(newActiveId);
    }

    return (
        <section className="accordion-container">
            <h2>Question List</h2>

            {
                questions.map((singleQuestion) => {
                    return (
                        <Question key={singleQuestion.id} {...singleQuestion} toggleQuestion={toggleQuestion} activeId={activeId} />
                    )
                })
            }
                                    
        </section>
    )
}

export default QuestionList;