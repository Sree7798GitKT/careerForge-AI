import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">

      <div className="w-full max-w-md rounded-2xl bg-slate-900 p-8 shadow-xl">

        <h1 className="mb-2 text-center text-3xl font-bold">
          Create Account
        </h1>

        <p className="mb-8 text-center text-slate-400">
          Start your placement preparation today.
        </p>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 outline-none focus:border-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 outline-none focus:border-blue-500"
          />

          <button
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold hover:bg-blue-700"
          >
            Register
          </button>

        </form>

        <p className="mt-6 text-center text-slate-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;