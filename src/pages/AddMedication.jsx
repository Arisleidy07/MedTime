import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import MedicationForm from "../components/MedicationForm";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { addMedication } from "../utils/medicationHelpers";

const AddMedication = () => {
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
    <div className="min-h-screen relative overflow-hidden py-8">
      {/* Video de Fondo */}
      <div className="fixed inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-15"
        >
          <source src="/CONTENIDO/4.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/90"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Añadir Nuevo Medicamento
          </h1>
          <p className="text-gray-600">
            Completa la información de tu medicamento
          </p>
        </motion.div>

        <MedicationForm onSave={handleSave} onCancel={handleCancel} />
      </div>
    </div>
  );
};

export default AddMedication;
