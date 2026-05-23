const projects = {
  "ui-wireframe-design": {
    title: "UI Wireframe Design",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1200&auto=format&fit=crop",
    description:
      "UI Wireframe Design is the first stage of building a website or app. It helps plan the layout, content placement, user flow, and screen structure before starting the final design.",
    tools: ["Figma", "Adobe XD", "Canva", "User Flow", "Prototype"],
    features: [
      "Clean page layout planning",
      "User-friendly navigation structure",
      "Mobile and desktop wireframe",
      "Button, section, and content placement",
      "Prototype-ready design flow",
    ],
  },

  "web-development": {
    title: "Web Development",
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
    description:
      "Web Development focuses on creating responsive, fast, and modern websites using frontend and backend technologies.",
    tools: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
    features: [
      "Responsive website design",
      "SEO-friendly page structure",
      "Fast loading performance",
      "Modern frontend UI",
      "Clean and reusable components",
    ],
  },

  "game-ui-design": {
    title: "Game UI Design",
    category: "Creative Design",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200&auto=format&fit=crop",
    description:
      "Game UI Design creates attractive menus, buttons, screens, icons, and interface elements for gaming applications.",
    tools: ["Figma", "Photoshop", "Illustrator", "Unity UI"],
    features: [
      "Game menu screen design",
      "HUD and control interface",
      "Creative buttons and icons",
      "Player-friendly navigation",
      "Modern gaming visual style",
    ],
  },

  "mobile-app-design": {
    title: "Mobile App Design",
    category: "App Design",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop",
    description:
      "Mobile App Design focuses on building clean, simple, and user-friendly app screens for Android and iOS.",
    tools: ["Figma", "Adobe XD", "React Native", "Flutter"],
    features: [
      "Mobile-friendly screen layout",
      "Login and onboarding screens",
      "Clean app navigation",
      "Interactive prototype",
      "Modern app UI style",
    ],
  },

  "branding-design": {
    title: "Branding Design",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1559028006-448665bd7c7f?q=80&w=1200&auto=format&fit=crop",
    description:
      "Branding Design helps businesses create a strong identity using logo, colors, typography, and visual style.",
    tools: ["Photoshop", "Illustrator", "Canva", "Brand Guidelines"],
    features: [
      "Logo and brand identity",
      "Color palette system",
      "Typography selection",
      "Social media brand style",
      "Professional visual identity",
    ],
  },

  "dashboard-design": {
    title: "Dashboard Design",
    category: "Web App",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    description:
      "Dashboard Design is used to show analytics, reports, sales, users, and business data in a clean visual interface.",
    tools: ["React.js", "Next.js", "Tailwind CSS", "Charts", "Figma"],
    features: [
      "Analytics cards",
      "Charts and reports",
      "Admin panel layout",
      "User management UI",
      "Responsive dashboard design",
    ],
  },

  "ecommerce-website": {
    title: "E-commerce Website",
    category: "Online Store",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    description:
      "E-commerce Website is used to sell products online with category pages, product details, cart, checkout, and payment flow.",
    tools: ["Next.js", "React.js", "Tailwind CSS", "Laravel", "MySQL"],
    features: [
      "Product listing page",
      "Category and subcategory pages",
      "Add to cart feature",
      "Product detail page",
      "Checkout page design",
    ],
  },

  "digital-marketing": {
    title: "Digital Marketing",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    description:
      "Digital Marketing helps businesses grow online through SEO, social media marketing, ads, and content strategy.",
    tools: ["SEO", "Google Ads", "Meta Ads", "Analytics", "Content Marketing"],
    features: [
      "SEO optimization",
      "Social media campaigns",
      "Google ads planning",
      "Content marketing strategy",
      "Online growth tracking",
    ],
  },
};

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return (
      <main className="min-h-screen bg-[#fafafa] pt-[120px] px-5">
        <h1 className="text-center text-[36px] font-extrabold">
          Project Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fafafa] pt-[110px] pb-16 px-5">
      <div className="max-w-[1000px] mx-auto">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[260px] md:h-[420px] object-cover rounded-[28px] shadow-lg"
        />

        <div className="mt-8 bg-white rounded-[28px] p-6 md:p-10 shadow-lg">
          <p className="text-[#0646d8] text-[12px] font-bold tracking-[3px] uppercase mb-3">
            {project.category}
          </p>

          <h1 className="text-[36px] md:text-[56px] font-extrabold text-[#111] leading-tight mb-5">
            {project.title}
          </h1>

          <p className="text-gray-600 text-[16px] md:text-[18px] leading-8 mb-8">
            {project.description}
          </p>

          <h2 className="text-[24px] font-extrabold text-[#111] mb-4">
            Tools & Technologies
          </h2>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="bg-[#eef3ff] text-[#0646d8] px-4 py-2 rounded-full text-[14px] font-bold"
              >
                {tool}
              </span>
            ))}
          </div>

          <h2 className="text-[24px] font-extrabold text-[#111] mb-4">
            Project Features
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="bg-[#f7f7f7] rounded-[16px] p-4 text-gray-700 font-medium"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}