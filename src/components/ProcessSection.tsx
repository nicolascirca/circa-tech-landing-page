import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  FileText, 
  Settings, 
  Code, 
  CheckCircle, 
  BarChart3 
} from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "Reunión de descubrimiento",
    description: "Definimos objetivos, métricas y restricciones del proyecto."
  },
  {
    icon: FileText,
    title: "Análisis y propuesta",
    description: "Convertimos requisitos en alcance, presupuesto y cronograma claros."
  },
  {
    icon: Settings,
    title: "Diseño de arquitectura",
    description: "Elegimos tecnologías y trazamos la solución end-to-end."
  },
  {
    icon: Code,
    title: "Desarrollo ágil",
    description: "Iteramos en sprints con entregables verificables y feedback continuo."
  },
  {
    icon: CheckCircle,
    title: "Pruebas y despliegue",
    description: "Garantizamos calidad y seguridad antes de lanzar a producción."
  },
  {
    icon: BarChart3,
    title: "Monitoreo y mejora continua",
    description: "Supervisamos métricas, resolvemos incidencias y evolucionamos la solución."
  }
];

export const ProcessSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestro Proceso
          </h2>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
              Circa-Tech, tu partner tecnológico.
            </h3>
            <p className="text-xl text-muted-foreground">
              Ingeniería de software, datos, sensores remotos y IA generativa para impulsar 
              tus operaciones con soluciones ágiles y seguras.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-border bg-card"
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="mb-2 text-sm font-medium text-primary">
                    Paso {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};