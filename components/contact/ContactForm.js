export default function ContactForm() {
  return (
    <section className="relative w-full bg-[#dff8ff] overflow-hidden py-10 max-[480px]:py-8 max-[320px]:py-6 lg:min-h-screen lg:flex lg:items-center">
      <div className="w-full max-w-[1180px] mx-auto px-5 max-[360px]:px-4 max-[320px]:px-3">
        
        <h2 className="text-center text-[28px] max-[480px]:text-[24px] max-[360px]:text-[22px] max-[320px]:text-[20px] font-semibold text-[#111827] mb-5 max-[320px]:mb-4">
          How can we help You
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] items-center gap-5 max-[320px]:gap-4 lg:gap-6">
          
          <div className="flex justify-center lg:justify-start">
            <img
              src="/contact/robot.png"
              alt="robot"
              className="w-[210px] max-[360px]:w-[190px] max-[320px]:w-[170px] md:w-[300px] lg:w-[330px] object-contain"
            />
          </div>

          <form className="w-full max-w-[430px] mx-auto space-y-3 max-[320px]:space-y-2">
            <input
              type="text"
              placeholder="First Name"
              className="w-full h-[34px] max-[320px]:h-[32px] px-4 rounded-[4px] border border-[#0057ff] bg-transparent outline-none text-[12px]"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="w-full h-[34px] max-[320px]:h-[32px] px-4 rounded-[4px] border border-[#0057ff] bg-transparent outline-none text-[12px]"
            />

            <input
              type="email"
              placeholder="Mail ID"
              className="w-full h-[34px] max-[320px]:h-[32px] px-4 rounded-[4px] border border-[#0057ff] bg-transparent outline-none text-[12px]"
            />

            <select className="w-full h-[34px] max-[320px]:h-[32px] px-4 rounded-[4px] border border-[#0057ff] bg-transparent outline-none text-[12px]">
              <option>Category</option>
            </select>

            <select className="w-full h-[34px] max-[320px]:h-[32px] px-4 rounded-[4px] border border-[#0057ff] bg-transparent outline-none text-[12px]">
              <option>Country</option>
            </select>

            <textarea
              rows={3}
              placeholder="Message"
              className="w-full h-[82px] max-[320px]:h-[72px] px-4 py-2 rounded-[4px] border border-[#0057ff] bg-transparent outline-none text-[12px] resize-none"
            />

            <div className="space-y-2 max-[320px]:space-y-1 pt-1">
              <label className="flex items-start gap-2 text-[10px] max-[320px]:text-[9px] text-[#4b5563]">
                <input type="checkbox" className="mt-[2px]" />
                <span>I confirm, I want to receive NEON_AGENCY mail notifications.</span>
              </label>

              <label className="flex items-start gap-2 text-[10px] max-[320px]:text-[9px] text-[#4b5563]">
                <input type="checkbox" className="mt-[2px]" />
                <span>I accept the terms & conditions, privacy policy.</span>
              </label>
            </div>

            <div className="flex justify-center pt-1">
              <button className="bg-[#0057ff] hover:bg-[#0040db] transition-all duration-300 text-white text-[12px] font-medium px-10 h-[34px] rounded-full">
                Submit
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}