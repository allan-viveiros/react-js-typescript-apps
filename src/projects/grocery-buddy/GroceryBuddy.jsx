import { useState } from "react";
import GroceryForm from "./GroceryForm";
import GroceryList from "./GroceryList";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

// const getLocalStorage = () => {
//     let list = localStorage.getItem("list");

//     if (list) {
//         list = JSON.parse(localStorage.getItem("list"));
//     }
//     else {
//         list = [];
//     }

//     return list;
// }

const defaultLocalStorageList = JSON.parse(localStorage.getItem("list") || "[]");

const setLocalStorage = (items) => {
    localStorage.setItem("list", JSON.stringify(items));
}

const GroceryBuddy = () => {
    const [groceryItems, setGroceryItems] = useState(defaultLocalStorageList);

    const handleAddItem = (itemName) => {
        const newItem = {
            name: itemName,
            completed: false,
            id: nanoid(),
        };

        const newItems = [...groceryItems, newItem];
        setGroceryItems(newItems);
        setLocalStorage(newItems)

        toast.success("Item Added!");
    }
    
    const handleRemoveItem = (itemId) => {
        const newGroceryItems = groceryItems.filter((item) => item.id !== itemId);
        setGroceryItems(newGroceryItems);        
        setLocalStorage(newGroceryItems);

        toast.success("Item Removed!");
    }

    const handleCheckedItem = (itemId) => {
        const newItems = groceryItems.map ((item) => {
            if (item.id === itemId) {
                const newItem ={...item, completed: !item.completed};

                return newItem;
            }
            
            return item;
        });

        setGroceryItems(newItems);
        setLocalStorage(newItems);
    }

    return (
        <section className="grocerybud-container">
            <h2>Grocery Buddy</h2>

            <GroceryForm handleAddItem={handleAddItem} />
            <GroceryList groceryItems={groceryItems} handleRemoveItem={handleRemoveItem} handleCheckedItem={handleCheckedItem} />          
        </section>
    )
}

export default GroceryBuddy;
