import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import WhatIsMUSA from "./pages/about/WhatIsMUSA.jsx";
import WhoWeAre from "./pages/about/WhoWeAre.jsx";
import HowWeRun from "./pages/about/HowWeRun.jsx";
import Academic from "./pages/resources/Academic.jsx";
import Personal from "./pages/resources/Personal.jsx";
import Professional from "./pages/resources/Professional.jsx";
import StudentLife from "./pages/musa/StudentLife.jsx";
import StudentLounge from "./pages/musa/StudentLounge.jsx";
import Grads from "./pages/musa/Grads.jsx";
import Downbeat from "./pages/musa/Downbeat.jsx";
import Journal from "./pages/musa/Journal.jsx";
import Calendar from "./pages/events/Calendar.jsx";
import EventDetails from "./pages/events/EventDetails.jsx";
import Join from "./pages/get-involved/Join.jsx";
import Hiring from "./pages/get-involved/Hiring.jsx";
import Elections from "./pages/get-involved/Elections.jsx";
import Sponsors from "./pages/Sponsors.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-sheet">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/what-is-musa" element={<WhatIsMUSA />} />
          <Route path="/about/who-we-are" element={<WhoWeAre />} />
          <Route path="/about/how-we-run" element={<HowWeRun />} />
          <Route path="/resources/academic" element={<Academic />} />
          <Route path="/resources/personal" element={<Personal />} />
          <Route path="/resources/professional" element={<Professional />} />
          <Route path="/musa/student-life" element={<StudentLife />} />
          <Route path="/musa/student-lounge" element={<StudentLounge />} />
          <Route path="/musa/grads" element={<Grads />} />
          <Route path="/musa/downbeat" element={<Downbeat />} />
          <Route path="/musa/journal" element={<Journal />} />
          <Route path="/events/calendar" element={<Calendar />} />
          <Route path="/events/details" element={<EventDetails />} />
          <Route path="/get-involved/join" element={<Join />} />
          <Route path="/get-involved/hiring" element={<Hiring />} />
          <Route path="/get-involved/elections" element={<Elections />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
