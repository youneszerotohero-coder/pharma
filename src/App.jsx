import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import DashboardPage from "./pages/DashboardPage";
import ShopPage from "./pages/ShopPage";
import UserProfile from "./pages/Profile";
import AuthPage from "./pages/AuthPage";
import AdminLayout from "./components/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminCustomers from "./pages/admin/AdminCustomers";
import AdminLoyalty from "./pages/admin/AdminLoyalty";
import AdminDelivery from "./pages/admin/AdminDelivery";
import AdminPromotions from "./pages/admin/AdminPromotions";
import AdminSettings from "./pages/admin/AdminSettings";

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <HomePage />
          </>
        } />
        <Route path="/shop" element={
          <ShopPage theme={theme} toggleTheme={toggleTheme} />
        } />
        <Route path="/product/:id" element={
          <ProductPage theme={theme} toggleTheme={toggleTheme} />
        } />
        <Route path="/dashboard" element={
          <DashboardPage theme={theme} toggleTheme={toggleTheme} />
        } />
        <Route path="/profile" element={
          <>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <UserProfile />
          </>
        } />
        <Route path="/login" element={
          <AuthPage />
        } />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout theme={theme} toggleTheme={toggleTheme} />}>
          <Route index element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="customers" element={<AdminCustomers />} />
          <Route path="loyalty" element={<AdminLoyalty />} />
          <Route path="delivery" element={<AdminDelivery />} />
          <Route path="promotions" element={<AdminPromotions />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
