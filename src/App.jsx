import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Quotation from "./pages/Quotation";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HRStaffing from "./pages/HRStaffing";
import ITSolutions from "./pages/ITSolutions";
import AIDataSolutions from "./pages/AIDataSolutions";
import BrandingDigital from "./pages/BrandingDigital";
import TrainingDevelopment from "./pages/TrainingDevelopment";
import Recruitment from "./pages/Recruitment";
import Terms from "./pages/Terms";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/hr-staffing" element={<HRStaffing />} />
          <Route path="/services/it-solutions" element={<ITSolutions />} />
          <Route path="/services/ai-data-solutions" element={<AIDataSolutions />} />
          <Route path="/services/branding-digital" element={<BrandingDigital />} />
          <Route path="/services/training-development" element={<TrainingDevelopment />} />
          <Route path="/services/recruitment" element={<Recruitment />} />
          <Route path="/quotation" element={<Quotation />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;