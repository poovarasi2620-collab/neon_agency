export default function AboutHero() {
  return (
    <section className="pt-[64px] sm:pt-[72px] bg-white overflow-hidden">
      <div className="relative w-full h-[360px] max-[480px]:h-[400px] max-[360px]:h-[380px] max-[320px]:h-[360px] overflow-hidden">
        <img
          src="/about/about-hero.png"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-700/55 via-blue-600/20 to-transparent" />

        <div className="relative z-10 max-w-[1180px] mx-auto h-full px-5 max-[360px]:px-4 max-[320px]:px-3 flex items-end pb-7 max-[360px]:pb-6">
          <div className="text-white max-w-[760px] max-[360px]:max-w-full">
            <h1 className="text-[38px] max-[480px]:text-[30px] max-[360px]:text-[26px] max-[320px]:text-[24px] leading-tight font-bold mb-2">
              About
            </h1>

            <h2 className="text-[15px] max-[360px]:text-[13px] max-[320px]:text-[12px] leading-[23px] max-[320px]:leading-[20px] font-semibold mb-2">
              Building Smart Digital Solutions for Modern Businesses
            </h2>

            <p className="text-[13px] max-[360px]:text-[12px] max-[320px]:text-[11px] leading-[22px] max-[320px]:leading-[19px] text-white/90">
              We are a forward-thinking IT company focused on delivering
              innovative software solutions, modern UI/UX design, and
              powerful digital experiences that help businesses grow faster.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1180px] mx-auto px-5 min-h-[56px] flex items-center justify-between gap-4 text-[12px] font-medium text-[#111827] max-[768px]:grid max-[768px]:grid-cols-2 max-[768px]:py-3 max-[480px]:grid-cols-1 max-[480px]:gap-2 max-[360px]:px-4 max-[320px]:px-3 max-[320px]:text-[11px]">
          <div className="flex items-center gap-2">
            <span className="text-blue-600">✦</span>
            <span>62% of fortune 100 use Zodot</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-blue-600">✦</span>
            <span>#1 AI rated writing</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-blue-600">✦</span>
            <span>Over 50% of YC Companies</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-blue-600">✦</span>
            <span>Customer good feel</span>
          </div>
        </div>
      </div>
    </section>
  );
}