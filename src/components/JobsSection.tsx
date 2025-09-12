import { JobCard } from "./JobCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, MapPin } from "lucide-react";

const mockJobs = [
  {
    title: "Desenvolvimento de Landing Page",
    description: "Preciso de uma landing page moderna para minha startup de tecnologia. Deve ser responsiva e otimizada para conversão.",
    location: "Vila Madalena, São Paulo",
    distance: "2.5 km",
    price: "R$ 800",
    duration: "3 dias",
    clientName: "Maria Silva",
    clientRating: 4.9,
    tags: ["React", "Design", "Landing Page"],
    urgent: true
  },
  {
    title: "Design de Logo e Identidade Visual",
    description: "Startup de alimentação saudável procura designer para criar logo e identidade visual completa.",
    location: "Pinheiros, São Paulo",
    distance: "1.8 km",
    price: "R$ 1.200",
    duration: "5 dias",
    clientName: "João Santos",
    clientRating: 4.7,
    tags: ["Logo", "Branding", "Illustrator"]
  },
  {
    title: "Fotografia de Produtos",
    description: "E-commerce de roupas femininas precisa de fotógrafo para sessão com 50 produtos. Estúdio disponível.",
    location: "Itaim Bibi, São Paulo",
    distance: "3.2 km",
    price: "R$ 600",
    duration: "1 dia", 
    clientName: "Ana Costa",
    clientRating: 5.0,
    tags: ["Fotografia", "E-commerce", "Produtos"]
  },
  {
    title: "Consultoria em Marketing Digital",
    description: "Pequena empresa local busca consultor para definir estratégia de marketing digital e redes sociais.",
    location: "Centro, São Paulo",
    distance: "4.1 km",
    price: "R$ 900",
    duration: "2 dias",
    clientName: "Pedro Lima",
    clientRating: 4.6,
    tags: ["Marketing", "Social Media", "Estratégia"]
  }
];

export const JobsSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Vagas Próximas a Você</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubra oportunidades de trabalho na sua região e candidate-se com apenas um clique
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Buscar por tipo de trabalho, habilidade..." 
                className="pl-10 h-12"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Localização" 
                className="pl-10 h-12 md:w-48"
              />
            </div>
            <Button variant="outline" size="lg" className="h-12 px-6">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
            <Button variant="gradient" size="lg" className="h-12 px-8">
              Ver no Mapa
            </Button>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mockJobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>

        {/* View More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Ver Mais Vagas
          </Button>
        </div>
      </div>
    </section>
  );
};