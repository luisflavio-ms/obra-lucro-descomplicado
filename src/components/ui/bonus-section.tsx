import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Calendar, FileBarChart, BookOpen, Gift } from "lucide-react";

const bonuses = [
  {
    icon: TrendingUp,
    title: "Ferramenta de Fluxo de Caixa",
    description: "Controle completo das entradas e saídas financeiras da sua obra"
  },
  {
    icon: Calendar,
    title: "Tabela para agendamento de clientes ou serviços",
    description: "Organize sua agenda e nunca perca uma oportunidade de negócio"
  },
  {
    icon: FileBarChart,
    title: "Cronograma Físico Financeiro Padronizado",
    description: "Documento essencial para obras financiadas, já formatado"
  },
  {
    icon: BookOpen,
    title: 'E-book "Como fazer uma gestão eficiente na construção civil"',
    description: "Guia completo com dicas profissionais para otimizar seus projetos"
  }
];

const BonusSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Badge className="bg-success text-success-foreground px-4 py-2 text-lg mb-4">
            <Gift className="w-5 h-5 mr-2" />
            BÔNUS EXCLUSIVOS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Leve Ainda Mais por Apenas R$ 120,46
          </h2>
          <p className="text-xl text-muted-foreground">
            Receba gratuitamente estes bônus valiosos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {bonuses.map((bonus, index) => {
            const Icon = bonus.icon;
            return (
              <Card key={index} className="relative hover:shadow-elegant transition-all duration-300 border-l-4 border-l-success">
                {/* Bonus Badge */}
                <div className="absolute -top-3 -right-3">
                  <Badge variant="destructive" className="px-3 py-1">
                    BÔNUS {index + 1}
                  </Badge>
                </div>
                
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-success/10 p-3 rounded-lg flex-shrink-0">
                      <Icon className="w-8 h-8 text-success" />
                    </div>
                    <CardTitle className="text-lg leading-tight">
                      {bonus.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground">
                    {bonus.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-primary p-8 rounded-xl text-primary-foreground">
          <h3 className="text-2xl font-bold mb-4">
            Não Perca Essa Oportunidade!
          </h3>
          <p className="text-lg mb-6 text-blue-100">
            Sistema completo + 4 bônus exclusivos por apenas R$ 120,46
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-gradient-accent hover:opacity-90 text-accent-foreground font-bold"
          >
            🚀 ACESSAR AGORA
          </Button>
          <p className="text-sm text-blue-200 mt-3">
            Oferta por tempo limitado • Acesso imediato
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;