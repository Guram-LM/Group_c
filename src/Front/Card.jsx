import React from 'react'

 const Card = () => {
  return (
    <div class="coffee-card">
      <div class="coffee-image" style="background-image: url('images/espresso.jpg')"></div>
      <div class="coffee-info">
        <h3 class="coffee-name">ყავის სახელი</h3>
        <p class="coffee-description">ყავის დახასიათება</p>
        <div class="price-container">
          <p class="coffee-price">$2.99(ყავის ფასი)</p>
          <button class="currency-toggle" data-id="1">
            <i class="fas fa-exchange-alt"></i>
          </button>
        </div>
        <div class="card-buttons">
          <button class="add-to-cart" data-id="1">Add to Cart</button>
          <a href="details.html?id=1" class="details-btn">Details</a>
        </div>
      </div>
    </div>
  )
}
export default Card()