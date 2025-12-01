import { motion } from "framer-motion";
import { CheckCircle2, Calendar, Clock } from "lucide-react";

const HistoryItem = ({ item, index }) => {
  const takenDate = new Date(item.takenAt);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <div className="p-2 bg-green-100 rounded-full">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-semibold text-gray-800 mb-1">
            {item.medicationName}
          </h4>
          <p className="text-sm text-gray-600 mb-2">Dosis: {item.dose}</p>

          <div className="flex flex-wrap gap-3 text-xs text-gray-500">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {takenDate.toLocaleDateString("es-ES", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {takenDate.toLocaleTimeString("es-ES", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HistoryItem;
