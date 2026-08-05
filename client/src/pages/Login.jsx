import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">

      <div className="w-full max-w-md rounded-2xl bg-slate-900 p-8 shadow-xl">

        <h1 className="mb-2 text-center text-3xl font-bold">
          Welcome Back
        </h1>

        <p className="mb-8 text-center text-slate-400">
          Login to continue your placement journey.
        </p>

        <form className="space-y-5">

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
            Login
          </button>

        </form>

        <p className="mt-6 text-center text-slate-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-500 hover:underline"
          >
            Register
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;