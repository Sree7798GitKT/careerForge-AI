import FeatureCard from "./FeatureCard";

function Features() {

  const features = [
    {
      icon: "📄",
      title: "Resume Builder",
      description: "Create professional ATS-friendly resumes in minutes.",
    },
    {
      icon: "🤖",
      title: "AI Resume Analyzer",
      description: "Get AI-powered feedback to improve your resume.",
    },
    {
      icon: "💻",
      title: "Coding Practice",
      description: "Practice company-specific coding questions.",
    },
    {
      icon: "🧠",
      title: "Aptitude Practice",
      description: "Sharpen your logical, quantitative, and verbal skills.",
    },
    {
      icon: "🏢",
      title: "Company Preparation",
      description: "Prepare for TCS, Infosys, Accenture, and more.",
    },
    {
      icon: "🎤",
      title: "Mock Interviews",
      description: "Practice HR and technical interviews with AI.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <h2 className="mb-12 text-center text-4xl font-bold">
        Everything You Need to Get Placed
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}

      </div>

    </section>
  );
}

export default Features;