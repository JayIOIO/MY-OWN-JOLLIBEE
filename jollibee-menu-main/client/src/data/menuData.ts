// Menu data structure for Jollibee-inspired fast-food website
// Design Note: Food-first hierarchy with generous imagery and minimal text clutter

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  variants?: string[];
  isSpecial?: boolean;
  badge?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon?: string;
}

export const categories: MenuCategory[] = [
  { id: "chicken", name: "Chicken" },
  { id: "burgers", name: "Burgers" },
  { id: "spaghetti", name: "Spaghetti" },
  { id: "rice-meals", name: "Rice Meals" },
  { id: "desserts", name: "Desserts" },
  { id: "drinks", name: "Drinks" },
];

export const menuItems: MenuItem[] = [
  // Chicken Category
  {
    id: "chickenjoy-1pc",
    name: "Chickenjoy 1-Piece",
    description: "Crispy golden fried chicken served with gravy and your choice of rice or fries",
    price: 89,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-chickenjoy-FAPH2qvbQFNqBz6UsSjam4.webp",
    category: "chicken",
    variants: ["Solo", "With Drink", "With Rice", "With Fries and Drink"],
    isSpecial: true,
    badge: "Bestseller",
  },
  {
    id: "chickenjoy-2pc",
    name: "Chickenjoy 2-Piece",
    description: "Two pieces of our signature crispy fried chicken with gravy",
    price: 149,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-chickenjoy-FAPH2qvbQFNqBz6UsSjam4.webp",
    category: "chicken",
    variants: ["Solo", "With Drink", "With Rice", "With Fries and Drink"],
    isSpecial: true,
    badge: "Bestseller",
  },
  {
    id: "chickenjoy-3pc",
    name: "Chickenjoy 3-Piece",
    description: "Three pieces of crispy fried chicken with rich brown gravy",
    price: 199,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-chickenjoy-FAPH2qvbQFNqBz6UsSjam4.webp",
    category: "chicken",
    variants: ["Solo", "With Drink", "With Rice", "With Fries and Drink"],
  },
  {
    id: "spicy-chickenjoy",
    name: "Spicy Chickenjoy",
    description: "Crispy fried chicken with a spicy kick and special sauce",
    price: 99,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-chickenjoy-FAPH2qvbQFNqBz6UsSjam4.webp",
    category: "chicken",
    variants: ["1-Piece", "2-Piece", "3-Piece"],
  },

  // Burgers Category
  {
    id: "yumburger",
    name: "Yumburger",
    description: "Juicy beef patty with melted cheese, fresh lettuce, tomato, and special sauce",
    price: 79,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-burger-fn5p57SK9HKmeYy78V9BqF.webp",
    category: "burgers",
    variants: ["Solo", "With Fries", "With Drink", "Combo Meal"],
    isSpecial: true,
    badge: "Popular",
  },
  {
    id: "burger-steak",
    name: "Burger Steak",
    description: "Tender beef patty topped with savory brown gravy and onions on a soft bun",
    price: 89,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/burger-steak-eAgf7uPomXZ5rRsXYcHv3T.webp",
    category: "burgers",
    variants: ["Solo", "With Fries", "With Drink", "Combo Meal"],
    isSpecial: true,
  },
  {
    id: "double-yumburger",
    name: "Double Yumburger",
    description: "Two beef patties with double cheese and all the fixings",
    price: 119,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-burger-fn5p57SK9HKmeYy78V9BqF.webp",
    category: "burgers",
    variants: ["Solo", "With Fries", "With Drink", "Combo Meal"],
  },
  {
    id: "chickenjoy-sandwich",
    name: "Chickenjoy Sandwich",
    description: "Crispy fried chicken breast on a soft bun with mayo and fresh vegetables",
    price: 69,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-chickenjoy-FAPH2qvbQFNqBz6UsSjam4.webp",
    category: "burgers",
    variants: ["Solo", "With Fries", "With Drink"],
  },

  // Spaghetti Category
  {
    id: "jolly-spaghetti",
    name: "Jolly Spaghetti",
    description: "Creamy red spaghetti with savory meat sauce and grated cheese",
    price: 99,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-spaghetti-5xxzVyX6HNhANEtaBhEB6C.webp",
    category: "spaghetti",
    variants: ["Regular", "Large"],
    isSpecial: true,
    badge: "Bestseller",
  },
  {
    id: "palabok-fiesta",
    name: "Palabok Fiesta",
    description: "Crispy noodles topped with shrimp sauce, egg, and fresh vegetables",
    price: 109,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-spaghetti-5xxzVyX6HNhANEtaBhEB6C.webp",
    category: "spaghetti",
    variants: ["Regular", "Large"],
  },
  {
    id: "carbonara",
    name: "Carbonara Spaghetti",
    description: "Creamy carbonara sauce with bacon bits and parmesan cheese",
    price: 119,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-spaghetti-5xxzVyX6HNhANEtaBhEB6C.webp",
    category: "spaghetti",
    variants: ["Regular", "Large"],
  },

  // Rice Meals Category
  {
    id: "chickenjoy-rice",
    name: "Chickenjoy with Rice",
    description: "Crispy fried chicken served with fluffy white rice and gravy",
    price: 99,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-chickenjoy-FAPH2qvbQFNqBz6UsSjam4.webp",
    category: "rice-meals",
    variants: ["1-Piece", "2-Piece", "3-Piece"],
  },
  {
    id: "burger-steak-rice",
    name: "Burger Steak with Rice",
    description: "Tender beef patty with gravy served over steaming white rice",
    price: 99,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/burger-steak-eAgf7uPomXZ5rRsXYcHv3T.webp",
    category: "rice-meals",
    variants: ["Solo", "With Egg"],
  },
  {
    id: "adobo-rice",
    name: "Chicken Adobo with Rice",
    description: "Tender chicken braised in savory adobo sauce served with rice",
    price: 89,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-chickenjoy-FAPH2qvbQFNqBz6UsSjam4.webp",
    category: "rice-meals",
    variants: ["Regular", "Large"],
  },

  // Desserts Category
  {
    id: "peach-mango-pie",
    name: "Peach Mango Pie",
    description: "Golden-brown pastry with creamy peach mango filling",
    price: 39,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/peach-mango-pie-DuUhec6AdcY9X7USvq4wNY.webp",
    category: "desserts",
    variants: ["Single", "Pair"],
    isSpecial: true,
    badge: "Fan Favorite",
  },
  {
    id: "apple-pie",
    name: "Apple Pie",
    description: "Crispy pastry with sweet apple filling",
    price: 39,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/peach-mango-pie-DuUhec6AdcY9X7USvq4wNY.webp",
    category: "desserts",
    variants: ["Single", "Pair"],
  },
  {
    id: "chocolate-cake",
    name: "Chocolate Cake",
    description: "Rich and moist chocolate cake with chocolate frosting",
    price: 49,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/peach-mango-pie-DuUhec6AdcY9X7USvq4wNY.webp",
    category: "desserts",
    variants: ["Slice", "Whole Cake"],
  },
  {
    id: "sundae",
    name: "Sundae",
    description: "Creamy vanilla ice cream topped with chocolate syrup and sprinkles",
    price: 29,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/peach-mango-pie-DuUhec6AdcY9X7USvq4wNY.webp",
    category: "desserts",
    variants: ["Regular", "Large"],
  },

  // Drinks Category
  {
    id: "iced-tea",
    name: "Iced Tea",
    description: "Refreshing iced tea in various flavors",
    price: 29,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-chickenjoy-FAPH2qvbQFNqBz6UsSjam4.webp",
    category: "drinks",
    variants: ["Small", "Medium", "Large"],
  },
  {
    id: "soft-drink",
    name: "Soft Drink",
    description: "Your choice of cola, sprite, or other beverages",
    price: 29,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-chickenjoy-FAPH2qvbQFNqBz6UsSjam4.webp",
    category: "drinks",
    variants: ["Small", "Medium", "Large"],
  },
  {
    id: "coffee",
    name: "Coffee",
    description: "Hot or iced coffee made fresh",
    price: 39,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-chickenjoy-FAPH2qvbQFNqBz6UsSjam4.webp",
    category: "drinks",
    variants: ["Hot", "Iced"],
  },
  {
    id: "juice",
    name: "Fresh Juice",
    description: "Fresh fruit juice - mango, orange, or pineapple",
    price: 49,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454728230/V6YfNTtndFLcuZ8XHno63q/hero-chickenjoy-FAPH2qvbQFNqBz6UsSjam4.webp",
    category: "drinks",
    variants: ["Mango", "Orange", "Pineapple"],
  },
];

export const getItemsByCategory = (categoryId: string): MenuItem[] => {
  return menuItems.filter((item) => item.category === categoryId);
};

export const getCategoryName = (categoryId: string): string => {
  const category = categories.find((cat) => cat.id === categoryId);
  return category?.name || "";
};
