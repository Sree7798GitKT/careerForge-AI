import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">CareerForge AI</h1>

        <p className="mt-4 text-xl text-slate-300">
          Build your career with AI.
        </p>

        <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700">
          Get Started
        </button>
      </main>
    </>
  );
}

export default App;