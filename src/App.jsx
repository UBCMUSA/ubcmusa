import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";

// Lazy-load every route except Home so the landing page ships the
// smallest possible initial bundle; the rest split into per-page chunks.
const WhatIsMUSA = lazy(() => import("./pages/about/WhatIsMUSA.jsx"));
const WhoWeAre = lazy(() => import("./pages/about/WhoWeAre.jsx"));
const HowWeRun = lazy(() => import("./pages/about/HowWeRun.jsx"));
const MeetingAgendas = lazy(() => import("./pages/about/MeetingAgendas.jsx"));
const MeetingMinutes = lazy(() => import("./pages/about/MeetingMinutes.jsx"));
const Academic = lazy(() => import("./pages/resources/Academic.jsx"));
const Personal = lazy(() => import("./pages/resources/Personal.jsx"));
const Professional = lazy(() => import("./pages/resources/Professional.jsx"));
const MusaResources = lazy(() => import("./pages/resources/Musa.jsx"));
const StudentLounge = lazy(() => import("./pages/musa/StudentLounge.jsx"));
const Grads = lazy(() => import("./pages/musa/Grads.jsx"));
const Downbeat = lazy(() => import("./pages/musa/Downbeat.jsx"));
const Journal = lazy(() => import("./pages/musa/Journal.jsx"));
const Events = lazy(() => import("./pages/events/Events.jsx"));
const Join = lazy(() => import("./pages/get-involved/Join.jsx"));
const Hiring = lazy(() => import("./pages/get-involved/Hiring.jsx"));
const Elections = lazy(() => import("./pages/get-involved/Elections.jsx"));
const Sponsors = lazy(() => import("./pages/Sponsors.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-sheet">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/what-is-musa" element={<WhatIsMUSA />} />
            <Route path="/about/who-we-are" element={<WhoWeAre />} />
            <Route path="/about/how-we-run" element={<HowWeRun />} />
            <Route path="/about/meeting-agendas" element={<MeetingAgendas />} />
            <Route path="/about/meeting-minutes" element={<MeetingMinutes />} />
            <Route path="/resources/academic" element={<Academic />} />
            <Route path="/resources/personal" element={<Personal />} />
            <Route path="/resources/professional" element={<Professional />} />
            <Route path="/resources/musa" element={<MusaResources />} />
            <Route path="/musa/student-lounge" element={<StudentLounge />} />
            <Route path="/musa/grads" element={<Grads />} />
            <Route path="/musa/downbeat" element={<Downbeat />} />
            <Route path="/musa/journal" element={<Journal />} />
            <Route path="/events" element={<Events />} />
            {/* legacy routes redirect to the combined Events page */}
            <Route path="/events/calendar" element={<Events />} />
            <Route path="/events/details" element={<Events />} />
            <Route path="/get-involved/join" element={<Join />} />
            <Route path="/get-involved/hiring" element={<Hiring />} />
            <Route path="/get-involved/elections" element={<Elections />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
