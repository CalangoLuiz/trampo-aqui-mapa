import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

export const OnboardingHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Freelancers trabalhando"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-success/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Trampo Aki</h1>
          </div>

          {/* Headline */}
          <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
            Conecte-se com freelancers <br />
            <span className="text-success-light">próximos a você</span>
          </h2>
          
          <p className="text-lg md:text-xl mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed">
            A plataforma que conecta freelancers e contratantes através de geolocalização. 
            Encontre os melhores profissionais na sua região ou descubra vagas próximas a você.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">1000+</h3>
              <p className="text-white/80">Freelancers ativos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-white/80">Vagas disponíveis</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">4.8</h3>
              <p className="text-white/80">Avaliação média</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/login">
              <Button 
                size="xl" 
                variant="floating"
                className="group min-w-[200px]"
              >
                Sou Freelancer
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/login">
              <Button 
                size="xl" 
                variant="outline"
                className="min-w-[200px] bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary"
              >
                Preciso Contratar
              </Button>
            </Link>
          </div>

          {/* Features Preview */}
          <div className="mt-16 text-sm text-white/70">
            <p className="mb-2">✓ Cadastro gratuito • ✓ Pagamento seguro • ✓ Suporte 24/7</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};