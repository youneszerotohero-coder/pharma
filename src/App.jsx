import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import DashboardPage from "./pages/DashboardPage";

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
        <Route path="/product/:id" element={
          <ProductPage theme={theme} toggleTheme={toggleTheme} />
        } />
        <Route path="/dashboard" element={
          <DashboardPage theme={theme} toggleTheme={toggleTheme} />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App
