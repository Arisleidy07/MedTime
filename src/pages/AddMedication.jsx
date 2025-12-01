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
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-2xl mx-auto px-4">
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
