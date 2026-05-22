export default function ProjectHero() {
  return (
    <section className="pt-[64px] sm:pt-[72px] bg-white overflow-hidden">
      <div
        className="
          relative w-full overflow-hidden
          h-[380px]
          max-[768px]:h-[350px]
          max-[480px]:h-[320px]
          max-[360px]:h-[300px]
          max-[320px]:h-[280px]
        "
      >
        <img
          src="/projects/project-hero.png"
          alt="project"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-700/55 via-blue-600/15 to-transparent" />

        <div
          className="
            relative z-10 max-w-[1180px] mx-auto h-full
            px-5 max-[360px]:px-4 max-[320px]:px-3
            flex items-end
            pb-8 max-[480px]:pb-7 max-[320px]:pb-5
          "
        >
          <div className="text-white max-w-[760px] max-[480px]:max-w-full">
            <h1
              className="
                text-[38px]
                max-[768px]:text-[34px]
                max-[480px]:text-[30px]
                max-[360px]:text-[27px]
                max-[320px]:text-[24px]
                font-bold mb-2 leading-tight
              "
            >
              Project
            </h1>

            <p
              className="
                text-[13px]
                max-[360px]:text-[12px]
                max-[320px]:text-[11px]
                leading-[22px]
                max-[320px]:leading-[19px]
                text-white/90
                max-w-[620px]
              "
            >
              Explore our innovative digital projects crafted with modern
              technology, premium UI/UX design, and scalable business solutions
              for startups and enterprises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}