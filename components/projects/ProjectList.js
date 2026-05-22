export default function ProjectList() {
  const projects = [
    {
      title: "E-commerce Website",
      image: "/projects/project-1.png",
      description:
        "A complete responsive e-commerce platform designed with modern UI, shopping features, category management, secure checkout, and premium user experience.",
    },
    {
      title: "Gym – Website",
      image: "/projects/project-2.png",
      description:
        "A premium fitness website built with strong branding, trainer showcase, workout programs, responsive layout, and engaging modern interface.",
    },
    {
      title: "Jewellery Website",
      image: "/projects/project-3.png",
      description:
        "An elegant jewellery showcase website crafted with luxury design, smooth navigation, premium product gallery, and modern responsive experience.",
    },
    {
      title: "Dental Clinic Website",
      image: "/projects/project-4.png",
      description:
        "A clean and professional healthcare website featuring appointment booking, doctor profiles, service sections, and user-friendly responsive layout.",
    },
  ];

  return (
    <section
      className="
        bg-white overflow-hidden
        py-12
        max-[768px]:py-10
        max-[480px]:py-8
        max-[320px]:py-6
      "
    >
      <div className="max-w-[1180px] mx-auto px-5 max-[360px]:px-4 max-[320px]:px-3">

        {/* HEADING */}
        <div className="mb-10 max-[768px]:mb-8 max-[480px]:mb-7 max-[320px]:mb-6">
          <h2
            className="
              text-[32px]
              max-[768px]:text-[29px]
              max-[480px]:text-[26px]
              max-[360px]:text-[24px]
              max-[320px]:text-[22px]
              font-bold text-[#111827]
              mb-2 leading-tight
            "
          >
            We have <span className="text-blue-600">successfully</span>
          </h2>

          <p className="text-[13px] max-[320px]:text-[12px] text-gray-500 leading-[22px] max-w-[620px]">
            Delivered these projects for our clients, all completed by our
            dedicated team.
          </p>
        </div>

        {/* PROJECT LIST */}
        <div className="space-y-11 max-[768px]:space-y-9 max-[480px]:space-y-8 max-[320px]:space-y-7">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                grid grid-cols-1
                lg:grid-cols-[390px_1fr]
                gap-5
                lg:gap-12
                items-center
              "
            >
              {/* TEXT */}
              <div>
                <h3
                  className="
                    text-[16px]
                    max-[320px]:text-[15px]
                    font-bold text-[#111827]
                    mb-3
                    flex items-center gap-2
                    leading-tight
                  "
                >
                  {project.title}
                  <span className="w-[8px] h-[8px] min-w-[8px] rounded-full bg-blue-600" />
                </h3>

                <p
                  className="
                    text-[13px]
                    max-[320px]:text-[12px]
                    leading-[24px]
                    max-[320px]:leading-[22px]
                    text-gray-500
                    max-w-[520px]
                  "
                >
                  {project.description}
                </p>
              </div>

              {/* IMAGE */}
              <div className="rounded-[8px] overflow-hidden border border-[#dbeafe] bg-white shadow-sm">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full object-cover
                    h-[230px]
                    max-[1024px]:h-[220px]
                    max-[768px]:h-[210px]
                    max-[480px]:h-[180px]
                    max-[360px]:h-[165px]
                    max-[320px]:h-[150px]
                  "
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM IMAGE */}
      <div className="mt-12 max-[768px]:mt-10 max-[480px]:mt-8 max-[320px]:mt-7">
        <div className="max-w-[950px] mx-auto px-5 max-[360px]:px-4 max-[320px]:px-3">
          <div className="rounded-[10px] overflow-hidden border border-[#e5e7eb]">
            <img
              src="/projects/project-bottom.png"
              alt="team"
              className="
                w-full object-cover
                h-[420px]
                max-[1024px]:h-[360px]
                max-[768px]:h-[280px]
                max-[480px]:h-[200px]
                max-[360px]:h-[175px]
                max-[320px]:h-[155px]
              "
            />
          </div>
        </div>
      </div>

      {/* BOTTOM TEXT */}
      <div className="max-w-[1180px] mx-auto px-5 max-[360px]:px-4 max-[320px]:px-3 mt-5 max-[320px]:mt-4">
        <p
          className="
            text-[13px]
            max-[320px]:text-[12px]
            leading-[24px]
            max-[320px]:leading-[22px]
            text-gray-500
            max-w-[940px]
          "
        >
          We delivered responsive and innovative solutions with modern design,
          clean development, premium UI/UX, and scalable technology tailored to
          business growth and digital transformation for our clients.
        </p>
      </div>
    </section>
  );
}