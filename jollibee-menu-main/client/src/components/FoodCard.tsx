import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MenuItem } from "@/data/menuData";

interface FoodCardProps {
  item: MenuItem;
  onViewDetails: (item: MenuItem) => void;
}

export default function FoodCard({ item, onViewDetails }: FoodCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-102 cursor-pointer">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-100 h-48 sm:h-56">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />

        {/* Badge */}
        {item.badge && (
          <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
            {item.badge}
          </div>
        )}

        {/* Special Indicator */}
        {item.isSpecial && (
          <div className="absolute top-3 left-3 flex items-center gap-1 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
            <Star className="w-3 h-3 fill-white" />
            Special
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <h3 className="font-bold text-lg text-gray-900 mb-1 line-clamp-2">
          {item.name}
        </h3>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {item.description}
        </p>

        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-red-600">
            ₱{item.price}
          </span>
          <Button
            onClick={() => onViewDetails(item)}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold"
            size="sm"
          >
            View
          </Button>
        </div>
      </div>
    </div>
  );
}
