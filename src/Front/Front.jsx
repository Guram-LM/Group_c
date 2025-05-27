import React from "react";
import "./Front.css";

export const Front = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="logo">
          <img src="images/coffee-logo.png" alt="Coffee Shop Logo" />
          <h1>Bean Brew</h1>
        </div>
        <ul className="nav-links">
          <li>
            <a href="index.html" className="active">
              <i className="fas fa-mug-hot"></i>
              <span>Coffee Menu</span>
            </a>
          </li>
          <li>
            <a href="cart.html" className="cart-icon-container">
              <i className="fas fa-shopping-cart"></i>
              <span>Cart</span>
              <div className="cart-badge" style={{ display: "none" }}>0</div>
            </a>
          </li>
        </ul>
      </div>

      <div className="main-content">
        <div className="header">
          <h2>Coffee Selection</h2>
          <div className="currency-selector">
            <label htmlFor="index-currency">Currency:</label>
            <select id="index-currency" className="currency-dropdown">
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
            </select>
          </div>
        </div>

        <div className="coffee-list">
          {[
            {
              id: 1,
              name: "Espresso",
              description: "Strong and concentrated coffee served in small shots.",
              price: "$2.99",
              image: "espresso.jpg"
            },
            {
              id: 2,
              name: "Cappuccino",
              description: "Equal parts espresso, steamed milk, and milk foam.",
              price: "$3.99",
              image: "cappuccino.jpg"
            },
            {
              id: 3,
              name: "Latte",
              description: "Espresso with steamed milk and a small layer of foam.",
              price: "$4.29",
              image: "latte.jpg"
            },
            {
              id: 4,
              name: "Mocha",
              description: "Espresso with chocolate, steamed milk, and whipped cream.",
              price: "$4.79",
              image: "mocha.jpg"
            },
            {
              id: 5,
              name: "Americano",
              description: "Espresso diluted with hot water.",
              price: "$3.49",
              image: "americano.jpg"
            },
            {
              id: 6,
              name: "Macchiato",
              description: "Espresso with a small amount of foamed milk.",
              price: "$3.79",
              image: "macchiato.jpg"
            }
          ].map((coffee) => (
            <div className="coffee-card" key={coffee.id}>
              <div
                className="coffee-image"
                style={{
                  backgroundImage: `url(images/${coffee.image})`
                }}
              ></div>
              <div className="coffee-info">
                <h3 className="coffee-name">{coffee.name}</h3>
                <p className="coffee-description">{coffee.description}</p>
                <div className="price-container">
                  <p className="coffee-price">{coffee.price}</p>
                  <button className="currency-toggle" data-id={coffee.id}>
                    <i className="fas fa-exchange-alt"></i>
                  </button>
                </div>
                <div className="card-buttons">
                  <button className="add-to-cart" data-id={coffee.id}>Add to Cart</button>
                  <a href={`details.html?id=${coffee.id}`} className="details-btn">Details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};
