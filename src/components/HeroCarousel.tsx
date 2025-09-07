import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import Chilean landscape images
import torresDelPaine from "@/assets/torres-del-paine.jpg";
import valleDeLaLuna from "@/assets/valle-de-la-luna.jpg";
import valdivianForest from "@/assets/valdivian-forest.jpg";
import portadaAntofagasta from "@/assets/portada-antofagasta.jpg";

const images = [
  {
    src: torresDelPaine,
    alt: "Torres del Paine National Park, Patagonia Chile",
    title: "Torres del Paine"
  },
  {
    src: valleDeLaLuna,
    alt: "Valle de la Luna, Atacama Desert Chile", 
    title: "Valle de la Luna"
  },
  {
    src: valdivianForest,
    alt: "Valdivian Temperate Rainforest Chile",
    title: "Bosque Valdiviano"
  },
  {
    src: portadaAntofagasta,
    alt: "La Portada Natural Monument, Antofagasta Chile",
    title: "Portada de Antofagasta"
  }
];

export const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            circa-tech
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Tu partner tecnológico. Ingeniería de software, datos, sensores remotos y IA generativa 
            para impulsar tus operaciones con soluciones ágiles y seguras.
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            className="text-primary font-semibold px-8 py-3 text-lg"
          >
            Conoce Nuestros Servicios
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 text-white"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 text-white"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-white scale-110" 
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Current Image Title */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20">
        <h2 className="text-white text-lg font-medium">
          {images[currentIndex].title}
        </h2>
      </div>
    </section>
  );
};