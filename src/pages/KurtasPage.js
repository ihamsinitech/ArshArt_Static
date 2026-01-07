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
   KURTA–PYJAMA PRODUCTS
======================= */
const products = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  sku: `ARSH-KP-${i + 1}`,
  name: `Kurta Pyjama Set ${i + 1}`,
  price: 2499 + i * 300,
  rating: 4.5,
  reviews: 60 + i * 7,
  sizes: ["S", "M", "L", "XL", "XXL"],
  colors: [
    { name: "White", code: "#ffffff" },
    { name: "Cream", code: "#f5f0e6" },
    { name: "Pastel Blue", code: "#cfe8f3" },
  ],
  images: {
    front: `/images/products/men/kurtas-pyjamas/kurta-0${i + 1}/front.jpg`,
    back: `/images/products/men/kurtas-pyjamas/kurta-0${i + 1}/back.jpg`,
    side: `/images/products/men/kurtas-pyjamas/kurta-0${i + 1}/side.jpg`,
  },
}));

/* =======================
   PRODUCT DETAILS
======================= */
const productDetails = {
  colour: "White / Cream / Pastel Blue",
  material: "Cotton Blend",
  work: "Solid",
  washCare: "Hand Wash / Mild Machine Wash",
  itemsIncluded: "Kurta & Pyjama",
  description:
    "Classic kurta–pyjama set designed for everyday comfort and festive elegance.",
};

export default function KurtasPage({ searchQuery = "" }) {
  const [activeProduct, setActiveProduct] = useState(null);
  const [activeImage, setActiveImage] = useState("front");
  const [qty, setQty] = useState(1);
  const [wishlist, setWishlist] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  /* FILTER STATES */
  const [filterSize, setFilterSize] = useState("");
  const [filterColor, setFilterColor] = useState("");
  const [priceRange, setPriceRange] = useState(6000);

  /* BODY SCROLL LOCK */
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
    "/images/banners/kurtas-pyjamas/banner1.jpg",
    "/images/banners/kurtas-pyjamas/banner2.jpg",
    "/images/banners/kurtas-pyjamas/banner3.jpg",
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

  /* =======================
     FILTER LOGIC
  ======================= */
  const filteredProducts = products.filter((p) => {
    const matchSearch = p.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchSize = filterSize ? p.sizes.includes(filterSize) : true;
    const matchColor = filterColor
      ? p.colors.some((c) => c.name === filterColor)
      : true;
    const matchPrice = p.price <= priceRange;
    return matchSearch && matchSize && matchColor && matchPrice;
  });

  return (
    <div className="sherwani-page">
      {/* =======================
         BANNER
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
                <h1>KURTA PYJAMA COLLECTION</h1>
                <p>Comfort Meets Tradition</p>
              </div>
            </div>
          </div>
        ))}

        <button
          className="carousel-btn prev"
          onClick={() =>
            setCurrentSlide(
              currentSlide === 0
                ? bannerImages.length - 1
                : currentSlide - 1
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
        {filteredProducts.map((p) => (
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
            {/* THUMBNAILS */}
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

            {/* IMAGE */}
            <div className="modal-image">
              <img src={activeProduct.images[activeImage]} alt="" />
            </div>

            {/* DETAILS */}
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
                <FaEye /> 8,392 people viewed recently
              </div>

              {/* COLOR */}
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

              {/* SIZE */}
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

              {/* QTY */}
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

              {/* ACCORDIONS */}
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
                          Ready-to-ship orders are dispatched within 48 hours.
                          Easy exchange/return available till 7 days.
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
         SIZE CHART MODAL
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

            <h2>Kurta–Pyjama Size Chart (Inches)</h2>

            <table>
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Chest</th>
                  <th>Shoulder</th>
                  <th>Kurta Length</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>S</td><td>38</td><td>17</td><td>42</td></tr>
                <tr><td>M</td><td>40</td><td>17.5</td><td>43</td></tr>
                <tr><td>L</td><td>42</td><td>18</td><td>44</td></tr>
                <tr><td>XL</td><td>44</td><td>18.5</td><td>45</td></tr>
                <tr><td>XXL</td><td>46</td><td>19</td><td>46</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
