import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Infinity, 
  FileText, 
  Clock, 
  Video, 
  Headphones, 
  Palette,
  Calendar,
  DollarSign,
  Mail,
  Building,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: Infinity,
    title: "Acesso Vitalício e Atualizações Periódicas",
    description: "Pague uma vez e use para sempre, com atualizações incluídas"
  },
  {
    icon: FileText,
    title: "Contrato Automático c/ ZERO digitação!",
    description: "Contratos legais gerados automaticamente"
  },
  {
    icon: Clock,
    title: "Estima o custo da obra em 5 minutos!",
    description: "Rapidez e precisão nos seus orçamentos"
  },
  {
    icon: Video,
    title: "16 vídeo aulas explicativas",
    description: "Aprenda a usar todas as funcionalidades"
  },
  {
    icon: Headphones,
    title: "Suporte 24HORAS / DIA",
    description: "Ajuda sempre que você precisar"
  },
  {
    icon: Palette,
    title: "Planilha Editável (Fontes, imagens, cores)",
    description: "Personalize com a identidade da sua empresa"
  },
  {
    icon: Calendar,
    title: "Cronograma Automático",
    description: "Planejamento temporal da obra"
  },
  {
    icon: DollarSign,
    title: "Planilha Físico-Financeiro GRATIS",
    description: "Controle financeiro completo da obra"
  },
  {
    icon: DollarSign,
    title: "Planilha de Fluxo de Caixa GRATIS",
    description: "Gerencie entradas e saídas de recursos"
  },
  {
    icon: Mail,
    title: "Receba AGORA no seu e-mail",
    description: "Acesso imediato após a compra"
  },
  {
    icon: Building,
    title: "Atende Pessoa Física ou Jurídica",
    description: "Flexibilidade para todos os tipos de cliente"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vantagens da Ferramenta
          </h2>
          <p className="text-xl text-muted-foreground">
            Tudo que você precisa para orçar obras profissionalmente
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-start">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
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

export default FeaturesSection;