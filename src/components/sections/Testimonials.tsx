import React, { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
  stars: number;
};

const Testimonial = ({ quote, author, role, stars }: TestimonialProps) => {
  return (
    <div className="glass-card p-8 h-full flex flex-col">
      <div className="mb-6 flex items-center">
        <Quote size={32} className="text-physio-500 opacity-50" />
      </div>
      <p className="text-physio-800 italic mb-6 flex-grow">{quote}</p>
      <div>
        <div className="flex mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
        <div className="font-bold text-physio-900">{author}</div>
        <div className="text-sm text-physio-600">{role}</div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      quote: "O tratamento foi transformador. Após anos de dor crônica nas costas, finalmente encontrei alívio e pude retomar minhas atividades normais.",
      author: "Carlos Silva",
      role: "Paciente de Fisioterapia Ortopédica",
      stars: 5
    },
    {
      quote: "Fiquei impressionada com a atenção personalizada e os resultados rápidos. A equipe é extremamente profissional e acolhedora.",
      author: "Maria Santos",
      role: "Paciente de Reabilitação Pós-cirúrgica",
      stars: 5
    },
    {
      quote: "Meu filho teve uma recuperação incrível com a fisioterapia pediátrica. A abordagem lúdica fez toda a diferença no tratamento.",
      author: "Ana Oliveira",
      role: "Mãe de Paciente Pediátrico",
      stars: 5
    },
    {
      quote: "Como atleta, a fisioterapia desportiva foi essencial para minha recuperação rápida e retorno seguro aos treinos.",
      author: "Pedro Costa",
      role: "Atleta Profissional",
      stars: 5
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === Math.ceil(testimonials.length / 2) - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? Math.ceil(testimonials.length / 2) - 1 : prev - 1));
  };

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

  useEffect(() => {
    // Auto-advance slides
    slideInterval.current = setInterval(nextSlide, 6000);
    
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white relative" ref={sectionRef}>
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-physio-200 rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-physio-100 rounded-full blur-3xl opacity-50 -z-10"></div>
      
      <div className="physio-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="animate-on-scroll">
            <span className="inline-block px-4 py-1 bg-physio-100 text-physio-700 rounded-full text-sm font-medium mb-4">
              Depoimentos
            </span>
          </div>
          <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-physio-900 mb-6">
            O que nossos pacientes dizem
          </h2>
          <p className="animate-on-scroll text-lg text-physio-700">
            Histórias reais de transformação e recuperação com nossa abordagem terapêutica.
          </p>
        </div>
        
        <div className="relative animate-on-scroll">
          {/* Desktop view: 2 testimonials side by side */}
          <div className="hidden md:grid grid-cols-2 gap-8 overflow-hidden">
            {testimonials.slice(currentSlide * 2, currentSlide * 2 + 2).map((testimonial, index) => (
              <div key={index} className="transform transition-all duration-500 animate-scale-in" style={{ animationDelay: `${index * 200}ms` }}>
                <Testimonial {...testimonial} />
              </div>
            ))}
          </div>
          
          {/* Mobile view: 1 testimonial at a time */}
          <div className="md:hidden">
            <Testimonial {...testimonials[currentSlide]} />
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-10 gap-4">
            <button 
              onClick={prevSlide}
              className="bg-white text-physio-700 hover:text-physio-600 p-3 rounded-full shadow-md hover:shadow-lg transition-all border border-physio-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2 items-center">
              {Array.from({ length: Math.ceil(testimonials.length / (window.innerWidth >= 768 ? 2 : 1)) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentSlide ? 'bg-physio-600 w-6' : 'bg-physio-300'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextSlide}
              className="bg-white text-physio-700 hover:text-physio-600 p-3 rounded-full shadow-md hover:shadow-lg transition-all border border-physio-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;