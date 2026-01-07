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
   SHOES PRODUCT DATA
======================= */
const products = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  sku: `ARSH-SHOE-${i + 1}`,
  name: `Men Formal Shoes ${i + 1}`,
  price: 3499 + i * 300,
  rating: 4.5,
  reviews: 80 + i * 6,
  sizes: ["6", "7", "8", "9", "10", "11"],
  colors: [
    { name: "Black", code: "#000000" },
    { name: "Brown", code: "#5a3a22" },
    { name: "Tan", code: "#c19a6b" },
  ],
  images: {
    front: `/images/products/men/shoes/shoes-0${i + 1}/front.jpg`,
    back: `/images/products/men/shoes/shoes-0${i + 1}/back.jpg`,
    side: `/images/products/men/shoes/shoes-0${i + 1}/side.jpg`,
  },
}));

/* =======================
   SHOES DETAILS
======================= */
const productDetails = {
  colour: "Black / Brown / Tan",
  material: "Genuine Leather",
  work: "Handcrafted Finish",
  washCare: "Wipe with dry cloth",
  itemsIncluded: "1 Pair of Shoes",
  description:
    "Premium handcrafted formal shoes offering superior comfort, durability, and timeless elegance. Ideal for weddings, office wear, and formal occasions.",
};

export default function ShoesPage() {
  const [activeProduct, setActiveProduct] = useState(null);
  const [activeImage, setActiveImage] = useState("front");
  const [qty, setQty] = useState(1);
  const [wishlist, setWishlist] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [openAccordion, setOpenAccordion] = useState(null);
  const [showSizeChart, setShowSizeChart] = useState(false);

  /* =======================
     BODY SCROLL LOCK
  ======================= */
  useEffect(() => {
    document.body.style.overflow =
      activeProduct || showSizeChart ? "hidden" : "auto";
  }, [activeProduct, showSizeChart]);

  /* =======================
     ADD TO CART
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
      qty,
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

  /* =======================
     BANNER SLIDER
  ======================= */
  const bannerImages = [
    "/images/banners/shoes/banner1.jpg",
    "/images/banners/shoes/banner2.jpg",
    "/images/banners/shoes/banner3.jpg",
    "/images/banners/shoes/banner4.jpg",
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

  return (
    <div className="sherwani-page">
      {/* =======================
         SHOES BANNER
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
                <h1>SHOES COLLECTION</h1>
                <p>Classic Craftsmanship. Modern Comfort.</p>
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
                setOpenAccordion(null);
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
        <div className="modal-overlay" onClick={() => setActiveProduct(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {/* Thumbnails */}
            <div className="thumbs-vertical">
              {Object.keys(activeProduct.images).map((key) => (
                <img
                  key={key}
                  src={activeProduct.images[key]}
                  className={activeImage === key ? "active" : ""}
                  onClick={() => setActiveImage(key)}
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
                <FaEye /> 9,842 people viewed recently
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

              {/* Size + Size Chart */}
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

              {/* PINCODE */}
              <div className="pincode-row">
                <input placeholder="Enter pincode" />
                <button>CHECK</button>
              </div>

              {/* =======================
                 ACCORDIONS
              ======================= */}
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
                      {key === "details" && (
                        <>
                          <div className="pd-row"><span>Colour</span><span>{productDetails.colour}</span></div>
                          <div className="pd-row"><span>Material</span><span>{productDetails.material}</span></div>
                          <div className="pd-row"><span>Work</span><span>{productDetails.work}</span></div>
                          <div className="pd-row"><span>Wash Care</span><span>{productDetails.washCare}</span></div>
                          <div className="pd-row"><span>Items Included</span><span>{productDetails.itemsIncluded}</span></div>
                          <p className="desc">{productDetails.description}</p>
                        </>
                      )}

                      {key === "declaration" && (
                        <p><strong>Manufacturer:</strong> ArshArt Exclusive</p>
                      )}

                      {key === "shipping" && (
                        <p>
                          Ships within 48 hours. Easy return/exchange as per policy.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =======================
         SHOE SIZE CHART
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

            <h2>Men’s Shoe Size Chart</h2>

            <table>
              <thead>
                <tr>
                  <th>US</th>
                  <th>UK</th>
                  <th>IND</th>
                  <th>EU</th>
                  <th>Foot (CM)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>7</td><td>6</td><td>6</td><td>39</td><td>24.6</td></tr>
                <tr><td>8</td><td>7</td><td>7</td><td>40</td><td>25.4</td></tr>
                <tr><td>9</td><td>8</td><td>8</td><td>41</td><td>25.8</td></tr>
                <tr><td>10</td><td>9</td><td>9</td><td>42</td><td>26.7</td></tr>
                <tr><td>11</td><td>10</td><td>10</td><td>43</td><td>27.5</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
