import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section className="py-24 md:py-32 bg-navy border-t border-border">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-[-0.02em] leading-[1.1]">
            Speak With Our Team
          </h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="text-white/70 text-lg font-normal mb-12">
            For institutional inquiries, partnership opportunities, and product
            discussions.
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <a href="mailto:hello@harvestt.com" className="btn btn-inverted">
            hello@harvestt.com
          </a>
        </FadeIn>
        <FadeIn delay={300}>
          <p className="text-white/50 text-sm mt-10 tracking-[0.2em] font-normal">
            Abu Dhabi &middot; New York &middot; Hong Kong &middot; Global
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
