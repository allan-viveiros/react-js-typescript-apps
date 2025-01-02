/* eslint-disable react/prop-types */

const Categories = ({categoryInfo, filterCategory}) => {
    return (
        <div className="btn-container">
            {
                categoryInfo.map((category, index) => {
                    return (
                        <button type="button" className="btn" key={index} onClick={() => filterCategory(category)}>
                            {category}
                        </button>
                    )
                })
            }
        </div>        
    );
}

export default Categories;