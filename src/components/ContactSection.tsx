import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Mensaje enviado",
      description: "Te contactaremos pronto. ¡Gracias por tu interés!",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "var(--contact-gradient)" }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hablemos de tu proyecto
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            ¿Tienes un desafío tecnológico? Estamos aquí para ayudarte a
            encontrar la solución perfecta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">
                Información de Contacto
              </h3>

              <div className="flex items-center space-x-4 text-white/90">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p>contacto@circa-tech.cl</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-white/90">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Teléfono</p>
                  <p>+56 9 7579 8949</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-white/90">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Ubicación</p>
                  <p>Santiago, Chile</p>
                </div>
              </div>
            </div>

            <div className="text-white/80">
              <h4 className="text-lg font-semibold mb-3">
                ¿Por qué elegirnos?
              </h4>
              <ul className="space-y-2">
                <li>• Experiencia en tecnologías de vanguardia</li>
                <li>• Enfoque ágil y orientado a resultados</li>
                <li>• Soluciones escalables y robustas</li>
                <li>• Soporte técnico especializado</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Nombre *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/50"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@empresa.com"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/50"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Empresa
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nombre de tu empresa"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Mensaje *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos sobre tu proyecto o necesidad tecnológica..."
                      rows={6}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/50"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 transition-all duration-300"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
