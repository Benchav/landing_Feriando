import React, { useState } from 'react';

export default function PhoneSimulator({ onShowToast }) {
  const [activeTab, setActiveTab] = useState('catalogo');

  const handleProposeTrade = (item) => {
    onShowToast(`Propuesta enviada: Intercambio por "${item}" registrado.`, 'success');
  };

  return (
    <div className="relative w-full max-w-[310px] sm:max-w-[340px]">
      
      {/* Exterior Shadow Glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-brand-500/25 to-teal-500/25 rounded-[56px] blur-2xl pointer-events-none"></div>

      {/* Device Outer Frame */}
      <div className="relative z-20 bg-slate-900 rounded-[50px] p-3 sm:p-3.5 shadow-2xl ring-1 ring-slate-800 border-[3px] border-slate-700">
        
        {/* Top Dynamic Island / Speaker Notch */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-950 rounded-full z-30 flex items-center justify-center gap-2">
          <div className="w-3 h-3 rounded-full bg-slate-900 border border-slate-800"></div>
          <div className="w-8 h-1.5 rounded-full bg-slate-800"></div>
        </div>

        {/* Phone Screen Content Container */}
        <div className="bg-white rounded-[40px] overflow-hidden border border-slate-800 h-[580px] sm:h-[610px] flex flex-col justify-between select-none">
          
          {/* Phone Screen Header Bar */}
          <div className="pt-8 pb-3 px-5 bg-gradient-to-r from-brand-800 via-brand-700 to-emerald-700 text-white">
            <div className="flex items-center justify-between text-xs mb-2.5 opacity-90">
              <span className="font-bold text-[11px]">9:41</span>
              <div className="flex gap-1.5 items-center text-[10px]">
                <i className="fa-solid fa-signal"></i>
                <i className="fa-solid fa-wifi"></i>
                <i className="fa-solid fa-battery-full"></i>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-black text-sm tracking-tight leading-tight">Feriando Móvil</h4>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300"></span>
                </div>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <i className="fa-solid fa-location-arrow text-[9px]"></i> Feria Comunitaria Central
                </p>
              </div>
              <div 
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer"
                onClick={() => onShowToast('Notificaciones: Tienes 2 solicitudes de trueque pendientes', 'info')}
              >
                <i className="fa-regular fa-bell text-xs"></i>
              </div>
            </div>
          </div>

          {/* Phone Screen Body */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-slate-50 text-slate-800">
            
            {activeTab === 'catalogo' && (
              <>
                {/* Banner Promocional */}
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-3 text-white shadow-sm flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/25 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-arrows-rotate text-lg"></i>
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-amber-100">Feria de Trueque Activa</span>
                    <h5 className="text-xs font-bold leading-tight truncate">Intercambios sin dinero hoy</h5>
                  </div>
                </div>

                {/* Quick Categories Selector */}
                <div className="flex gap-2 overflow-x-auto pb-1 text-[11px] scrollbar-none">
                  <span className="px-2.5 py-1 rounded-full bg-brand-600 text-white font-bold shrink-0 shadow-sm cursor-pointer">Todos</span>
                  <span className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-600 font-medium shrink-0 cursor-pointer">Alimentos</span>
                  <span className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-600 font-medium shrink-0 cursor-pointer">Artesanías</span>
                  <span className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-600 font-medium shrink-0 cursor-pointer">Textiles</span>
                </div>

                {/* Simulated Product Cards inside Phone */}
                <div className="space-y-2.5">
                  <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm hover:border-brand-400 transition-all">
                    <div className="flex gap-3 items-center">
                      <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-700 text-xl font-bold">
                        <i className="fa-solid fa-mug-hot"></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase font-black text-brand-600">Trueque Directo</span>
                          <span className="text-[9px] text-slate-400">Hace 10m</span>
                        </div>
                        <h6 className="font-extrabold text-xs text-slate-900 truncate">Café Orgánico de Altura (1lb)</h6>
                        <p className="text-[11px] text-slate-500 truncate">Busca: Miel de abeja pura</p>
                        <div className="mt-1 flex items-center justify-between">
                          <span className="text-[11px] font-black text-slate-700">Ref: C$ 180</span>
                          <button 
                            onClick={() => handleProposeTrade('Café Orgánico')}
                            className="px-2.5 py-1 rounded-lg bg-brand-50 hover:bg-brand-100 text-brand-700 border border-brand-200 text-[10px] font-extrabold transition-colors cursor-pointer"
                          >
                            Proponer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm hover:border-brand-400 transition-all">
                    <div className="flex gap-3 items-center">
                      <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 text-amber-700 text-xl font-bold">
                        <i className="fa-solid fa-jar"></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase font-black text-amber-600">Intercambio Mixto</span>
                          <span className="text-[9px] text-slate-400">Hace 1h</span>
                        </div>
                        <h6 className="font-extrabold text-xs text-slate-900 truncate">Miel Silvestre del Bosque</h6>
                        <p className="text-[11px] text-slate-500 truncate">Acepta semillas o frutas</p>
                        <div className="mt-1 flex items-center justify-between">
                          <span className="text-[11px] font-black text-slate-700">Ref: C$ 220</span>
                          <button 
                            onClick={() => handleProposeTrade('Miel Silvestre')}
                            className="px-2.5 py-1 rounded-lg bg-brand-50 hover:bg-brand-100 text-brand-700 border border-brand-200 text-[10px] font-extrabold transition-colors cursor-pointer"
                          >
                            Proponer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm hover:border-brand-400 transition-all">
                    <div className="flex gap-3 items-center">
                      <div className="w-14 h-14 rounded-xl bg-indigo-100 flex items-center justify-center shrink-0 text-indigo-700 text-xl font-bold">
                        <i className="fa-solid fa-bag-shopping"></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase font-black text-indigo-600">Trueque 1:1</span>
                          <span className="text-[9px] text-slate-400">Hace 2h</span>
                        </div>
                        <h6 className="font-extrabold text-xs text-slate-900 truncate">Bolso Tejido en Macramé</h6>
                        <p className="text-[11px] text-slate-500 truncate">Busca plantas ornamentales</p>
                        <div className="mt-1 flex items-center justify-between">
                          <span className="text-[11px] font-black text-slate-700">Ref: C$ 350</span>
                          <button 
                            onClick={() => handleProposeTrade('Bolso Macramé')}
                            className="px-2.5 py-1 rounded-lg bg-brand-50 hover:bg-brand-100 text-brand-700 border border-brand-200 text-[10px] font-extrabold transition-colors cursor-pointer"
                          >
                            Proponer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'trueques' && (
              <div className="space-y-2.5">
                <h6 className="text-xs font-black text-slate-800">Tus Negociaciones Activas</h6>
                <div className="p-3.5 bg-white rounded-2xl border border-slate-200 shadow-sm text-xs">
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="font-black text-brand-700">TRUEQUE #TRQ-44</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold">Aceptado</span>
                  </div>
                  <p className="text-xs font-bold text-slate-800 mt-1.5">Intercambio de Queso por Canasta Fresca</p>
                  <p className="text-[11px] text-slate-500 mt-0.5"><i className="fa-regular fa-clock"></i> Cita: Mañana 9:00 AM • Stand #4</p>
                </div>

                <div className="p-3.5 bg-white rounded-2xl border border-slate-200 shadow-sm text-xs">
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="font-black text-amber-600">TRUEQUE #TRQ-45</span>
                    <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-extrabold">Propuesta</span>
                  </div>
                  <p className="text-xs font-bold text-slate-800 mt-1.5">Café 1lb x 2 Frascos de Miel</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">En espera de respuesta del productor</p>
                </div>
              </div>
            )}

            {activeTab === 'chat' && (
              <div className="space-y-2.5">
                <h6 className="text-xs font-black text-slate-800">Mensajes de Feria</h6>
                <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center text-xs shadow-sm">RP</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <h6 className="text-xs font-bold text-slate-800 truncate">Rosa Pastrana</h6>
                      <span className="text-[10px] text-slate-400">9:30 AM</span>
                    </div>
                    <p className="text-[11px] text-slate-500 truncate mt-0.5">¿Llevas las artesanías a la feria hoy?</p>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-600 text-white font-bold flex items-center justify-center text-xs shadow-sm">MV</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <h6 className="text-xs font-bold text-slate-800 truncate">María Valle</h6>
                      <span className="text-[10px] text-slate-400">Ayer</span>
                    </div>
                    <p className="text-[11px] text-slate-500 truncate mt-0.5">¡Acuerdo confirmado! Nos vemos en el Stand #12.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'perfil' && (
              <div className="text-center space-y-2.5 py-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-600 to-emerald-500 text-white font-black text-2xl flex items-center justify-center mx-auto shadow-md">
                  <i className="fa-regular fa-user"></i>
                </div>
                <div>
                  <h6 className="text-sm font-black text-slate-800">Feriante Registrado</h6>
                  <p className="text-xs text-slate-500">Comunidad Feriando</p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-amber-500 text-xs font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <span className="text-slate-700 ml-1">4.9 (24 trueques)</span>
                </div>
              </div>
            )}

          </div>

          {/* Phone Bottom Tab Bar with Live Switcher */}
          <div className="bg-white border-t border-slate-200 px-4 py-2.5 flex justify-around text-slate-400">
            <button 
              onClick={() => setActiveTab('catalogo')} 
              className={`flex flex-col items-center gap-0.5 transition-colors cursor-pointer ${activeTab === 'catalogo' ? 'text-brand-600 font-bold' : 'hover:text-slate-700'}`}
            >
              <i className="fa-solid fa-shop text-sm"></i>
              <span className="text-[9px]">Catálogo</span>
            </button>
            <button 
              onClick={() => setActiveTab('trueques')} 
              className={`flex flex-col items-center gap-0.5 transition-colors cursor-pointer ${activeTab === 'trueques' ? 'text-brand-600 font-bold' : 'hover:text-slate-700'}`}
            >
              <i className="fa-solid fa-handshake text-sm"></i>
              <span className="text-[9px]">Trueques</span>
            </button>
            <button 
              onClick={() => setActiveTab('chat')} 
              className={`flex flex-col items-center gap-0.5 transition-colors cursor-pointer relative ${activeTab === 'chat' ? 'text-brand-600 font-bold' : 'hover:text-slate-700'}`}
            >
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-brand-500"></span>
              <i className="fa-solid fa-comments text-sm"></i>
              <span className="text-[9px]">Mensajes</span>
            </button>
            <button 
              onClick={() => setActiveTab('perfil')} 
              className={`flex flex-col items-center gap-0.5 transition-colors cursor-pointer ${activeTab === 'perfil' ? 'text-brand-600 font-bold' : 'hover:text-slate-700'}`}
            >
              <i className="fa-regular fa-user text-sm"></i>
              <span className="text-[9px]">Perfil</span>
            </button>
          </div>

          {/* iOS Home Touch Indicator */}
          <div className="bg-white py-1 flex justify-center">
            <div className="w-32 h-1 bg-slate-300 rounded-full"></div>
          </div>

        </div>
      </div>

    </div>
  );
}
