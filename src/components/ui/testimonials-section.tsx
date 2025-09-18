import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Engenheiro Civil",
    content: "A ferramenta revolucionou minha forma de fazer orçamentos. O que antes levava dias, agora faço em minutos com total precisão.",
    rating: 5,
    avatar: "🧑‍💼"
  },
  {
    name: "Maria Santos",
    role: "Arquiteta",
    content: "Fantástica! Os contratos automáticos me poupam muito tempo. Recomendo para todos os profissionais da construção civil.",
    rating: 5,
    avatar: "👩‍💼"
  },
  {
    name: "João Oliveira",
    role: "Empreiteiro",
    content: "Vale cada centavo! A assertividade de 98% é real. Nunca mais tive problemas com orçamentos desatualizados.",
    rating: 5,
    avatar: "👨‍🔧"
  },
  {
    name: "Ana Costa",
    role: "Construtora",
    content: "Interface simples e resultados profissionais. O suporte 24h é excelente, sempre prontos para ajudar.",
    rating: 5,
    avatar: "👩‍💻"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground">
            Milhares de profissionais já transformaram seus negócios
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Quote className="w-8 h-8 text-primary/30 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{testimonial.avatar}</div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="accent" className="text-lg px-8 py-6">
            🚀 ACESSAR AGORA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;