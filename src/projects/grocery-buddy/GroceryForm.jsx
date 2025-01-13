/* eslint-disable react/prop-types */
import { useState } from "react";
import { toast } from "react-toastify";

const GroceryForm = ({handleAddItem}) => {
    const [inputText, setInputText] = useState("");

    const handleSubmitForm = (e, inputText) => {
        e.preventDefault();
        
        if (!inputText) {
            toast.error("Please, insert a value!");
            return;
        }
        else {
            handleAddItem(inputText);
            setInputText("");
        }        
    }
    
    return (        
        <form onSubmit={(e) => handleSubmitForm(e, inputText)}>
            <div className="form-control">                
                <input id="inputGrocery" type="text" className="form-input" value={inputText} onChange={(e) => setInputText(e.target.value)}/>
                <button type="submit" className="btn">Add Item</button>
            </div>            
        </form>        
    )
}

export default GroceryForm;