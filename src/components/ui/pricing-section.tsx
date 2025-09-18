import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star } from "lucide-react";

const pricingFeatures = [
  "Acesso VITALÍCIO",
  "Pagamento ÚNICO sem mensalidade", 
  "Atualizações dos preços da sua região",
  "Assertividade de 98%",
  "Suporte pelo WhatsApp 24h",
  "16 vídeo aulas explicativas",
  "Desbloqueada para formatação",
  "Grátis Cronograma Físico Financeiro"
];

const PricingSection = () => {
  return (
    <section className="py-16 px-4 bg-muted/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Investimento Único
          </h2>
          <p className="text-xl text-muted-foreground">
            Pague uma vez e tenha acesso vitalício
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="relative max-w-lg w-full shadow-elegant border-2 border-primary/20">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-accent text-accent-foreground px-4 py-2 text-sm font-semibold">
                🔥 OFERTA LIMITADA
              </Badge>
            </div>

            <CardHeader className="text-center pb-4 pt-8">
              <CardTitle className="text-2xl font-bold">Obra e Lucro</CardTitle>
              <p className="text-muted-foreground">Sistema Completo de Orçamentos</p>
            </CardHeader>

            <CardContent className="text-center">
              {/* Pricing */}
              <div className="mb-6">
                <div className="flex justify-center items-center gap-2 mb-2">
                  <span className="text-lg text-muted-foreground line-through">De R$ 399,90</span>
                  <Badge variant="destructive" className="text-xs">-70%</Badge>
                </div>
                
                <div className="text-4xl font-bold text-success mb-2">
                  R$ 120,46
                </div>
                <p className="text-muted-foreground mb-1">à vista</p>
                <p className="text-sm text-muted-foreground">
                  ou 12x de <strong>R$ 12,46</strong>
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8 text-left">
                {pricingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Guarantee */}
              <div className="bg-success/10 p-4 rounded-lg mb-6">
                <div className="flex items-center justify-center gap-2 text-success font-semibold">
                  <Star className="w-5 h-5 fill-current" />
                  <span>Garantia de 7 dias</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Se não ficar satisfeito, devolvemos 100% do seu dinheiro
                </p>
              </div>

              {/* CTA Button */}
              <Button 
                size="lg" 
                className="w-full text-lg py-6 bg-gradient-accent hover:opacity-90 text-accent-foreground font-bold"
              >
                🚀 ACESSAR AGORA
              </Button>
              
              <p className="text-xs text-muted-foreground mt-3">
                Acesso imediato • Pagamento seguro • Sem mensalidades
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;