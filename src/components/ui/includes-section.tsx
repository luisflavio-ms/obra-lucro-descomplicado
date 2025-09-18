import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Smartphone, Video, FileBarChart } from "lucide-react";

const includes = [
  {
    icon: Monitor,
    title: "Planilha Sistematizada de Orçamento para Computadores",
    description: "Calcule o BDI, Lista de Materiais, Margem de Lucro, Orçamento com e sem material, Cronograma de Obra, Controle de Custos, Dashboard e Calculadora de Tijolos, massa, pisos e revestimentos, laje e pintura.",
  },
  {
    icon: Smartphone,
    title: "Planilha Sistematizada de Orçamento Automático para Celulares e Tablets (Android e IOS)",
    description: "Ganhe mobilidade e responda seu futuro cliente de qualquer lugar.",
  },
  {
    icon: Video,
    title: "16 vídeo aulas explicativas da planilha com acesso vitalício",
    description: "Acesse sempre que tiver dúvidas, como configurar, calibrar, calcular o BDI, fazer cronogramas, contratos, interpretar o dashboard e TUDO com a sua marca!",
  },
  {
    icon: FileBarChart,
    title: "Planilha físico-financeiro",
    description: "Um documento obrigatório em obras financiadas pela Caixa Econômica Federal.",
  }
];

const IncludesSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Está Incluso no Produto
          </h2>
          <p className="text-xl text-muted-foreground">
            Tudo que você precisa para orçamentos profissionais
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {includes.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg leading-tight">
                      {item.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="text-lg px-8 py-6 bg-gradient-accent hover:opacity-90 text-accent-foreground">
            🚀 ACESSAR AGORA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IncludesSection;