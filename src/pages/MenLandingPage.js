import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MenLandingPage.css";
import Footer from "../components/Footer";

/* ================= DATA ================= */

// HERO SLIDER
const heroBanners = [
  "/images/banners/men-banner.jpg",
  "/images/banners/men-banner2.jpg",
  "/images/banners/men-promo.jpg",
  "/images/banners/men-banner3.jpg",
  "/images/banners/men-banner4.jpg",

];

// EXPLORE CATEGORIES
// EXPLORE CATEGORIES (UPDATED ORDER)
const exploreCategories = [
  {
    title: "Kurtas-Pyjamas",
    image: "/images/products/men/kurtas-pyjamas/kurta-01/front.jpg",
    link: "/kurtas"
  },
  {
    title: "Sherwani",
    image: "/images/products/men/sherwani/sherwani-01/front.jpg",
    link: "/sherwanis"
  },
  {
    title: "Suits", // ✅ MOVED TO 3RD
    image: "/images/products/men/suits/suits-02/front.jpg",
    link: "/suits"
  },
  {
    title: "Pagadi",
    image: "/images/products/men/pagadi/pagadi-01/front.jpg",
    link: "/pagadis"
  },
  {
    title: "Shoes",
    image: "/images/products/men/shoes/shoes-01/front.jpg",
    link: "/shoes"
  }
];


// MOST LOVED
const mostLoved = [
  {
    id: 1,
    title: "Champagne Elegance Sherwani",
    price: "₹ 20,999",
    image: "/images/products/men/sherwani/sherwani-02/front.jpg",
    link: "/sherwanis?product=2"
  },
  {
    id: 2,
    title: "Royal Silk Kurta Pajama",
    price: "₹ 4,499",
    image: "/images/products/men/kurtas-pyjamas/kurta-02/front.jpg",
    link: "/kurtas?product=2"
  },
  {
    id: 3,
    title: "Beige Royalty Suit",
    price: "₹ 24,999",
    image: "/images/products/men/suits/suits-02/front.jpg",
    link: "/suits?product=2"
  },
  {
    id: 4,
    title: "Traditional Leather Jutti",
    price: "₹ 3,999",
    image: "/images/products/men/shoes/shoes-02/front.jpg",
    link: "/shoes?product=4"
  },
  {
    id: 5,
    title: "Classic Wedding Pagadi",
    price: "₹ 2,499",
    image: "/images/products/men/pagadi/pagadi-01/front.jpg",
    link: "/pagadis?product=5"
  }
];

// CURATE LOOK
const weddingLooks = [
  { title: "Wedding", image: "/images/looks/wedding.jpg", link: "/sherwanis" },
  { title: "Reception", image: "/images/looks/reception.jpg", link: "/suits" },
  { title: "Engagement", image: "/images/looks/engagement.jpg", link: "/kurtas" },
  { title: "Sangeet", image: "/images/looks/sangeet.jpg", link: "/kurtas" },
];

// RECOMMENDED
const recommendedProducts = [
  {
    id: 1,
    title: "Windsor Wine Angrakha Indo Western",
    price: "₹ 12,999",
    image: "/images/products/men/sherwani/sherwani-03/front.jpg",
    link: "/product/sherwanis/1",
  },
  {
    id: 2,
    title: "Cream Bel Buti Sherwani Set",
    price: "₹ 15,999",
    image: "/images/products/men/sherwani/sherwani-04/front.jpg",
    link: "/product/sherwanis/2",
  },
  {
    id: 3,
    title: "Rosewater Pink Indo Western",
    price: "₹ 12,999",
    image: "/images/products/men/sherwani/sherwani-05/front.jpg",
    link: "/product/sherwanis/3",
  },



 
  {
    id: 4,
    title: "Beige Royalty Suit",
    price: "₹ 24,999",
    image: "/images/products/men/suits/suits-02/front.jpg",
    link: "/product/suits/2",
  },
  {
    id: 5,
    title: "Traditional Embroidered Jutti",
    price: "₹ 3,999",
    image: "/images/products/men/shoes/shoes-02/front.jpg",
    link: "/product/shoes/2",
  },
  {
    id: 6,
    title: "Classic Wedding Pagadi",
    price: "₹ 2,499",
    image: "/images/products/men/pagadi/pagadi-01/front.jpg",
    link: "/product/pagadi/1",
  },
];

const MenLandingPage = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  /* ================= AUTO SLIDER ================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % heroBanners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="men-landing">

      {/* HERO SLIDER */}
      <section className="men-hero" style={{ backgroundImage: `url(${heroBanners[currentBanner]})` }}>
        <div className="men-hero-content">
          <h1>This Wedding Season</h1>
          <p>Celebrate traditions with elegance</p>
          <Link to="/sherwanis" className="hero-btn">EXPLORE →</Link>
        </div>
      </section>

      {/* EXPLORE CATEGORIES */}
      <section className="men-categories">
        <h2>EXPLORE CATEGORIES</h2>
        <div className="category-grid">
          {exploreCategories.map((cat, i) => (
            <Link to={cat.link} className="category-card" key={i}>
              <img src={cat.image} alt={cat.title} />
              <span>{cat.title}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* MOST LOVED */}
     {/* ================= MOST LOVED (CAROUSEL) ================= */}
<section className="men-loved">
  <h2>MOST LOVED</h2>

  <div className="loved-carousel">
    <div className="loved-track">
      {recommendedProducts.map((item) => (
        <Link
          to={item.link}
          className="loved-card"
          key={item.id}
        >
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
          <strong>{item.price}</strong>
        </Link>
      ))}
    </div>
  </div>
</section>


      {/* REDEFINE CELEBRATIONS */}
      <section className="men-promo" style={{ backgroundImage: "url(/images/banners/men-promo.jpg)" }}>
        <div className="promo-content">
          <h2>Redefine Celebrations</h2>
         

          <Link to="/pagadis" className="promo-btn">SHOP NOW</Link>
        </div>
      </section>

  {/* ================= SHOP BY OCCASION ================= */}
<section className="men-curate">
  <h2>SHOP BY WEDDING OCCASION</h2>

  <div className="curate-grid large-cards">
    {weddingLooks.map((look, index) => (
      <Link to={look.link} className="curate-card" key={index}>
        <img src={look.image} alt={look.title} />
        <div className="curate-overlay">
          <span>{look.title}</span>
        </div>
      </Link>
    ))}
  </div>
</section>
{/* ================= SHOP BY STYLE ================= */}
<section className="men-curate alt">
  <h2>FIND YOUR SIGNATURE STYLE</h2>

  <div className="curate-grid small-cards">
    <Link to="/sherwanis" className="curate-card">
      <img src="/images/looks/royal.jpg" alt="Royal Groom" />
      <div className="curate-overlay">
        <span>Royal Groom</span>
      </div>
    </Link>

    <Link to="/kurtas" className="curate-card">
      <img src="/images/looks/minimal.jpg" alt="Minimal Elegance" />
      <div className="curate-overlay">
        <span>Minimal Elegance</span>
      </div>
    </Link>

    <Link to="/suits" className="curate-card">
      <img src="/images/looks/festive.jpg" alt="Festive Nights" />
      <div className="curate-overlay">
        <span>Festive Nights</span>
      </div>
    </Link>

    <Link to="/suits" className="curate-card">
      <img src="/images/looks/modern.jpg" alt="Modern Indo-Western" />
      <div className="curate-overlay">
        <span>Modern Indo-Western</span>
      </div>
    </Link>
  </div>
</section>


    

      {/* RECOMMENDED */}
      <section className="men-recommended">
        <h2>RECOMMENDED FOR YOU</h2>
        <div className="recommended-grid">
          {recommendedProducts.map((p, i) => (
            <Link to={p.link} className="recommended-card" key={i}>
              <img src={p.image} alt={p.title} />
              <p>{p.title}</p>
              <strong>{p.price}</strong>
            </Link>
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default MenLandingPage;
