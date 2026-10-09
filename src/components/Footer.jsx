import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-700 via-brand-600 to-emerald-400 flex items-center justify-center text-white shadow-md shadow-brand-600/30">
                <i className="fa-solid fa-store text-lg"></i>
              </div>
              <span className="text-xl font-black text-white tracking-tight">Feriando</span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              Plataforma tecnológica comunitaria diseñada para conectar productores, artesanos y vecinos mediante trueques transparentes y catálogos geolocalizados en una app nativa en Flutter.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">Navegación</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#solucion" className="hover:text-white transition-colors">La Solución</a></li>
              <li><a href="#simulador-movil" className="hover:text-white transition-colors">App Interactiva</a></li>
              <li><a href="#descargas" className="hover:text-white transition-colors">Descargar APK</a></li>
            </ul>
          </div>

          {/* Downloads & Binaries */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">Instalable Oficial</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/downloads/feriando.apk" 
                  download="feriando.apk" 
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2 font-bold text-slate-200"
                >
                  <i className="fa-brands fa-android text-emerald-400 text-base"></i>
                  <span>Feriando APK (57.0 MB)</span>
                </a>
              </li>
              <li>
                <a 
                  href="/downloads/LEEME-APK.txt" 
                  target="_blank" 
                  className="hover:text-white transition-colors text-[11px] text-slate-400 flex items-center gap-1.5"
                >
                  <i className="fa-solid fa-file-lines text-xs"></i>
                  <span>Guía de instalación Android</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {currentYear} Proyecto Feriando. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Servidor Activo
            </span>
            <span>Desarrollado en Flutter & React</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
