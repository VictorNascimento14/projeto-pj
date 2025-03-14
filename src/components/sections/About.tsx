import React, { useEffect, useRef } from 'react';
import { CheckCircle, Award, Medal, Zap } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el) => {
              el.classList.add('visible');
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

  const achievements = [
    { number: '10+', text: 'Anos de Experiência' },
    { number: '1500+', text: 'Pacientes Atendidos' },
    { number: '95%', text: 'Taxa de Satisfação' },
    { number: '20+', text: 'Especialidades' },
  ];

  const qualifications = [
    'Formação em Fisioterapia pela Universidade Federal',
    'Especialização em Fisioterapia Ortopédica e Desportiva',
    'Certificação Internacional em Técnicas Manuais',
    'Membro da Associação Brasileira de Fisioterapia',
  ];

  return (
    <section id="about" className="bg-physio-50 py-20 relative" ref={sectionRef}>
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-physio-200 rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-physio-100 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="physio-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="animate-on-scroll">
              <span className="inline-block px-4 py-1 bg-physio-100 text-physio-700 rounded-full text-sm font-medium mb-4">
                Sobre Nós
              </span>
            </div>
            <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-physio-900 mb-6">
              Compromisso com excelência e cuidado personalizado
            </h2>
            <p className="animate-on-scroll text-lg text-physio-700 mb-8">
              Com mais de 10 anos de experiência, nossa clínica é reconhecida pela excelência no atendimento e pelos resultados efetivos nos tratamentos. Dedicamos tempo para entender as necessidades individuais de cada paciente, desenvolvendo programas de tratamento personalizados que garantem a recuperação rápida e duradoura.
            </p>

            <div className="animate-on-scroll space-y-4 mb-8">
              {qualifications.map((item, index) => (
                <div key={index} className="flex">
                  <CheckCircle size={20} className="text-physio-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-physio-800">{item}</p>
                </div>
              ))}
            </div>

            <div className="animate-on-scroll">
              <a
                href="#contact"
                className="bg-physio-600 hover:bg-physio-700 text-white py-3 px-8 rounded-full transition-all duration-300 inline-block font-medium transform hover:scale-105 shadow-md"
              >
                Conheça Nosso Espaço
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="animate-on-scroll relative">
              <div className="relative z-10">
                <div className="glass-card overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80"
                    alt="Clínica de fisioterapia"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                {/* Achievement stats */}
                <div className="glass-card absolute -bottom-10 -right-10 p-6 w-4/5">
                  <div className="grid grid-cols-2 gap-6">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-physio-700">
                          {achievement.number}
                        </div>
                        <div className="text-sm text-physio-600">
                          {achievement.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Floating badges */}
                <div className="glass-card absolute -top-6 -left-6 py-2 px-4 flex items-center">
                  <Award size={18} className="text-physio-600 mr-2" />
                  <span className="text-sm font-medium text-physio-800">Premiado</span>
                </div>
                
                <div className="glass-card absolute top-1/4 -right-6 py-2 px-4 flex items-center">
                  <Medal size={18} className="text-physio-600 mr-2" />
                  <span className="text-sm font-medium text-physio-800">Certificado</span>
                </div>
                
                <div className="glass-card absolute bottom-1/3 -left-6 py-2 px-4 flex items-center">
                  <Zap size={18} className="text-physio-600 mr-2" />
                  <span className="text-sm font-medium text-physio-800">Inovador</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;