"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogList() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      title: "Our office moments with happy clients and teamwork culture",
      image: "/blog/blog-1.png",
      category: "Business",
      date: "June 2026",
      details:
        "Our office moments reflect the strong bond between our team and clients. We believe that happy clients and a positive teamwork culture are the foundation of every successful project.",
      points: [
        "Friendly client communication",
        "Teamwork-based project planning",
        "Positive office environment",
        "Creative discussion and execution",
      ],
    },
    {
      title: "Building strong relationships with creative digital solutions",
      image: "/blog/blog-2.png",
      category: "Technology",
      date: "June 2026",
      details:
        "We focus on building long-term client relationships through meaningful digital solutions. Our creative ideas help businesses improve their online presence and customer experience.",
      points: [
        "Creative website solutions",
        "Client-focused development process",
        "Digital growth planning",
        "Reliable project delivery",
      ],
    },
    {
      title: "Office life and productive work culture inside our company",
      image: "/blog/blog-3.png",
      category: "Culture",
      date: "June 2026",
      details:
        "Our company culture encourages productivity, creativity, and collaboration. Every team member contributes ideas that help us deliver better digital experiences.",
      points: [
        "Productive work environment",
        "Team collaboration",
        "Creative brainstorming sessions",
        "Healthy workplace culture",
      ],
    },
    {
      title: "Our digital events with creative ideas and innovation",
      image: "/blog/blog-4.png",
      category: "Marketing",
      date: "June 2026",
      details:
        "Our digital events bring together creativity, technology, and innovation. We use these moments to explore new ideas and showcase our digital capabilities.",
      points: [
        "Creative digital campaigns",
        "Innovation-focused events",
        "Marketing ideas and planning",
        "Brand engagement activities",
      ],
    },
    {
      title: "Company meetings and teamwork collaboration moments",
      image: "/blog/blog-5.png",
      category: "Business",
      date: "June 2026",
      details:
        "Meetings help our team align goals, solve problems, and plan projects clearly. Collaboration is one of the key reasons behind our smooth project workflow.",
      points: [
        "Project planning meetings",
        "Team discussion and feedback",
        "Better decision making",
        "Smooth workflow management",
      ],
    },
    {
      title: "Creative artwork and branding inspiration from our team",
      image: "/blog/blog-6.png",
      category: "Design",
      date: "June 2026",
      details:
        "Our design team creates artwork and branding concepts that connect creativity with brand identity. Every design is planned to leave a strong visual impact.",
      points: [
        "Brand identity ideas",
        "Creative poster design",
        "Visual storytelling",
        "Professional design output",
      ],
    },
    {
      title: "Client success stories and memorable event celebrations",
      image: "/blog/blog-7.png",
      category: "Events",
      date: "June 2026",
      details:
        "Client success is our biggest achievement. We celebrate important milestones and successful project moments with our team and clients.",
      points: [
        "Successful project delivery",
        "Client satisfaction",
        "Memorable team celebrations",
        "Long-term business relationships",
      ],
    },
    {
      title: "Team outdoor activities and cultural engagement programs",
      image: "/blog/blog-8.png",
      category: "Lifestyle",
      date: "June 2026",
      details:
        "Outdoor activities and cultural programs help our team stay connected, refreshed, and motivated. These experiences improve teamwork and creativity.",
      points: [
        "Team bonding activities",
        "Cultural engagement",
        "Work-life balance",
        "Motivational team moments",
      ],
    },
    {
      title: "Modern architecture and creative workspace inspiration",
      image: "/blog/blog-9.png",
      category: "Creative",
      date: "June 2026",
      details:
        "A modern workspace inspires creativity and innovation. Our environment supports focused work, fresh ideas, and better collaboration.",
      points: [
        "Creative workspace design",
        "Modern office inspiration",
        "Better focus and productivity",
        "Innovation-friendly environment",
      ],
    },
  ];

  return (
    <section className="py-10 max-[480px]:py-8 max-[320px]:py-6 bg-white overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-5 max-[360px]:px-4 max-[320px]:px-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-[8px] overflow-hidden border border-[#e5e7eb]"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[175px] max-[360px]:h-[160px] md:h-[200px] object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-4 md:p-5">
                <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-[11px] text-gray-400 mb-2 md:mb-3">
                  <span>{blog.category}</span>
                  <span>•</span>
                  <span>{blog.date}</span>
                </div>

                <h3 className="text-[14px] md:text-[15px] font-bold leading-6 text-[#111827] mb-2 md:mb-4">
                  {blog.title}
                </h3>

                <p className="text-[12px] leading-[22px] md:leading-6 text-gray-500 mb-3 md:mb-5">
                  Discover stories, insights, and creative experiences from
                  our team, projects, and digital journey.
                </p>

                <button
                  onClick={() => setSelectedBlog(blog)}
                  className="text-[12px] font-semibold text-blue-600"
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white rounded-[18px] w-full max-w-[650px] max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.85, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.85, y: 30, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-3 right-3 z-10 w-[32px] h-[32px] rounded-full bg-white shadow-md text-[#111827] font-bold"
              >
                ×
              </button>

              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-[210px] md:h-[270px] object-cover"
              />

              <div className="p-5 md:p-7">
                <div className="flex items-center gap-3 text-[11px] text-gray-400 mb-3">
                  <span>{selectedBlog.category}</span>
                  <span>•</span>
                  <span>{selectedBlog.date}</span>
                </div>

                <h2 className="text-[22px] md:text-[30px] font-extrabold leading-tight text-[#111827] mb-4">
                  {selectedBlog.title}
                </h2>

                <p className="text-[14px] md:text-[15px] leading-[27px] text-gray-500 mb-5">
                  {selectedBlog.details}
                </p>

                <h4 className="text-[16px] font-bold text-[#111827] mb-3">
                  Blog Highlights
                </h4>

                <div className="space-y-3">
                  {selectedBlog.points.map((point, index) => (
                    <div key={index} className="flex gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <p className="text-[13px] md:text-[14px] leading-[24px] text-[#374151]">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedBlog(null)}
                  className="mt-6 w-full bg-blue-600 text-white rounded-[10px] py-3 text-[14px] font-bold"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}