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
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-purple-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Comece hoje,
                <span className="block text-success-light">não amanhã!</span>
              </h1>
              <p className="text-xl text-white/90">
                Conecte-se com milhares de oportunidades próximas a você. Baixe o app e comece a trabalhar agora mesmo.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" variant="secondary" className="gap-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store
                </Button>
                <Button size="lg" variant="secondary" className="gap-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Google Play
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-success to-primary rounded-full opacity-20 blur-3xl"></div>
                  <div className="relative bg-white/10 backdrop-blur-lg rounded-[3rem] p-4 shadow-2xl">
                    <div className="bg-gray-900 rounded-[2.5rem] p-6 aspect-[9/19]">
                      <div className="flex items-center justify-center h-full text-white">
                        <MapPin className="w-24 h-24 text-primary" />
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
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-muted-foreground">—— BRASIL ——</span>
            </h2>
            <p className="text-muted-foreground">Outubro 2025</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <div className="text-4xl font-bold mb-2">70.391</div>
                <p className="text-muted-foreground">Freelancers Ativos</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <Briefcase className="w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">12.730.39.30</div>
                <p className="opacity-90">Vagas Disponíveis</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Star className="w-12 h-12 mx-auto mb-4 text-primary" />
                <div className="text-4xl font-bold mb-2">16.661</div>
                <p className="text-muted-foreground">Avaliações 5 Estrelas</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-primary/10 to-success/10 rounded-3xl p-8 aspect-[9/16] max-w-sm mx-auto flex items-center justify-center">
                <MapPin className="w-32 h-32 text-primary" />
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                GEOLOCALIZAÇÃO
              </div>
              <h2 className="text-4xl font-bold">Encontre vagas próximas a você</h2>
              <p className="text-lg text-muted-foreground">
                Use o mapa interativo para descobrir oportunidades na sua região. Quanto mais perto, mais rápido você começa a trabalhar.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-success/10 text-success rounded-full text-sm font-medium">
                CONEXÃO DIRETA
              </div>
              <h2 className="text-4xl font-bold">Chat em tempo real</h2>
              <p className="text-lg text-muted-foreground">
                Converse diretamente com contratantes e freelancers. Negocie valores, tire dúvidas e feche negócios rapidamente.
              </p>
            </div>
            <div>
              <div className="bg-gradient-to-br from-success/10 to-primary/10 rounded-3xl p-8 aspect-[9/16] max-w-sm mx-auto flex items-center justify-center">
                <Users className="w-32 h-32 text-success" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-warning to-success text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">VIRE PREMIUM</h2>
            <p className="text-xl opacity-90">Destaque-se e conquiste mais oportunidades</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg">Destaque no topo</h3>
                <p className="text-sm opacity-90">Seu perfil aparece primeiro nas buscas</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg">Selo Premium</h3>
                <p className="text-sm opacity-90">Badge exclusivo de verificação</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg">Suporte prioritário</h3>
                <p className="text-sm opacity-90">Atendimento rápido e dedicado</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg">Proteção extra</h3>
                <p className="text-sm opacity-90">Seguro contra cancelamentos</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            O que você gostaria de fazer hoje?
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {[
              { icon: "🎨", label: "Design", color: "from-blue-400 to-blue-600" },
              { icon: "💻", label: "Programação", color: "from-green-400 to-green-600" },
              { icon: "📱", label: "Marketing", color: "from-purple-400 to-purple-600" },
              { icon: "✍️", label: "Redação", color: "from-yellow-400 to-yellow-600" },
              { icon: "🎥", label: "Vídeo", color: "from-red-400 to-red-600" },
              { icon: "📸", label: "Fotografia", color: "from-pink-400 to-pink-600" },
              { icon: "🎵", label: "Áudio", color: "from-indigo-400 to-indigo-600" },
              { icon: "📊", label: "Dados", color: "from-teal-400 to-teal-600" },
              { icon: "🏗️", label: "Construção", color: "from-orange-400 to-orange-600" },
              { icon: "🚗", label: "Transporte", color: "from-cyan-400 to-cyan-600" },
              { icon: "🍳", label: "Gastronomia", color: "from-amber-400 to-amber-600" },
              { icon: "🎓", label: "Educação", color: "from-lime-400 to-lime-600" },
            ].map((category, index) => (
              <Card key={index} className="hover:scale-105 transition-transform cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-3 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-3xl group-hover:rotate-12 transition-transform`}>
                    {category.icon}
                  </div>
                  <p className="font-medium text-sm">{category.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-gradient-to-br from-purple-900 via-primary to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-6xl md:text-7xl font-bold mb-8">DOWNLOAD</h2>
          <p className="text-xl mb-12 opacity-90">Disponível para iOS e Android</p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" variant="secondary" className="gap-2 text-lg px-8 py-6">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Baixar na App Store
            </Button>
            <Button size="lg" variant="secondary" className="gap-2 text-lg px-8 py-6">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Baixar no Google Play
            </Button>
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
