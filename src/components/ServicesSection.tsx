import { Card, CardContent } from "@/components/ui/card";

// Import service images
import softwareTeam from "@/assets/software-team.jpg";
import satellite from "@/assets/satellite.jpg";
import database from "@/assets/database.jpg";
import aiMl from "@/assets/ai-ml.jpg";

const services = [
  {
    title: "Ingeniería de Software y Gestión de Proyectos",
    description: "Nuestro equipo de ingeniería de software desarrolla soluciones tecnológicas innovadoras para optimizar procesos empresariales. Desde aplicaciones personalizadas hasta sistemas de gestión empresarial, abordamos desafíos complejos con soluciones robustas y escalables. Además, facilitamos la implementación de soluciones tecnológicas gestionando las relaciones con las partes interesadas, asegurando que los proyectos se entreguen a tiempo y con los más altos estándares de calidad.",
    image: softwareTeam,
    alt: "Equipo desarrollando software"
  },
  {
    title: "Sensores Remotos",
    description: "En Circa, aprovechamos imágenes satelitales y técnicas avanzadas de computer vision para obtener insights valiosos. Realizamos segmentación semántica, supervisada y no supervisada, y aplicamos modelos de computer vision para diversos análisis. Transformamos datos complejos en información útil, adaptada a las necesidades específicas de cada cliente.",
    image: satellite,
    alt: "Satélite capturando imágenes de la Tierra"
  },
  {
    title: "Bases de Datos e Ingeniería de Datos",
    description: "Proporcionamos servicios completos de bases de datos y gestión de datos, asegurando su integridad, disponibilidad y seguridad. Nuestras soluciones permiten extraer información valiosa para la toma de decisiones estratégicas, gestionando grandes volúmenes de datos de manera eficiente y segura.",
    image: database,
    alt: "Diagrama de bases de datos"
  },
  {
    title: "Machine Learning e IA Generativa",
    description: "Integramos modelos de machine learning e IA generativa para automatizar tareas, mejorar la personalización de servicios y generar contenido creativo. Trabajamos estrechamente con los clientes para desarrollar modelos que se integren perfectamente en sus sistemas, aportando valor real y tangible.",
    image: aiMl,
    alt: "Gráfica que muestra IA generativa"
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-border overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};