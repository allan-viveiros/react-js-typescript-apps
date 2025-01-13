/* eslint-disable react/prop-types */
import GroceryItem from "./GroceryItem";

const GroceryList = ({groceryItems, handleRemoveItem, handleCheckedItem}) => {
        
    return (
        <div className="items">            
            {
                groceryItems.map((item) => {
                    return (
                        <GroceryItem key={item.id} item={item} handleRemoveItem={handleRemoveItem} handleCheckedItem={handleCheckedItem} />                         
                    )
                })
            }           
        </div>
    )
}

export default GroceryList;
