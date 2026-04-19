import { Router, Route } from "wouter";
import ErrorBoundary from "@/components/ErrorBoundary";
import Menu from "@/pages/Menu";
import Cart from "@/pages/Cart";
import NotFound from "@/pages/NotFound";
import { CartProvider } from "@/contexts/CartContext";

export default function App() {
  return (
    <ErrorBoundary>
      <CartProvider>
        <Router>
          <Route path="/" component={Menu} />
          <Route path="/menu" component={Menu} />
          <Route path="/cart" component={Cart} />
          <Route component={NotFound} />
        </Router>
      </CartProvider>
    </ErrorBoundary>
  );
}
