import { useState } from "react";
import "./FeaturedProducts.css";

const products = [
  { name: "Silk Kurta", price: "₹4,999", img: "/loved1.jpg" },
  { name: "Embroidered Sherwani", price: "₹19,999", img: "/loved2.jpg" },
  { name: "Festive Kurta Set", price: "₹6,999", img: "/loved3.jpg" },
  { name: "Printed Kurta", price: "₹3,499", img: "/loved4.jpg" },
  { name: "Designer Kurta", price: "₹5,999", img: "/loved5.jpg" },
];

export default function FeaturedProducts() {
  const [active, setActive] = useState(2);

  const prev = () => {
    setActive((prev) =>
      prev === 0 ? products.length - 1 : prev - 1
    );
  };

  const next = () => {
    setActive((prev) =>
      prev === products.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="most-loved-slider">
      <h2>MOST LOVED</h2>

      <div className="slider-wrapper">
        <button className="nav prev" onClick={prev}>‹</button>

        <div className="slider-track">
          {products.map((p, i) => {
            let position = "";

            if (i === active) {
              position = "active";
            } 
            else if (
              i === (active - 1 + products.length) % products.length
            ) {
              position = "left";
            } 
            else if (
              i === (active - 2 + products.length) % products.length
            ) {
              position = "left-2";
            } 
            else if (
              i === (active + 1) % products.length
            ) {
              position = "right";
            } 
            else if (
              i === (active + 2) % products.length
            ) {
              position = "right-2";
            } 
            else {
              position = "hidden";
            }

            return (
              <div className={`slide ${position}`} key={i}>
                <img src={p.img} alt={p.name} />

                {position === "active" && (
                  <div className="slide-info">
                    <h3>{p.name}</h3>
                    <p>{p.price}</p>
                    <button>View</button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <button className="nav next" onClick={next}>›</button>
      </div>
    </section>
  );
}
