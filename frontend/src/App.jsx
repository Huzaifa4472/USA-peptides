import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";
import Header from "./components/Header";
import Peptides from "./pages/Peptides";
import ForgetPass from "./components/ForgetPass";
import Footer from "./components/Footer";
import "react-phone-input-2/lib/style.css";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/peptides" element={<Peptides />} />
        <Route path="/my-accounts" element={<MyAccount />} />
        <Route path="/my-accounts/forget-password" element={<ForgetPass />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
