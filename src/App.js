import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collector from "./pages/Collector";
import FAQs from "./pages/FAQs";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Collector />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
    </Router>
  );
}

export default App;


