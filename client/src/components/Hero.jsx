function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <span className="rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
          🚀 AI Powered Placement Preparation Platform
        </span>

        <h1 className="mt-8 text-6xl font-extrabold leading-tight md:text-7xl">
          Crack Your
          <span className="text-blue-500"> Dream Placement</span>
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-300">
          Build ATS-friendly resumes, prepare company-wise,
          practice coding, aptitude and interviews,
          and track your placement journey —
          all from one platform.
        </p>

        <div className="mt-10 flex gap-5">

          <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-700">
            Get Started
          </button>

          <button className="rounded-xl border border-slate-600 px-8 py-4 hover:bg-slate-800">
            Explore Features
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;