import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />   {/* 🔥 MUST be here */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;