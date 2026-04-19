// Menu data structure for Jollibee-inspired fast-food website
const menuData = {
  categories: [
    { id: "chicken", name: "Chicken", icon: "🍗" },
    { id: "burgers", name: "Burgers", icon: "🍔" },
    { id: "pasta", name: "Pasta", icon: "🍝" },
    { id: "rice", name: "Rice Meals", icon: "🍚" },
    { id: "desserts", name: "Desserts", icon: "🍰" },
    { id: "drinks", name: "Drinks", icon: "🥤" },
    { id: "sides", name: "Sides", icon: "🍟" },
  ],

  items: [
    // Chicken
    {
      id: "chickenjoy-1pc",
      name: "Chickenjoy 1-Piece",
      category: "chicken",
      price: 89,
      description: "Crispy fried chicken with gravy",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-chickenjoy-FAPH2qvbQFNqBz6UsSjam4.webp",
      badge: "Bestseller",
    },
    {
      id: "chickenjoy-2pc",
      name: "Chickenjoy 2-Piece",
      category: "chicken",
      price: 149,
      description: "Two pieces of crispy fried chicken",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-chickenjoy-FAPH2qvbQFNqBz6UsSjam4.webp",
      badge: "Bestseller",
    },
    {
      id: "chickenjoy-3pc",
      name: "Chickenjoy 3-Piece",
      category: "chicken",
      price: 199,
      description: "Three pieces of crispy fried chicken",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-chickenjoy-FAPH2qvbQFNqBz6UsSjam4.webp",
    },
    {
      id: "spicy-chickenjoy",
      name: "Spicy Chickenjoy",
      category: "chicken",
      price: 99,
      description: "Crispy fried chicken with spicy kick",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-chickenjoy-FAPH2qvbQFNqBz6UsSjam4.webp",
    },

    // Burgers
    {
      id: "yumburger",
      name: "Yumburger",
      category: "burgers",
      price: 79,
      description: "Juicy beef patty with cheese and lettuce",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-burger-fn5p57SK9HKmeYy78V9BqF.webp",
      badge: "Popular",
    },
    {
      id: "burger-steak",
      name: "Burger Steak",
      category: "burgers",
      price: 89,
      description: "Tender beef patty with savory gravy",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/burger-steak-eAgf7uPomXZ5rRsXYcHv3T.webp",
    },
    {
      id: "double-yumburger",
      name: "Double Yumburger",
      category: "burgers",
      price: 119,
      description: "Two beef patties with double cheese",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-burger-fn5p57SK9HKmeYy78V9BqF.webp",
    },
    {
      id: "chickenjoy-sandwich",
      name: "Chickenjoy Sandwich",
      category: "burgers",
      price: 69,
      description: "Crispy chicken breast on soft bun",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-chickenjoy-FAPH2qvbQFNqBz6UsSjam4.webp",
    },

    // Pasta
    {
      id: "jolly-spaghetti",
      name: "Jolly Spaghetti",
      category: "pasta",
      price: 99,
      description: "Creamy red spaghetti with meat sauce",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-spaghetti-5xxzVyX6HNhANEtaBhEB6C.webp",
      badge: "Bestseller",
    },
    {
      id: "palabok-fiesta",
      name: "Palabok Fiesta",
      category: "pasta",
      price: 109,
      description: "Crispy noodles with shrimp sauce",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-spaghetti-5xxzVyX6HNhANEtaBhEB6C.webp",
    },
    {
      id: "carbonara",
      name: "Carbonara Spaghetti",
      category: "pasta",
      price: 119,
      description: "Creamy carbonara with bacon bits",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-spaghetti-5xxzVyX6HNhANEtaBhEB6C.webp",
    },

    // Rice Meals
    {
      id: "chickenjoy-rice",
      name: "Chickenjoy with Rice",
      category: "rice",
      price: 99,
      description: "Crispy chicken with fluffy white rice",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-chickenjoy-FAPH2qvbQFNqBz6UsSjam4.webp",
    },
    {
      id: "burger-steak-rice",
      name: "Burger Steak with Rice",
      category: "rice",
      price: 99,
      description: "Tender beef patty with rice and gravy",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/burger-steak-eAgf7uPomXZ5rRsXYcHv3T.webp",
    },
    {
      id: "adobo-rice",
      name: "Chicken Adobo with Rice",
      category: "rice",
      price: 89,
      description: "Tender chicken in savory adobo sauce",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-chickenjoy-FAPH2qvbQFNqBz6UsSjam4.webp",
    },

    // Desserts
    {
      id: "peach-mango-pie",
      name: "Peach Mango Pie",
      category: "desserts",
      price: 39,
      description: "Golden pastry with creamy peach mango filling",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/peach-mango-pie-DuUhec6AdcY9X7USvq4wNY.webp",
      badge: "Fan Favorite",
    },
    {
      id: "apple-pie",
      name: "Apple Pie",
      category: "desserts",
      price: 39,
      description: "Crispy pastry with sweet apple filling",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/peach-mango-pie-DuUhec6AdcY9X7USvq4wNY.webp",
    },
    {
      id: "chocolate-cake",
      name: "Chocolate Cake",
      category: "desserts",
      price: 49,
      description: "Rich and moist chocolate cake",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/peach-mango-pie-DuUhec6AdcY9X7USvq4wNY.webp",
    },
    {
      id: "sundae",
      name: "Sundae",
      category: "desserts",
      price: 29,
      description: "Vanilla ice cream with chocolate syrup",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/peach-mango-pie-DuUhec6AdcY9X7USvq4wNY.webp",
    },

    // Drinks
    {
      id: "iced-tea",
      name: "Iced Tea",
      category: "drinks",
      price: 29,
      description: "Refreshing iced tea in various flavors",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-chickenjoy-FAPH2qvbQFNqBz6UsSjam4.webp",
    },
    {
      id: "soft-drink",
      name: "Soft Drink",
      category: "drinks",
      price: 29,
      description: "Cola, sprite, or other beverages",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-chickenjoy-FAPH2qvbQFNqBz6UsSjam4.webp",
    },
    {
      id: "coffee",
      name: "Coffee",
      category: "drinks",
      price: 39,
      description: "Hot or iced coffee made fresh",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-chickenjoy-FAPH2qvbQFNqBz6UsSjam4.webp",
    },
    {
      id: "juice",
      name: "Fresh Juice",
      category: "drinks",
      price: 49,
      description: "Fresh fruit juice - mango, orange, or pineapple",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-chickenjoy-FAPH2qvbQFNqBz6UsSjam4.webp",
    },

    // Sides
    {
      id: "fries",
      name: "French Fries",
      category: "sides",
      price: 49,
      description: "Golden crispy french fries",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-burger-fn5p57SK9HKmeYy78V9BqF.webp",
    },
    {
      id: "onion-rings",
      name: "Onion Rings",
      category: "sides",
      price: 59,
      description: "Crispy onion rings with dipping sauce",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-burger-fn5p57SK9HKmeYy78V9BqF.webp",
    },
    {
      id: "coleslaw",
      name: "Coleslaw",
      category: "sides",
      price: 39,
      description: "Fresh cabbage coleslaw",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-chickenjoy-FAPH2qvbQFNqBz6UsSjam4.webp",
    },
  ],
};

// Get items by category
function getItemsByCategory(categoryId) {
  return menuData.items.filter((item) => item.category === categoryId);
}

// Get all items
function getAllItems() {
  return menuData.items;
}

// Get category name by id
function getCategoryName(categoryId) {
  const category = menuData.categories.find((cat) => cat.id === categoryId);
  return category ? category.name : "";
}
