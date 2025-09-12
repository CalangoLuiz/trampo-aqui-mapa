import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Lock, User as UserIcon, Phone, Building } from "lucide-react";
import { Link } from "react-router-dom";
import trampoAkiLogo from "@/assets/trampo-aki-logo.png";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src={trampoAkiLogo} 
              alt="Trampo Aki" 
              className="w-12 h-12 rounded-xl object-cover shadow-floating"
            />
            <h1 className="text-3xl font-bold text-white">Trampo Aki</h1>
          </div>
          <p className="text-white/80">Entre na sua conta ou cadastre-se</p>
        </div>

        <Card className="shadow-floating border-0 bg-white/95 backdrop-blur-sm">
          <CardContent className="p-6">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Entrar</TabsTrigger>
                <TabsTrigger value="register">Cadastrar</TabsTrigger>
              </TabsList>

              {/* Login Tab */}
              <TabsContent value="login" className="space-y-4">
                <CardHeader className="p-0">
                  <CardTitle className="text-center">Bem-vindo de volta!</CardTitle>
                </CardHeader>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input id="email" type="email" placeholder="seu@email.com" className="pl-10" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input id="password" type="password" placeholder="••••••••" className="pl-10" />
                    </div>
                  </div>

                  <div className="text-right">
                    <a href="#" className="text-sm text-primary hover:underline">
                      Esqueceu a senha?
                    </a>
                  </div>

                  <Button className="w-full" size="lg" variant="gradient">
                    Entrar
                  </Button>

                  <div className="text-center text-sm text-muted-foreground">
                    Não tem conta?{' '}
                    <button className="text-primary hover:underline">
                      Cadastre-se
                    </button>
                  </div>
                </div>
              </TabsContent>

              {/* Register Tab */}
              <TabsContent value="register" className="space-y-4">
                <CardHeader className="p-0">
                  <CardTitle className="text-center">Criar conta</CardTitle>
                </CardHeader>

                {/* User Type Selection */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <UserIcon className="w-6 h-6" />
                    <span className="text-xs">Sou Freelancer</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <Building className="w-6 h-6" />
                    <span className="text-xs">Sou Contratante</span>
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <div className="relative">
                      <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input id="name" placeholder="Seu nome completo" className="pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email-register">E-mail</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input id="email-register" type="email" placeholder="seu@email.com" className="pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input id="phone" placeholder="(11) 99999-9999" className="pl-10" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password-register">Senha</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input id="password-register" type="password" placeholder="••••••••" className="pl-10" />
                    </div>
                  </div>

                  <Button className="w-full" size="lg" variant="gradient">
                    Criar conta
                  </Button>

                  <div className="text-center text-xs text-muted-foreground">
                    Ao criar uma conta, você concorda com nossos{' '}
                    <a href="#" className="text-primary hover:underline">
                      Termos de Uso
                    </a>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Link to="/" className="text-white/70 hover:text-white text-sm transition-colors">
            ← Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;