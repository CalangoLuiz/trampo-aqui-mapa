import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, X, DollarSign, Clock } from "lucide-react";

// Mock data for demonstration
const mockJobsOnMap = [
  {
    id: 1,
    title: "Desenvolvimento Web",
    price: "R$ 800",
    duration: "3 dias",
    location: "Vila Madalena",
    coordinates: [-46.6877, -23.5431],
    urgent: true
  },
  {
    id: 2,
    title: "Design Gráfico", 
    price: "R$ 1.200",
    duration: "5 dias",
    location: "Pinheiros",
    coordinates: [-46.7014, -23.5676],
    urgent: false
  },
  {
    id: 3,
    title: "Fotografia",
    price: "R$ 600",
    duration: "1 dia",
    location: "Itaim Bibi",
    coordinates: [-46.6784, -23.5751],
    urgent: false
  }
];

export const JobMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [apiKey, setApiKey] = useState('');
  const [needsApiKey, setNeedsApiKey] = useState(true);

  const initializeMap = () => {
    if (!mapContainer.current || !apiKey) return;

    // This is a placeholder for Mapbox integration
    // In a real implementation, you would use mapbox-gl here
    console.log('Map would be initialized with API key:', apiKey);
    setNeedsApiKey(false);
  };

  if (needsApiKey) {
    return (
      <div className="min-h-screen bg-muted/30 p-4">
        <div className="container mx-auto max-w-md">
          <Card className="shadow-card">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <CardTitle>Configurar Mapa</CardTitle>
              <p className="text-muted-foreground text-sm">
                Para usar o mapa de vagas, você precisa de uma chave da API do Mapbox
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Mapbox API Key</label>
                <Input
                  type="password"
                  placeholder="pk.eyJ1..."
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="mt-1"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Obtenha sua chave em{' '}
                  <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    mapbox.com
                  </a>
                </p>
              </div>
              <Button 
                onClick={initializeMap}
                disabled={!apiKey}
                className="w-full"
              >
                Inicializar Mapa
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Map Container */}
      <div className="relative w-full h-screen">
        {/* Placeholder Map */}
        <div 
          ref={mapContainer} 
          className="absolute inset-0 bg-gradient-to-br from-muted to-muted/60 flex items-center justify-center"
        >
          <div className="text-center text-muted-foreground">
            <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium mb-2">Mapa de Vagas</p>
            <p className="text-sm">Visualização das vagas próximas a você</p>
          </div>
        </div>

        {/* Job Markers (simulated) */}
        {mockJobsOnMap.map((job) => (
          <div
            key={job.id}
            className="absolute w-4 h-4 bg-primary rounded-full border-2 border-white shadow-card cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-transform z-10"
            style={{
              left: `${30 + job.id * 20}%`,
              top: `${40 + job.id * 10}%`
            }}
            onClick={() => setSelectedJob(job)}
          >
            {job.urgent && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full border border-white"></div>
            )}
          </div>
        ))}

        {/* Search Bar */}
        <div className="absolute top-4 left-4 right-4 z-20">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Buscar vagas por localização..." 
                className="pl-10 bg-white shadow-card"
              />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute top-4 right-4 z-20">
          <div className="flex flex-col gap-2">
            <Button size="icon" variant="floating">
              +
            </Button>
            <Button size="icon" variant="floating">
              -
            </Button>
          </div>
        </div>

        {/* Selected Job Card */}
        {selectedJob && (
          <div className="absolute bottom-4 left-4 right-4 z-20">
            <Card className="shadow-floating animate-slide-up">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{selectedJob.title}</h3>
                      {selectedJob.urgent && (
                        <Badge variant="destructive" className="text-xs">
                          Urgente
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">
                      {selectedJob.location}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedJob(null)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1 text-success font-medium">
                    <DollarSign className="w-4 h-4" />
                    <span>{selectedJob.price}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{selectedJob.duration}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Ver Detalhes
                  </Button>
                  <Button variant="gradient" size="sm" className="flex-1">
                    Candidatar-se
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Legend */}
        <div className="absolute bottom-4 right-4 z-20">
          <Card className="shadow-card">
            <CardContent className="p-3">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span>Vagas disponíveis</span>
              </div>
              <div className="flex items-center gap-2 text-sm mt-1">
                <div className="w-3 h-3 bg-primary rounded-full relative">
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-destructive rounded-full border border-white"></div>
                </div>
                <span>Urgente</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};