import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Pill,
  Bell,
  Clock,
  History,
  ArrowRight,
  Shield,
  Heart,
  Smartphone,
  Calendar,
  CheckCircle,
  Star,
  Sparkles,
  Activity,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";
import VideoCarousel from "../components/VideoCarousel";

const Home = () => {
  // Aquí puedes agregar tus videos
  const videos = [
    // '/assets/videos/video1.mp4',
    // '/assets/videos/video2.mp4',
    // '/assets/videos/video3.mp4',
  ];

  const features = [
    {
      icon: <Bell className="h-10 w-10" />,
      title: "Recordatorios Inteligentes",
      description:
        "Notificaciones precisas para que nunca olvides tomar tus medicamentos",
      color: "from-primary to-secondary",
    },
    {
      icon: <Calendar className="h-10 w-10" />,
      title: "Horarios Flexibles",
      description: "Configura múltiples horarios adaptados a tu rutina diaria",
      color: "from-secondary to-accent",
    },
    {
      icon: <History className="h-10 w-10" />,
      title: "Historial Completo",
      description: "Registro detallado de todo tu tratamiento médico",
      color: "from-slate-600 to-slate-700",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Datos Seguros",
      description: "Tu información médica protegida localmente",
      color: "from-success to-emerald-600",
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Acceso Móvil",
      description: "Disponible en todos tus dispositivos, siempre contigo",
      color: "from-cyan-600 to-teal-600",
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Cuida tu Salud",
      description: "Diseñado pensando en tu bienestar y tranquilidad",
      color: "from-danger to-red-600",
    },
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-8 md:py-16">
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
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  {" "}
                  Medicamentos
                </span>
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
                      boxShadow: "0 20px 40px rgba(10, 77, 104, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-bold text-lg shadow-xl overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <span>Comenzar Ahora</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
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

            {/* Right Side - Video/Image Section */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              {videos.length > 0 ? (
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <VideoCarousel videos={videos} />
                </div>
              ) : (
                <div className="relative h-[500px] bg-gradient-to-br from-primary/15 via-secondary/15 to-slate-200 rounded-3xl shadow-2xl backdrop-blur-sm flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <div className="relative text-center p-8">
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <Pill className="h-32 w-32 text-primary mx-auto mb-6" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Coloca tus videos aquí
                    </h3>
                    <p className="text-gray-600">
                      Agrega videos en la carpeta public/assets/videos/
                    </p>
                  </div>
                </div>
              )}

              {/* Floating Cards */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">100% Seguro</div>
                    <div className="text-sm text-gray-600">
                      Datos protegidos
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">5/5 Estrellas</div>
                    <div className="text-sm text-gray-600">Calificación</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid - Mejorado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Características <span className="text-primary">Premium</span>
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl text-gray-600"
            >
              Todo lo que necesitas para cuidar tu salud
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity"`}
                ></div>
                <div
                  className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6`}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="relative text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="relative text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How it Works - Premium Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl shadow-2xl p-8 md:p-16 text-white relative overflow-hidden">
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
                className="px-12 py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all"
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
            <Pill className="h-6 w-6 text-primary" />
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
