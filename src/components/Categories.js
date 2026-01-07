import React from 'react';
import './Categories.css';
import { FaArrowRight } from 'react-icons/fa';

const Categories = () => {
    const categories = [
        {
            id: 1,
            title: "Men's Ethnic Wear",
            description: "Sherwanis, Kurtas & Traditional Sets",
            image: "https://manyavar.scene7.com/is/image/manyavar/8905100862140.4921_29-03-2023-21-44:283x395?&dpr=on,2"
        },
        {
            id: 2,
            title: "Kids Collection",
            description: "Traditional & Contemporary Outfits",
            image: "https://www.manyavar.com/dw/image/v2/BJZV_PRD/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/default/dw629426f3/manyavar%20images%20m/51937/Manyavar%20Apparel%20-%20Top%20Indo%20Western%20Sherwani%20Styles%20for%20Kids%20This%20Wedding%20Season_blog%201%20copy.jpg"
        },
        {
            id: 3,
            title: "Men's Formal Wear",
            description: "Suits, Blazers & Office Attire",
            image: "https://www.manyavar.com/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/default/dwa91bab8b/images/feeds/UC124835.jpg"
        }
    ];

    return (
        <section className="categories">
            <div className="container">
                <div className="section-title">
                    <h2>Shop By Category</h2>
                    <p>Explore our curated collections for men and kids</p>
                </div>
                
                <div className="category-grid">
                    {categories.map(category => (
                        <div className="category-card" key={category.id}>
                            <img src={category.image} alt={category.title} />
                            <div className="category-info">
                                <h3>{category.title}</h3>
                                <p>{category.description}</p>
                                <a href="#" className="category-link">
                                    Shop Now <FaArrowRight className="arrow-icon" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;