import { useState } from "react";
import text from "./data";

const LoremIpsum = () => {
    const [paragraphs, setParagraphs] = useState(0);
    const [paragraphText, setParagraphText] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        let paragraphValue = parseInt(paragraphs);
        setParagraphText(text.slice(0, paragraphValue));

        // const newParagraph = text.filter((paragraph, index) => index < paragraphs);        
        // setParagraphText(newParagraph);
    }

    return (
        <section className="section-lorem">
            <h4>Tired of boring lorem ipsum?</h4>

            <form className="lorem-form" onSubmit={(e) => handleSubmit(e)}>                
                <label htmlFor="amount">Paragraphs:</label>
                <input type="number" name="amount" id="amount" min="1" max="8" step="1" value={paragraphs} onChange={(e) => setParagraphs(e.target.value)}/>
                
                <button type="submit" className="btn">Generate</button>
            </form>

            <article className="lorem-text">
                {
                    paragraphText.map((paragraph, index) => {
                        return (
                            <p key={index}>{paragraph}</p>
                        )
                    })
                }
            </article>
            
        </section>
    )
}

export default LoremIpsum;
