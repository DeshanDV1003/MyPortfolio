import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "MySales MVC – Full Stack Sales & Inventory System",
    description: " ASP.NET Core 8.0 MVC app using EF Core and Identity. Includes Customer & Item CRUD, dashboard, and secure authentication.",
    tech: ["ASP.NET Core 8.0", "C#", "EF Core", "MySQL", "Identity", "Bootstrap"],
    gradient: "from-primary to-secondary",
    codeUrl: "https://github.com/DeshanDV1003/MySalesMvc.git"
  },
  {
    title: "Perfume E-Commerce Website",
    description: "Created a bilingual online store with intuitive navigation and product management system. Enhanced user experience and accessibility.",
    tech: ["HTML", "CSS", "PHP", "MySQL"],
    gradient: "from-secondary to-accent",
    codeUrl: "https://github.com/DeshanDV1003/DEA-Final.Assignment.-22.2.git"
  },
  {
    title: "Sky Auction Management System",
    description: " Auction system with database integration and QA testing. Developed using C# and .NET Core MVC, focusing on reliability and user experience.",
    tech: ["SQL Server", "UML", "Manual Testing", "VS Code"],
    gradient: "from-accent to-primary",
    codeUrl: "https://github.com/DeshanDV1003/SkyAuctionManagementSystem.git"
  },
  {
    title: "Bus Seat Booking System – UI Design",
    description: "Designed an intuitive UI for a bus seat booking system, focusing on user experience and accessibility.",
    tech: ["Figma", "UI Design", "Prototyping"],
    gradient: "from-primary to-accent",
    codeUrl: "https://github.com/DeshanDV1003/BusSeatBookingSystem.git"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              My Projects – Real Solutions, Real Impact
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Showcasing innovative solutions built with modern technologies
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-glow transition-all duration-300 border-2 hover:border-primary/50 overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed pt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {tech}
                      </Badge>
                    ))}
   </div>
                  <div className="flex gap-3 pt-2">
                    <Button
  asChild
  variant="outline"
  size="sm"
  className="group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground"
>
  <a href={project.codeUrl} target="_blank" rel="noreferrer">
    <Github className="w-4 h-4 mr-2" />
    Code
    <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
  </a>
</Button>

                    <Button variant="outline" size="sm" className="group/btn border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;