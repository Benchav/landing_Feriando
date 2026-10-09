import React, { useState, useRef, useEffect } from 'react';

export default function Simulator({ onShowToast }) {
  const [mode, setMode] = useState('catalogo');
  const [messages, setMessages] = useState([
    { id: 1, sender: 'vendor', text: 'Hola Carlos, ¿llevas los frascos de miel a la feria hoy a las 10:00 AM?' },
    { id: 2, sender: 'user', text: '¡Sí, claro! Ya los tengo listos en el puesto. Nos vemos al lado del quiosco central.' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const chatStreamRef = useRef(null);

  useEffect(() => {
    if (chatStreamRef.current) {
      chatStreamRef.current.scrollTop = chatStreamRef.current.scrollHeight;
    }
  }, [messages, mode]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const text = chatInput.trim();
    if (!text) return;

    const userMsg = { id: Date.now(), sender: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setChatInput('');

    // Vendor reply simulation
    setTimeout(() => {
      const vendorReply = {
        id: Date.now() + 1,
        sender: 'vendor',
        text: '¡Excelente acuerdo! Ya reservé los productos en el catálogo de Feriando. Nos vemos en el Stand #12. 🤝'
      };
      setMessages(prev => [...prev, vendorReply]);
      onShowToast('María Valle respondió a tu mensaje.', 'info');
    }, 900);
  };

  return (
    <section id="simulador" className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden dark-grid-pattern">
      
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Explanatory Controls */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-wider text-brand-400 bg-brand-950/80 px-3.5 py-1.5 rounded-full border border-brand-800">
              Simulador Interactivo en Vivo
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Experimenta el flujo real de Feriando sin instalar nada
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Selecciona un módulo a continuación para interactuar directamente con las vistas del cliente Flutter:
            </p>

            {/* Module Selector Tabs */}
            <div className="space-y-3 pt-2">
              <button 
                onClick={() => setMode('catalogo')} 
                className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all flex items-center justify-between group cursor-pointer ${
                  mode === 'catalogo' 
                    ? 'border-brand-500/60 bg-brand-900/40 text-white' 
                    : 'border-slate-800 bg-slate-900/60 hover:bg-slate-800/80 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-list-check"></i>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-white">1. Catálogo & Búsqueda Rápida</h4>
                    <p className="text-xs text-slate-400">Publicaciones con valor de referencia y condición</p>
                  </div>
                </div>
                <i className="fa-solid fa-chevron-right text-brand-400 text-xs"></i>
              </button>

              <button 
                onClick={() => setMode('trueques')} 
                className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all flex items-center justify-between group cursor-pointer ${
                  mode === 'trueques' 
                    ? 'border-brand-500/60 bg-brand-900/40 text-white' 
                    : 'border-slate-800 bg-slate-900/60 hover:bg-slate-800/80 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-handshake-simple"></i>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-white">2. Negociador de Trueques</h4>
                    <p className="text-xs text-slate-400">Aceptar, contraofertar o rechazar propuestas</p>
                  </div>
                </div>
                <i className="fa-solid fa-chevron-right text-slate-500 text-xs"></i>
              </button>

              <button 
                onClick={() => setMode('chat')} 
                className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all flex items-center justify-between group cursor-pointer ${
                  mode === 'chat' 
                    ? 'border-brand-500/60 bg-brand-900/40 text-white' 
                    : 'border-slate-800 bg-slate-900/60 hover:bg-slate-800/80 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-message"></i>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-white">3. Chat en Tiempo Real</h4>
                    <p className="text-xs text-slate-400">Envía mensajes interactivos con respuesta simulada</p>
                  </div>
                </div>
                <i className="fa-solid fa-chevron-right text-slate-500 text-xs"></i>
              </button>
            </div>
          </div>

          {/* Right Sandbox Screen Visualizer */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-xl bg-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-slate-800 shadow-2xl relative">
              
              {/* Terminal/Console Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  <span className="ml-2 font-mono text-[11px] text-slate-300">Feriando Sandbox • Vista Previa</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-brand-500/20 text-brand-300 text-[11px] font-bold border border-brand-500/30">
                  {mode === 'catalogo' && 'Catálogo Activo'}
                  {mode === 'trueques' && 'Negociación Activa'}
                  {mode === 'chat' && 'Chat en Vivo'}
                </span>
              </div>

              {/* Dynamic Viewport */}
              <div className="pt-4 min-h-[380px]">
                
                {mode === 'catalogo' && (
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span className="font-bold text-white">Explorador de Puestos en Feria</span>
                      <span className="text-brand-400 font-semibold"><i className="fa-solid fa-location-dot"></i> 12 productores en vivo</span>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-800">
                      <div className="bg-white p-3.5 rounded-2xl border border-slate-700 shadow-sm flex flex-col justify-between">
                        <div>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold">Trueque Directo</span>
                          <h5 className="font-black text-xs mt-2 leading-tight">Queso Artesanal Ahumado (1lb)</h5>
                          <p className="text-[10px] text-slate-500 mt-0.5">De: Finca La Esperanza</p>
                        </div>
                        <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-100">
                          <span className="text-[11px] font-black text-slate-900">C$ 160</span>
                          <button 
                            onClick={() => onShowToast('Solicitud de trueque iniciada para Queso Ahumado', 'success')} 
                            className="px-2.5 py-1 rounded bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-[10px] transition-colors cursor-pointer"
                          >
                            Trueque
                          </button>
                        </div>
                      </div>

                      <div className="bg-white p-3.5 rounded-2xl border border-slate-700 shadow-sm flex flex-col justify-between">
                        <div>
                          <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-extrabold">Mixto con Ajuste</span>
                          <h5 className="font-black text-xs mt-2 leading-tight">Canasta de Hortalizas Frescas</h5>
                          <p className="text-[10px] text-slate-500 mt-0.5">De: Huerto Comunitario El Valle</p>
                        </div>
                        <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-100">
                          <span className="text-[11px] font-black text-slate-900">C$ 200</span>
                          <button 
                            onClick={() => onShowToast('Solicitud de trueque iniciada para Hortalizas Frescas', 'success')} 
                            className="px-2.5 py-1 rounded bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-[10px] transition-colors cursor-pointer"
                          >
                            Trueque
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 bg-brand-950/80 rounded-2xl border border-brand-800/80 text-xs text-brand-200 flex items-center gap-3">
                      <i className="fa-solid fa-wand-magic-sparkles text-brand-400 text-lg"></i>
                      <p className="text-[11px] leading-snug">Los feriantes pueden buscar por trueque libre de dinero o trueque mixto con ajuste acordado en un tap.</p>
                    </div>
                  </div>
                )}

                {mode === 'trueques' && (
                  <div className="space-y-3.5">
                    <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 text-white">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-black text-amber-400">Propuesta Recibida #TRQ-89</span>
                        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">En Revisión</span>
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-3 text-xs border-y border-slate-800 py-3">
                        <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                          <span className="text-[10px] text-slate-400 font-semibold">Tú ofreces:</span>
                          <p className="font-black text-emerald-400 text-sm mt-0.5">2kg Café Especial</p>
                          <span className="text-[10px] text-slate-500">Ref: C$ 360</span>
                        </div>
                        <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                          <span className="text-[10px] text-slate-400 font-semibold">Recibes a cambio:</span>
                          <p className="font-black text-amber-300 text-sm mt-0.5">3 Frascos Miel Pura</p>
                          <span className="text-[10px] text-slate-500">Ref: C$ 360 (Equitativo)</span>
                        </div>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <button 
                          onClick={() => onShowToast('¡Trueque #TRQ-89 ACEPTADO! Notificación enviada al feriante.', 'success')} 
                          className="flex-1 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-extrabold text-xs shadow-md transition-all cursor-pointer"
                        >
                          Aceptar Trueque
                        </button>
                        <button 
                          onClick={() => onShowToast('Contrapropuesta abierta en pantalla de edición.', 'info')} 
                          className="flex-1 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-all cursor-pointer"
                        >
                          Contraofertar
                        </button>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-400 text-center">Intercambio transparente sin tarifas ocultas ni comisiones financieras abusivas.</p>
                  </div>
                )}

                {mode === 'chat' && (
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-800/80 rounded-2xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-brand-500 text-white flex items-center justify-center font-bold text-xs shadow">MV</div>
                        <div>
                          <h6 className="text-xs font-bold text-white">María Valle (Stand #12)</h6>
                          <span className="text-[10px] text-emerald-400 font-medium"><i className="fa-solid fa-circle text-[6px]"></i> En línea en la feria</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => onShowToast('Ubicación compartida: Stand #12, Kiosco Central', 'info')} 
                        className="text-xs text-brand-400 hover:underline cursor-pointer"
                      >
                        <i className="fa-solid fa-map-pin"></i> Punto
                      </button>
                    </div>

                    <div ref={chatStreamRef} className="space-y-2 text-xs py-2 max-h-48 overflow-y-auto pr-1">
                      {messages.map(msg => (
                        <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[80%] p-3 rounded-2xl ${
                            msg.sender === 'user' 
                              ? 'bg-brand-600 text-white rounded-tr-none shadow' 
                              : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'
                          }`}>
                            {msg.text}
                          </div>
                        </div>
                      ))}
                    </div>

                    <form onSubmit={handleSendMessage} className="flex gap-2">
                      <input 
                        type="text" 
                        value={chatInput} 
                        onChange={(e) => setChatInput(e.target.value)} 
                        placeholder="Escribe un mensaje de acuerdo..." 
                        className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white outline-none focus:border-brand-500" 
                      />
                      <button 
                        type="submit" 
                        className="px-4 py-2.5 bg-brand-600 hover:bg-brand-500 text-white rounded-xl text-xs font-bold shadow transition-colors cursor-pointer"
                      >
                        <i className="fa-solid fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
