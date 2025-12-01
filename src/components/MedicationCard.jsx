import { motion } from "framer-motion";
import { Clock, Pill, CheckCircle2, Circle, Trash2 } from "lucide-react";

const MedicationCard = ({ medication, onMarkAsTaken, onDelete }) => {
  const isTaken = medication.status === "taken";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ scale: 1.02 }}
      className={`bg-white rounded-xl shadow-md p-6 border-2 transition-all ${
        isTaken ? "border-green-400 bg-green-50" : "border-gray-200"
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-start space-x-3 flex-1">
          <div
            className={`p-2 rounded-lg ${
              isTaken ? "bg-green-100" : "bg-primary/10"
            }`}
          >
            <Pill
              className={`h-6 w-6 ${
                isTaken ? "text-green-600" : "text-primary"
              }`}
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {medication.name}
            </h3>
            <p className="text-gray-600 text-sm mb-2">
              <span className="font-medium">Dosis:</span> {medication.dose}
            </p>
          </div>
        </div>

        {onDelete && (
          <button
            onClick={() => onDelete(medication.id)}
            className="text-red-500 hover:text-red-700 transition p-2 hover:bg-red-50 rounded-lg"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        )}
      </div>

      <div className="space-y-3">
        <div className="flex items-center text-gray-700">
          <Clock className="h-5 w-5 mr-2 text-primary" />
          <span className="text-sm">
            <span className="font-medium">Horarios:</span> {medication.schedule}
          </span>
        </div>

        {medication.frequency && (
          <div className="text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
            <span className="font-medium">Frecuencia:</span>{" "}
            {medication.frequency}
          </div>
        )}

        {medication.notes && (
          <div className="text-sm text-gray-600 italic border-l-2 border-primary pl-3">
            {medication.notes}
          </div>
        )}

        {isTaken && medication.takenAt && (
          <div className="text-xs text-green-600 font-medium flex items-center">
            <CheckCircle2 className="h-4 w-4 mr-1" />
            Tomado:{" "}
            {new Date(medication.takenAt).toLocaleTimeString("es-ES", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        )}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onMarkAsTaken(medication.id)}
        disabled={isTaken}
        className={`w-full mt-4 py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all ${
          isTaken
            ? "bg-green-500 text-white cursor-not-allowed"
            : "bg-primary text-white hover:bg-primary/90 active:bg-primary/80"
        }`}
      >
        {isTaken ? (
          <>
            <CheckCircle2 className="h-5 w-5" />
            <span>Tomado</span>
          </>
        ) : (
          <>
            <Circle className="h-5 w-5" />
            <span>Marcar como tomado</span>
          </>
        )}
      </motion.button>
    </motion.div>
  );
};

export default MedicationCard;
