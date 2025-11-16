import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import projectKahasolusi from "@/assets/project-kahasolusi.png";
import projectWireframe from "@/assets/project-wireframe.png";
import projectEta from "@/assets/project-eta.png";

const Projects = () => {
  const projects = [
    {
      title: "KahaSolusi Company Profile Website",
      description: "A software house project developed in the 'Proyek Aplikasi Dasar' course. Team of 4: Lilis (Product Manager & Project Manager), Hayyina (UI/UX Designer), Azril & Adit (Developers). Lilis handled scoping, project timeline, milestone planning, team coordination, and communication with stakeholders.",
      link: "http://kahasolusi-compro.vercel.app",
      buttonText: "View Documentation",
      image: projectKahasolusi
    },
    {
      title: "COMPFEST PMA Case Study: Team Wireframe",
      description: "A product case study created with two other PMA teammates as part of COMPFEST Product Management Academy. We developed a digital product concept through research, problem discovery, prototyping, and structured product planning. I contributed to product research, strategy, roadmap, and presentation development.",
      link: "https://www.canva.com/design/DAGwsN2dzA0/QxFx82sFfG9jfgRwiQGGgw/edit",
      buttonText: "View Case Study",
      image: projectWireframe
    },
    {
      title: "COMPFEST PMA × SE Academy × DS Academy × UX Academy (Best Case Team ETA)",
      description: "A cross-academy collaboration with 3 Product Management Academy members (including Lilis), 3 Software Engineering Academy, 3 Data Science Academy, and 2 UX Academy. We built a product solution addressing Indonesia's unemployment challenges and AI-driven job displacement. I contributed to product strategy, research synthesis, PRD creation, roadmap, GTM strategy, and the final pitch. Our team received the Best Case Team ETA award.",
      link: "https://www.canva.com/design/DAGyjDeeeFQ/2y_4P-01F0ShXgC1pMEwng/edit",
      buttonText: "View Pitch Deck",
      image: projectEta
    }
  ];

  return (
    <section id="projects" className="section-padding bg-cream/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of product management and cross-functional leadership in action
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-hover border-0 modern-shadow overflow-hidden group bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary-light/30 to-accent/30">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-base leading-relaxed line-clamp-4">
                  {project.description}
                </CardDescription>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground shadow-md hover:shadow-lg transition-all"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  {project.buttonText}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
