import React from 'react';

export default function Solution() {
  const features = [
    {
      icon: 'fa-solid fa-scale-balanced',
      color: 'bg-brand-100 text-brand-700 group-hover:bg-brand-600',
      borderHover: 'hover:border-brand-500 hover:shadow-brand-500/10',
      title: 'Trueque Flexible',
      desc: 'Permite trueques 1 a 1, trueques múltiples o mixtos con ajuste de diferencia monetaria consensuado sin intermediarios bancarios.',
      tag: 'Ver flujo de intercambio',
      textColor: 'text-brand-700'
    },
    {
      icon: 'fa-solid fa-map-location-dot',
      color: 'bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600',
      borderHover: 'hover:border-emerald-500 hover:shadow-emerald-500/10',
      title: 'Catálogo Georreferenciado',
      desc: 'Explora ferias cercanas, puestos de artesanos y productores locales con filtros inteligentes por tipo de producto y disponibilidad física.',
      tag: 'Soporte offline-first',
      textColor: 'text-emerald-700'
    },
    {
      icon: 'fa-solid fa-comments',
      color: 'bg-teal-100 text-teal-700 group-hover:bg-teal-600',
      borderHover: 'hover:border-teal-500 hover:shadow-teal-500/10',
      title: 'Chat en Vivo y Acuerdos',
      desc: 'Mensajería instantánea directa con contrapropuestas formales en un tap y fijación de puestos o puntos de entrega seguros.',
      tag: 'Confirmación digital',
      textColor: 'text-teal-700'
    },
    {
      icon: 'fa-solid fa-shield-halved',
      color: 'bg-amber-100 text-amber-700 group-hover:bg-amber-600',
      borderHover: 'hover:border-amber-500 hover:shadow-amber-500/10',
      title: 'Reputación y Confianza',
      desc: 'Perfiles verificados con historial de trueques completados, valoraciones transparentes y respaldo del organizador de feria.',
      tag: 'Comunidad validada',
      textColor: 'text-amber-700'
    }
  ];

  return (
    <section id="solucion" className="py-16 sm:py-24 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-wider text-brand-700 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
            Componentes del Sistema
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Diseñado para revolucionar los intercambios comunitarios
          </h2>
          <p className="text-slate-600 text-sm sm:text-lg">
            Feriando rescata la esencia del trueque ancestral integrándolo con la agilidad, transparencia y georreferenciación de una suite moderna en Flutter.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feat, idx) => (
            <div 
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/90 ${feat.borderHover} hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between`}
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl ${feat.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:text-white transition-all duration-300 shadow-sm`}>
                  <i className={feat.icon}></i>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">{feat.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
              <div className={`mt-5 pt-4 border-t border-slate-200/60 flex items-center text-xs font-bold ${feat.textColor} gap-1.5`}>
                <span>{feat.tag}</span>
                <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
