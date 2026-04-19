// Cart management using localStorage
class Cart {
  constructor() {
    this.storageKey = "jollibee_cart";
    this.items = this.loadCart();
  }

  // Load cart from localStorage
  loadCart() {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  // Save cart to localStorage
  saveCart() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.items));
    this.notifyListeners();
  }

  // Add item to cart
  addItem(item) {
    const existingItem = this.items.find((i) => i.id === item.id);

    if (existingItem) {
      existingItem.quantity += item.quantity || 1;
    } else {
      this.items.push({
        ...item,
        quantity: item.quantity || 1,
      });
    }

    this.saveCart();
  }

  // Remove item from cart
  removeItem(itemId) {
    this.items = this.items.filter((item) => item.id !== itemId);
    this.saveCart();
  }

  // Update item quantity
  updateQuantity(itemId, quantity) {
    const item = this.items.find((i) => i.id === itemId);
    if (item) {
      if (quantity <= 0) {
        this.removeItem(itemId);
      } else {
        item.quantity = quantity;
        this.saveCart();
      }
    }
  }

  // Get all items
  getItems() {
    return this.items;
  }

  // Get cart total
  getTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // Get item count
  getItemCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }

  // Clear cart
  clearCart() {
    this.items = [];
    this.saveCart();
  }

  // Subscribe to cart changes
  subscribe(callback) {
    if (!this.listeners) {
      this.listeners = [];
    }
    this.listeners.push(callback);
  }

  // Notify all listeners
  notifyListeners() {
    if (this.listeners) {
      this.listeners.forEach((callback) => callback(this));
    }
  }
}

// Create global cart instance
const cart = new Cart();

// Update cart badge in navigation
function updateCartBadge() {
  const badge = document.getElementById("cart-badge");
  const count = cart.getItemCount();

  if (badge) {
    if (count > 0) {
      badge.textContent = count;
      badge.style.display = "flex";
    } else {
      badge.style.display = "none";
    }
  }
}

// Initialize cart on page load
document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  cart.subscribe(updateCartBadge);
});
