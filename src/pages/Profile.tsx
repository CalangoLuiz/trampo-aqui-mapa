import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Star, 
  Calendar, 
  DollarSign, 
  Award, 
  Clock, 
  MessageCircle,
  CheckCircle,
  TrendingUp,
  Camera
} from "lucide-react";
import { Header } from "@/components/Header";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <Card className="shadow-card mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Avatar */}
              <div className="relative">
                <Avatar className="w-32 h-32">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="text-2xl bg-gradient-primary text-white">
                    LS
                  </AvatarFallback>
                </Avatar>
                <Button size="icon" variant="floating" className="absolute -bottom-2 -right-2">
                  <Camera className="w-4 h-4" />
                </Button>
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <h1 className="text-3xl font-bold">Lucas Silva</h1>
                  <Badge variant="success" className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Verificado
                  </Badge>
                </div>
                
                <p className="text-xl text-muted-foreground mb-2">
                  Desenvolvedor Full Stack & Designer UI/UX
                </p>
                
                <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">São Paulo, SP • 5 km de raio</span>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-6">
                  <div className="text-center">
                    <div className="flex items-center gap-1 text-warning">
                      <Star className="w-5 h-5 fill-current" />
                      <span className="text-2xl font-bold text-foreground">4.9</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Avaliação</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success">47</div>
                    <p className="text-sm text-muted-foreground">Jobs concluídos</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">95%</div>
                    <p className="text-sm text-muted-foreground">Taxa de sucesso</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <Button variant="gradient">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                  <Button variant="outline">
                    Ver Portfólio
                  </Button>
                  <Button variant="outline">
                    Editar Perfil
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="sobre" className="w-full">
              <TabsList className="grid grid-cols-4 w-full mb-6">
                <TabsTrigger value="sobre">Sobre</TabsTrigger>
                <TabsTrigger value="portfolio">Portfólio</TabsTrigger>
                <TabsTrigger value="avaliacoes">Avaliações</TabsTrigger>
                <TabsTrigger value="historico">Histórico</TabsTrigger>
              </TabsList>

              {/* Sobre Tab */}
              <TabsContent value="sobre" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Sobre mim</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Desenvolvedor full stack com mais de 5 anos de experiência em React, Node.js e Python. 
                      Especializado em criar interfaces modernas e funcionais, com foco na experiência do usuário. 
                      Trabalho com metodologias ágeis e tenho experiência em projetos de pequeno a grande porte.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Habilidades</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'React', 'TypeScript', 'Node.js', 'Python', 'Figma', 'UI/UX Design',
                        'JavaScript', 'SQL', 'MongoDB', 'AWS', 'Docker', 'Git'
                      ].map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Portfolio Tab */}
              <TabsContent value="portfolio" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((item) => (
                    <Card key={item} className="cursor-pointer hover:shadow-card transition-all">
                      <div className="aspect-video bg-gradient-primary rounded-t-lg"></div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-1">Projeto {item}</h3>
                        <p className="text-sm text-muted-foreground">
                          Descrição breve do projeto desenvolvido
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Avaliações Tab */}
              <TabsContent value="avaliacoes" className="space-y-4">
                {[1, 2, 3].map((review) => (
                  <Card key={review}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarFallback>MC</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold">Maria Costa</h4>
                            <div className="flex text-warning">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-4 h-4 fill-current" />
                              ))}
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-2">
                            Excelente profissional! Entregou o projeto no prazo e com qualidade excepcional.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Desenvolvimento de Landing Page • há 2 semanas
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* Histórico Tab */}
              <TabsContent value="historico" className="space-y-4">
                {[
                  { title: "Landing Page para Startup", client: "TechCorp", value: "R$ 800", status: "Concluído" },
                  { title: "App Mobile Design", client: "StartupX", value: "R$ 1.200", status: "Em andamento" },
                  { title: "Sistema Web Completo", client: "Empresa ABC", value: "R$ 2.500", status: "Concluído" }
                ].map((job, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">{job.title}</h4>
                          <p className="text-sm text-muted-foreground">{job.client}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-success">{job.value}</p>
                          <Badge variant={job.status === "Concluído" ? "success" : "secondary"}>
                            {job.status}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Badges e Conquistas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Badges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-success rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Pontual</p>
                      <p className="text-xs text-muted-foreground">100% dos jobs no prazo</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Bem Avaliado</p>
                      <p className="text-xs text-muted-foreground">Média 4.9+ estrelas</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Top Freelancer</p>
                      <p className="text-xs text-muted-foreground">Top 10% da plataforma</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Estatísticas */}
            <Card>
              <CardHeader>
                <CardTitle>Estatísticas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Tempo médio de resposta</span>
                  <span className="font-semibold">2 horas</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Taxa de recontratação</span>
                  <span className="font-semibold">85%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Membro desde</span>
                  <span className="font-semibold">Jan 2023</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Valor total ganho</span>
                  <span className="font-semibold text-success">R$ 28.400</span>
                </div>
              </CardContent>
            </Card>

            {/* Disponibilidade */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Disponibilidade
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <Badge variant="success">Disponível</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Próxima abertura</span>
                    <span className="font-medium">Imediato</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Horas por semana</span>
                    <span className="font-medium">30-40h</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  Alterar Status
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;