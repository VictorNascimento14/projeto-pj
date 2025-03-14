import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-physio-900 text-white relative">
      <div className="physio-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">
              <span className="text-physio-400">Verde</span>Fisio
            </h3>
            <p className="text-physio-200 mb-6 max-w-xs">
              Sua clínica de fisioterapia especializada em oferecer tratamentos personalizados para recuperação e bem-estar completo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-physio-300 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="text-physio-300 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="text-physio-300 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 6.5H17.51M7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7C2 4.23858 4.23858 2 7 2ZM16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1902 8.22774 13.4229 8.09408 12.5922C7.96042 11.7615 8.09208 10.9099 8.47034 10.1584C8.8486 9.40685 9.4542 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-physio-200 hover:text-white transition-colors">Fisioterapia Ortopédica</a>
              </li>
              <li>
                <a href="#services" className="text-physio-200 hover:text-white transition-colors">Fisioterapia Neurológica</a>
              </li>
              <li>
                <a href="#services" className="text-physio-200 hover:text-white transition-colors">Fisioterapia Cardiorrespiratória</a>
              </li>
              <li>
                <a href="#services" className="text-physio-200 hover:text-white transition-colors">Fisioterapia Pediátrica</a>
              </li>
              <li>
                <a href="#services" className="text-physio-200 hover:text-white transition-colors">Fisioterapia Desportiva</a>
              </li>
              <li>
                <a href="#services" className="text-physio-200 hover:text-white transition-colors">Pilates Terapêutico</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-physio-200 hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#about" className="text-physio-200 hover:text-white transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#services" className="text-physio-200 hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#testimonials" className="text-physio-200 hover:text-white transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#contact" className="text-physio-200 hover:text-white transition-colors">Contato</a>
              </li>
              <li>
                <a href="#" className="text-physio-200 hover:text-white transition-colors">Política de Privacidade</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-physio-400 mr-3 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-physio-200">Rua das Palmeiras, 123 - Jardim Verde</span>
              </li>
              <li className="flex items-start">
                <span className="text-physio-400 mr-3 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="currentColor"/>
                  </svg>
                </span>
                <span className="text-physio-200">contato@verdefisio.com</span>
              </li>
              <li className="flex items-start">
                <span className="text-physio-400 mr-3 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-physio-200">(11) 9876-5432</span>
              </li>
              <li className="flex items-start">
                <span className="text-physio-400 mr-3 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-physio-200">Seg-Sex: 8h-19h | Sáb: 8h-12h</span>
              </li>
            </ul>
            
            <button 
              onClick={scrollToTop}
              className="mt-8 bg-physio-800 hover:bg-physio-700 text-white p-3 rounded-full transition-all float-right"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-physio-800 py-6">
        <div className="physio-container text-center">
          <p className="text-physio-300 text-sm">
            © {new Date().getFullYear()} VerdeFisio. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;