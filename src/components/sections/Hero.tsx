import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const benefits = [
    'Tratamentos personalizados',
    'Equipe especializada',
    'Abordagem holística',
    'Resultados comprovados'
  ];

  return (
    <div id="home" className="relative min-h-screen pt-20 overflow-hidden" ref={heroRef}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-physio-50 to-physio-100 -z-10"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-physio-200 rounded-full blur-3xl opacity-60 animate-pulse-soft -z-10"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-physio-300 rounded-full blur-3xl opacity-50 animate-pulse-soft -z-10"></div>
      
      <div className="physio-container relative z-10 flex flex-col lg:flex-row items-center pt-16 md:pt-24 pb-16">
        <div className="w-full lg:w-1/2 text-left order-2 lg:order-1 mt-12 lg:mt-0">
          <div className="animate-on-scroll delay-100">
            <span className="inline-block px-4 py-1 bg-physio-100 text-physio-700 rounded-full text-sm font-medium mb-6">
              Fisioterapia de Excelência
            </span>
          </div>
          
          <h1 className="animate-on-scroll text-4xl md:text-5xl lg:text-6xl font-bold text-physio-900 leading-tight mb-6">
            Recupere seu bem-estar com tratamentos personalizados
          </h1>
          
          <p className="animate-on-scroll delay-200 text-lg text-physio-800 mb-8 max-w-xl">
            Combinamos técnicas modernas e abordagem humanizada para ajudar você a recuperar seus movimentos e qualidade de vida de forma eficiente e duradoura.
          </p>
          
          <div className="animate-on-scroll delay-300 grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle size={20} className="text-physio-600 mr-2" />
                <span className="text-physio-800">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="animate-on-scroll delay-400 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-physio-600 hover:bg-physio-700 text-white py-3 px-8 rounded-full transition-all duration-300 text-center font-medium transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Agende sua Consulta
            </a>
            <a
              href="#services"
              className="flex items-center justify-center text-physio-800 hover:text-physio-600 border border-physio-300 hover:border-physio-400 py-3 px-8 rounded-full transition-all duration-300 text-center font-medium"
            >
              Conheça os Serviços <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center items-center">
          <div className="relative w-3/4 aspect-square animate-float">
            <div className="absolute inset-0 rounded-full bg-physio-300/50 transform translate-x-4 translate-y-4"></div>
            <div className="glass-card w-full h-full overflow-hidden rounded-3xl transform rotate-3 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80"
                alt="Fisioterapeuta cuidando de paciente"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 80C840 80 960 70 1080 65C1200 60 1320 60 1380 60L1440 60V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;