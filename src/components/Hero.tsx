import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToGallery = () => {
    const element = document.getElementById("gallery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=2074')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-overlay/70 via-overlay/50 to-background/90" />
      </div>

      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 tracking-tight">
          Capturing Moments
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 font-light max-w-2xl mx-auto">
          Professional photography that tells your story through timeless imagery
        </p>
        <button
          onClick={scrollToGallery}
          className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors animate-bounce"
        >
          <span className="text-sm uppercase tracking-widest">Explore Gallery</span>
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
