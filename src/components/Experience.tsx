import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, Zap } from "lucide-react";

const experiences = [
  {
    role: "President",
    organization: "CompuVate Association",
    icon: Award,
    achievements: [
      "Led hackathons, coding competitions, and mentorship programs",
      "Fostered a culture of innovation and technical excellence"
    ],
    color: "primary"
  },
  {
    role: "Chief Technical Lead",
    organization: "Software Engineering Association",
    icon: Zap,
    achievements: [
      "Guided project development and technical initiatives",
      "Organized workshops and skill-building sessions for students"
    ],
    color: "secondary"
  },
  {
    role: "Volunteer Secretary",
    organization: "IEEE Student Branch",
    icon: Users,
    achievements: [
      "Coordinated events and ensured smooth communication among members",
      "Supported technical projects and student innovation competitions"
    ],
    color: "accent"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Leadership & Impact
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Driving innovation and excellence through student leadership
            </p>
          </div>

          {/* Experience Cards */}
          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <Card 
                  key={index} 
                  className="hover:shadow-glow transition-all duration-300 border-2 hover:border-primary/50 animate-slide-up overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`h-1 bg-gradient-to-r from-${exp.color} to-primary`} />
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 bg-gradient-to-br from-${exp.color} to-primary rounded-lg shrink-0`}>
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl">{exp.role}</CardTitle>
                        <CardDescription className="text-base mt-1">
                          {exp.organization}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex gap-3 text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;