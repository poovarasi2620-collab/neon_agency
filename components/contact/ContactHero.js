export default function ContactHero() {
  return (
    <section className="w-full bg-white pt-[64px] sm:pt-[72px]">
      <div className="w-full">
        <div className="relative w-full h-[420px] max-[480px]:h-[380px] max-[360px]:h-[350px] max-[320px]:h-[330px] overflow-hidden border-[3px] border-[#0057ff]">
          
          <img
            src="/contact/contact-hero.png"
            alt="contact hero"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/20 z-10" />

          <div className="absolute left-0 bottom-0 w-full h-[150px] max-[360px]:h-[130px] z-20 bg-gradient-to-t from-[#0047ff]/45 via-[#0047ff]/80 to-transparent" />

          <div className="absolute bottom-[-30px] left-0 w-full h-[100px] bg-[#0047ff]/40 blur-[40px] z-20" />

          <div className="absolute left-[22px] max-[360px]:left-[16px] max-[320px]:left-[12px] bottom-[15px] max-[320px]:bottom-[12px] z-30 text-white pr-5">
            <h1 className="text-[44px] max-[480px]:text-[34px] max-[360px]:text-[30px] max-[320px]:text-[27px] font-semibold leading-none tracking-[-1px] mb-2">
              Neon _ Agency
            </h1>

            <p className="text-[13px] max-[360px]:text-[12px] max-[320px]:text-[11px] leading-[20px] max-[320px]:leading-[18px] max-w-[780px] text-white/95">
              NEON_AGENCY is a creative digital solutions company focused on
              building modern and impactful experiences for businesses. We
              specialize in web development, UI/UX design, and innovative
              software solutions tailored to client needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}