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
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Hero Section - Video pantalla completa */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ marginTop: 0, paddingTop: 0 }}
      >
        {/* Video de fondo */}
        <div className="absolute inset-0 w-full h-full">
          <VideoBackground videos={videos} opacity={0.7} />
        </div>

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Contenido sobre el video */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-4"
          >
            Controla tus
            <span className="text-primary"> Medicamentos</span>
            <br />
            con <span className="text-primary">MedTime</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base md:text-xl text-gray-200 mb-6 max-w-3xl mx-auto px-4"
          >
            La aplicación más completa e intuitiva para gestionar tus
            medicamentos
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Link to="/dashboard">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 md:px-12 md:py-5 bg-primary text-white rounded-2xl font-bold text-base md:text-xl shadow-2xl hover:bg-blue-600 transition-all inline-flex items-center space-x-2"
              >
                <span>Comenzar Ahora</span>
                <ArrowRight className="h-6 w-6" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-4xl animate-bounce cursor-pointer"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <i className="bi bi-chevron-down"></i>
        </motion.div>
      </section>

      {/* Contenido abajo */}
      <div className="relative z-10 px-4 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl text-gray-300 leading-relaxed"
          >
            La aplicación más completa e intuitiva para gestionar tus
            medicamentos.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/dashboard">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-primary text-white rounded-2xl font-bold text-xl shadow-xl hover:bg-blue-600 transition-all inline-flex items-center space-x-2"
              >
                <span>Comenzar Ahora</span>
                <ArrowRight className="h-6 w-6" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-3 gap-6 pt-8"
          >
            {stats.slice(0, 3).map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-primary mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-8"
          >
            <motion.img
              src="/CONTENIDO/HEART.png"
              alt="MedTime"
              className="h-64 w-64 mx-auto object-contain drop-shadow-2xl"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* How it Works - Premium Design */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mb-20 px-4"
      >
        <div className="bg-gray-900 rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-12 text-white relative overflow-hidden border border-gray-800">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-3">
              ¿Cómo funciona?
            </h2>
            <p className="text-center text-white/90 text-base md:text-lg mb-8">
              Tres simples pasos para cuidar tu salud
            </p>

            <div className="grid md:grid-cols-3 gap-4 md:gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl border border-white/20"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-6 shadow-xl">
                  <span className="text-2xl md:text-3xl font-black text-primary">
                    1
                  </span>
                </div>
                <h4 className="font-bold text-lg md:text-xl mb-2 text-center">
                  Agrega Medicamentos
                </h4>
                <p className="text-white/90 text-center text-sm md:text-base">
                  Selecciona dosis, horarios y frecuencia
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl border border-white/20"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-6 shadow-xl">
                  <span className="text-2xl md:text-3xl font-black text-primary">
                    2
                  </span>
                </div>
                <h4 className="font-bold text-lg md:text-xl mb-2 text-center">
                  Visualiza Dashboard
                </h4>
                <p className="text-white/90 text-center text-sm md:text-base">
                  Medicamentos organizados con estadísticas
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl border border-white/20"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-6 shadow-xl">
                  <span className="text-2xl md:text-3xl font-black text-primary">
                    3
                  </span>
                </div>
                <h4 className="font-bold text-lg md:text-xl mb-2 text-center">
                  Marca Tomados
                </h4>
                <p className="text-white/90 text-center text-sm md:text-base">
                  Un clic para crear historial automático
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img
              src="/CONTENIDO/HEART.png"
              alt="MedTime"
              className="h-8 w-8 object-contain"
            />
            <span className="text-2xl font-bold text-white">MedTime</span>
          </div>
          <p className="text-gray-400">
            Cuida tu salud, un medicamento a la vez 💊
          </p>
          <p className="text-sm text-gray-500 mt-2">
            © 2025 MedTime. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
