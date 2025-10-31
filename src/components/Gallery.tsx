import { useState } from "react";
import { Button } from "@/components/ui/button";
import Lightbox from "./Lightbox";

interface GalleryImage {
  id: number;
  src: string;
  category: string;
  title: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070", category: "nature", title: "Mountain Vista" },
  { id: 2, src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2076", category: "portraits", title: "Portrait Study" },
  { id: 3, src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070", category: "travel", title: "Coastal Sunset" },
  { id: 4, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069", category: "events", title: "Wedding Celebration" },
  { id: 5, src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2074", category: "nature", title: "Forest Path" },
  { id: 6, src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2064", category: "portraits", title: "Natural Light" },
  { id: 7, src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2035", category: "travel", title: "Urban Explorer" },
  { id: 8, src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070", category: "events", title: "Corporate Event" },
  { id: 9, src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071", category: "nature", title: "Woodland Scene" },
];

const categories = ["all", "nature", "portraits", "travel", "events"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Gallery</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of moments captured through my lens
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? "default" : "outline"}
              className={`capitalize ${
                activeCategory === category 
                  ? "bg-primary text-primary-foreground" 
                  : "border-border hover:border-accent"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setLightboxImage(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="image-overlay">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-serif">{image.title}</h3>
                  <p className="text-sm text-white/80 capitalize">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxImage && (
        <Lightbox
          image={lightboxImage}
          onClose={() => setLightboxImage(null)}
          images={filteredImages}
          onNavigate={setLightboxImage}
        />
      )}
    </section>
  );
};

export default Gallery;
