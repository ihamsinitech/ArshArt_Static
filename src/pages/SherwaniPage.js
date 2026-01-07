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
   SHERWANI PRODUCT DATA
======================= */
const products = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  sku: `ARSH-SHER-${i + 1}`,
  name: `Designer Sherwani ${i + 1}`,
  price: 8999 + i * 500,
  rating: 4.7,
  reviews: 110 + i * 5,
  sizes: ["S", "M", "L", "XL", "XXL"],
  colors: [
    { name: "Ivory", code: "#f8f5e6" },
    { name: "Gold", code: "#d4af37" },
    { name: "Maroon", code: "#800000" },
  ],
  images: {
    front: `/images/products/men/sherwani/sherwani-0${i + 1}/front.jpg`,
    back: `/images/products/men/sherwani/sherwani-0${i + 1}/back.jpg`,
    side: `/images/products/men/sherwani/sherwani-0${i + 1}/side.jpg`,
  },
}));

/* =======================
   COMMON PRODUCT DETAILS
======================= */
const productDetails = {
  colour: "Ivory / Gold / Maroon",
  material: "Silk Blend",
  work: "Embroidery",
  washCare: "Dry Clean Only",
  itemsIncluded: "Sherwani & Churidar",
  description:
    "An elegant sherwani crafted with rich fabric and detailed embroidery, perfect for weddings and grand occasions.",
};

export default function SherwaniPage() {
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
     CART STATE (ADDED)
  ======================= */
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  /* =======================
     BANNER SLIDER
  ======================= */
  const bannerImages = [
    "/images/banners/sherwani/banner1.jpg",
    "/images/banners/sherwani/banner2.jpg",
    "/images/banners/sherwani/banner3.jpg",
    "/images/banners/sherwani/banner4.jpg",
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
     ADD TO CART (DYNAMIC)
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

    setCart((prev) => [...prev, cartItem]);
    alert("Added to cart 🛒");
  };

  /* =======================
     BUY NOW (DYNAMIC)
  ======================= */
  const handleBuyNow = () => {
    handleAddToCart();
    window.location.href = "/checkout";
  };

  return (
    <div className="sherwani-page">
      {/* =======================
         SHERWANI BANNER
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
                <h1>SHERWANI COLLECTION</h1>
                <p>Traditional Elegance, Contemporary Style</p>
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
                <FaEye /> 12,764 people have viewed the product recently
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

              {/* Pincode */}
              <div className="pincode-row">
                <input placeholder="Enter pincode" />
                <button>CHECK</button>
              </div>

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
                          All ready to ship products are shipped within 48 hours of placing the order.
                          A standard delivery date will be provided in the order confirmation email.
                          Easy Exchange/Return available for all garments except Accessories till 7 days from date of order.
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
         SHERWANI SIZE CHART
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

            <h2>Sherwani Size Chart (Inches)</h2>

            <table>
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Shoulder</th>
                  <th>Chest</th>
                  <th>Waist</th>
                  <th>Length</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>S</td><td>18</td><td>42</td><td>42</td><td>45</td></tr>
                <tr><td>M</td><td>18.5</td><td>44</td><td>44</td><td>46</td></tr>
                <tr><td>L</td><td>19</td><td>46</td><td>46</td><td>47</td></tr>
                <tr><td>XL</td><td>19.5</td><td>48</td><td>48</td><td>48</td></tr>
                <tr><td>XXL</td><td>20</td><td>50</td><td>50</td><td>49</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
