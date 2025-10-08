import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Star, Briefcase, Clock, Shield, Zap, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Download = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Encontre trabalho próximo de você e{" "}
                <span className="text-primary">comece hoje</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Conecte-se com oportunidades de trabalho na sua região. 
                Milhares de freelancers já estão ganhando dinheiro com o Trampo Aki.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Baixar no Google Play
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Baixar na App Store
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="relative">
                  <div className="absolute -inset-8 bg-gradient-to-r from-success/20 to-primary/20 rounded-full blur-3xl"></div>
                  <div className="relative">
                    <div className="bg-card border-8 border-foreground rounded-[3rem] p-4 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                      <div className="bg-background rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                        <div className="bg-primary p-4 text-primary-foreground">
                          <div className="text-sm font-medium">Trampo Aki</div>
                        </div>
                        <div className="p-6 space-y-4">
                          <div className="flex items-center gap-3 bg-muted p-4 rounded-lg">
                            <MapPin className="w-8 h-8 text-primary" />
                            <div className="text-left">
                              <div className="font-bold text-sm">1.230 vagas</div>
                              <div className="text-xs text-muted-foreground">próximas a você</div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            {[1, 2, 3].map((i) => (
                              <div key={i} className="bg-muted p-3 rounded-lg animate-pulse">
                                <div className="h-4 bg-muted-foreground/20 rounded w-3/4 mb-2"></div>
                                <div className="h-3 bg-muted-foreground/10 rounded w-1/2"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossos números</h2>
            <p className="text-muted-foreground text-lg">Conectando pessoas e oportunidades pelo Brasil</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-3">
              <div className="text-5xl md:text-6xl font-bold text-primary">+150 mil</div>
              <p className="text-lg text-muted-foreground">Profissionais cadastrados e satisfeitos</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="text-5xl md:text-6xl font-bold text-primary">+60 mil</div>
              <p className="text-lg text-muted-foreground">Vagas concluídas com sucesso</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="text-5xl md:text-6xl font-bold text-primary">+R$ 14 mi</div>
              <p className="text-lg text-muted-foreground">Pagos aos profissionais</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            O que você pode fazer com o Trampo Aki?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg">Vagas por geolocalização</h3>
                <p className="text-sm text-muted-foreground">
                  Encontre oportunidades próximas a você com nosso mapa interativo
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 mx-auto bg-success/10 rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-success" />
                </div>
                <h3 className="font-bold text-lg">Conexão direta</h3>
                <p className="text-sm text-muted-foreground">
                  Chat em tempo real com contratantes para negociar e fechar acordos
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 mx-auto bg-warning/10 rounded-2xl flex items-center justify-center">
                  <Clock className="w-8 h-8 text-warning" />
                </div>
                <h3 className="font-bold text-lg">Pagamento rápido</h3>
                <p className="text-sm text-muted-foreground">
                  Receba seus pagamentos de forma segura e automática após o trabalho
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 mx-auto bg-purple-500/10 rounded-2xl flex items-center justify-center">
                  <Star className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="font-bold text-lg">Sistema de avaliações</h3>
                <p className="text-sm text-muted-foreground">
                  Construa sua reputação profissional com avaliações de clientes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Por que escolher o Trampo Aki?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Oportunidades próximas</h3>
                <p className="text-muted-foreground">Trabalhe perto de casa e economize tempo e dinheiro com deslocamento</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Pagamentos seguros</h3>
                <p className="text-muted-foreground">Sistema de pagamento integrado e seguro para todas as transações</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Flexibilidade total</h3>
                <p className="text-muted-foreground">Escolha quando e onde trabalhar de acordo com sua disponibilidade</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Suporte dedicado</h3>
                <p className="text-muted-foreground">Equipe pronta para ajudar sempre que você precisar</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Construa sua reputação</h3>
                <p className="text-muted-foreground">Sistema de avaliações para destacar seu trabalho de qualidade</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Sem intermediários</h3>
                <p className="text-muted-foreground">Negocie diretamente com contratantes e ganhe mais</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Sections */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Empresários Section */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Você é Empresário?</h3>
                  <p className="text-muted-foreground mb-6">
                    Encontre profissionais qualificados na sua região. Publique vagas, gerencie contratações e pague com segurança através do app.
                  </p>
                  <div className="text-sm font-medium mb-4">Baixe agora para empresas</div>
                  <div className="flex flex-col gap-3">
                    <Button className="gap-2 w-full justify-start">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      Google Play
                    </Button>
                    <Button variant="outline" className="gap-2 w-full justify-start">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      App Store
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Prestadores Section */}
            <Card className="hover:shadow-xl transition-shadow border-primary">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-success" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Você é Prestador de Serviço?</h3>
                  <p className="text-muted-foreground mb-6">
                    Encontre oportunidades de trabalho próximas a você. Candidate-se a vagas, gerencie seus projetos e receba pagamentos automaticamente.
                  </p>
                  <div className="text-sm font-medium mb-4">Baixe agora para profissionais</div>
                  <div className="flex flex-col gap-3">
                    <Button className="gap-2 w-full justify-start bg-success hover:bg-success/90">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      Google Play
                    </Button>
                    <Button variant="outline" className="gap-2 w-full justify-start border-success text-success hover:bg-success/10">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      App Store
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Trampo Aki</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Conectando freelancers e contratantes através da geolocalização. 
              Encontre oportunidades próximas a você.
            </p>
            <div className="flex justify-center gap-6 pt-4">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Início
              </Link>
              <Link to="/map" className="text-muted-foreground hover:text-primary transition-colors">
                Mapa
              </Link>
              <Link to="/login" className="text-muted-foreground hover:text-primary transition-colors">
                Login
              </Link>
            </div>
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                © 2025 Trampo Aki. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Download;
