import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Plus, History, Pill, AlertCircle } from "lucide-react";
import MedicationCard from "../components/MedicationCard";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { markAsTaken, deleteMedication } from "../utils/medicationHelpers";
import VideoBackground from "../components/VideoBackground";

const Dashboard = () => {
  const videos = [
    "/CONTENIDO/1.mp4",
    "/CONTENIDO/4.mp4",
    "/CONTENIDO/5.mp4",
    "/CONTENIDO/6.mp4",
  ];

  const [medications, setMedications] = useLocalStorage("medications", []);
  const [history, setHistory] = useLocalStorage("history", []);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleMarkAsTaken = (id) => {
    markAsTaken(medications, setMedications, history, setHistory, id);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de eliminar este medicamento?")) {
      deleteMedication(medications, setMedications, id);
    }
  };

  const pendingMedications = medications.filter(
    (med) => med.status === "pending"
  );
  const takenMedications = medications.filter((med) => med.status === "taken");

  return (
    <div className="min-h-screen bg-black">
      {/* Sin video */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Success Message */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center space-x-2"
            >
              <AlertCircle className="h-5 w-5" />
              <span className="font-semibold">
                ¡Medicamento marcado como tomado!
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center">
            <img
              src="/CONTENIDO/SPI.png"
              alt="Medicamentos"
              className="h-10 w-10 mr-3"
            />
            Mis Medicamentos
          </h1>
          <p className="text-gray-400">
            Gestiona tus medicamentos y lleva un control de tu tratamiento
          </p>
        </motion.div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Link to="/add-medication">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary text-white py-4 px-6 rounded-xl font-semibold hover:bg-primary/90 transition shadow-lg flex items-center justify-center space-x-2"
            >
              <Plus className="h-6 w-6" />
              <span>Añadir Medicamento</span>
            </motion.button>
          </Link>

          <Link to="/history">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-purple-700 transition shadow-lg flex items-center justify-center space-x-2"
            >
              <History className="h-6 w-6" />
              <span>Ver Historial</span>
            </motion.button>
          </Link>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-800"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-sm mb-1">Total Pendiente</p>
                <p className="text-3xl font-bold text-white">
                  {pendingMedications.length}
                </p>
              </div>
              <img
                src="/CONTENIDO/HO.png"
                alt="Pendiente"
                className="h-12 w-12"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-800"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-sm mb-1">Tomado Hoy</p>
                <p className="text-3xl font-bold text-white">
                  {takenMedications.length}
                </p>
              </div>
              <img
                src="/CONTENIDO/HEART.png"
                alt="Tomado"
                className="h-12 w-12"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-800"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-sm mb-1">Ver Historial</p>
                <p className="text-3xl font-bold text-white">
                  {history.length}
                </p>
              </div>
              <img
                src="/CONTENIDO/BOOK.png"
                alt="Historial"
                className="h-12 w-12"
              />
            </div>
          </motion.div>
        </div>

        {/* Medications List */}
        {medications.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <Pill className="h-24 w-24 text-gray-600 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-3">
              No hay medicamentos registrados
            </h3>
            <p className="text-gray-400 mb-6">
              Comienza agregando tu primer medicamento
            </p>
            <Link to="/add-medication">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition flex items-center space-x-2 shadow-lg"
              >
                <Plus className="h-5 w-5" />
                <span>Añadir Medicamento</span>
              </motion.button>
            </Link>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {pendingMedications.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Pendientes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pendingMedications.map((medication) => (
                    <MedicationCard
                      key={medication.id}
                      medication={medication}
                      onMarkAsTaken={handleMarkAsTaken}
                      onDelete={handleDelete}
                    />
                  ))}
                </div>
              </div>
            )}

            {takenMedications.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Tomados Hoy
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {takenMedications.map((medication) => (
                    <MedicationCard
                      key={medication.id}
                      medication={medication}
                      onMarkAsTaken={handleMarkAsTaken}
                      onDelete={handleDelete}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
