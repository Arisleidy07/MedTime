import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white shadow-sm sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="flex items-center space-x-3 hover:opacity-80 transition"
          >
            <img
              src="/CONTENIDO/HEART.png"
              alt="MedTime Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-2xl font-bold text-primary">MedTime</span>
          </Link>

          {!isHome && (
            <Link
              to="/"
              className="flex items-center space-x-1 text-gray-600 hover:text-primary transition"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="hidden sm:inline">Inicio</span>
            </Link>
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
