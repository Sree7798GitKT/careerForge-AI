function CompanySection() {

    const companies = [
        "TCS",
        "Infosys",
        "Accenture",
        "Cognizant",
        "Capgemini",
        "EY",
        "Oracle",
        "Amazon"
    ];

    return (

        <section className="py-24">

            <h2 className="text-center text-slate-400 uppercase tracking-widest">

                Trusted Preparation For

            </h2>

            <div className="mt-12 flex flex-wrap justify-center gap-8">

                {companies.map(company => (

                    <div
                        key={company}
                        className="rounded-xl border border-slate-700 bg-slate-900 px-8 py-5 text-lg font-semibold text-slate-300 hover:border-blue-500 hover:text-white transition"
                    >

                        {company}

                    </div>

                ))}

            </div>

        </section>

    );

}

export default CompanySection;