import React, { useState } from 'react';

export default function DemoForm({ onSubmitRequest, onShowToast }) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    org: '',
    rol: 'Organizador de Feria',
    plataforma: 'Android (APK Móvil)',
    fecha: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email) {
      onShowToast('Por favor completa al menos tu nombre y correo.', 'warning');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newRequest = {
        id: `REQ-${Date.now().toString().slice(-4)}`,
        ...formData,
        estado: 'Pendiente',
        timestamp: 'Hace un momento'
      };

      onSubmitRequest(newRequest);
      setIsSubmitting(false);
      setSubmitted(true);
      onShowToast('¡Solicitud de demostración agendada con éxito!', 'success');

      setFormData({
        nombre: '',
        email: '',
        org: '',
        rol: 'Organizador de Feria',
        plataforma: 'Android (APK Móvil)',
        fecha: '',
        mensaje: ''
      });
    }, 700);
  };

  return (
    <section id="contacto-demo" className="py-16 sm:py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Context Information */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-wider text-brand-700 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
              Implementación & Demostración
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Lleva Feriando a tu comunidad o feria local
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Coordinamos sesiones demostrativas para organizadores de ferias, cooperativas agrícolas, colectivos de artesanos y municipios interesados en dinamizar el comercio solidario.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center text-lg shrink-0 mt-0.5">
                  <i className="fa-solid fa-mobile-screen-button"></i>
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">Prueba Guiada en Dispositivos Reales</h4>
                  <p className="text-xs text-slate-500">Instalación y walkthrough directo con el archivo APK en celulares Android de tus feriantes.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-lg shrink-0 mt-0.5">
                  <i className="fa-solid fa-users-gear"></i>
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">Capacitación a Productores</h4>
                  <p className="text-xs text-slate-500">Sesión práctica sobre publicación de productos, definición de valor de referencia y acuerdos de trueque.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center text-lg shrink-0 mt-0.5">
                  <i className="fa-solid fa-server"></i>
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">Conectividad con API Cloud</h4>
                  <p className="text-xs text-slate-500">Integración con backend de sincronización en Azure para soporte multi-feria en tiempo real.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
              <i className="fa-solid fa-circle-check text-brand-600 text-base"></i>
              <span>Sin costos de licenciamiento inicial ni compromisos obligatorios.</span>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-2xl relative overflow-hidden">
              
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">Agendar Demostración Personalizada</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">Completa el formulario y nos contactaremos contigo en menos de 24 horas.</p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start justify-between gap-3 animate-fade-in">
                  <div className="flex items-center gap-2.5">
                    <i className="fa-solid fa-circle-check text-emerald-600 text-xl"></i>
                    <div>
                      <h4 className="font-black text-sm">¡Solicitud recibida!</h4>
                      <p className="text-xs text-emerald-800">Hemos registrado tus datos. Puedes verla reflejada en el Panel Administrativo.</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSubmitted(false)} 
                    className="text-emerald-700 hover:text-emerald-900 text-xs font-bold underline cursor-pointer"
                  >
                    Enviar otra
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Nombre Completo <span className="text-rose-500">*</span>
                    </label>
                    <input 
                      type="text"
                      name="nombre"
                      required
                      placeholder="Ej. Carlos Mendoza"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-sm text-slate-900 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Correo Electrónico <span className="text-rose-500">*</span>
                    </label>
                    <input 
                      type="email"
                      name="email"
                      required
                      placeholder="carlos@feriaverde.org"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-sm text-slate-900 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Organización, Feria o Colectivo
                    </label>
                    <input 
                      type="text"
                      name="org"
                      placeholder="Ej. Cooperativa Agroecológica"
                      value={formData.org}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-sm text-slate-900 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Rol o Perfil
                    </label>
                    <select 
                      name="rol"
                      value={formData.rol}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-sm text-slate-900 outline-none transition-all bg-white"
                    >
                      <option value="Organizador de Feria">Organizador de Feria</option>
                      <option value="Feriante / Productor">Feriante / Productor</option>
                      <option value="Coordinador Comunitario">Coordinador Comunitario</option>
                      <option value="Autoridad Local / ONG">Autoridad Local / ONG</option>
                      <option value="Usuario / Comprador">Usuario / Comprador</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Plataforma de Interés Principal
                    </label>
                    <select 
                      name="plataforma"
                      value={formData.plataforma}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-sm text-slate-900 outline-none transition-all bg-white"
                    >
                      <option value="Android (APK Móvil)">Android (APK Móvil)</option>
                      <option value="Windows (EXE Escritorio)">Windows (EXE Escritorio)</option>
                      <option value="macOS (DMG Apple)">macOS (DMG Apple)</option>
                      <option value="Todas las plataformas">Todas las plataformas</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Fecha Estimada Deseada
                    </label>
                    <input 
                      type="date"
                      name="fecha"
                      value={formData.fecha}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-sm text-slate-900 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Detalles del proyecto o dudas
                  </label>
                  <textarea 
                    name="mensaje"
                    rows="3"
                    placeholder="Cuéntanos cuántos productores participan o qué tipo de trueques realizan habitualmente..."
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-sm text-slate-900 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-600 via-emerald-600 to-teal-600 hover:from-brand-700 hover:to-emerald-700 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-brand-600/25 hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa-solid fa-spinner animate-spin"></i>
                      <span>Procesando Solicitud...</span>
                    </>
                  ) : (
                    <>
                      <i className="fa-regular fa-paper-plane"></i>
                      <span>Solicitar Demostración Guiada</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
