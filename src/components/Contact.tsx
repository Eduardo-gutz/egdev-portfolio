'use client'
import React, { useEffect, useState } from 'react';
import ReusableBackground from './ReusableBackground';
import { Mail, Phone } from 'lucide-react'; // Iconos para email y teléfono
import Button from './Button';
import { initEmailJS, sendEmail } from '@/services/email';
import { toast } from 'react-toastify';

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async () => {
    try {
      setIsLoading(true)
      if (!formData.email || !formData.name || !formData.message) {
        toast.error('Por favor, complete todos los campos del formulario.')
        return
      }
      await sendEmail(formData.email, formData.name, formData.message)
      setFormData({
        name: '',
        email: '',
        message: ''
      })
      setIsSuccess(true)
      toast.success('Mensaje enviado correctamente, te responderé lo antes posible.')
    } catch {
      toast.error('Error al enviar el mensaje')
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    initEmailJS()
  }, [])

  return (
    <section id="contact" className="py-20 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-white max-w-5xl mx-auto">
          Ponte en Contacto
        </h2>

        <div className="relative">
          <ReusableBackground />

          <div className="relative max-w-3xl mx-auto bg-accent/9 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-2xl border border-white/10">

            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-4">Información Directa</h3>
                <p className="text-gray-300">
                  Si prefieres un contacto más directo, no dudes en usar los siguientes medios:
                </p>
                <a href="mailto:tuemail@example.com" className="flex items-center space-x-3 text-lg text-text-secondary hover:text-light-accent/80 transition-colors duration-300 group">
                  <Mail className="w-6 h-6 text-text-secondary group-hover:text-light-accent/80" />
                  <span>eduardogutzfl@gmail.com</span>
                </a>
                <a href="tel:+1234567890" className="flex items-center space-x-3 text-lg text-text-secondary hover:text-light-accent/80 transition-colors duration-300 group">
                  <Phone className="w-6 h-6 text-text-secondary group-hover:text-light-accent/80" />
                  <span>+52 246 168 41 74</span>
                </a>
                <p className="text-gray-400 text-sm pt-4">
                  Responderé lo antes posible. ¡Espero tu mensaje!
                </p>
              </div>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">Nombre Completo</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-2.5 bg-light-accent/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all duration-300"
                    placeholder="Tu Nombre"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    value={formData.name}
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
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    value={formData.email}
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
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    value={formData.message}
                  ></textarea>
                </div>
                <div>
                  <Button variant="primary" onClick={handleSubmit} disabled={isLoading || isSuccess}>
                    {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
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