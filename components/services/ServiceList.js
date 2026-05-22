export default function ServiceList() {
  const services = [
    {
      id: "web-design-development",
      title: "Website Development",
      image: "/services/service-1.png",
      icon: "🌐",
      desc: "We build modern, responsive, and high-performance websites for businesses.",
    },
    {
      id: "web-application-development",
      title: "Web Application Development",
      image: "/services/service-2.png",
      icon: "💻",
      desc: "We create scalable web applications with secure and user-friendly features.",
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      image: "/services/service-3.png",
      icon: "🎨",
      desc: "We create clean, user-friendly interfaces with smooth user experiences.",
    },
    {
      id: "e-commerce-solutions",
      title: "E-Commerce Solutions",
      image: "/services/service-4.png",
      icon: "🛒",
      desc: "We develop complete online shopping platforms with product, cart, and checkout features.",
    },
    {
      id: "system-upgrade-maintenance",
      title: "System Upgrade & Maintenance",
      image: "/services/service-5.png",
      icon: "⚙",
      desc: "We maintain, upgrade, and optimize existing systems for better performance.",
    },
    {
      id: "system-support",
      title: "System Support",
      image: "/services/service-6.png",
      icon: "🖥",
      desc: "We provide technical support and system monitoring for smooth business operations.",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      image: "/services/service-7.png",
      icon: "📢",
      desc: "We help brands grow online through SEO, ads, and social media strategies.",
    },
    {
      id: "cloud-api-integration",
      title: "Cloud & API Integration",
      image: "/services/service-8.png",
      icon: "☁",
      desc: "We connect cloud services and APIs to make your business systems smarter.",
    },
    {
      id: "graphic-design",
      title: "Graphic Designer",
      image: "/services/service-9.png",
      icon: "🖌",
      desc: "We design creative posters, branding materials, banners, and social media creatives.",
    },
    {
      id: "video-editing",
      title: "Video editing",
      image: "/services/service-10.png",
      icon: "🎬",
      desc: "We create professional videos, reels, promotional edits, and brand content.",
    },
  ];

  return (
    <section className="py-10 max-[480px]:py-8 max-[320px]:py-6 bg-white overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-5 max-[360px]:px-4 max-[320px]:px-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-[85px] bg-white rounded-[10px] overflow-hidden border border-[#dbeafe]"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[175px] max-[360px]:h-[160px] max-[320px]:h-[145px] md:h-[210px] object-cover"
                />

                <div className="absolute top-3 right-3 w-[28px] h-[28px] rounded-full bg-white flex items-center justify-center shadow-md text-[13px]">
                  {service.icon}
                </div>
              </div>

              <div className="p-4 max-[320px]:p-3">
                <h3 className="text-[16px] max-[320px]:text-[15px] font-bold text-[#111827] mb-2">
                  {service.title}
                </h3>

                <p className="text-[12px] leading-[20px] text-gray-500 mb-3 max-[320px]:mb-2">
                  {service.desc}
                </p>

                <a
                  href={`#${service.id}`}
                  className="text-[12px] font-semibold text-blue-600"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[13px] max-[320px]:text-[12px] leading-[24px] md:leading-7 text-gray-500 mt-7 md:mt-10 max-w-[920px]">
          Empowering your vision with end-to-end digital solutions tailored for
          growth. From design to development, we build the foundation your
          business needs to thrive in today’s competitive landscape.
        </p>
      </div>
    </section>
  );
}