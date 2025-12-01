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
  // Videos que subiste para el carousel
  const videos = [
    "/CONTENIDO/1.mp4",
    "/CONTENIDO/2.mp4",
    "/CONTENIDO/3.mp4",
    "/CONTENIDO/4.mp4",
    "/CONTENIDO/5.mp4",
    "/CONTENIDO/6.mp4",
  ];

  const images = ["/CONTENIDO/PAST.jpeg", "/CONTENIDO/MED.jpg"];

  const features = [
    {
      icon: (
        <img
          src="/CONTENIDO/HEART.png"
          alt="Salud"
          className="h-12 w-12 object-contain"
        />
      ),
      title: "Cuida tu Salud",
      description: "Diseñado pensando en tu bienestar y tranquilidad",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: (
        <img
          src="/CONTENIDO/BOOK.png"
          alt="Historial"
          className="h-12 w-12 object-contain"
        />
      ),
      title: "Historial Completo",
      description: "Registro detallado de todo tu tratamiento médico",
      color: "from-green-500 to-green-600",
    },
    {
      icon: (
        <img
          src="/CONTENIDO/SPI.png"
          alt="Recordatorios"
          className="h-12 w-12 object-contain"
        />
      ),
      title: "Recordatorios Inteligentes",
      description:
        "Notificaciones precisas para que nunca olvides tomar tus medicamentos",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: (
        <img
          src="/CONTENIDO/HO.png"
          alt="Horarios"
          className="h-12 w-12 object-contain"
        />
      ),
      title: "Horarios Flexibles",
      description: "Configura múltiples horarios adaptados a tu rutina diaria",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Datos Seguros",
      description: "Tu información médica protegida localmente",
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: <Bell className="h-10 w-10" />,
      title: "Alertas Precisas",
      description: "Nunca olvides una dosis con nuestras notificaciones",
      color: "from-blue-500 to-cyan-500",
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Video de Fondo en Bucle */}
      <div className="fixed inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="/CONTENIDO/1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/80"></div>
      </div>

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

            {/* Right Side - Video/Image Section */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <VideoCarousel videos={videos} />
              </div>

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
