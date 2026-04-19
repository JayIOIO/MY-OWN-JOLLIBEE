// Menu page functionality
let currentCategory = "chicken";

document.addEventListener("DOMContentLoaded", () => {
  // Get category from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get("category");
  if (categoryParam) {
    currentCategory = categoryParam;
  }

  loadCategories();
  loadMenuItems(currentCategory);
  setupHamburgerMenu();
});

// Load category buttons
function loadCategories() {
  const categoriesList = document.getElementById("categories-list");

  categoriesList.innerHTML = menuData.categories
    .map(
      (category) => `
    <button 
      class="category-btn ${category.id === currentCategory ? "active" : ""}"
      onclick="filterByCategory('${category.id}')"
    >
      ${category.icon} ${category.name}
    </button>
  `
    )
    .join("");
}

// Load menu items for category
function loadMenuItems(categoryId) {
  const menuItemsContainer = document.getElementById("menu-items");
  const items = getItemsByCategory(categoryId);

  if (items.length === 0) {
    menuItemsContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px">
        <p style="font-size: 18px; color: #666">No items available in this category</p>
      </div>
    `;
    return;
  }

  menuItemsContainer.innerHTML = items
    .map(
      (item) => `
    <div class="food-card">
      <img src="${item.image}" alt="${item.name}" class="food-card-image" />
      <div class="food-card-content">
        ${item.badge ? `<span class="food-card-badge">${item.badge}</span>` : ""}
        <h3 class="food-card-name">${item.name}</h3>
        <p class="food-card-description">${item.description}</p>
        <div class="food-card-footer">
          <span class="food-card-price">₱${item.price}</span>
          <button class="btn-add-cart" onclick="addToCart('${item.id}')">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

// Filter by category
function filterByCategory(categoryId) {
  currentCategory = categoryId;
  loadCategories();
  loadMenuItems(categoryId);

  // Update URL
  window.history.pushState({}, "", `menu.html?category=${categoryId}`);
}

// Add to cart
function addToCart(itemId) {
  const item = menuData.items.find((i) => i.id === itemId);
  if (item) {
    cart.addItem(item);
    showNotification(`${item.name} added to cart!`);
  }
}

// Show notification
function showNotification(message) {
  const notification = document.createElement("div");
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #E31937;
    color: white;
    padding: 15px 25px;
    border-radius: 5px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 1000;
    animation: slideIn 0.3s ease;
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
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

// Add CSS animations
const style = document.createElement("style");
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
