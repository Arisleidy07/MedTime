import { Link, useLocation } from "react-router-dom";
import { Home, Calendar, History, PlusCircle } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Inicio", icon: Home },
    { path: "/dashboard", label: "Medicamentos", icon: Calendar },
    { path: "/add-medication", label: "Agregar", icon: PlusCircle },
    { path: "/history", label: "Historial", icon: History },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-all"
          >
            <img
              src="/CONTENIDO/HEART.png"
              alt="MedTime Logo"
              className="h-12 w-12 object-contain"
            />
            <span className="text-3xl font-black text-primary">MedTime</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold transition-all ${
                    isActive
                      ? "bg-primary text-white shadow-lg"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Navigation */}
          <nav className="flex md:hidden items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex flex-col items-center p-2 rounded-lg transition-all ${
                    isActive ? "text-primary" : "text-gray-600"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-xs mt-1">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
