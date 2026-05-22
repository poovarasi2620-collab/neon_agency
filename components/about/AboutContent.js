export default function AboutContent() {
  return (
    <section className="py-12 max-[480px]:py-9 max-[320px]:py-7 bg-white overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-5 max-[360px]:px-4 max-[320px]:px-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-[480px]:gap-7 max-[320px]:gap-6 items-center">
          <div className="max-[480px]:text-center">
            <h2 className="text-[35px] max-[480px]:text-[28px] max-[360px]:text-[25px] max-[320px]:text-[23px] font-bold text-[#111827] mb-4 max-[320px]:mb-3 leading-tight">
              About <span className="text-blue-600">us</span>
            </h2>

            <div className="space-y-3 max-[320px]:space-y-2 text-[16px] max-[480px]:text-[14px] max-[360px]:text-[13px] max-[320px]:text-[12px] leading-7 max-[480px]:leading-[24px] max-[320px]:leading-[21px] text-[#4b5563] max-w-[430px] max-[480px]:max-w-full">
              <p>
                We are a passionate IT company dedicated to building innovative
                and reliable digital solutions.
              </p>

              <p>
                Our team focuses on delivering high-quality software, modern
                UI/UX design, and scalable web applications.
              </p>

              <p>
                We help businesses grow by combining creativity with the latest
                technology.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[395px] h-[220px] max-[480px]:w-[300px] max-[480px]:h-[175px] max-[360px]:w-[280px] max-[360px]:h-[165px] max-[320px]:w-[260px] max-[320px]:h-[150px]">
              <img
                src="/about/about-1.png"
                alt="about"
                className="absolute left-0 top-[25px] max-[480px]:top-[20px] max-[320px]:top-[18px] w-[105px] h-[195px] max-[480px]:w-[78px] max-[480px]:h-[148px] max-[360px]:w-[72px] max-[360px]:h-[138px] max-[320px]:w-[67px] max-[320px]:h-[128px] rounded-[8px] object-cover"
              />

              <img
                src="/about/about-2.png"
                alt="about"
                className="absolute left-[118px] top-[65px] max-[480px]:left-[88px] max-[480px]:top-[48px] max-[360px]:left-[82px] max-[360px]:top-[45px] max-[320px]:left-[75px] max-[320px]:top-[42px] w-[76px] h-[66px] max-[480px]:w-[58px] max-[480px]:h-[50px] max-[360px]:w-[54px] max-[360px]:h-[48px] max-[320px]:w-[50px] max-[320px]:h-[44px] rounded-[8px] object-cover"
              />

              <img
                src="/about/about-3.png"
                alt="about"
                className="absolute left-[193px] top-[128px] max-[480px]:left-[145px] max-[480px]:top-[98px] max-[360px]:left-[134px] max-[360px]:top-[92px] max-[320px]:left-[125px] max-[320px]:top-[86px] w-[66px] h-[66px] max-[480px]:w-[52px] max-[480px]:h-[52px] max-[360px]:w-[48px] max-[360px]:h-[48px] max-[320px]:w-[45px] max-[320px]:h-[45px] rounded-[8px] object-cover"
              />

              <img
                src="/about/about-4.png"
                alt="about"
                className="absolute right-[17px] top-[25px] max-[480px]:right-0 max-[480px]:top-[20px] max-[320px]:top-[18px] w-[105px] h-[195px] max-[480px]:w-[78px] max-[480px]:h-[148px] max-[360px]:w-[72px] max-[360px]:h-[138px] max-[320px]:w-[67px] max-[320px]:h-[128px] rounded-[8px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}