import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974"
              alt="Photographer"
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          <div className="animate-fade-in-up space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi, I'm Alex Thompson, a professional photographer based in Portland, Oregon. 
              With over 10 years of experience, I specialize in capturing authentic moments 
              that tell compelling stories.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My work spans nature photography, intimate portraits, travel documentation, 
              and event coverage. I believe every frame should evoke emotion and preserve 
              memories that last a lifetime.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not behind the camera, you'll find me exploring new trails, 
              discovering hidden gems, or mentoring aspiring photographers.
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-serif mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="mailto:alex@aperture.photo"
                  className="p-3 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
