export default function WorkWithUs() {
  return (
    <section className="py-12 max-[480px]:py-9 max-[320px]:py-7 bg-white overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-5 max-[360px]:px-4 max-[320px]:px-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-[480px]:gap-7 max-[320px]:gap-6 items-center">
          <div className="max-[480px]:text-center">
            <h2 className="text-[42px] max-[480px]:text-[30px] max-[360px]:text-[26px] max-[320px]:text-[24px] font-bold text-[#111827] mb-4 max-[320px]:mb-3 leading-tight">
              Who we <span className="text-blue-600">Work with</span>
            </h2>

            <p className="text-[18px] max-[480px]:text-[14px] max-[360px]:text-[13px] max-[320px]:text-[12px] leading-8 max-[480px]:leading-[24px] max-[320px]:leading-[21px] text-[#333] max-w-[520px] max-[480px]:max-w-full">
              We collaborate with a wide range of businesses, from growing
              startups to well-established brands. Our experience includes
              working with reputed companies like Poppys, Thangamayil, and
              Pothys, delivering tailored digital solutions that meet their
              unique needs.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[430px] h-[260px] max-[480px]:w-[300px] max-[480px]:h-[190px] max-[360px]:w-[280px] max-[360px]:h-[180px] max-[320px]:w-[260px] max-[320px]:h-[170px]">
              <img
                src="/about/work-1.png"
                alt="work"
                className="absolute left-0 top-[8px] w-[120px] h-[250px] max-[480px]:w-[80px] max-[480px]:h-[178px] max-[360px]:w-[74px] max-[360px]:h-[168px] max-[320px]:w-[70px] max-[320px]:h-[160px] rounded-[14px] object-cover"
              />

              <img
                src="/about/work-2.png"
                alt="work"
                className="absolute left-[128px] top-[43px] max-[480px]:left-[88px] max-[480px]:top-[34px] max-[360px]:left-[80px] max-[360px]:top-[31px] max-[320px]:left-[76px] max-[320px]:top-[29px] w-[85px] h-[95px] max-[480px]:w-[62px] max-[480px]:h-[68px] max-[360px]:w-[58px] max-[360px]:h-[64px] max-[320px]:w-[54px] max-[320px]:h-[60px] rounded-[10px] object-cover"
              />

              <img
                src="/about/work-3.png"
                alt="work"
                className="absolute left-[215px] top-[135px] max-[480px]:left-[150px] max-[480px]:top-[100px] max-[360px]:left-[138px] max-[360px]:top-[95px] max-[320px]:left-[130px] max-[320px]:top-[90px] w-[85px] h-[95px] max-[480px]:w-[62px] max-[480px]:h-[68px] max-[360px]:w-[58px] max-[360px]:h-[64px] max-[320px]:w-[54px] max-[320px]:h-[60px] rounded-[10px] object-cover"
              />

              <img
                src="/about/work-4.png"
                alt="work"
                className="absolute right-0 top-[8px] w-[120px] h-[250px] max-[480px]:w-[80px] max-[480px]:h-[178px] max-[360px]:w-[74px] max-[360px]:h-[168px] max-[320px]:w-[70px] max-[320px]:h-[160px] rounded-[14px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}