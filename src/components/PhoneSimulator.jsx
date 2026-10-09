import React, { useState, useRef, useEffect } from 'react';

export default function PhoneSimulator({ onShowToast }) {
  const [activeTab, setActiveTab] = useState('catalogo');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Trade negotiations state
  const [trades, setTrades] = useState([
    {
      id: 'TRQ-44',
      titulo: 'Intercambio de Queso x Canasta Fresca',
      cita: 'Mañana 9:00 AM • Stand #4',
      estado: 'Aceptado',
      tipo: 'Trueque 1:1'
    },
    {
      id: 'TRQ-45',
      titulo: 'Café 1lb x 2 Frascos de Miel',
      cita: 'En espera de respuesta del productor',
      estado: 'Propuesta',
      tipo: 'Intercambio Mixto'
    }
  ]);

  // Chat state with automated simulated vendor replies
  const [messages, setMessages] = useState([
    { id: 1, sender: 'vendor', text: '¡Hola! Vi tu propuesta de trueque por la miel silvestre. ¿Tienes café disponible?' },
    { id: 2, sender: 'user', text: '¡Sí! Tengo 2 bolsas de café orgánico recién cosechado.' },
    { id: 3, sender: 'vendor', text: 'Excelente, ¿nos vemos en el Stand #12 de la feria comunitaria?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const chatBottomRef = useRef(null);

  useEffect(() => {
    if (activeTab === 'chat' && chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, activeTab]);

  const handleSendMessage = (e) => {
    e?.preventDefault();
    const text = chatInput.trim();
    if (!text) return;

    const newMsg = { id: Date.now(), sender: 'user', text };
    setMessages((prev) => [...prev, newMsg]);
    setChatInput('');

    // Vendor auto-reply simulation
    setTimeout(() => {
      const vendorReply = {
        id: Date.now() + 1,
        sender: 'vendor',
        text: '¡Trato hecho! Ya registré el acuerdo en Feriando. Nos vemos en el puesto central. 🤝'
      };
      setMessages((prev) => [...prev, vendorReply]);
      onShowToast?.('María Valle (Productora) te ha respondido.', 'info');
    }, 850);
  };

  const sendQuickReply = (text) => {
    setChatInput(text);
    setTimeout(() => {
      const newMsg = { id: Date.now(), sender: 'user', text };
      setMessages((prev) => [...prev, newMsg]);
      setChatInput('');

      setTimeout(() => {
        const vendorReply = {
          id: Date.now() + 1,
          sender: 'vendor',
          text: 'Perfecto, confirmado. ¡Te espero en la feria!'
        };
        setMessages((prev) => [...prev, vendorReply]);
        onShowToast?.('María Valle confirmó el acuerdo.', 'success');
      }, 800);
    }, 100);
  };

  const handleProposeTrade = (productName, category) => {
    const newTrade = {
      id: `TRQ-${Math.floor(10 + Math.random() * 89)}`,
      titulo: `Propuesta por ${productName}`,
      cita: 'Nueva solicitud enviada al productor',
      estado: 'Propuesta',
      tipo: 'Trueque Directo'
    };
    setTrades((prev) => [newTrade, ...prev]);
    onShowToast?.(`¡Propuesta enviada por "${productName}"! Revisa la pestaña Trueques.`, 'success');
  };

  const handleAcceptTrade = (tradeId) => {
    setTrades((prev) =>
      prev.map((t) => (t.id === tradeId ? { ...t, estado: 'Aceptado' } : t))
    );
    onShowToast?.(`Trueque #${tradeId} confirmado con éxito.`, 'success');
  };

  const handleRejectTrade = (tradeId) => {
    setTrades((prev) => prev.filter((t) => t.id !== tradeId));
    onShowToast?.(`Trueque #${tradeId} cancelado.`, 'warning');
  };

  // Catalog items
  const catalogProducts = [
    {
      id: 1,
      nombre: 'Café Orgánico de Altura (1lb)',
      busca: 'Miel de abeja pura',
      ref: 'C$ 180',
      tipo: 'Trueque Directo',
      tipoColor: 'text-brand-600',
      icono: 'fa-mug-hot',
      iconoBg: 'bg-emerald-100 text-emerald-700',
      categoria: 'Alimentos',
      tiempo: 'Hace 10m'
    },
    {
      id: 2,
      nombre: 'Miel Silvestre del Bosque (500ml)',
      busca: 'Semillas o frutas de temporada',
      ref: 'C$ 220',
      tipo: 'Intercambio Mixto',
      tipoColor: 'text-amber-600',
      icono: 'fa-jar',
      iconoBg: 'bg-amber-100 text-amber-700',
      categoria: 'Alimentos',
      tiempo: 'Hace 1h'
    },
    {
      id: 3,
      nombre: 'Bolso Tejido en Macramé',
      busca: 'Plantas ornamentales o café',
      ref: 'C$ 350',
      tipo: 'Trueque 1:1',
      tipoColor: 'text-indigo-600',
      icono: 'fa-bag-shopping',
      iconoBg: 'bg-indigo-100 text-indigo-700',
      categoria: 'Artesanías',
      tiempo: 'Hace 2h'
    },
    {
      id: 4,
      nombre: 'Bufanda de Algodón Artesanal',
      busca: 'Queso o pan casero',
      ref: 'C$ 260',
      tipo: 'Trueque Directo',
      tipoColor: 'text-teal-600',
      icono: 'fa-shirt',
      iconoBg: 'bg-teal-100 text-teal-700',
      categoria: 'Textiles',
      tiempo: 'Hace 3h'
    }
  ];

  const filteredProducts = catalogProducts.filter(
    (p) => selectedCategory === 'Todos' || p.categoria === selectedCategory
  );

  return (
    <div id="simulador-movil" className="relative w-full max-w-[315px] sm:max-w-[350px]">
      
      {/* Exterior Shadow Glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-brand-500/25 via-emerald-500/20 to-teal-500/25 rounded-[56px] blur-2xl pointer-events-none"></div>

      {/* Device Outer Frame */}
      <div className="relative z-20 bg-slate-900 rounded-[50px] p-3 sm:p-3.5 shadow-2xl ring-1 ring-slate-800 border-[3px] border-slate-700">
        
        {/* Top Dynamic Island / Speaker Notch */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-950 rounded-full z-30 flex items-center justify-center gap-2">
          <div className="w-3 h-3 rounded-full bg-slate-900 border border-slate-800"></div>
          <div className="w-8 h-1.5 rounded-full bg-slate-800"></div>
        </div>

        {/* Phone Screen Content Container */}
        <div className="bg-white rounded-[40px] overflow-hidden border border-slate-800 h-[590px] sm:h-[625px] flex flex-col justify-between select-none shadow-inner">
          
          {/* Phone Screen Header Bar */}
          <div className="pt-8 pb-3 px-5 bg-gradient-to-r from-brand-800 via-brand-700 to-emerald-700 text-white shrink-0">
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
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                </div>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <i className="fa-solid fa-location-arrow text-[9px]"></i> Feria Comunitaria Central
                </p>
              </div>
              <div 
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer"
                onClick={() => onShowToast?.('Notificaciones: 2 acuerdos activos en tu feria.', 'info')}
                title="Notificaciones"
              >
                <i className="fa-regular fa-bell text-xs"></i>
              </div>
            </div>
          </div>

          {/* Phone Screen Body */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-slate-50 text-slate-800 flex flex-col">
            
            {/* TAB 1: CATÁLOGO */}
            {activeTab === 'catalogo' && (
              <div className="space-y-3">
                {/* Banner Promocional */}
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-3 text-white shadow-sm flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/25 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-arrows-rotate text-lg"></i>
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-amber-100">Feria en Vivo</span>
                    <h5 className="text-xs font-bold leading-tight truncate">Intercambios directos sin comisiones</h5>
                  </div>
                </div>

                {/* Quick Categories Filter */}
                <div className="flex gap-1.5 overflow-x-auto pb-0.5 text-[11px] scrollbar-none">
                  {['Todos', 'Alimentos', 'Artesanías', 'Textiles'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-2.5 py-1 rounded-full font-bold text-[10px] shrink-0 transition-all cursor-pointer ${
                        selectedCategory === cat
                          ? 'bg-brand-600 text-white shadow-sm'
                          : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Simulated Product Cards */}
                <div className="space-y-2.5">
                  {filteredProducts.map((prod) => (
                    <div 
                      key={prod.id}
                      className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm hover:border-brand-400 hover:shadow transition-all"
                    >
                      <div className="flex gap-2.5 items-center">
                        <div className={`w-12 h-12 rounded-xl ${prod.iconoBg} flex items-center justify-center shrink-0 text-lg font-bold shadow-sm`}>
                          <i className={`fa-solid ${prod.icono}`}></i>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className={`text-[9px] uppercase font-black ${prod.tipoColor}`}>{prod.tipo}</span>
                            <span className="text-[9px] text-slate-400">{prod.tiempo}</span>
                          </div>
                          <h6 className="font-extrabold text-xs text-slate-900 truncate">{prod.nombre}</h6>
                          <p className="text-[10px] text-slate-500 truncate">Busca: {prod.busca}</p>
                          <div className="mt-1 flex items-center justify-between">
                            <span className="text-[10px] font-black text-slate-700">Ref: {prod.ref}</span>
                            <button 
                              onClick={() => handleProposeTrade(prod.nombre, prod.categoria)}
                              className="px-2.5 py-0.5 rounded-lg bg-brand-50 hover:bg-brand-100 text-brand-700 border border-brand-200 text-[10px] font-extrabold transition-colors cursor-pointer"
                            >
                              Proponer
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: TRUEQUES */}
            {activeTab === 'trueques' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <h6 className="font-black text-slate-800 text-xs">Negociaciones Activas</h6>
                  <span className="text-[10px] font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded-full border border-brand-200">
                    {trades.length} en curso
                  </span>
                </div>

                <div className="space-y-2.5">
                  {trades.map((trade) => (
                    <div key={trade.id} className="p-3 bg-white rounded-2xl border border-slate-200 shadow-sm text-xs space-y-2">
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="font-black text-brand-700">{trade.id}</span>
                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-black ${
                          trade.estado === 'Aceptado'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                            : 'bg-amber-100 text-amber-800 border border-amber-200'
                        }`}>
                          {trade.estado}
                        </span>
                      </div>
                      
                      <div>
                        <p className="text-xs font-bold text-slate-900 leading-tight">{trade.titulo}</p>
                        <p className="text-[10px] text-slate-500 mt-0.5 flex items-center gap-1">
                          <i className="fa-regular fa-clock text-[9px]"></i> {trade.cita}
                        </p>
                      </div>

                      {trade.estado === 'Propuesta' && (
                        <div className="pt-2 border-t border-slate-100 flex gap-2">
                          <button 
                            onClick={() => handleAcceptTrade(trade.id)}
                            className="flex-1 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-[10px] transition-colors cursor-pointer"
                          >
                            Aceptar
                          </button>
                          <button 
                            onClick={() => handleRejectTrade(trade.id)}
                            className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[10px] transition-colors cursor-pointer"
                          >
                            Cancelar
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: CHAT EN VIVO */}
            {activeTab === 'chat' && (
              <div className="flex-1 flex flex-col justify-between -m-1 p-1">
                {/* Contact Pill */}
                <div className="p-2 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-amber-500 text-white font-black text-xs flex items-center justify-center">
                      MV
                    </div>
                    <div>
                      <h6 className="font-extrabold text-[11px] text-slate-900 leading-none">María Valle</h6>
                      <span className="text-[9px] text-emerald-600 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Stand #12 • En línea
                      </span>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                    Chat Feriante
                  </span>
                </div>

                {/* Messages Feed */}
                <div className="flex-1 overflow-y-auto space-y-2 pr-1 max-h-[290px] text-xs">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] p-2.5 rounded-2xl text-[11px] leading-relaxed shadow-sm ${
                          msg.sender === 'user'
                            ? 'bg-brand-600 text-white rounded-br-none'
                            : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  <div ref={chatBottomRef}></div>
                </div>

                {/* Quick Reply Chips */}
                <div className="flex gap-1.5 overflow-x-auto py-1 text-[9px] scrollbar-none">
                  <button 
                    type="button"
                    onClick={() => sendQuickReply('¿Hacemos el trueque hoy?')}
                    className="px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-brand-500 shrink-0 cursor-pointer"
                  >
                    ¿Hacemos trueque?
                  </button>
                  <button 
                    type="button"
                    onClick={() => sendQuickReply('¡Perfecto! Nos vemos en tu puesto.')}
                    className="px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-brand-500 shrink-0 cursor-pointer"
                  >
                    Nos vemos en el puesto
                  </button>
                </div>

                {/* Chat Input Bar */}
                <form onSubmit={handleSendMessage} className="flex items-center gap-1.5 pt-1">
                  <input 
                    type="text" 
                    placeholder="Escribe a María..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    className="flex-1 px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-[11px] text-slate-900 outline-none focus:border-brand-500"
                  />
                  <button 
                    type="submit"
                    className="w-8 h-8 rounded-xl bg-brand-600 hover:bg-brand-700 text-white flex items-center justify-center shrink-0 text-xs shadow-sm cursor-pointer"
                  >
                    <i className="fa-solid fa-paper-plane text-[10px]"></i>
                  </button>
                </form>
              </div>
            )}

            {/* TAB 4: PERFIL */}
            {activeTab === 'perfil' && (
              <div className="text-center space-y-3 py-3">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-600 to-emerald-500 text-white font-black text-2xl flex items-center justify-center mx-auto shadow-md">
                  <i className="fa-regular fa-user"></i>
                </div>
                <div>
                  <h6 className="text-sm font-black text-slate-800">Productor Verificado</h6>
                  <p className="text-xs text-slate-500">Comunidad Feriando Central</p>
                </div>

                <div className="inline-flex items-center gap-1.5 text-amber-500 text-xs font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <span className="text-slate-700 ml-1">4.9 (24 trueques)</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-left pt-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Trueques Realizados</p>
                    <p className="text-sm font-black text-brand-700">24 exitosos</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Reputación</p>
                    <p className="text-sm font-black text-emerald-700">100% Confiable</p>
                  </div>
                </div>

                <p className="text-[10px] text-slate-400 pt-1">
                  ID: FER-8821 • Vinculado al puesto #04
                </p>
              </div>
            )}

          </div>

          {/* Phone Bottom Tab Bar with Live Switcher */}
          <div className="bg-white border-t border-slate-200 px-3 py-2 flex justify-around text-slate-400 shrink-0">
            <button 
              onClick={() => setActiveTab('catalogo')} 
              className={`flex flex-col items-center gap-0.5 transition-colors cursor-pointer ${activeTab === 'catalogo' ? 'text-brand-600 font-bold' : 'hover:text-slate-700'}`}
            >
              <i className="fa-solid fa-shop text-sm"></i>
              <span className="text-[9px]">Catálogo</span>
            </button>

            <button 
              onClick={() => setActiveTab('trueques')} 
              className={`flex flex-col items-center gap-0.5 transition-colors cursor-pointer relative ${activeTab === 'trueques' ? 'text-brand-600 font-bold' : 'hover:text-slate-700'}`}
            >
              {trades.length > 0 && (
                <span className="absolute -top-1 right-2 w-2 h-2 rounded-full bg-amber-500"></span>
              )}
              <i className="fa-solid fa-handshake text-sm"></i>
              <span className="text-[9px]">Trueques</span>
            </button>

            <button 
              onClick={() => setActiveTab('chat')} 
              className={`flex flex-col items-center gap-0.5 transition-colors cursor-pointer relative ${activeTab === 'chat' ? 'text-brand-600 font-bold' : 'hover:text-slate-700'}`}
            >
              <span className="absolute -top-1 right-2 w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
              <i className="fa-solid fa-comments text-sm"></i>
              <span className="text-[9px]">Chat en Vivo</span>
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
          <div className="bg-white py-1 flex justify-center shrink-0">
            <div className="w-32 h-1 bg-slate-300 rounded-full"></div>
          </div>

        </div>
      </div>

    </div>
  );
}
