import React, { useState } from 'react';

export default function Navbar({ onOpenAdmin }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Identity */}
          <a href="#inicio" className="flex items-center gap-2.5 sm:gap-3.5 group min-w-0">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-brand-700 via-brand-600 to-emerald-400 flex items-center justify-center text-white shadow-lg shadow-brand-600/30 group-hover:scale-105 group-hover:shadow-brand-500/40 transition-all duration-300 shrink-0">
              <i className="fa-solid fa-store text-lg sm:text-xl group-hover:rotate-6 transition-transform"></i>
              <span className="absolute -top-1 -right-1 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-amber-400 border-2 border-white animate-ping"></span>
              <span className="absolute -top-1 -right-1 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-amber-400 border-2 border-white"></span>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-brand-700 transition-colors truncate">
                  Feriando
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium truncate">Trueque & Ferias Comunitarias</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#inicio" className="hover:text-brand-600 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-600 hover:after:w-full after:transition-all">Inicio</a>
            <a href="#solucion" className="hover:text-brand-600 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-600 hover:after:w-full after:transition-all">La Solución</a>
            <a href="#simulador-movil" className="hover:text-brand-600 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-600 hover:after:w-full after:transition-all">App Interactiva</a>
            <a href="#descargas" className="hover:text-brand-600 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-600 hover:after:w-full after:transition-all">Descargar APK</a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button 
              onClick={onOpenAdmin} 
              className="hidden md:inline-flex px-3.5 py-2 text-xs font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 shadow-sm hover:shadow transition-all items-center gap-2 group cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-brand-500 group-hover:scale-125 transition-transform"></span>
              <i className="fa-solid fa-lock text-brand-600 text-xs"></i>
              <span>Acceso Admin</span>
            </button>

            <a 
              href="#descargas" 
              className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-emerald-600 hover:from-brand-700 hover:to-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-brand-600/25 hover:shadow-xl hover:shadow-brand-600/35 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <i className="fa-brands fa-android text-base"></i>
              <span>Descargar APK</span>
            </a>

            {/* Mobile Toggle Menu Button */}
            <button 
              onClick={toggleMobileMenu} 
              className="lg:hidden p-2 sm:p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none transition-colors cursor-pointer" 
              aria-label="Menú"
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-xl px-5 pt-4 pb-6 space-y-3 transition-all duration-300 shadow-xl">
          <a href="#inicio" onClick={closeMobileMenu} className="block py-2 text-slate-700 font-semibold hover:text-brand-600">Inicio</a>
          <a href="#solucion" onClick={closeMobileMenu} className="block py-2 text-slate-700 font-semibold hover:text-brand-600">La Solución</a>
          <a href="#simulador-movil" onClick={closeMobileMenu} className="block py-2 text-slate-700 font-semibold hover:text-brand-600">App Interactiva</a>
          <a href="#descargas" onClick={closeMobileMenu} className="block py-2 text-slate-700 font-semibold hover:text-brand-600">Descargar APK Android</a>
          <div className="pt-2 space-y-2.5">
            <a 
              href="#descargas" 
              onClick={closeMobileMenu} 
              className="w-full text-center block py-3 rounded-xl bg-gradient-to-r from-brand-600 to-emerald-600 text-white font-bold text-sm shadow-lg shadow-brand-600/20"
            >
              <i className="fa-brands fa-android mr-2"></i>
              Descargar Feriando APK
            </a>
            <button 
              onClick={() => { closeMobileMenu(); onOpenAdmin(); }} 
              className="w-full py-2.5 text-center flex items-center justify-center gap-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold text-xs transition-colors cursor-pointer"
            >
              <i className="fa-solid fa-lock text-brand-600"></i>
              <span>Acceso Panel Administrativo</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
