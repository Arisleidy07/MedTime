import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { History as HistoryIcon, ArrowLeft, Calendar } from "lucide-react";
import HistoryItem from "../components/HistoryItem";
import { useLocalStorage } from "../hooks/useLocalStorage";

const History = () => {
  const [history] = useLocalStorage("history", []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Video de Fondo */}
      <div className="fixed inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-15"
        >
          <source src="/CONTENIDO/3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/90"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            to="/dashboard"
            className="inline-flex items-center text-primary hover:text-primary/80 transition mb-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span>Volver al Dashboard</span>
          </Link>

          <div className="flex items-center space-x-3 mb-2">
            <HistoryIcon className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold text-gray-800">Historial</h1>
          </div>
          <p className="text-gray-600">
            Registro completo de medicamentos tomados
          </p>
        </motion.div>

        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-primary to-secondary rounded-xl shadow-lg p-6 mb-8 text-white"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm mb-1">Total de registros</p>
              <p className="text-4xl font-bold">{history.length}</p>
            </div>
            <Calendar className="h-16 w-16 text-white/30" />
          </div>
        </motion.div>

        {/* History List */}
        {history.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white rounded-xl shadow-md"
          >
            <HistoryIcon className="h-24 w-24 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">
              No hay registros aún
            </h3>
            <p className="text-gray-500 mb-6">
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
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Registros recientes
            </h2>
            {history.map((item, index) => (
              <HistoryItem key={item.id} item={item} index={index} />
            ))}
          </div>
        )}

        {/* Export Option (Future Enhancement) */}
        {history.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg"
          >
            <p className="text-sm text-blue-800">
              💡 <strong>Tip:</strong> Puedes compartir este historial con tu
              médico en tu próxima consulta.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default History;
