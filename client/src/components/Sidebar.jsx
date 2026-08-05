import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">

      <h1 className="text-2xl font-bold text-blue-500 mb-10">
        CareerForge AI
      </h1>

      <nav className="flex flex-col gap-4">

        <Link to="/dashboard">🏠 Dashboard</Link>
        <Link to="/resume-builder">📄 Resume</Link>
        <Link to="/companies">🏢 Companies</Link>
        <Link to="/aptitude">🧠 Aptitude</Link>
        <Link to="/coding">💻 Coding</Link>
        <Link to="/notes">📝 Notes</Link>
        <Link to="/profile">👤 Profile</Link>

      </nav>

    </aside>
  );
}

export default Sidebar;