import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  CheckCircle,
  Award,
} from "lucide-react";
import VideoBackground from "../components/VideoBackground";

const Home = () => {
  const videos = [
    "/CONTENIDO/1.mp4",
    "/CONTENIDO/2.mp4",
    "/CONTENIDO/3.mp4",
    "/CONTENIDO/4.mp4",
    "/CONTENIDO/5.mp4",
    "/CONTENIDO/6.mp4",
  ];
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      value: "1000+",
      label: "Usuarios Activos",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      value: "10K+",
      label: "Medicamentos Tomados",
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: "99%",
      label: "Satisfacción",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: "24/7",
      label: "Disponibilidad",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <VideoBackground videos={videos} opacity={0.5} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 md:py-16">
        {/* Hero Section con Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div className="space-y-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full"
              >
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-primary font-semibold">
                  Tu Salud, Nuestra Prioridad
                </span>
              </motion.div>

              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-black text-gray-900 leading-tight"
              >
                Controla tus
                <span className="text-primary"> Medicamentos</span>
                <br />
                con <span className="text-primary">MedTime</span>
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                La aplicación más completa e intuitiva para gestionar tus
                medicamentos. Recordatorios inteligentes, historial detallado y
                control total de tu tratamiento.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/dashboard">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(2, 132, 199, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl hover:bg-blue-600 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Comenzar Ahora</span>
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </Link>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-primary rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-primary/20"
                >
                  Ver Características
                </motion.button>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-6 pt-8"
              >
                {stats.slice(0, 3).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-primary mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Side - Imagen Grande */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative flex items-center justify-center"
            >
              <motion.img
                src="/CONTENIDO/HEART.png"
                alt="MedTime"
                className="h-96 w-96 object-contain drop-shadow-2xl"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* How it Works - Premium Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl shadow-2xl p-8 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                ¿Cómo funciona?
              </h2>
              <p className="text-center text-white/90 text-xl mb-12">
                Tres simples pasos para cuidar tu salud
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
                >
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <span className="text-4xl font-black text-primary">1</span>
                  </div>
                  <h4 className="font-bold text-2xl mb-3 text-center">
                    Agrega Medicamentos
                  </h4>
                  <p className="text-white/90 text-center">
                    Selecciona dosis, horarios y frecuencia con opciones
                    predefinidas
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
                >
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <span className="text-4xl font-black text-primary">2</span>
                  </div>
                  <h4 className="font-bold text-2xl mb-3 text-center">
                    Visualiza Dashboard
                  </h4>
                  <p className="text-white/90 text-center">
                    Todos tus medicamentos organizados con estadísticas en
                    tiempo real
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
                >
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <span className="text-4xl font-black text-primary">3</span>
                  </div>
                  <h4 className="font-bold text-2xl mb-3 text-center">
                    Marca Tomados
                  </h4>
                  <p className="text-white/90 text-center">
                    Un clic para registrar y crear historial automático
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="text-center mb-12"
        >
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <Sparkles className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¿Listo para empezar?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Únete a miles de usuarios que cuidan su salud con MedTime
            </p>
            <Link to="/dashboard">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-white text-primary rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all"
              >
                Comenzar Gratis Ahora
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="text-center py-8 border-t border-gray-200"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img
              src="/CONTENIDO/HEART.png"
              alt="MedTime"
              className="h-8 w-8 object-contain"
            />
            <span className="text-2xl font-bold text-primary">MedTime</span>
          </div>
          <p className="text-gray-600">
            Cuida tu salud, un medicamento a la vez 💊
          </p>
          <p className="text-sm text-gray-500 mt-2">
            © 2025 MedTime. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
