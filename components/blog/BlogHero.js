export default function BlogHero() {
  return (
    <section className="w-full bg-white pt-[64px] sm:pt-[72px] overflow-hidden">
      <div className="relative w-full bg-white overflow-hidden">
        <img
          src="/blog/blog-hero.png"
          alt="Blog Hero"
          className="
            w-full
            h-auto
            block
            object-contain
          "
        />

        <div
          className="
            absolute
            inset-0
            pointer-events-none
            bg-gradient-to-t
            from-[#0057ff]/60
            via-[#0057ff]/25
            to-transparent
          "
        />
      </div>
    </section>
  );
}