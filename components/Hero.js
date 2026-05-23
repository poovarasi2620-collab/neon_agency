"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [showCareerCard, setShowCareerCard] = useState(false);
  const [step, setStep] = useState("company");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [applyCompany, setApplyCompany] = useState("");
  const [companyPlace, setCompanyPlace] = useState("");
  const [experience, setExperience] = useState("");

  const careerTypes = [
    { title: "Web Development Company" },
    { title: "Software Development Company" },
    { title: "Mobile App Company" },
    { title: "Digital Marketing Company" },
  ];

  const companies = [
    {
      name: "Zoho",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Node.js", "MySQL"],
      places: ["Chennai", "Coimbatore", "Madurai", "Tenkasi"],
    },
    {
      name: "Freshworks",
      skills: ["JavaScript", "React.js", "Next.js", "Node.js", "MongoDB"],
      places: ["Chennai", "Bangalore", "Hyderabad"],
    },
    {
      name: "TCS",
      skills: ["Java", "Python", "React.js", "MySQL", "MongoDB"],
      places: ["Chennai", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
    },
    {
      name: "Infosys",
      skills: ["Java", "Python", "Node.js", "React.js", "MySQL"],
      places: ["Chennai", "Bangalore", "Hyderabad", "Pune", "Mysore"],
    },
    {
      name: "Wipro",
      skills: ["Java", "Python", "PHP", "Laravel", "MySQL"],
      places: ["Chennai", "Bangalore", "Hyderabad", "Pune"],
    },
    {
      name: "HCL Technologies",
      skills: ["Java", "React.js", "Node.js", "Python", "MongoDB"],
      places: ["Chennai", "Noida", "Bangalore", "Madurai"],
    },
    {
      name: "Accenture India",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Java", "Python"],
      places: ["Chennai", "Bangalore", "Hyderabad", "Mumbai", "Gurgaon"],
    },
    {
      name: "Tech Mahindra",
      skills: ["Java", "Python", "PHP", "MySQL", "Digital Marketing"],
      places: ["Chennai", "Pune", "Hyderabad", "Noida"],
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Java",
    "Python",
    "PHP",
    "Laravel",
    "MySQL",
    "MongoDB",
    "React Native",
    "Flutter",
    "SEO",
    "Google Ads",
    "Digital Marketing",
  ];

  const filteredCompanies = useMemo(() => {
    if (selectedSkills.length === 0) return companies;

    return [...companies].sort((a, b) => {
      const aMatch = a.skills.filter((skill) =>
        selectedSkills.includes(skill)
      ).length;

      const bMatch = b.skills.filter((skill) =>
        selectedSkills.includes(skill)
      ).length;

      return bMatch - aMatch;
    });
  }, [selectedSkills]);

  const selectedCompanyData = companies.find(
    (company) => company.name === applyCompany
  );

  const openCareer = () => {
    setShowCareerCard(true);
    setStep("company");
    setSelectedSkills([]);
    setApplyCompany("");
    setCompanyPlace("");
    setExperience("");
  };

  const closeCareer = () => {
    setShowCareerCard(false);
    setStep("company");
    setSelectedSkills([]);
    setApplyCompany("");
    setCompanyPlace("");
    setExperience("");
  };

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((item) => item !== skill)
        : [...prev, skill]
    );
  };

  const goToApply = () => {
    const firstCompany = filteredCompanies[0];
    setApplyCompany(firstCompany?.name || "");
    setCompanyPlace("");
    setStep("apply");
  };

  const submitForm = (e) => {
    e.preventDefault();
    setStep("success");

    setTimeout(() => {
      closeCareer();
    }, 1800);
  };

  const scrollToContact = () => {
    document.getElementById("ascend")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative bg-[#fafafa] overflow-hidden pt-[105px] pb-4 sm:pt-[115px] sm:pb-8 md:min-h-screen md:flex md:items-center md:pt-[90px] md:pb-12">
      <div className="relative z-10 w-full max-w-[1160px] mx-auto px-5 sm:px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left flex flex-col items-center md:items-start"
        >
          <h1 className="text-[#303136] font-extrabold italic tracking-[-1px] text-[32px] leading-[38px] min-[375px]:text-[36px] min-[375px]:leading-[42px] sm:text-[42px] sm:leading-[48px] md:text-[58px] md:leading-[62px] md:tracking-[-3px] lg:text-[68px] lg:leading-[70px] lg:tracking-[-4px]">
            We create standout
            <br />
            <span className="text-[#0646d8]">digital experiences</span>
          </h1>

          <p className="mt-4 text-[#4b5563] font-light mx-auto md:mx-0 text-[14px] leading-[23px] sm:text-[17px] sm:leading-[28px] md:text-[20px] md:leading-[32px] lg:text-[22px] lg:leading-[34px] max-w-[600px]">
            Merging clinical precision with high-energy creativity.
            We don’t just build websites; we curate future-proof digital identities.
          </p>

          <div className="mt-5 flex items-center justify-center md:justify-start gap-3 sm:gap-4 w-full">
            <button
              onClick={openCareer}
              className="bg-[#0646d8] text-white px-8 py-3.5 rounded-[16px] text-[15px] font-semibold shadow-[0_0_25px_rgba(6,70,216,0.35)]"
            >
              Career
            </button>

            <button
              onClick={scrollToContact}
              className="bg-[#e1e1e1] text-[#222] px-8 py-3.5 rounded-[16px] text-[15px] font-semibold"
            >
              Contact
            </button>
          </div>
        </motion.div>

        <div className="relative hidden md:flex h-[360px] lg:h-[430px] items-center justify-center overflow-hidden">
          <motion.img
            src="/hero/line-shape.png"
            alt="line animation"
            className="w-[300px] h-[260px] lg:w-[370px] lg:h-[310px] object-contain opacity-90"
            animate={{ rotate: 360, y: [0, -12, 0] }}
            transition={{
              rotate: { repeat: Infinity, duration: 30, ease: "linear" },
              y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
            }}
          />
        </div>
      </div>

      <AnimatePresence>
        {showCareerCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-[#fafafa]/90 backdrop-blur-sm px-4 py-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ duration: 0.35 }}
              className="w-full max-w-[900px] mx-auto min-h-full flex items-center"
            >
              <div className="relative w-full bg-white rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.16)] border border-gray-100 p-5 sm:p-8 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6 sticky top-0 bg-white z-20 pb-3">
                  <div>
                    <h2 className="text-[26px] sm:text-[34px] font-extrabold text-[#303136]">
                      IT Company Careers
                    </h2>
                    <p className="text-gray-500 text-[14px] sm:text-[16px] mt-1">
                      Select company, skills and apply job.
                    </p>
                  </div>

                  <button
                    onClick={closeCareer}
                    className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 font-bold"
                  >
                    ×
                  </button>
                </div>

                <div className="relative min-h-[430px]">
                  <AnimatePresence mode="wait">
                    {step === "company" && (
                      <motion.div
                        key="company-card"
                        initial={{ x: 120, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -120, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                      >
                        <h3 className="text-[24px] font-extrabold text-[#303136] mb-4">
                          Select Career Company Type
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {careerTypes.map((career) => (
                            <button
                              key={career.title}
                              onClick={() => setStep("skills")}
                              className="text-left p-5 rounded-[22px] bg-[#f7f9ff] hover:bg-[#0646d8] hover:text-white transition border border-blue-100"
                            >
                              <h4 className="text-[18px] font-bold">
                                {career.title}
                              </h4>
                              <p className="text-[14px] mt-2 opacity-80">
                                Click to choose skills
                              </p>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {step === "skills" && (
                      <motion.div
                        key="skill-card"
                        initial={{ x: 120, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -120, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                      >
                        <h3 className="text-[24px] font-extrabold text-[#303136]">
                          Select Your Skills
                        </h3>

                        <p className="text-gray-500 mt-2 mb-5">
                          Frontend and backend skills ellam ore card la select pannunga.
                        </p>

                        <div className="flex flex-wrap gap-3">
                          {skills.map((skill) => (
                            <button
                              key={skill}
                              type="button"
                              onClick={() => toggleSkill(skill)}
                              className={`px-4 py-2 rounded-full text-[14px] font-semibold transition ${
                                selectedSkills.includes(skill)
                                  ? "bg-[#0646d8] text-white"
                                  : "bg-[#eef3ff] text-[#0646d8]"
                              }`}
                            >
                              {skill}
                            </button>
                          ))}
                        </div>

                        <button
                          type="button"
                          onClick={goToApply}
                          disabled={selectedSkills.length === 0}
                          className="mt-7 bg-[#0646d8] text-white px-8 py-3.5 rounded-[16px] text-[15px] font-semibold disabled:opacity-40"
                        >
                          Continue Apply
                        </button>
                      </motion.div>
                    )}

                    {step === "apply" && (
                      <motion.form
                        key="apply-card"
                        onSubmit={submitForm}
                        initial={{ x: 120, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -120, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="pb-4"
                      >
                        <h3 className="text-[24px] font-extrabold text-[#303136]">
                          Apply Job
                        </h3>

                        <p className="text-gray-500 mt-2 mb-5">
                          Selected skills-ku priority company first la varum.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <select
                            value={applyCompany}
                            onChange={(e) => {
                              setApplyCompany(e.target.value);
                              setCompanyPlace("");
                            }}
                            required
                            className="border border-gray-200 rounded-[14px] px-4 py-3 outline-none"
                          >
                            {filteredCompanies.map((company) => (
                              <option key={company.name} value={company.name}>
                                {company.name}
                              </option>
                            ))}
                          </select>

                          <select
                            value={companyPlace}
                            onChange={(e) => setCompanyPlace(e.target.value)}
                            required
                            className="border border-gray-200 rounded-[14px] px-4 py-3 outline-none"
                          >
                            <option value="">Select Company Place</option>
                            {selectedCompanyData?.places.map((place) => (
                              <option key={place} value={place}>
                                {place}
                              </option>
                            ))}
                          </select>

                          <select
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                            required
                            className="border border-gray-200 rounded-[14px] px-4 py-3 outline-none"
                          >
                            <option value="">Select Experience</option>
                            <option>Fresher</option>
                            <option>0 - 1 Year</option>
                            <option>1 - 2 Years</option>
                            <option>2 - 4 Years</option>
                            <option>5+ Years</option>
                          </select>

                          <input required type="text" placeholder="Your Name" className="border border-gray-200 rounded-[14px] px-4 py-3 outline-none" />
                          <input required type="email" placeholder="Email Address" className="border border-gray-200 rounded-[14px] px-4 py-3 outline-none" />
                          <input required type="text" placeholder="Phone Number" className="border border-gray-200 rounded-[14px] px-4 py-3 outline-none" />
                        </div>

                        <textarea
                          placeholder="Tell us about yourself"
                          className="mt-4 w-full border border-gray-200 rounded-[14px] px-4 py-3 outline-none min-h-[100px]"
                        />

                        <button className="mt-5 bg-[#0646d8] text-white px-8 py-3.5 rounded-[16px] text-[15px] font-semibold">
                          Submit Application
                        </button>
                      </motion.form>
                    )}

                    {step === "success" && (
                      <motion.div
                        key="success-card"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex min-h-[320px] items-center justify-center text-center"
                      >
                        <div className="bg-green-50 border border-green-200 rounded-[24px] p-8">
                          <h3 className="text-[28px] font-extrabold text-green-700">
                            Success!
                          </h3>
                          <p className="text-green-700 mt-2 font-semibold">
                            Application submitted successfully.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}