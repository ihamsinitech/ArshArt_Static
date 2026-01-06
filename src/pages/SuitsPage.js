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
   SUITS PRODUCT DATA
======================= */
const products = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Premium Suit ${i + 1}`,
  price: 12999 + i * 800,
  rating: 4.6,
  reviews: 85 + i * 6,
  sizes: ["S", "M", "L", "XL", "XXL"],
  colors: [
    { name: "Black", code: "#000000" },
    { name: "Navy Blue", code: "#0b1c2d" },
    { name: "Charcoal Grey", code: "#3a3a3a" },
  ],
  images: {
    front: `/images/products/men/suits/suits-0${i + 1}/front.jpg`,
    back: `/images/products/men/suits/suits-0${i + 1}/back.jpg`,
    side: `/images/products/men/suits/suits-0${i + 1}/side.jpg`,
  },
}));


export default function SuitsPage() {
  const [activeProduct, setActiveProduct] = useState(null);
  const [activeImage, setActiveImage] = useState("front");
  const [qty, setQty] = useState(1);
  const [wishlist, setWishlist] = useState([]);
  const [closing, setClosing] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  /* =======================
     SUITS BANNER SLIDER
  ======================= */
  const bannerImages = [
    "/images/banners/men-banner3.jpg",
    "/images/banners/men-banner4.jpg",
    "/images/banners/men-promo.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);

  const prevSlide = () =>
    setCurrentSlide((prev) =>
      prev === 0 ? bannerImages.length - 1 : prev - 1
    );

  /* =======================
     BODY SCROLL LOCK
  ======================= */
  useEffect(() => {
    document.body.style.overflow = activeProduct ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [activeProduct]);

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
         SUITS HERO BANNER
      ======================= */}
      <div className="banner-carousel">
        {bannerImages.map((img, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentSlide ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="slide-overlay">
              <div className="slide-content">
                <h1>SUITS COLLECTION</h1>
                <p>Sharp. Elegant. Contemporary.</p>
                <button className="shop-now-btn">Shop Suits</button>
              </div>
            </div>
          </div>
        ))}

        <button className="carousel-btn prev" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="carousel-btn next" onClick={nextSlide}>
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
         SUITS LISTING
      ======================= */}
      <div className="listing-grid">
        {products.map((p) => (
          <div className="listing-card" key={p.id}>
            <div
              className="listing-img"
              onClick={() => {
                setSelectedSize("");
                setSelectedColor("");
                setActiveProduct(p);
                setActiveImage("front");
                setQty(1);
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

              {/* Sizes */}
              <div className="block">
                <p>Size</p>
                <div className="size-row">
                  {activeProduct.sizes.map((s) => (
                    <button
                      key={s}
                      className={selectedSize === s ? "active" : ""}
                      onClick={() => setSelectedSize(s)}
                    >
                      {s}
                    </button>
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
