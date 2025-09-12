import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, User, Star } from "lucide-react";

interface JobCardProps {
  title: string;
  description: string;
  location: string;
  distance: string;
  price: string;
  duration: string;
  clientName: string;
  clientRating: number;
  tags: string[];
  urgent?: boolean;
}

export const JobCard = ({
  title,
  description,
  location,
  distance,
  price,
  duration,
  clientName,
  clientRating,
  tags,
  urgent = false
}: JobCardProps) => {
  return (
    <Card className="hover:shadow-floating transition-all duration-300 cursor-pointer group border-l-4 border-l-primary/20 hover:border-l-primary">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-1">
                {title}
              </CardTitle>
              {urgent && (
                <Badge variant="destructive" className="text-xs">
                  Urgente
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
              {description}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Price and Duration */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-success font-semibold">
              <DollarSign className="w-4 h-4" />
              <span>{price}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
          <span className="text-primary font-medium">• {distance}</span>
        </div>

        {/* Client Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium">{clientName}</p>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-warning fill-current" />
                <span className="text-xs text-muted-foreground">{clientRating}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
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
  );
};