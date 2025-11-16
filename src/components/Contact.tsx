import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Yogyakarta, Indonesia",
      link: null
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62 XXX XXXX XXXX",
      link: "tel:+62XXXXXXXXXX"
    },
    {
      icon: Mail,
      label: "Email",
      value: "lilis.haria@example.com",
      link: "mailto:lilis.haria@example.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/lilis-haria",
      link: "https://linkedin.com/in/lilis-haria"
    }
  ];

  return (
    <section id="contact" className="section-padding cream-gradient">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6">
            Let's discuss how we can work together on your next product
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {contactInfo.map((item, index) => (
            <Card 
              key={index} 
              className="p-6 modern-shadow border-0 card-hover cursor-pointer bg-card hover:bg-primary-light/20 transition-all duration-300"
              onClick={() => item.link && window.open(item.link, '_blank')}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                  <p className="text-muted-foreground">{item.value}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
