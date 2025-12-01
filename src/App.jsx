import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddMedication from "./pages/AddMedication";
import History from "./pages/History";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-medication" element={<AddMedication />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
