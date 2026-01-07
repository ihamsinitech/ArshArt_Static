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
   PAGADI PRODUCTS
======================= */
const products = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  sku: `ARSH-PAG-${i + 1}`,
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

/* =======================
   PAGADI DETAILS
======================= */
const productDetails = {
  material: "Silk Blend",
  work: "Traditional Pleats",
  washCare: "Dry Clean Only",
  itemsIncluded: "1 Pagadi",
  description:
    "Royal pagadi crafted for weddings, receptions, and grand traditional ceremonies.",
};

export default function PagadiPage() {
  const [activeProduct, setActiveProduct] = useState(null);
  const [activeImage, setActiveImage] = useState("front");
  const [qty, setQty] = useState(1);
  const [wishlist, setWishlist] = useState([]);
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
    if (!selectedColor) {
      alert("Please select color");
      return;
    }

    const cartItem = {
      id: activeProduct.id,
      sku: activeProduct.sku,
      name: activeProduct.name,
      price: activeProduct.price,
      image: activeProduct.images.front,
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
                <FaEye /> 3,412 people viewed recently
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

              {/* Size Chart */}
              <div className="block size-header">
                <p>Size</p>
                <span
                  className="size-chart"
                  onClick={() => setShowSizeChart(true)}
                >
                  Size Chart
                </span>
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
                          Ships within 48 hours. Easy exchange/return as per policy.
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
         PAGADI SIZE CHART
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

            <h2>Pagadi Size Chart (Adult)</h2>

            <table>
              <thead>
                <tr>
                  <th>Size</th>
                  <th>S</th>
                  <th>M</th>
                  <th>L</th>
                  <th>XL</th>
                  <th>XXL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CM</td>
                  <td>53.5</td>
                  <td>54.5</td>
                  <td>56</td>
                  <td>57</td>
                  <td>58.5</td>
                </tr>
                <tr>
                  <td>INCH</td>
                  <td>21</td>
                  <td>21.5</td>
                  <td>22</td>
                  <td>22.5</td>
                  <td>23</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
