import { useState } from "react";
import { motion } from "framer-motion";
import { Save, X } from "lucide-react";

const MedicationForm = ({ onSave, onCancel, initialData = null }) => {
  const [formData, setFormData] = useState(
    initialData || {
      name: "",
      dose: "",
      schedule: "",
      frequency: "diaria",
      notes: "",
    }
  );

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "El nombre del medicamento es obligatorio";
    }
    if (!formData.dose.trim()) {
      newErrors.dose = "La dosis es obligatoria";
    }
    if (!formData.schedule.trim()) {
      newErrors.schedule = "Debe especificar al menos un horario";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSave(formData);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-lg p-6 md:p-8 space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {initialData ? "Editar Medicamento" : "Nuevo Medicamento"}
      </h2>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Nombre del medicamento *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-primary transition ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Ej: Ibuprofeno"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="dose"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Dosis *
        </label>
        <input
          type="text"
          id="dose"
          name="dose"
          value={formData.dose}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-primary transition ${
            errors.dose ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Ej: 400mg"
        />
        {errors.dose && (
          <p className="text-red-500 text-sm mt-1">{errors.dose}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="schedule"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Horarios *
        </label>
        <input
          type="text"
          id="schedule"
          name="schedule"
          value={formData.schedule}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-primary transition ${
            errors.schedule ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Ej: 8:00 AM, 2:00 PM, 8:00 PM"
        />
        {errors.schedule && (
          <p className="text-red-500 text-sm mt-1">{errors.schedule}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="frequency"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Frecuencia
        </label>
        <select
          id="frequency"
          name="frequency"
          value={formData.frequency}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition"
        >
          <option value="diaria">Diaria</option>
          <option value="cada-8-horas">Cada 8 horas</option>
          <option value="cada-12-horas">Cada 12 horas</option>
          <option value="cada-24-horas">Cada 24 horas</option>
          <option value="lunes-miercoles-viernes">
            Lunes, Miércoles, Viernes
          </option>
          <option value="fines-de-semana">Fines de semana</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="notes"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Notas (opcional)
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows="3"
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
          placeholder="Tomar con alimentos, después de comer, etc."
        />
      </div>

      <div className="flex space-x-3 pt-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="flex-1 bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition flex items-center justify-center space-x-2"
        >
          <Save className="h-5 w-5" />
          <span>Guardar</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          onClick={onCancel}
          className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition flex items-center justify-center space-x-2"
        >
          <X className="h-5 w-5" />
          <span>Cancelar</span>
        </motion.button>
      </div>
    </motion.form>
  );
};

export default MedicationForm;
