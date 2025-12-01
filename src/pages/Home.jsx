import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Pill, Bell, Clock, History, ArrowRight } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Recordatorios",
      description: "Nunca olvides tomar tus medicamentos a tiempo",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Horarios",
      description: "Configura múltiples horarios para cada medicamento",
    },
    {
      icon: <History className="h-8 w-8" />,
      title: "Historial",
      description: "Lleva un registro completo de tu tratamiento",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-6"
          >
            <div className="p-6 bg-primary rounded-3xl shadow-2xl">
              <Pill className="h-16 w-16 text-white" />
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Bienvenido a <span className="text-primary">MedTime</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Tu asistente personal para gestionar medicamentos de forma simple y
            efectiva. Nunca más olvidarás tomar tus medicinas.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/dashboard"
              className="inline-flex items-center space-x-3 bg-primary text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-primary/90 transition shadow-lg hover:shadow-xl"
            >
              <span>Entrar a la App</span>
              <ArrowRight className="h-6 w-6" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            ¿Cómo funciona?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h4 className="font-semibold text-lg mb-2">
                Agrega tus medicamentos
              </h4>
              <p className="text-gray-600 text-sm">
                Introduce el nombre, dosis y horarios de cada medicamento
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h4 className="font-semibold text-lg mb-2">Visualiza tu lista</h4>
              <p className="text-gray-600 text-sm">
                Ve todos tus medicamentos organizados en un dashboard claro
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h4 className="font-semibold text-lg mb-2">Marca como tomado</h4>
              <p className="text-gray-600 text-sm">
                Con un simple clic registra cuando tomas tu medicamento
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16 text-gray-500"
        >
          <p>MedTime - Cuida tu salud, un medicamento a la vez 💊</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
