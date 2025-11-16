import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code, Palette, Server, Users } from "lucide-react";

const skills = {
  programming: ["C++", "Java","ASP.NET Core", "C", "MySQL","Python" ,"TypeScript"],
  web: ["React", "Vite", "Blazor","HTML", "CSS", "PHP", "JavaScript"],
  tech: ["ERP","SFA","POS","HRIS" ,"API Testing", "Automation", "Machine Learning"],
  design: ["Wireframing", "Prototyping", "User Research"],
  soft: ["Leadership", "Collaboration", "Mentorship", "Problem Solving"]
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              About Me – Passion Meets Innovation
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Bio */}
          <div className="prose prose-lg max-w-none text-center animate-slide-up">
            <p className="text-muted-foreground leading-relaxed">
              I’m Deshan Vimukthi, a passionate Software Engineering undergraduate at NSBM Green University, driven by a deep interest in <span className="font-semibold text-foreground">software architecture, full-stack development, cloud technologies, and modern DevOps practices</span>. With hands-on experience in building real-world applications and a strong technical foundation, I strive to blend problem-solving with innovation to create meaningful, scalable software solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
             As the<span className="font-semibold text-foreground"> President of the CompuVate Association, Chief Technical Lead of the Software Engineering Association, and Secretary of the IEEE Student Branch,</span> I’ve had the privilege of leading teams, organizing hackathons, mentoring students, and driving technical initiatives that create real impact on campus. These experiences strengthened my leadership, communication, and collaborative decision-making skills.
            </p>

             <p className="text-muted-foreground leading-relaxed mt-4">
              Professionally, I work as a<span className="font-semibold text-foreground"> Technical Business Analyst Intern at eVision Microsystems,</span> where I collaborate with engineering teams to understand complex ERP, POS, SFA, HRIS and enterprise software ecosystems. I’ve contributed to system analysis, API testing, debugging, workflow mapping, and development tasks gaining exposure to <span className="font-semibold text-foreground">C#, .NET Core MVC, SQL Server, MySQL, Docker, Azure, Postman, JMeter, GitHub, and Agile practices.</span>
            </p>

             <p className="text-muted-foreground leading-relaxed mt-4">
              I thrive at the intersection of <span className="font-semibold text-foreground">technology, creativity, and logic.</span> Whether it’s architecting backend systems, designing intuitive UIs, optimizing databases, or exploring AI-driven automation, I enjoy turning ideas into real, high-impact software.
            </p>

             <p className="text-muted-foreground leading-relaxed mt-4">
              My goal is simple:<span className="font-semibold text-foreground">
to engineer solutions that elevate people, empower businesses, and push the boundaries of innovation.</span>
            </p>

          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            <Card className="p-6 space-y-4 hover:shadow-glow transition-all duration-300 border-2 hover:border-primary/50 animate-slide-up">
              <div className="p-3 bg-gradient-primary rounded-lg w-fit">
                <Code className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-glow transition-all duration-300 border-2 hover:border-secondary/50 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="p-3 bg-gradient-to-br from-secondary to-primary rounded-lg w-fit">
                <Server className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Web Development</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.web.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-glow transition-all duration-300 border-2 hover:border-accent/50 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="p-3 bg-gradient-to-br from-accent to-primary rounded-lg w-fit">
                <Palette className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tech.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-glow transition-all duration-300 border-2 hover:border-primary/50 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="p-3 bg-gradient-primary rounded-lg w-fit">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Fun Fact */}
          <Card className="p-8 bg-gradient-primary text-primary-foreground border-0 shadow-glow">
            <p className="text-lg leading-relaxed">
              <span className="font-bold text-xl">Fun Fact:</span> Outside coding, I love exploring AI technologies, creating small apps for real-world problems, and making tech more accessible to everyone. 🌟
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;