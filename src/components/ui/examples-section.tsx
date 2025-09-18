import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, FileText, Calculator } from "lucide-react";

const ExamplesSection = () => {
  return (
    <section className="py-16 px-4 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Exemplo de Orçamento na Prática
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja como nossa ferramenta funciona em cenários reais
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Video Example */}
          <Card className="relative overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video bg-gradient-primary flex items-center justify-center relative">
                <div className="text-center text-primary-foreground">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-white/30 transition-colors">
                    <Play className="w-6 h-6 ml-1" />
                  </div>
                  <p className="font-semibold">Exemplo Prático</p>
                  <p className="text-sm opacity-80">Casa de 120m²</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="space-y-4">
            <Card className="border-l-4 border-l-success">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <FileText className="w-8 h-8 text-success mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Orçamento Detalhado</h3>
                    <p className="text-muted-foreground">
                      Lista completa de materiais com preços atualizados da sua região
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Calculator className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Cálculo Automático</h3>
                    <p className="text-muted-foreground">
                      BDI, margem de lucro e cronograma calculados automaticamente
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <FileText className="w-8 h-8 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Contrato Pronto</h3>
                    <p className="text-muted-foreground">
                      Documento juridicamente válido gerado automaticamente
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;