import React from 'react';
import PhoneSimulator from './PhoneSimulator';

export default function Hero({ onShowToast }) {
  return (
    <section id="inicio" className="relative overflow-hidden pt-6 pb-16 sm:pt-10 sm:pb-20 lg:pt-16 lg:pb-32 bg-gradient-to-b from-emerald-50/60 via-white to-slate-50 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Hero Presentation */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            
            {/* Main Impact Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.15]">
              El nuevo impulso al <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-brand-700 via-emerald-600 to-teal-500 bg-clip-text text-transparent animate-gradient-text">
                trueque y comercio local
              </span>
            </h1>

            {/* Pitch Description */}
            <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              <strong>Feriando</strong> conecta comunidades, ferias de productores y emprendedores locales mediante intercambio justo de productos, catálogo geolocalizado y acuerdos sin fricción en una app nativa en Flutter.
            </p>

            {/* Interactive CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 sm:pt-2">
              <a 
                href="#descargas" 
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-brand-600 via-emerald-600 to-teal-600 hover:from-brand-700 hover:to-emerald-700 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-brand-600/30 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2.5 sm:gap-3 group"
              >
                <i className="fa-brands fa-android text-lg group-hover:-translate-y-0.5 transition-transform"></i>
                <span>Descargar APK Oficial</span>
              </a>
              <a 
                href="#simulador-movil" 
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-extrabold text-sm sm:text-base border-2 border-slate-200 hover:border-brand-500 hover:text-brand-700 transition-all duration-300 flex items-center justify-center gap-2.5 sm:gap-3 shadow-sm hover:shadow-md"
              >
                <i className="fa-solid fa-mobile-screen text-brand-600"></i>
                <span>Probar Simulador</span>
              </a>
            </div>

            {/* Feature Highlights Metric Strip (Optimized for Mobile) */}
            <div className="pt-6 sm:pt-8 grid grid-cols-3 gap-2 sm:gap-4 border-t border-slate-200/90 max-w-lg mx-auto lg:mx-0 text-center sm:text-left">
              <div className="p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/80 border border-slate-100 shadow-sm min-w-0">
                <p className="text-base sm:text-2xl lg:text-3xl font-black text-slate-900 leading-tight">100%</p>
                <p className="text-[10px] sm:text-xs text-slate-500 font-semibold mt-0.5 leading-tight truncate">Flutter Nativo</p>
              </div>
              <div className="p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/80 border border-slate-100 shadow-sm min-w-0">
                <p className="text-base sm:text-2xl lg:text-3xl font-black text-brand-600 leading-tight">Trueque</p>
                <p className="text-[10px] sm:text-xs text-slate-500 font-semibold mt-0.5 leading-tight truncate">Directo / Mixto</p>
              </div>
              <div className="p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/80 border border-slate-100 shadow-sm min-w-0">
                <p className="text-base sm:text-2xl lg:text-3xl font-black text-emerald-600 leading-tight">Realtime</p>
                <p className="text-[10px] sm:text-xs text-slate-500 font-semibold mt-0.5 leading-tight truncate">Chat & Acuerdos</p>
              </div>
            </div>

          </div>

          {/* Right Hero Visual / Interactive Phone Preview */}
          <div className="lg:col-span-5 flex justify-center relative pt-4 lg:pt-0">
            
            {/* Floating Interactive Badge 1 (Left Top) */}
            <div className="hidden sm:flex absolute -left-12 top-24 z-30 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 items-center gap-3 animate-float">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-brand-600 to-emerald-400 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-brand-500/20">
                <i className="fa-solid fa-handshake"></i>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-extrabold text-slate-900">Trueque Acordado</span>
                  <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">Café de altura x Miel orgánica</p>
              </div>
            </div>

            {/* Floating Interactive Badge 2 (Right Bottom) */}
            <div className="hidden sm:flex absolute -right-8 bottom-28 z-30 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 items-center gap-3 animate-float-reverse">
              <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-lg shadow-md shadow-amber-500/10">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <p className="text-xs font-extrabold text-slate-900">Feria Villa Verde</p>
                <p className="text-[11px] text-slate-500 font-medium">Stand #04 • Punto Seguro</p>
              </div>
            </div>

            {/* Phone Device Component */}
            <PhoneSimulator onShowToast={onShowToast} />

          </div>

        </div>
      </div>
    </section>
  );
}
