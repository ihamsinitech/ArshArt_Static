import React, { useState, useEffect } from "react";
import "./SherwaniPage.css";
import {
  FaStar,
  FaHeart,
  FaRegHeart,
  FaChevronLeft,
  FaChevronRight,
  FaEye,
} from "react-icons/fa";

/* =======================
   SUITS PRODUCT DATA
======================= */
const products = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  sku: `ARSH-SUIT-${i + 1}`,
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

/* =======================
   SUITS DETAILS
======================= */
const productDetails = {
  colour: "Black / Navy / Charcoal",
  material: "Premium Blended Fabric",
  work: "Tailored Finish",
  washCare: "Dry Clean Only",
  itemsIncluded: "Blazer & Trousers",
  description:
    "A refined premium suit tailored for modern elegance. Ideal for weddings, formal events, and special occasions.",
};

export default function SuitsPage() {
  const [activeProduct, setActiveProduct] = useState(null);
  const [activeImage, setActiveImage] = useState("front");
  const [qty, setQty] = useState(1);
  const [wishlist, setWishlist] = useState([]);
  const [closing, setClosing] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  /* =======================
     BANNER SLIDER
  ======================= */
  const bannerImages = [
    "/images/banners/suits/banner1.jpg",
    "/images/banners/suits/banner2.jpg",
    "/images/banners/suits/banner3.jpg",
    "/images/banners/suits/banner4.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentSlide((p) => (p + 1) % bannerImages.length),
      4500
    );
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((p) => (p + 1) % bannerImages.length);

  const prevSlide = () =>
    setCurrentSlide((p) =>
      p === 0 ? bannerImages.length - 1 : p - 1
    );

  /* =======================
     BODY SCROLL LOCK
  ======================= */
  useEffect(() => {
    document.body.style.overflow =
      activeProduct || showSizeChart ? "hidden" : "auto";
  }, [activeProduct, showSizeChart]);

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

  /* =======================
     ADD TO CART (LOCALSTORAGE)
  ======================= */
  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color");
      return;
    }

    const cartItem = {
      id: activeProduct.id,
      sku: activeProduct.sku,
      name: activeProduct.name,
      price: activeProduct.price,
      image: activeProduct.images.front,
      size: selectedSize,
      color: selectedColor,
      qty: qty,
    };

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to cart 🛒");
  };

  /* =======================
     BUY NOW
  ======================= */
  const handleBuyNow = () => {
    handleAddToCart();
    window.location.href = "/checkout";
  };

  return (
    <div className="sherwani-page">
      {/* =======================
         SUITS BANNER
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
                <p>Tailored Elegance for Every Occasion</p>
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
                setSelectedSize("");
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
         PRODUCT MODAL
      ======================= */}
      {activeProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className={`modal ${closing ? "closing" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Thumbnails */}
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

            {/* Image */}
            <div className="modal-image">
              <img src={activeProduct.images[activeImage]} alt="" />
            </div>

            {/* Details */}
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
              <p className="sku">ARS ID – {activeProduct.sku}</p>

              <div className="viewed">
                <FaEye /> 10,842 people viewed this recently
              </div>

              {/* Color */}
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

              {/* Size */}
              <div className="block size-header">
                <p>Size</p>
                <span
                  className="size-chart"
                  onClick={() => setShowSizeChart(true)}
                >
                  Size Chart
                </span>
              </div>

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

              {/* Quantity */}
              <div className="qty-row">
                <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                <span>{qty}</span>
                <button onClick={() => setQty(qty + 1)}>+</button>
              </div>

              <button className="cart-btn" onClick={handleAddToCart}>
                ADD TO CART
              </button>
              <button className="buy-btn" onClick={handleBuyNow}>
                BUY NOW
              </button>

              {/* Accordions */}
              {["details", "declaration", "shipping"].map((key) => (
                <div className="accordion-section" key={key}>
                  <div
                    className="accordion-header"
                    onClick={() =>
                      setOpenAccordion(openAccordion === key ? null : key)
                    }
                  >
                    <h4>
                      {key === "details"
                        ? "PRODUCT DETAILS"
                        : key === "declaration"
                        ? "PRODUCT DECLARATION"
                        : "SHIPPING & RETURNS"}
                    </h4>
                    <span>{openAccordion === key ? "−" : "+"}</span>
                  </div>

                  {openAccordion === key && (
                    <div className="accordion-content">
                      <p>{productDetails.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =======================
         SUITS SIZE CHART
      ======================= */}
      {showSizeChart && (
        <div className="sizechart-overlay" onClick={() => setShowSizeChart(false)}>
          <div className="sizechart-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="sizechart-close"
              onClick={() => setShowSizeChart(false)}
            >
              ×
            </button>

            <h2>Suit Size Chart (Inches)</h2>

            <table>
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Chest</th>
                  <th>Shoulder</th>
                  <th>Jacket Length</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>S</td><td>36</td><td>17</td><td>28</td></tr>
                <tr><td>M</td><td>38</td><td>17.5</td><td>29</td></tr>
                <tr><td>L</td><td>40</td><td>18</td><td>30</td></tr>
                <tr><td>XL</td><td>42</td><td>18.5</td><td>31</td></tr>
                <tr><td>XXL</td><td>44</td><td>19</td><td>32</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
