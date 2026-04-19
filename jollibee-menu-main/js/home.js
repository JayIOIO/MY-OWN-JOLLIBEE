// Home page functionality
document.addEventListener("DOMContentLoaded", () => {
  loadFeaturedItems();
  loadCategoriesGrid();
  setupHamburgerMenu();
});

// Load featured items (items with badges)
function loadFeaturedItems() {
  const featuredGrid = document.getElementById("featured-grid");
  const featuredItems = menuData.items.filter((item) => item.badge);

  featuredGrid.innerHTML = featuredItems
    .slice(0, 4)
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
          <button class="btn-add-cart" onclick="addToCartFromHome('${item.id}')">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

// Load categories grid
function loadCategoriesGrid() {
  const categoriesGrid = document.getElementById("categories-grid");

  categoriesGrid.innerHTML = menuData.categories
    .map(
      (category) => `
    <a href="menu.html?category=${category.id}" style="text-decoration: none">
      <div style="
        background-color: #f5f5f5;
        padding: 30px;
        border-radius: 10px;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s ease;
      " onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 8px rgba(0,0,0,0.1)'">
        <div style="font-size: 48px; margin-bottom: 15px">${category.icon}</div>
        <p style="font-weight: 700; color: #333; font-size: 16px">${category.name}</p>
      </div>
    </a>
  `
    )
    .join("");
}

// Add to cart from home page
function addToCartFromHome(itemId) {
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
