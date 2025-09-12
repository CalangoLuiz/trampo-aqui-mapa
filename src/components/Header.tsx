import { Button } from "@/components/ui/button";
import { MapPin, User, MessageCircle, Bell, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import trampoAkiLogo from "@/assets/trampo-aki-logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={trampoAkiLogo} 
              alt="Trampo Aki" 
              className="w-10 h-10 rounded-lg object-cover"
            />
            <h1 className="text-xl font-bold text-foreground">Trampo Aki</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/map" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Mapa
            </Link>
            <a href="#messages" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Mensagens
            </a>
            <Link to="/profile" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <User className="w-4 h-4" />
              Perfil
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full text-xs"></span>
            </Button>
            
            <div className="hidden md:flex gap-2">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/login">
                <Button variant="hero">Cadastrar</Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <nav className="flex flex-col gap-4">
              <Link to="/map" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 p-2">
                <MapPin className="w-4 h-4" />
                Mapa
              </Link>
              <a href="#messages" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 p-2">
                <MessageCircle className="w-4 h-4" />
                Mensagens
              </a>
              <Link to="/profile" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 p-2">
                <User className="w-4 h-4" />
                Perfil
              </Link>
              <div className="flex gap-2 mt-4">
                <Link to="/login" className="flex-1">
                  <Button variant="outline" className="w-full">Login</Button>
                </Link>
                <Link to="/login" className="flex-1">
                  <Button variant="hero" className="w-full">Cadastrar</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};