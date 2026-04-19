// Cart page functionality
document.addEventListener("DOMContentLoaded", () => {
  renderCart();
  setupHamburgerMenu();
  cart.subscribe(renderCart);
});

// Render cart
function renderCart() {
  const cartContent = document.getElementById("cart-content");
  const items = cart.getItems();

  if (items.length === 0) {
    cartContent.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <h2>Your cart is empty</h2>
        <p>Start adding delicious items to your order!</p>
        <a href="menu.html" class="btn btn-primary">Continue Shopping</a>
      </div>
    `;
    return;
  }

  const total = cart.getTotal();
  const tax = Math.round(total * 0.12);
  const delivery = 50;
  const grandTotal = total + tax + delivery;

  cartContent.innerHTML = `
    <div class="cart-items">
      <div class="cart-items-list">
        ${items
          .map(
            (item) => `
          <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image" />
            <div class="cart-item-details">
              <h3>${item.name}</h3>
              <p>₱${item.price} each</p>
              <div class="cart-item-price">₱${(item.price * item.quantity).toLocaleString()}</div>
              <div class="quantity-control">
                <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">−</button>
                <span class="quantity-display">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
              </div>
            </div>
            <button class="btn-remove" onclick="removeFromCart('${item.id}')">Remove</button>
          </div>
        `
          )
          .join("")}
      </div>

      <div class="cart-summary">
        <h3>Order Summary</h3>
        
        <div class="summary-row">
          <span>Subtotal</span>
          <span>₱${total.toLocaleString()}</span>
        </div>
        
        <div class="summary-row">
          <span>Delivery Fee</span>
          <span>₱${delivery}</span>
        </div>
        
        <div class="summary-row">
          <span>Tax (12%)</span>
          <span>₱${tax}</span>
        </div>
        
        <div class="summary-row total">
          <span>Total</span>
          <span class="amount">₱${grandTotal.toLocaleString()}</span>
        </div>

        <button class="btn-checkout" onclick="proceedToCheckout()">
          Proceed to Checkout
        </button>

        <a href="menu.html" style="display: block; text-align: center; margin-top: 15px; color: #E31937; font-weight: 600; text-decoration: none">
          Continue Shopping
        </a>
      </div>
    </div>
  `;
}

// Update quantity
function updateQuantity(itemId, newQuantity) {
  cart.updateQuantity(itemId, newQuantity);
}

// Remove from cart
function removeFromCart(itemId) {
  cart.removeItem(itemId);
}

// Proceed to checkout
function proceedToCheckout() {
  const items = cart.getItems();
  if (items.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Get order details
  const total = cart.getTotal();
  const tax = Math.round(total * 0.12);
  const delivery = 50;
  const grandTotal = total + tax + delivery;

  // Create order summary
  const orderSummary = items
    .map((item) => `${item.name} x${item.quantity} = ₱${item.price * item.quantity}`)
    .join("\n");

  // Show checkout form
  const checkoutHTML = `
    <div style="max-width: 600px; margin: 0 auto">
      <h2 style="margin-bottom: 30px; text-align: center">Checkout</h2>
      
      <form onsubmit="submitOrder(event)">
        <div style="margin-bottom: 20px">
          <label style="display: block; margin-bottom: 8px; font-weight: 600">Full Name *</label>
          <input type="text" id="fullName" required style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 5px; font-size: 14px" placeholder="John Doe" />
        </div>

        <div style="margin-bottom: 20px">
          <label style="display: block; margin-bottom: 8px; font-weight: 600">Email</label>
          <input type="email" id="email" style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 5px; font-size: 14px" placeholder="john@example.com" />
        </div>

        <div style="margin-bottom: 20px">
          <label style="display: block; margin-bottom: 8px; font-weight: 600">Phone Number *</label>
          <input type="tel" id="phone" required style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 5px; font-size: 14px" placeholder="+63 9XX XXX XXXX" />
        </div>

        <div style="margin-bottom: 20px">
          <label style="display: block; margin-bottom: 8px; font-weight: 600">Delivery Address *</label>
          <textarea id="address" required style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 5px; font-size: 14px; font-family: inherit; resize: vertical; min-height: 100px" placeholder="123 Main St, City, Country"></textarea>
        </div>

        <div style="margin-bottom: 20px">
          <label style="display: block; margin-bottom: 8px; font-weight: 600">Payment Method</label>
          <select id="paymentMethod" style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 5px; font-size: 14px; font-family: inherit">
            <option value="cash">Cash on Delivery</option>
            <option value="card">Credit/Debit Card</option>
            <option value="gcash">GCash</option>
          </select>
        </div>

        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin-bottom: 20px">
          <h4 style="margin-bottom: 15px">Order Summary</h4>
          <div style="font-size: 13px; line-height: 1.8; white-space: pre-wrap; color: #666">${orderSummary}</div>
          <div style="border-top: 2px solid #ddd; margin-top: 15px; padding-top: 15px; font-weight: 700; font-size: 16px">
            Total: ₱${grandTotal.toLocaleString()}
          </div>
        </div>

        <button type="submit" class="btn-checkout" style="width: 100%">
          Place Order - ₱${grandTotal.toLocaleString()}
        </button>
      </form>

      <button onclick="cancelCheckout()" style="width: 100%; margin-top: 10px; padding: 12px; background-color: #f5f5f5; border: 2px solid #ddd; border-radius: 5px; font-weight: 600; cursor: pointer">
        Cancel
      </button>
    </div>
  `;

  document.getElementById("cart-content").innerHTML = checkoutHTML;
}

// Submit order
function submitOrder(event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const paymentMethod = document.getElementById("paymentMethod").value;

  if (!fullName || !phone || !address) {
    alert("Please fill in all required fields");
    return;
  }

  // Create order object
  const order = {
    name: fullName,
    email: email,
    phone: phone,
    address: address,
    paymentMethod: paymentMethod,
    items: cart.getItems(),
    total: cart.getTotal(),
    timestamp: new Date().toISOString(),
  };

  // Save order to localStorage (for demo purposes)
  const orders = JSON.parse(localStorage.getItem("jollibee_orders") || "[]");
  orders.push(order);
  localStorage.setItem("jollibee_orders", JSON.stringify(orders));

  // Show success message
  const total = cart.getTotal();
  const tax = Math.round(total * 0.12);
  const grandTotal = total + tax + 50;

  document.getElementById("cart-content").innerHTML = `
    <div class="cart-empty">
      <div style="font-size: 80px; margin-bottom: 20px">✅</div>
      <h2 style="color: #E31937; margin-bottom: 15px">Order Placed Successfully!</h2>
      <p style="font-size: 16px; margin-bottom: 10px">Thank you for your order, ${fullName}!</p>
      <p style="color: #666; margin-bottom: 20px">
        Your order total is <strong>₱${grandTotal.toLocaleString()}</strong>
      </p>
      <p style="color: #666; margin-bottom: 30px">
        We'll deliver your order to:<br />
        <strong>${address}</strong>
      </p>
      <a href="index.html" class="btn btn-primary" style="display: inline-block">Back to Home</a>
    </div>
  `;

  // Clear cart
  cart.clearCart();
}

// Cancel checkout
function cancelCheckout() {
  renderCart();
}

// Setup hamburger menu
function setupHamburgerMenu() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }
}
