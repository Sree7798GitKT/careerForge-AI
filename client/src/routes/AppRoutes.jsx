import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Companies from "../pages/Companies";
import ResumeBuilder from "../pages/ResumeBuilder";
import ResumeAnalyzer from "../pages/ResumeAnalyzer";
import Aptitude from "../pages/Aptitude";
import Coding from "../pages/Coding";
import InterviewExperience from "../pages/InterviewExperience";
import ApplicationTracker from "../pages/ApplicationTracker";
import Notes from "../pages/Notes";
import Profile from "../pages/Profile";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/resume-builder" element={<ResumeBuilder />} />
        <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
        <Route path="/aptitude" element={<Aptitude />} />
        <Route path="/coding" element={<Coding />} />
        <Route path="/interview-experience" element={<InterviewExperience />} />
        <Route path="/application-tracker" element={<ApplicationTracker />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;