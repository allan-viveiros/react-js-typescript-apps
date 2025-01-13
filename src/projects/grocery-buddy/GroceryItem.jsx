/* eslint-disable react/prop-types */
const GroceryItem = ({item, handleRemoveItem, handleCheckedItem}) => {
    
    return (
        <div className="single-item">
            <input type="checkbox" checked={item.completed} onChange={() => handleCheckedItem(item.id)} />

            <p style={{textTransform: "capitalize", textDecorationLine: item.completed ? "line-through" : "none"}}> {item.name} </p>

            <button type="button" className="btn remove-btn" onClick={() => handleRemoveItem(item.id)}> Delete </button>
        </div>
        
    )
}

export default GroceryItem;
