import { useState, useMemo } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FoodCard from "@/components/FoodCard";
import ItemDetailModal from "@/components/ItemDetailModal";
import { categories, menuItems, MenuItem, getItemsByCategory } from "@/data/menuData";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("chicken");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const displayedItems = useMemo(
    () => getItemsByCategory(selectedCategory),
    [selectedCategory]
  );

  const handleViewDetails = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setIsCategoryOpen(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-12 sm:py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">Our Menu</h1>
          <p className="text-white/90 text-lg">
            Discover our complete selection of delicious meals
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            {/* Mobile Dropdown */}
            <div className="lg:hidden mb-6">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="w-full bg-red-600 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-between hover:bg-red-700 transition-colors"
              >
                <span>
                  {categories.find((c) => c.id === selectedCategory)?.name ||
                    "Select Category"}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    isCategoryOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isCategoryOpen && (
                <div className="mt-2 bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategorySelect(category.id)}
                      className={`w-full text-left px-4 py-3 font-semibold transition-colors ${
                        selectedCategory === category.id
                          ? "bg-red-100 text-red-600 border-l-4 border-red-600"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:block bg-gray-50 rounded-xl p-6 sticky top-24">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategorySelect(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all ${
                      selectedCategory === category.id
                        ? "bg-red-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-white hover:shadow-sm"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content - Food Grid */}
          <div className="lg:col-span-3">
            {/* Category Title */}
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                {categories.find((c) => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-gray-600">
                {displayedItems.length} items available
              </p>
            </div>

            {/* Food Grid */}
            {displayedItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedItems.map((item) => (
                  <FoodCard
                    key={item.id}
                    item={item}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-600 text-lg">
                  No items available in this category
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />

      {/* Item Detail Modal */}
      <ItemDetailModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
