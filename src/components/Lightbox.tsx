import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

interface LightboxProps {
  image: {
    id: number;
    src: string;
    title: string;
    category: string;
  };
  onClose: () => void;
  images: Array<{
    id: number;
    src: string;
    title: string;
    category: string;
  }>;
  onNavigate: (image: any) => void;
}

const Lightbox = ({ image, onClose, images, onNavigate }: LightboxProps) => {
  const currentIndex = images.findIndex(img => img.id === image.id);

  const handlePrevious = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    onNavigate(images[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    onNavigate(images[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [currentIndex]);

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10"
        aria-label="Close lightbox"
      >
        <X size={32} />
      </button>

      <button
        onClick={handlePrevious}
        className="absolute left-4 text-white hover:text-accent transition-colors z-10"
        aria-label="Previous image"
      >
        <ChevronLeft size={48} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 text-white hover:text-accent transition-colors z-10"
        aria-label="Next image"
      >
        <ChevronRight size={48} />
      </button>

      <div className="max-w-7xl max-h-[90vh] px-4">
        <img
          src={image.src}
          alt={image.title}
          className="max-w-full max-h-[80vh] object-contain animate-scale-in"
        />
        <div className="text-center mt-6 text-white">
          <h3 className="text-2xl font-serif mb-2">{image.title}</h3>
          <p className="text-white/70 capitalize">{image.category}</p>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
