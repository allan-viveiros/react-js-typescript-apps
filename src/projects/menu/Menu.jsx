import data from "./data"
import Title from "./Title";
import Categories from "./Categories";
import MenuItem from "./MenuItem";
import { useEffect, useState } from "react";

const Menu = () => {
    const [menuInfo, setMenuInfo] = useState(data);
    const [categoryInfo, setCategoryInfo] = useState([]);

    useEffect(() => {
        const allCategories = ["all", ...new Set(data.map((item) => item.category))];
        setCategoryInfo(allCategories);

    }, []);

    const filterCategory = (category) => {
        setMenuInfo(data);

        if(category !== "all") {
            const newCategoryFilter = data.filter((item) => item.category === category);
            setMenuInfo(newCategoryFilter);
        }
    }


    return (
        <section className="menu">
            <Title menuTitle="Our Menu" />
            <Categories categoryInfo={categoryInfo} filterCategory={filterCategory} />

            <div className="section-center">
                {
                    menuInfo.map((item) => {
                        return (
                            <MenuItem key={item.id} {...item} />
                        )
                    })
                }
            </div>
        </section>        
    );
}

export default Menu;