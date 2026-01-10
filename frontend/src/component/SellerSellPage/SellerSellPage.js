// import React, { useState } from "react";
// import "./SellerSellPage.css";

// const vegetables = [
//     { name: "Potato", price: 28, unit: "kg", img: "🥔" },
//     { name: "Onion", price: 32, unit: "kg", img: "🧅" },
//     { name: "Tomato", price: 40, unit: "kg", img: "🍅" },
//     { name: "Carrot", price: 38, unit: "kg", img: "🥕" },
//     { name: "Cabbage", price: 30, unit: "pc", img: "🥬" },
//     { name: "Cauliflower", price: 45, unit: "pc", img: "🥦" },
//     { name: "Brinjal", price: 42, unit: "kg", img: "🍆" },
//     { name: "Lady Finger", price: 50, unit: "kg", img: "🌶️" },
//     { name: "Green Peas", price: 90, unit: "kg", img: "🟢" },
//     { name: "Spinach", price: 20, unit: "bunch", img: "🥬" },
//     { name: "Bottle Gourd", price: 35, unit: "pc", img: "🥒" },
//     { name: "Pumpkin", price: 25, unit: "kg", img: "🎃" },
//     { name: "Radish", price: 28, unit: "kg", img: "🫜" },
//     { name: "Beetroot", price: 36, unit: "kg", img: "🍠" },
//     { name: "Green Chilli", price: 60, unit: "kg", img: "🌶️" },
//     { name: "Coriander", price: 15, unit: "bunch", img: "🌿" },
//     { name: "Garlic", price: 110, unit: "kg", img: "🧄" },
//     { name: "Ginger", price: 90, unit: "kg", img: "🫚" },
//     { name: "Sweet Corn", price: 25, unit: "pc", img: "🌽" },
//     { name: "Bitter Gourd", price: 55, unit: "kg", img: "🥒" },
// ];

// const SellerSellPage = () => {
//     const [search, setSearch] = useState("");
//     const [unitFilter, setUnitFilter] = useState("all");
//     const [priceSort, setPriceSort] = useState("default");
//     const [cart, setCart] = useState([]);

//     const addToCart = (veg) => {
//         const existing = cart.find((item) => item.name === veg.name);

//         if (existing) {
//             setCart(
//                 cart.map((item) =>
//                     item.name === veg.name
//                         ? { ...item, qty: item.qty + 1 }
//                         : item
//                 )
//             );
//         } else {
//             setCart([...cart, { ...veg, qty: 1 }]);
//         }
//     };
//     const filteredVegetables = vegetables
//         .filter((veg) =>
//             veg.name.toLowerCase().includes(search.toLowerCase())
//         )
//         .filter((veg) =>
//             unitFilter === "all" ? true : veg.unit === unitFilter
//         )
//         .sort((a, b) => {
//             if (priceSort === "low") return a.price - b.price;
//             if (priceSort === "high") return b.price - a.price;
//             return 0;
//         });

//     return (
//         <div className="sell-page">
//             {/* HEADER */}
//             <div className="sell-header">
//                 <h1>Sell Your Fresh Village Vegetables</h1>
//                 <p>
//                     Directly from your farm to VegiMart customers. Fair price • Fast selling • Trusted platform
//                 </p>
//             </div>

//             {/* FILTER BAR */}
//             <div className="sell-filter">
//                 <input
//                     type="text"
//                     placeholder="Search vegetable..."
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                 />

//                 <select value={unitFilter} onChange={(e) => setUnitFilter(e.target.value)}>
//                     <option value="all">All Units</option>
//                     <option value="kg">Kg</option>
//                     <option value="pc">Piece</option>
//                     <option value="bunch">Bunch</option>
//                 </select>

//                 <select value={priceSort} onChange={(e) => setPriceSort(e.target.value)}>
//                     <option value="default">Sort by Price</option>
//                     <option value="low">Low → High</option>
//                     <option value="high">High → Low</option>
//                 </select>
//             </div>

//             {/* GRID */}
//             <div className="veg-grid">
//                 {filteredVegetables.length ? (
//                     filteredVegetables.map((veg, index) => (
//                         <div className="veg-card" key={index}>
//                             <div className="veg-img">{veg.img}</div>
//                             <h3>{veg.name}</h3>
//                             <p className="price">
//                                 ₹{veg.price} <span>/{veg.unit}</span>
//                             </p>
//                             <button className="sell-btn">Add to Cart</button>
//                         </div>
//                     ))
//                 ) : (
//                     <p className="no-result">No vegetables found</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default SellerSellPage;
import React, { useState } from "react";
import "./SellerSellPage.css";

const vegetables = [
    { name: "Potato", price: 28, unit: "kg", img: "🥔" },
    { name: "Onion", price: 32, unit: "kg", img: "🧅" },
    { name: "Tomato", price: 40, unit: "kg", img: "🍅" },
    { name: "Carrot", price: 38, unit: "kg", img: "🥕" },
    { name: "Cabbage", price: 30, unit: "pc", img: "🥬" },
    { name: "Cauliflower", price: 45, unit: "pc", img: "🥦" },
    { name: "Brinjal", price: 42, unit: "kg", img: "🍆" },
    { name: "Lady Finger", price: 50, unit: "kg", img: "🌶️" },
    { name: "Green Peas", price: 90, unit: "kg", img: "🟢" },
    { name: "Spinach", price: 20, unit: "bunch", img: "🥬" },
    { name: "Bottle Gourd", price: 35, unit: "pc", img: "🥒" },
    { name: "Pumpkin", price: 25, unit: "kg", img: "🎃" },
    { name: "Radish", price: 28, unit: "kg", img: "🫜" },
    { name: "Beetroot", price: 36, unit: "kg", img: "🍠" },
    { name: "Green Chilli", price: 60, unit: "kg", img: "🌶️" },
    { name: "Coriander", price: 15, unit: "bunch", img: "🌿" },
    { name: "Garlic", price: 110, unit: "kg", img: "🧄" },
    { name: "Ginger", price: 90, unit: "kg", img: "🫚" },
    { name: "Sweet Corn", price: 25, unit: "pc", img: "🌽" },
    { name: "Bitter Gourd", price: 55, unit: "kg", img: "🥒" },
];

const SellerSellPage = () => {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const addToCart = (veg) => {
    const found = cart.find((i) => i.name === veg.name);
    if (found) {
      setCart(cart.map(i =>
        i.name === veg.name ? { ...i, qty: i.qty + 1 } : i
      ));
    } else {
      setCart([...cart, { ...veg, qty: 1 }]);
    }
  };

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const filtered = vegetables.filter(v =>
    v.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="premium-page">

      {/* TOP BAR */}
      <div className="top-bar">
        <div>
          <h1>VegiMart Seller Panel</h1>
          <p>Sell fresh • Earn fast • Grow local 🌱</p>
        </div>

        <div className="cart-indicator">
          🛒 <span>{cart.length}</span>
        </div>
      </div>

      {/* FILTER */}
      <div className="filter-bar">
        <input
          placeholder="Search village vegetables..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* CONTENT */}
      <div className="content-area">

        {/* PRODUCTS */}
        <div className="product-grid">
          {filtered.map((veg, i) => (
            <div className="product-card" key={i}>
              <div className="emoji">{veg.img}</div>
              <h3>{veg.name}</h3>
              <p className="rate">
                ₹{veg.price} <span>/{veg.unit}</span>
              </p>
              <button onClick={() => addToCart(veg)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* CART */}
        <div className="cart-box">
          <h3>Your Cart</h3>

          {cart.length === 0 ? (
            <p className="empty">No items added</p>
          ) : (
            cart.map((item, i) => (
              <div className="cart-row" key={i}>
                <span>{item.img}</span>
                <div>
                  <strong>{item.name}</strong>
                  <p>{item.qty} × ₹{item.price}</p>
                </div>
                <b>₹{item.qty * item.price}</b>
              </div>
            ))
          )}

          <div className="total">
            <span>Total</span>
            <strong>₹{total}</strong>
          </div>

          <button className="checkout">
            Continue Selling →
          </button>
        </div>

      </div>
    </div>
  );
};

export default SellerSellPage;
