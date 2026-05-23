export default function ContactHero() {
  return (
    <section className="w-full bg-white pt-0 pb-0 overflow-hidden">
      <div
        className="
          relative w-full overflow-hidden
          h-[390px]
          max-[1024px]:h-[350px]
          max-[768px]:h-[320px]
          max-[480px]:h-[260px]
          max-[360px]:h-[240px]
          max-[320px]:h-[220px]
          border-[3px] border-[#0057ff]
        "
      >
        <img
          src="/contact/contact-hero.png"
          alt="contact hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/20 z-10" />

        <div
          className="
            absolute left-0 bottom-0 w-full z-20
            h-[120px]
            max-[480px]:h-[100px]
            max-[320px]:h-[85px]
            bg-gradient-to-t from-[#0047ff]/70 via-[#0047ff]/45 to-transparent
          "
        />

        <div
          className="
            absolute z-30 text-white
            left-[22px] bottom-[18px] pr-5
            max-[480px]:left-[16px] max-[480px]:bottom-[14px]
            max-[320px]:left-[12px] max-[320px]:bottom-[10px]
          "
        >
          <h1
            className="
              text-[42px]
              max-[768px]:text-[34px]
              max-[480px]:text-[28px]
              max-[360px]:text-[25px]
              max-[320px]:text-[22px]
              font-semibold leading-tight tracking-[-1px]
              mb-1
            "
          >
            Neon _ Agency
          </h1>

          <p
            className="
              text-[13px]
              max-[480px]:text-[11px]
              max-[320px]:text-[10px]
              leading-[20px]
              max-[480px]:leading-[17px]
              max-[320px]:leading-[15px]
              max-w-[760px]
              max-[480px]:max-w-[96%]
              text-white/95
            "
          >
            NEON_AGENCY is a creative digital solutions company focused on
            building modern and impactful experiences for businesses. We
            specialize in web development, UI/UX design, and innovative
            software solutions tailored to client needs.
          </p>
        </div>
      </div>
    </section>
  );
}