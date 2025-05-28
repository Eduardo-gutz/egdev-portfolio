'use client'
import React from 'react';
import ReusableBackground from './ReusableBackground';
import { Mail, Phone } from 'lucide-react'; // Iconos para email y teléfono
import Button from './Button';

const Contact = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí iría la lógica para enviar el formulario, por ejemplo, a una API.
    // Por ahora, solo mostraremos los datos en la consola.
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log('Datos del formulario:', data);
    alert('Mensaje enviado (simulación). Revisa la consola para ver los datos.');
    event.currentTarget.reset(); // Limpia el formulario después de enviar
  };

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-white max-w-5xl mx-auto">
          Ponte en Contacto
        </h2>
        
        <div className="relative">
          <ReusableBackground />
          
          <div className="relative max-w-3xl mx-auto bg-accent/9 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-2xl border border-white/10">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Información de Contacto */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-4">Información Directa</h3>
                <p className="text-gray-300">
                  Si prefieres un contacto más directo, no dudes en usar los siguientes medios:
                </p>
                <a href="mailto:tuemail@example.com" className="flex items-center space-x-3 text-lg text-sky-400 hover:text-sky-300 transition-colors duration-300 group">
                  <Mail className="w-6 h-6 text-sky-500 group-hover:text-sky-400" />
                  <span>tuemail@example.com</span>
                </a>
                <a href="tel:+1234567890" className="flex items-center space-x-3 text-lg text-sky-400 hover:text-sky-300 transition-colors duration-300 group">
                  <Phone className="w-6 h-6 text-sky-500 group-hover:text-sky-400" />
                  <span>+12 345 67890</span>
                </a>
                <p className="text-gray-400 text-sm pt-4">
                  Responderé lo antes posible. ¡Espero tu mensaje!
                </p>
              </div>

              {/* Formulario de Contacto */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">Nombre Completo</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-2.5 bg-light-accent/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all duration-300"
                    placeholder="Tu Nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">Correo Electrónico</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-2.5 bg-light-accent/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all duration-300"
                    placeholder="tu.email@ejemplo.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">Mensaje</label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 bg-light-accent/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all duration-300 resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>
                <div>
                  <Button variant="primary">
                    Enviar Mensaje
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 