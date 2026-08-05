import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-slate-950 text-white border-b border-slate-800">
      <h1 className="text-2xl font-bold text-blue-500">
        CareerForge AI
      </h1>

      <ul className="flex gap-8 text-gray-300">
        <li>
          <Link to="/" className="hover:text-white">
            Home
          </Link>
        </li>

        <li>
          <Link to="/companies" className="hover:text-white">
            Companies
          </Link>
        </li>

        <li>
          <Link to="/aptitude" className="hover:text-white">
            Aptitude
          </Link>
        </li>

        <li>
          <Link to="/dashboard" className="hover:text-white">
            Dashboard
          </Link>
        </li>
      </ul>

      <Link
        to="/login"
        className="rounded-lg bg-blue-600 px-5 py-2 hover:bg-blue-700 transition"
      >
        Login
      </Link>
    </nav>
  );
}

export default Navbar;