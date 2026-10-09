import React, { useState } from 'react';

export default function Downloads({ releases, onDownload, onShowToast }) {
  const [downloading, setDownloading] = useState(false);
  const apkInfo = releases[0] || {
    id: 'android',
    name: 'Feriando Oficial (Android APK)',
    platform: 'Android 8.0+ (Móvil / Tablet)',
    filename: 'feriando.apk',
    downloadUrl: '/downloads/feriando.apk',
    size: '57.0 MB',
    version: 'v1.2.0',
    downloads: 185
  };

  const handleDownloadClick = () => {
    setDownloading(true);
    onShowToast?.('Iniciando descarga de feriando.apk...', 'info');

    const link = document.createElement('a');
    link.href = '/downloads/feriando.apk';
    link.download = 'feriando.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    onDownload?.('android');

    setTimeout(() => {
      setDownloading(false);
      onShowToast?.('¡Descarga de feriando.apk (57.0 MB) iniciada con éxito!', 'success');
    }, 1200);
  };

  const copyChecksum = () => {
    const mockHash = 'b4c781198fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
    navigator.clipboard?.writeText(`feriando.apk SHA-256: ${mockHash}`);
    onShowToast?.(`Checksum SHA-256 copiado al portapapeles: ${mockHash.substring(0, 16)}...`, 'info');
  };

  const copyInstallInstructions = () => {
    const text = `Guía de Instalación Feriando (Android):\n1. Descarga el archivo oficial 'feriando.apk' (57 MB).\n2. Si tu celular muestra 'Archivo de origen desconocido', pulsa 'Permitir desde esta fuente' en Ajustes.\n3. Abre la notificación de descarga o busca 'feriando.apk' en tu carpeta Descargas.\n4. Pulsa 'Instalar' y ¡listo! Disfruta de la app de Feriando.`;
    navigator.clipboard?.writeText(text);
    onShowToast?.('Instrucciones de instalación copiadas al portapapeles.', 'success');
  };

  return (
    <section id="descargas" className="py-12 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-100/90 via-slate-50 to-white border-b border-slate-200 relative overflow-hidden">
      
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Mobile-Optimized) */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-sm text-xs font-black uppercase tracking-wider">
            <i className="fa-brands fa-android text-emerald-600 text-sm"></i>
            <span>Instalador Android APK</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Descarga la Aplicación Feriando
          </h2>

          <p className="text-slate-600 text-xs sm:text-base max-w-xl mx-auto leading-relaxed">
            Instala directamente en tu teléfono celular o tablet Android el paquete APK oficial compilado en Flutter y comienza a intercambiar productos.
          </p>
        </div>

        {/* Featured Android APK Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-5 sm:p-8 lg:p-10 border border-slate-200/90 shadow-2xl relative overflow-hidden">
            
            {/* Top Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-1.5 sm:h-2 bg-gradient-to-r from-brand-600 via-emerald-500 to-teal-500"></div>

            <div className="grid md:grid-cols-12 gap-6 sm:gap-8 items-center">
              
              {/* Left Column: APK Details */}
              <div className="md:col-span-7 space-y-4 sm:space-y-5">
                
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-brand-600 to-emerald-400 text-white flex items-center justify-center text-2xl sm:text-3xl shadow-lg shadow-brand-600/30 shrink-0">
                    <i className="fa-brands fa-android"></i>
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">Feriando Android</h3>
                      <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300 shrink-0">
                        {apkInfo.version}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-semibold mt-0.5 flex items-center gap-1.5">
                      <i className="fa-solid fa-mobile-screen-button text-brand-600"></i>
                      <span>{apkInfo.platform}</span>
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Compilación oficial de producción de Feriando. Accede al catálogo geolocalizado, publica tus productos de trueque, chatea con feriantes y coordina puntos de entrega de manera segura.
                </p>

                {/* Tech Pills (Responsive Grid) */}
                <div className="grid grid-cols-3 gap-2 py-2.5 border-y border-slate-100 text-center">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 min-w-0">
                    <p className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase truncate">Archivo</p>
                    <p className="text-xs sm:text-sm font-black text-slate-900 truncate">feriando.apk</p>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 min-w-0">
                    <p className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase truncate">Tamaño</p>
                    <p className="text-xs sm:text-sm font-black text-slate-900 truncate">57.0 MB</p>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 min-w-0">
                    <p className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase truncate">Descargas</p>
                    <p className="text-xs sm:text-sm font-black text-brand-700 truncate">{apkInfo.downloads}</p>
                  </div>
                </div>

                {/* Download CTA Button */}
                <div className="space-y-2.5 pt-1">
                  <button 
                    onClick={handleDownloadClick}
                    disabled={downloading}
                    className="w-full py-3.5 sm:py-4 px-5 rounded-2xl bg-gradient-to-r from-brand-600 via-emerald-600 to-teal-600 hover:from-brand-700 hover:to-emerald-700 text-white font-black text-sm sm:text-base shadow-xl shadow-brand-600/30 hover:shadow-2xl hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-75"
                  >
                    {downloading ? (
                      <>
                        <i className="fa-solid fa-spinner animate-spin text-lg"></i>
                        <span>Descargando feriando.apk...</span>
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-cloud-arrow-down text-lg"></i>
                        <span>Descargar Feriando APK (57 MB)</span>
                      </>
                    )}
                  </button>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-1.5 text-xs text-slate-500 font-mono text-center sm:text-left">
                    <a 
                      href="/downloads/feriando.apk" 
                      download="feriando.apk"
                      className="text-brand-700 hover:underline flex items-center gap-1 font-semibold text-[11px] sm:text-xs"
                    >
                      <i className="fa-solid fa-link text-[10px]"></i> Enlace directo al archivo
                    </a>
                    <button 
                      onClick={copyChecksum}
                      className="text-slate-500 hover:text-slate-800 hover:underline cursor-pointer text-[10px] sm:text-[11px]"
                    >
                      Copiar SHA-256
                    </button>
                  </div>
                </div>

              </div>

              {/* Right Column: QR Code & Fast Mobile Test */}
              <div className="md:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl sm:rounded-3xl p-5 sm:p-6 text-white text-center flex flex-col items-center justify-between shadow-xl border border-slate-800">
                
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold uppercase tracking-wider border border-emerald-500/30">
                  Escanea con tu Celular
                </span>

                {/* Animated QR Scanner */}
                <div className="my-4 sm:my-5 relative p-2.5 sm:p-3 bg-white rounded-2xl shadow-lg text-slate-900 overflow-hidden w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center">
                  <div className="absolute left-0 right-0 h-1 bg-brand-500 shadow-md shadow-brand-500 animate-scan pointer-events-none"></div>
                  <i className="fa-solid fa-qrcode text-6xl sm:text-7xl"></i>
                </div>

                <p className="text-[11px] sm:text-xs text-slate-300 leading-snug">
                  Apunta con la cámara de tu teléfono para descargar <strong className="text-emerald-400">feriando.apk</strong> directamente en tu dispositivo.
                </p>

                <button 
                  onClick={copyInstallInstructions}
                  className="mt-3.5 w-full py-2 sm:py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer border border-slate-700"
                >
                  <i className="fa-solid fa-book-open text-xs"></i>
                  <span>Ver Guía de Instalación</span>
                </button>

              </div>

            </div>

          </div>
        </div>

        {/* 3 Step Installation Flow (Mobile-Optimized Cards) */}
        <div className="mt-10 sm:mt-14 max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h4 className="text-lg sm:text-2xl font-black text-slate-900">¿Cómo instalar en 3 sencillos pasos?</h4>
            <p className="text-xs text-slate-500 mt-1">Sigue estas instrucciones rápidas en cualquier dispositivo Android</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5">
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start sm:flex-col gap-3.5 sm:gap-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center font-black text-xs sm:text-sm shrink-0 sm:mb-2.5">
                1
              </div>
              <div>
                <h5 className="font-extrabold text-xs sm:text-sm text-slate-900 mb-0.5">Descarga el APK</h5>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                  Pulsa el botón de descarga para obtener <code className="text-brand-700 font-bold">feriando.apk</code> (57 MB) en tu navegador móvil.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start sm:flex-col gap-3.5 sm:gap-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xs sm:text-sm shrink-0 sm:mb-2.5">
                2
              </div>
              <div>
                <h5 className="font-extrabold text-xs sm:text-sm text-slate-900 mb-0.5">Habilitar Permiso</h5>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                  Si Android lo solicita, activa "Instalar aplicaciones de fuentes desconocidas" en Ajustes de tu navegador o gestor de archivos.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start sm:flex-col gap-3.5 sm:gap-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-black text-xs sm:text-sm shrink-0 sm:mb-2.5">
                3
              </div>
              <div>
                <h5 className="font-extrabold text-xs sm:text-sm text-slate-900 mb-0.5">¡Listo para Usar!</h5>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                  Pulsa "Instalar" y abre Feriando para explorar el catálogo, acordar trueques y conectarte con tu comunidad.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
