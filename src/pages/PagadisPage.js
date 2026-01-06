import React, { useState, useEffect } from "react";
import "./SherwaniPage.css"; // reuse same CSS
import {
  FaStar,
  FaHeart,
  FaRegHeart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

/* =======================
   PAGADI DATA (8 ITEMS)
======================= */
const products = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Royal Pagadi ${i + 1}`,
  price: 1299 + i * 200,
  rating: 4.6,
  reviews: 45 + i * 6,
  colors: [
    { name: "Maroon", code: "#800000" },
    { name: "Gold", code: "#d4af37" },
    { name: "Cream", code: "#f5f0e6" },
  ],
  images: {
    front: `/images/products/men/pagadi/pagadi-0${i + 1}/front.jpg`,
    back: `/images/products/men/pagadi/pagadi-0${i + 1}/back.jpg`,
    side: `/images/products/men/pagadi/pagadi-0${i + 1}/side.jpg`,
  },
}));

export default function PagadiPage() {
  const [activeProduct, setActiveProduct] = useState(null);
  const [activeImage, setActiveImage] = useState("front");
  const [qty, setQty] = useState(1);
  const [wishlist, setWishlist] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [closing, setClosing] = useState(false);

  /* =======================
     PAGADI BANNER SLIDER
  ======================= */
  const bannerImages = [
    "/images/banners/pagadi/banner1.jpg",
    "/images/banners/pagadi/banner2.jpg",
    "/images/banners/pagadi/banner3.jpg",
    "/images/banners/pagadi/banner4.jpg",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentSlide((p) => (p + 1) % bannerImages.length),
      4500
    );
    return () => clearInterval(timer);
  }, []);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setActiveProduct(null);
      setClosing(false);
    }, 250);
  };

  return (
    <div className="sherwani-page">
      {/* =======================
         PAGADI BANNER
      ======================= */}
      <div className="banner-carousel">
        {bannerImages.map((img, i) => (
          <div
            key={i}
            className={`carousel-slide ${i === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="slide-overlay">
              <div className="slide-content">
                <h1>PAGADI COLLECTION</h1>
                <p>Royal Headwear for Grand Occasions</p>
                <button className="shop-now-btn">Explore Pagadis</button>
              </div>
            </div>
          </div>
        ))}

        <button
          className="carousel-btn prev"
          onClick={() =>
            setCurrentSlide(
              currentSlide === 0 ? bannerImages.length - 1 : currentSlide - 1
            )
          }
        >
          <FaChevronLeft />
        </button>

        <button
          className="carousel-btn next"
          onClick={() =>
            setCurrentSlide((currentSlide + 1) % bannerImages.length)
          }
        >
          <FaChevronRight />
        </button>

        <div className="carousel-dots">
          {bannerImages.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(i)}
            />
          ))}
        </div>
      </div>

      {/* =======================
         PRODUCT GRID
      ======================= */}
      <div className="listing-grid">
        {products.map((p) => (
          <div className="listing-card" key={p.id}>
            <div
              className="listing-img"
              onClick={() => {
                setActiveProduct(p);
                setActiveImage("front");
                setQty(1);
                setSelectedColor("");
              }}
            >
              <img src={p.images.front} alt={p.name} />
            </div>

            <div className="listing-info">
              <h4>{p.name}</h4>
              <p>₹{p.price}</p>

              <span className="wishlist" onClick={() => toggleWishlist(p.id)}>
                {wishlist.includes(p.id) ? <FaHeart /> : <FaRegHeart />}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* =======================
         QUICK VIEW MODAL
      ======================= */}
      {activeProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className={`modal ${closing ? "closing" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="thumbs-vertical">
              {Object.keys(activeProduct.images).map((k) => (
                <img
                  key={k}
                  src={activeProduct.images[k]}
                  className={activeImage === k ? "active" : ""}
                  onClick={() => setActiveImage(k)}
                  alt=""
                />
              ))}
            </div>

            <div className="modal-image">
              <img src={activeProduct.images[activeImage]} alt="" />
            </div>

            <div className="modal-details">
              <h2>{activeProduct.name}</h2>

              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
                <span>
                  {activeProduct.rating} ({activeProduct.reviews})
                </span>
              </div>

              <h3 className="price">₹{activeProduct.price}</h3>

              <div
                className="modal-wishlist"
                onClick={() => toggleWishlist(activeProduct.id)}
              >
                {wishlist.includes(activeProduct.id) ? (
                  <FaHeart />
                ) : (
                  <FaRegHeart />
                )}
                <span>Add to Wishlist</span>
              </div>

              {/* Colors */}
              <div className="block">
                <p>Color</p>
                <div className="color-row">
                  {activeProduct.colors.map((c) => (
                    <span
                      key={c.name}
                      className={`color-dot ${
                        selectedColor === c.name ? "active" : ""
                      }`}
                      style={{ background: c.code }}
                      onClick={() => setSelectedColor(c.name)}
                    />
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="qty-row">
                <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                <span>{qty}</span>
                <button onClick={() => setQty(qty + 1)}>+</button>
              </div>

              <button className="cart-btn">ADD TO CART</button>
              <button className="buy-btn">BUY NOW</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
