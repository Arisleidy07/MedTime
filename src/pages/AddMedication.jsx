import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import MedicationForm from "../components/MedicationForm";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { addMedication } from "../utils/medicationHelpers";
import VideoBackground from "../components/VideoBackground";

const AddMedication = () => {
  const videos = [
    "/CONTENIDO/1.mp4",
    "/CONTENIDO/2.mp4",
    "/CONTENIDO/3.mp4",
    "/CONTENIDO/4.mp4",
    "/CONTENIDO/5.mp4",
    "/CONTENIDO/6.mp4",
  ];

  const navigate = useNavigate();
  const [medications, setMedications] = useLocalStorage("medications", []);

  const handleSave = (formData) => {
    addMedication(medications, setMedications, formData);
    navigate("/dashboard");
  };

  const handleCancel = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-black py-8">
      {/* Tema oscuro */}

      <div className="relative z-10 max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h1 className="text-3xl font-bold text-white mb-2">
            Añadir Nuevo Medicamento
          </h1>
          <p className="text-gray-400">
            Completa la información de tu medicamento
          </p>
        </motion.div>

        <MedicationForm onSave={handleSave} onCancel={handleCancel} />
      </div>
    </div>
  );
};

export default AddMedication;
