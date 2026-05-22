export default function BlogList() {
  const blogs = [
    {
      title: "Our office moments with happy clients and teamwork culture",
      image: "/blog/blog-1.png",
      category: "Business",
      date: "June 2026",
    },
    {
      title: "Building strong relationships with creative digital solutions",
      image: "/blog/blog-2.png",
      category: "Technology",
      date: "June 2026",
    },
    {
      title: "Office life and productive work culture inside our company",
      image: "/blog/blog-3.png",
      category: "Culture",
      date: "June 2026",
    },
    {
      title: "Our digital events with creative ideas and innovation",
      image: "/blog/blog-4.png",
      category: "Marketing",
      date: "June 2026",
    },
    {
      title: "Company meetings and teamwork collaboration moments",
      image: "/blog/blog-5.png",
      category: "Business",
      date: "June 2026",
    },
    {
      title: "Creative artwork and branding inspiration from our team",
      image: "/blog/blog-6.png",
      category: "Design",
      date: "June 2026",
    },
    {
      title: "Client success stories and memorable event celebrations",
      image: "/blog/blog-7.png",
      category: "Events",
      date: "June 2026",
    },
    {
      title: "Team outdoor activities and cultural engagement programs",
      image: "/blog/blog-8.png",
      category: "Lifestyle",
      date: "June 2026",
    },
    {
      title: "Modern architecture and creative workspace inspiration",
      image: "/blog/blog-9.png",
      category: "Creative",
      date: "June 2026",
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

                <a href="#" className="text-[12px] font-semibold text-blue-600">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}