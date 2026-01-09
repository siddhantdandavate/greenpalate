import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "@/contexts/AppContext";

// Customer Pages
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import SubscriptionsPage from "./pages/SubscriptionsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AccountPage from "./pages/AccountPage";
import AuthPage from "./pages/AuthPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CareersPage from "./pages/CareersPage";
import PressPage from "./pages/PressPage";
import BlogPage from "./pages/BlogPage";
import HelpPage from "./pages/HelpPage";
import FAQsPage from "./pages/FAQsPage";
import DeliveryPage from "./pages/DeliveryPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import RefundsPage from "./pages/RefundsPage";
import CookiesPage from "./pages/CookiesPage";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminMenu from "./pages/admin/AdminMenu";
import AdminMarketing from "./pages/admin/AdminMarketing";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Customer Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/subscriptions" element={<SubscriptionsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/account/orders" element={<AccountPage />} />
            <Route path="/account/subscriptions" element={<AccountPage />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/register" element={<AuthPage />} />
            <Route path="/auth" element={<AuthPage />} />
            
            {/* Company Pages */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/press" element={<PressPage />} />
            <Route path="/blog" element={<BlogPage />} />
            
            {/* Support Pages */}
            <Route path="/help" element={<HelpPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/delivery" element={<DeliveryPage />} />
            
            {/* Legal Pages */}
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/refunds" element={<RefundsPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/orders" element={<AdminOrders />} />
            <Route path="/admin/menu" element={<AdminMenu />} />
            <Route path="/admin/marketing" element={<AdminMarketing />} />
            
            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AppProvider>
  </QueryClientProvider>
);

export default App;
