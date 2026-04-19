import { ShoppingCart } from "lucide-react";
import { Link } from "wouter";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { itemCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 font-bold text-2xl">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
              J
            </div>
            <span className="text-gray-900">Jollibee</span>
          </a>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/">
            <a className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Home
            </a>
          </Link>
          <Link href="/menu">
            <a className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Menu
            </a>
          </Link>
          <a
            href="#"
            className="text-gray-700 hover:text-red-600 font-medium transition-colors"
          >
            About
          </a>
        </div>

        {/* Cart Button */}
        <Link href="/cart">
          <a>
            <Button
              variant="outline"
              size="lg"
              className="relative border-red-600 text-red-600 hover:bg-red-50"
            >
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>
          </a>
        </Link>
      </div>
    </nav>
  );
}
