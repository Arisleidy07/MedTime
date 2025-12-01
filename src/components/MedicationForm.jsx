import { useState } from "react";
import { motion } from "framer-motion";
import { Save, X } from "lucide-react";

const MedicationForm = ({ onSave, onCancel, initialData = null }) => {
  const [formData, setFormData] = useState(
    initialData || {
      name: "",
      dose: "",
      customDose: "",
      schedule: "",
      customSchedule: "",
      frequency: "diaria",
      notes: "",
    }
  );

  const [errors, setErrors] = useState({});
  const [showCustomDose, setShowCustomDose] = useState(false);
  const [showCustomSchedule, setShowCustomSchedule] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle dose selection
    if (name === "dose") {
      setShowCustomDose(value === "personalizada");
      if (value !== "personalizada") {
        setFormData((prev) => ({ ...prev, dose: value, customDose: "" }));
      } else {
        setFormData((prev) => ({ ...prev, dose: value }));
      }
    }
    // Handle schedule selection
    else if (name === "schedule") {
      setShowCustomSchedule(value === "personalizado");
      if (value !== "personalizado") {
        setFormData((prev) => ({
          ...prev,
          schedule: value,
          customSchedule: "",
        }));
      } else {
        setFormData((prev) => ({ ...prev, schedule: value }));
      }
    }
    // Other fields
    else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

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

    // Validate dose
    if (!formData.dose) {
      newErrors.dose = "La dosis es obligatoria";
    } else if (
      formData.dose === "personalizada" &&
      !formData.customDose.trim()
    ) {
      newErrors.customDose = "Especifica la dosis personalizada";
    }

    // Validate schedule
    if (!formData.schedule) {
      newErrors.schedule = "Debe especificar al menos un horario";
    } else if (
      formData.schedule === "personalizado" &&
      !formData.customSchedule.trim()
    ) {
      newErrors.customSchedule = "Especifica el horario personalizado";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Prepare final data with actual values
      const finalData = {
        ...formData,
        dose:
          formData.dose === "personalizada"
            ? formData.customDose
            : formData.dose,
        schedule:
          formData.schedule === "personalizado"
            ? formData.customSchedule
            : formData.schedule,
      };
      onSave(finalData);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="bg-gray-900 rounded-xl shadow-lg p-6 md:p-8 space-y-6"
    >
      <h2 className="text-2xl font-bold text-white mb-6">
        {initialData ? "Editar Medicamento" : "Nuevo Medicamento"}
      </h2>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-white mb-2"
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

      {/* Dosis Selector */}
      <div>
        <label
          htmlFor="dose"
          className="block text-sm font-semibold text-white mb-2"
        >
          Dosis *
        </label>
        <select
          id="dose"
          name="dose"
          value={formData.dose}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-primary transition ${
            errors.dose ? "border-red-500" : "border-gray-300"
          }`}
        >
          <option value="">Selecciona una dosis</option>
          <option value="1 tableta">1 tableta</option>
          <option value="2 tabletas">2 tabletas</option>
          <option value="1/2 tableta">1/2 tableta</option>
          <option value="100mg">100mg</option>
          <option value="200mg">200mg</option>
          <option value="400mg">400mg</option>
          <option value="500mg">500mg</option>
          <option value="1000mg">1000mg (1g)</option>
          <option value="5ml">5ml</option>
          <option value="10ml">10ml</option>
          <option value="15ml">15ml</option>
          <option value="1 cucharada">1 cucharada</option>
          <option value="1 cucharadita">1 cucharadita</option>
          <option value="1 gota">1 gota</option>
          <option value="2 gotas">2 gotas</option>
          <option value="personalizada">✏️ Personalizada</option>
        </select>
        {errors.dose && (
          <p className="text-red-500 text-sm mt-1">{errors.dose}</p>
        )}

        {/* Custom Dose Input */}
        {showCustomDose && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-3"
          >
            <input
              type="text"
              name="customDose"
              value={formData.customDose}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-primary transition ${
                errors.customDose ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Ej: 750mg cada 12 horas"
            />
            {errors.customDose && (
              <p className="text-red-500 text-sm mt-1">{errors.customDose}</p>
            )}
          </motion.div>
        )}
      </div>

      {/* Horarios Selector */}
      <div>
        <label
          htmlFor="schedule"
          className="block text-sm font-semibold text-white mb-2"
        >
          Horarios *
        </label>
        <select
          id="schedule"
          name="schedule"
          value={formData.schedule}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-primary transition ${
            errors.schedule ? "border-red-500" : "border-gray-300"
          }`}
        >
          <option value="">Selecciona un horario</option>
          <option value="8:00 AM">8:00 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="6:00 PM">6:00 PM</option>
          <option value="10:00 PM">10:00 PM</option>
          <option value="8:00 AM, 8:00 PM">8:00 AM, 8:00 PM</option>
          <option value="8:00 AM, 2:00 PM, 8:00 PM">
            8:00 AM, 2:00 PM, 8:00 PM
          </option>
          <option value="8:00 AM, 12:00 PM, 6:00 PM, 10:00 PM">
            8:00 AM, 12:00 PM, 6:00 PM, 10:00 PM
          </option>
          <option value="7:00 AM, 3:00 PM, 11:00 PM">
            7:00 AM, 3:00 PM, 11:00 PM
          </option>
          <option value="9:00 AM, 9:00 PM">9:00 AM, 9:00 PM</option>
          <option value="Cada 4 horas">Cada 4 horas</option>
          <option value="Cada 6 horas">Cada 6 horas</option>
          <option value="Cada 8 horas">Cada 8 horas</option>
          <option value="En ayunas (antes del desayuno)">
            En ayunas (antes del desayuno)
          </option>
          <option value="Con el desayuno">Con el desayuno</option>
          <option value="Después del almuerzo">Después del almuerzo</option>
          <option value="Antes de dormir">Antes de dormir</option>
          <option value="personalizado">✏️ Personalizado</option>
        </select>
        {errors.schedule && (
          <p className="text-red-500 text-sm mt-1">{errors.schedule}</p>
        )}

        {/* Custom Schedule Input */}
        {showCustomSchedule && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-3"
          >
            <input
              type="text"
              name="customSchedule"
              value={formData.customSchedule}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-primary transition ${
                errors.customSchedule ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Ej: 8:30 AM, 1:45 PM, 7:30 PM"
            />
            {errors.customSchedule && (
              <p className="text-red-500 text-sm mt-1">
                {errors.customSchedule}
              </p>
            )}
          </motion.div>
        )}
      </div>

      {/* Frecuencia Selector */}
      <div>
        <label
          htmlFor="frequency"
          className="block text-sm font-semibold text-white mb-2"
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
          <option value="diaria">📅 Diaria (Todos los días)</option>
          <option value="cada-4-horas">⏰ Cada 4 horas</option>
          <option value="cada-6-horas">⏰ Cada 6 horas</option>
          <option value="cada-8-horas">⏰ Cada 8 horas</option>
          <option value="cada-12-horas">⏰ Cada 12 horas</option>
          <option value="cada-24-horas">⏰ Cada 24 horas</option>
          <option value="dia-por-medio">📆 Día por medio</option>
          <option value="lunes">📌 Solo Lunes</option>
          <option value="martes">📌 Solo Martes</option>
          <option value="miercoles">📌 Solo Miércoles</option>
          <option value="jueves">📌 Solo Jueves</option>
          <option value="viernes">📌 Solo Viernes</option>
          <option value="sabado">📌 Solo Sábado</option>
          <option value="domingo">📌 Solo Domingo</option>
          <option value="lunes-miercoles-viernes">
            🗓️ Lunes, Miércoles, Viernes
          </option>
          <option value="martes-jueves">🗓️ Martes, Jueves</option>
          <option value="lunes-a-viernes">🗓️ Lunes a Viernes</option>
          <option value="fines-de-semana">🗓️ Fines de semana (Sáb-Dom)</option>
          <option value="cada-semana">📅 Una vez a la semana</option>
          <option value="cada-dos-semanas">📅 Cada dos semanas</option>
          <option value="mensual">📅 Una vez al mes</option>
          <option value="segun-necesidad">💊 Según necesidad</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="notes"
          className="block text-sm font-semibold text-white mb-2"
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
          className="flex-1 bg-gray-200 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition flex items-center justify-center space-x-2"
        >
          <X className="h-5 w-5" />
          <span>Cancelar</span>
        </motion.button>
      </div>
    </motion.form>
  );
};

export default MedicationForm;
