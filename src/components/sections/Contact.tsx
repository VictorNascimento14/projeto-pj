import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-physio-50 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-physio-100 rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-physio-200 rounded-full blur-3xl opacity-50 -z-10"></div>
      
      <div className="physio-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1 bg-physio-100 text-physio-700 rounded-full text-sm font-medium mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-physio-900 mb-6">
            Estamos prontos para cuidar de você
          </h2>
          <p className="text-lg text-physio-700">
            Entre em contato para agendar sua avaliação ou tirar dúvidas sobre nossos tratamentos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="animate-on-scroll">
            <div className="glass-card p-8 md:p-10">
              <h3 className="text-2xl font-bold text-physio-900 mb-6">Agende sua consulta</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-physio-800 mb-2">Nome Completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-physio-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-physio-500"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-physio-800 mb-2">Telefone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 border border-physio-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-physio-500" 
                      placeholder="(00) 00000-0000"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-physio-800 mb-2">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-physio-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-physio-500" 
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-physio-800 mb-2">Serviço de Interesse</label>
                  <select 
                    id="service" 
                    className="w-full px-4 py-3 border border-physio-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-physio-500 bg-white"
                    required
                  >
                    <option value="" disabled selected>Selecione um serviço</option>
                    <option value="ortopedica">Fisioterapia Ortopédica</option>
                    <option value="neurologica">Fisioterapia Neurológica</option>
                    <option value="cardiorespiratoria">Fisioterapia Cardiorrespiratória</option>
                    <option value="pediatrica">Fisioterapia Pediátrica</option>
                    <option value="desportiva">Fisioterapia Desportiva</option>
                    <option value="pilates">Pilates Terapêutico</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-physio-800 mb-2">Mensagem (Opcional)</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-3 border border-physio-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-physio-500" 
                    placeholder="Descreva sua necessidade ou dúvida..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-physio-600 hover:bg-physio-700 text-white py-3 px-6 rounded-lg transition-all duration-300 font-medium flex items-center justify-center group"
                >
                  Enviar Mensagem
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="animate-on-scroll">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-physio-900 mb-6">Informações de Contato</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-card p-6 flex items-start">
                  <div className="bg-physio-100 text-physio-700 rounded-full p-3 mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-physio-900 mb-1">Telefone</h4>
                    <p className="text-physio-700">(11) 9876-5432</p>
                    <p className="text-physio-700">(11) 1234-5678</p>
                  </div>
                </div>
                
                <div className="glass-card p-6 flex items-start">
                  <div className="bg-physio-100 text-physio-700 rounded-full p-3 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-physio-900 mb-1">E-mail</h4>
                    <p className="text-physio-700">contato@verdefisio.com</p>
                    <p className="text-physio-700">agendamento@verdefisio.com</p>
                  </div>
                </div>
                
                <div className="glass-card p-6 flex items-start">
                  <div className="bg-physio-100 text-physio-700 rounded-full p-3 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-physio-900 mb-1">Endereço</h4>
                    <p className="text-physio-700">Rua das Palmeiras, 123</p>
                    <p className="text-physio-700">Jardim Verde - São Paulo/SP</p>
                  </div>
                </div>
                
                <div className="glass-card p-6 flex items-start">
                  <div className="bg-physio-100 text-physio-700 rounded-full p-3 mr-4">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-physio-900 mb-1">Horário</h4>
                    <p className="text-physio-700">Segunda a Sexta: 8h às 19h</p>
                    <p className="text-physio-700">Sábado: 8h às 12h</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 mt-6">
                <h4 className="font-bold text-physio-900 mb-4">Localização</h4>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976400400454!2d-46.6565841!3d-23.565129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1628000000000!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;