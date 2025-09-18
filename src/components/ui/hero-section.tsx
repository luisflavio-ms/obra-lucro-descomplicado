import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, CheckCircle, Clock, Users, Target } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground py-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              ✨ Assertividade de 98%
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Saiba quanto sua obra vai custar em{" "}
              <span className="text-yellow-300">menos de 5 minutos!</span>
            </h1>
            
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Cronograma, contratos, lista de materiais 100% automático.{" "}
              <strong className="text-yellow-300">PAGAMENTO ÚNICO!</strong>
            </p>

            {/* Key Features */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-sm">Sistema Completo</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 text-green-300" />
                <span className="text-sm">5 Minutos</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Users className="w-5 h-5 text-green-300" />
                <span className="text-sm">Suporte 24h</span>
              </div>
            </div>
            
            <Button size="lg" variant="accent" className="text-lg px-8 py-6 shadow-glow">
              🚀 ACESSAR AGORA
            </Button>
          </div>
          
          {/* Right Column - Video Demo */}
          <div className="relative">
            <div className="aspect-video bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 flex items-center justify-center relative overflow-hidden">
              {/* Video Placeholder */}
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-white/30 transition-colors">
                  <Play className="w-8 h-8 ml-1" />
                </div>
                <p className="text-lg font-semibold">VÍDEO DE DEMONSTRAÇÃO</p>
                <p className="text-blue-100 mt-2">Veja como funciona na prática</p>
              </div>
              
              {/* Floating badges */}
              <div className="absolute top-4 left-4">
                <Badge className="bg-success text-success-foreground">Ao Vivo</Badge>
              </div>
              <div className="absolute bottom-4 right-4">
                <Badge className="bg-white/20 text-white">HD</Badge>
              </div>
            </div>
            
            {/* Not just a spreadsheet callout */}
            <div className="mt-6 text-center bg-white/5 p-4 rounded-lg border border-white/20">
              <p className="text-lg font-semibold text-yellow-300">
                Não é só uma "planilha"!
              </p>
              <p className="text-blue-100">
                É um SISTEMA, onde você paga apenas UMA VEZ!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;