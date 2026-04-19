import { useState } from "react";
import { Trash2, Plus, Minus, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

export default function Cart() {
  const { items, removeItem, updateQuantity, clearCart, total } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "cash",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.address) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    // Simulate order placement
    toast.success("Order placed successfully!", {
      description: `Order total: ₱${total.toLocaleString()}`,
    });

    clearCart();
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      paymentMethod: "cash",
    });
    setIsCheckingOut(false);
  };

  if (items.length === 0 && !isCheckingOut) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />

        <div className="flex-1 container mx-auto px-4 py-16 flex flex-col items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Your cart is empty
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Start adding delicious items to your order!
            </p>
            <Link href="/menu">
              <a>
                <Button className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8">
                  <ArrowLeft className="mr-2 w-5 h-5" />
                  Continue Shopping
                </Button>
              </a>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-8 sm:py-12 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold">
            {isCheckingOut ? "Checkout" : "Shopping Cart"}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 py-8 sm:py-12">
        {!isCheckingOut ? (
          // Cart View
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border-2 border-gray-200 rounded-lg p-4 sm:p-6 flex gap-4"
                  >
                    {/* Image */}
                    <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">
                          {item.name}
                        </h3>
                        {item.variant && (
                          <p className="text-sm text-gray-600">
                            Variant: {item.variant}
                          </p>
                        )}
                        <p className="text-red-600 font-bold text-lg mt-2">
                          ₱{item.price}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="p-1 hover:bg-gray-100 rounded transition-colors"
                        >
                          <Minus className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="font-bold text-lg w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-1 hover:bg-gray-100 rounded transition-colors"
                        >
                          <Plus className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>

                    {/* Price & Remove */}
                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-600 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                      <p className="font-bold text-lg text-gray-900">
                        ₱{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping */}
              <Link href="/menu">
                <a>
                  <button className="mt-6 text-red-600 hover:text-red-700 font-semibold flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Continue Shopping
                  </button>
                </a>
              </Link>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <h3 className="font-bold text-xl text-gray-900 mb-6">
                  Order Summary
                </h3>

                <div className="space-y-3 mb-6 pb-6 border-b-2 border-gray-200">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span>₱{total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Delivery Fee</span>
                    <span>₱50</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Tax (12%)</span>
                    <span>₱{Math.round(total * 0.12).toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-2xl text-red-600">
                    ₱{(total + 50 + Math.round(total * 0.12)).toLocaleString()}
                  </span>
                </div>

                <Button
                  onClick={() => setIsCheckingOut(true)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-6"
                >
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        ) : (
          // Checkout Form
          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => setIsCheckingOut(false)}
              className="mb-6 text-red-600 hover:text-red-700 font-semibold flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Cart
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Checkout Form */}
              <div>
                <h3 className="font-bold text-2xl text-gray-900 mb-6">
                  Delivery Information
                </h3>

                <form onSubmit={handleCheckout} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                      placeholder="+63 9XX XXX XXXX"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Delivery Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                      placeholder="123 Main St, City, Country"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Payment Method
                    </label>
                    <select
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                    >
                      <option value="cash">Cash on Delivery</option>
                      <option value="card">Credit/Debit Card</option>
                      <option value="gcash">GCash</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-6 mt-6"
                  >
                    Place Order
                  </Button>
                </form>
              </div>

              {/* Order Review */}
              <div>
                <h3 className="font-bold text-2xl text-gray-900 mb-6">
                  Order Review
                </h3>

                <div className="bg-gray-50 rounded-lg p-6 space-y-4 mb-6">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-start pb-4 border-b border-gray-200"
                    >
                      <div>
                        <p className="font-semibold text-gray-900">
                          {item.name}
                        </p>
                        {item.variant && (
                          <p className="text-sm text-gray-600">
                            {item.variant}
                          </p>
                        )}
                        <p className="text-sm text-gray-600">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="font-bold text-gray-900">
                        ₱{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-red-50 rounded-lg p-6 border-2 border-red-200">
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-gray-700">
                      <span>Subtotal</span>
                      <span>₱{total.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Delivery</span>
                      <span>₱50</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Tax (12%)</span>
                      <span>₱{Math.round(total * 0.12).toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="border-t-2 border-red-200 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">Total</span>
                      <span className="font-bold text-2xl text-red-600">
                        ₱{(total + 50 + Math.round(total * 0.12)).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
