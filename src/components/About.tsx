import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const skills = [
    "Product Research & Strategy",
    "PRD Creation & Documentation",
    "Roadmap Planning & Prioritization",
    "Backlog Structuring",
    "OKRs & Success Metrics",
    "Go-To-Market Strategy",
    "Cross-Functional Leadership",
    "Stakeholder Communication"
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I am a <span className="font-semibold text-primary">Software Engineering student at Universitas Gadjah Mada</span> with a strong passion for Product and Project Management.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              I have experience leading cross-functional teams and collaborating with UI/UX designers, developers, and stakeholders to build structured, impactful product solutions.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              My expertise includes product research, PRD creation, roadmap planning, backlog structuring, success metrics, OKRs, and Go-To-Market strategy.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              I value <span className="font-semibold text-primary">clarity, user-centered thinking, strong communication, and leadership</span> in every project I work on.
            </p>
          </div>

          <Card className="p-8 shadow-lg border-0 bg-card">
            <h3 className="text-2xl font-bold text-foreground mb-6">Core Expertise</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{skill}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
