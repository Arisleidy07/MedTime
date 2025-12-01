import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { History as HistoryIcon, ArrowLeft, Calendar } from "lucide-react";
import HistoryItem from "../components/HistoryItem";
import { useLocalStorage } from "../hooks/useLocalStorage";
import VideoBackground from "../components/VideoBackground";

const History = () => {
  const videos = [
    "/CONTENIDO/1.mp4",
    "/CONTENIDO/2.mp4",
    "/CONTENIDO/3.mp4",
    "/CONTENIDO/4.mp4",
    "/CONTENIDO/5.mp4",
    "/CONTENIDO/6.mp4",
  ];

  const [history] = useLocalStorage("history", []);

  return (
    <div className="min-h-screen bg-black">
      {/* Tema oscuro */}

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            to="/dashboard"
            className="inline-flex items-center text-primary hover:text-blue-400 transition mb-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span>Volver al Dashboard</span>
          </Link>

          <div className="flex items-center space-x-3 mb-2">
            <HistoryIcon className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold text-white">Historial</h1>
          </div>
          <p className="text-gray-400">
            Registro completo de medicamentos tomados
          </p>
        </motion.div>

        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gray-900 rounded-xl shadow-lg p-6 mb-8 text-white border border-gray-800"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white text-sm mb-1">Todo el historial</p>
              <p className="text-4xl font-bold">{history.length}</p>
            </div>
            <img
              src="/CONTENIDO/BOOK.png"
              alt="Historial"
              className="h-16 w-16"
            />
          </div>
        </motion.div>

        {/* History List */}
        {history.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-gray-900 rounded-xl shadow-md border border-gray-800"
          >
            <HistoryIcon className="h-24 w-24 text-gray-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">
              No hay registros aún
            </h3>
            <p className="text-gray-400 mb-6">
              Los medicamentos que marques como tomados aparecerán aquí
            </p>
            <Link to="/dashboard">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white py-3 px-8 rounded-lg font-semibold hover:bg-primary/90 transition"
              >
                Ir al Dashboard
              </motion.button>
            </Link>
          </motion.div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white mb-4">
              Registros recientes
            </h2>
            {history.map((item, index) => (
              <HistoryItem key={item.id} item={item} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
