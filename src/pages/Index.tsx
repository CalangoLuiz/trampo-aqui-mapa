import { Header } from "@/components/Header";
import { OnboardingHero } from "@/components/OnboardingHero";
import { JobsSection } from "@/components/JobsSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Shield, Star, MessageCircle, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import trampoAkiLogo from "@/assets/trampo-aki-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <OnboardingHero />
      <JobsSection />

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Por que escolher o Trampo Aki?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A plataforma mais completa para freelancers e contratantes se conectarem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-card transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-success/5">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Geolocalização Inteligente</h3>
                <p className="text-muted-foreground">
                  Encontre vagas próximas a você ou freelancers na sua região com precisão
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-card transition-all duration-300 border-0 bg-gradient-to-br from-success/5 to-primary/5">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Pagamento Seguro</h3>
                <p className="text-muted-foreground">
                  Sistema de pagamento protegido com garantia para freelancers e contratantes
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-card transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-success/5">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Sistema de Avaliações</h3>
                <p className="text-muted-foreground">
                  Avaliações mútuas e transparentes para construir confiança na comunidade
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-card transition-all duration-300 border-0 bg-gradient-to-br from-success/5 to-primary/5">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Chat Integrado</h3>
                <p className="text-muted-foreground">
                  Comunique-se diretamente com clientes e freelancers através do chat
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-card transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-success/5">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Perfis Verificados</h3>
                <p className="text-muted-foreground">
                  Profissionais e contratantes com perfis verificados e histórico transparente
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-card transition-all duration-300 border-0 bg-gradient-to-br from-success/5 to-primary/5">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Conexão Rápida</h3>
                <p className="text-muted-foreground">
                  Candidate-se e contrate em poucos cliques com nossa interface intuitiva
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Pronto para começar?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Junte-se a milhares de freelancers e contratantes que já estão usando o Trampo Aki
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/login">
              <Button size="xl" variant="floating" className="min-w-[200px]">
                Cadastrar como Freelancer
              </Button>
            </Link>
            <Link to="/login">
              <Button size="xl" variant="outline" className="min-w-[200px] bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary">
                Sou Contratante
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={trampoAkiLogo} 
                  alt="Trampo Aki" 
                  className="w-8 h-8 rounded-lg object-cover"
                />
                <h3 className="text-xl font-bold">Trampo Aki</h3>
              </div>
              <p className="text-white/70">
                Conectando freelancers e contratantes através da geolocalização
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Para Freelancers</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Encontrar Vagas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Criar Perfil</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dicas de Sucesso</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Para Contratantes</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Publicar Vaga</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Encontrar Freelancers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Como Funciona</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/70">
            <p>&copy; 2024 Trampo Aki. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;