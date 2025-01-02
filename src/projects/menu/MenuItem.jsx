/* eslint-disable react/prop-types */

const MenuItem = ({title, category, price, img, desc}) => {
    return (
        <article className="menu-item" >            
            <img src={img} alt={title} className="img" />
            <h6 className="category-name" >{category}</h6>
            <div className="item-info">
                <header>
                    <h5>{title}</h5>
                    <span className="item-price">{price}</span>
                </header>

                <p className="item-text">{desc}</p>
            </div>
        </article>
    );
}

export default MenuItem;