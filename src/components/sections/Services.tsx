import React, { useEffect, useRef } from 'react';
import { Activity, Brain, Heart, MoveDiagonal, Scroll, Users } from 'lucide-react';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
};

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  return (
    <div className={`animate-on-scroll delay-${index * 100} glass-card p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1`}>
      <div className="bg-physio-100 text-physio-700 rounded-full w-14 h-14 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-physio-900 mb-3">{title}</h3>
      <p className="text-physio-700">{description}</p>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: <Activity size={24} />,
      title: 'Fisioterapia Ortopédica',
      description: 'Tratamento especializado para lesões musculares, articulares e ósseas, recuperando sua mobilidade com segurança.'
    },
    {
      icon: <Brain size={24} />,
      title: 'Fisioterapia Neurológica',
      description: 'Reabilitação para pacientes com disfunções do sistema nervoso, melhorando coordenação e equilíbrio.'
    },
    {
      icon: <Heart size={24} />,
      title: 'Fisioterapia Cardiorrespiratória',
      description: 'Recuperação da função respiratória e cardiovascular, aumentando sua resistência e qualidade de vida.'
    },
    {
      icon: <Users size={24} />,
      title: 'Fisioterapia Pediátrica',
      description: 'Atendimento especializado para crianças, com abordagem lúdica e técnicas apropriadas para cada idade.'
    },
    {
      icon: <MoveDiagonal size={24} />,
      title: 'Fisioterapia Desportiva',
      description: 'Prevenção e tratamento de lesões esportivas, otimizando o desempenho de atletas profissionais e amadores.'
    },
    {
      icon: <Scroll size={24} />,
      title: 'Pilates Terapêutico',
      description: 'Método que combina alongamento e fortalecimento, ideal para reabilitação, controle postural e alívio de dores.'
    },
  ];

  return (
    <section id="services" className="bg-white py-20 relative" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-physio-100 rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-physio-100 rounded-full blur-3xl opacity-60 -z-10"></div>
      
      <div className="physio-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="animate-on-scroll">
            <span className="inline-block px-4 py-1 bg-physio-100 text-physio-700 rounded-full text-sm font-medium mb-4">
              Nossos Serviços
            </span>
          </div>
          <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-physio-900 mb-6">
            Soluções completas para sua saúde e bem-estar
          </h2>
          <p className="animate-on-scroll text-lg text-physio-700">
            Oferecemos uma variedade de tratamentos personalizados para atender às suas necessidades específicas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;