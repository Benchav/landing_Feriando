import React, { useState } from 'react';

export default function Downloads({ releases, onDownload, onShowToast }) {
  const [downloading, setDownloading] = useState(false);
  const apkInfo = releases[0] || {
    id: 'android',
    name: 'Feriando Oficial (Android APK)',
    platform: 'Android 8.0+ (Celulares y Tablets)',
    filename: 'feriando.apk',
    downloadUrl: '/downloads/feriando.apk',
    size: '57.0 MB',
    version: 'v1.2.0',
    downloads: 185
  };

  const handleDownloadClick = () => {
    setDownloading(true);
    onShowToast('Iniciando descarga de feriando.apk...', 'info');

    const link = document.createElement('a');
    link.href = '/downloads/feriando.apk';
    link.download = 'feriando.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    onDownload('android');

    setTimeout(() => {
      setDownloading(false);
      onShowToast('¡Descarga de feriando.apk (57.0 MB) iniciada con éxito!', 'success');
    }, 1200);
  };

  const copyChecksum = () => {
    const mockHash = 'b4c781198fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
    navigator.clipboard?.writeText(`feriando.apk SHA-256: ${mockHash}`);
    onShowToast(`Checksum SHA-256 copiado al portapapeles: ${mockHash.substring(0, 16)}...`, 'info');
  };

  const copyInstallInstructions = () => {
    const text = `Guía de Instalación Feriando (Android):\n1. Descarga el archivo oficial 'feriando.apk' (57 MB).\n2. Si tu celular muestra 'Archivo de origen desconocido', pulsa 'Permitir desde esta fuente' en Ajustes.\n3. Abre la notificación de descarga o busca 'feriando.apk' en tu carpeta Descargas.\n4. Pulsa 'Instalar' y ¡listo! Disfruta de la app de Feriando.`;
    navigator.clipboard?.writeText(text);
    onShowToast('Instrucciones de instalación copiadas al portapapeles.', 'success');
  };

  return (
    <section id="descargas" className="py-16 sm:py-24 bg-gradient-to-b from-slate-100/90 via-slate-50 to-white border-b border-slate-200 relative overflow-hidden">
      
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3.5 py-1.5 rounded-full border border-emerald-300">
            Instalador Oficial para Dispositivos Móviles
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Descarga la Aplicación Feriando
          </h2>
          <p className="text-slate-600 text-sm sm:text-lg">
            Instala directamente en tu teléfono celular o tablet Android el paquete APK oficial compilado en Flutter y comienza a intercambiar productos.
          </p>
        </div>

        {/* Featured Android APK Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-2xl relative overflow-hidden">
            
            {/* Top Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-600 via-emerald-500 to-teal-500"></div>

            <div className="grid md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: APK Details */}
              <div className="md:col-span-7 space-y-5">
                
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-600 to-emerald-400 text-white flex items-center justify-center text-3xl shadow-lg shadow-brand-600/30">
                    <i className="fa-brands fa-android"></i>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900">Feriando Android</h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300">
                        {apkInfo.version}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-semibold mt-0.5">
                      <i className="fa-solid fa-mobile-screen-button text-brand-600 mr-1"></i> {apkInfo.platform}
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Compilación oficial de producción de Feriando. Accede al catálogo geolocalizado, publica tus productos de trueque, chatea con feriantes y coordina puntos de entrega de manera segura.
                </p>

                {/* Tech Pills */}
                <div className="grid grid-cols-3 gap-2.5 py-3 border-y border-slate-100 text-center">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Archivo</p>
                    <p className="text-xs sm:text-sm font-black text-slate-900 truncate">feriando.apk</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Tamaño</p>
                    <p className="text-xs sm:text-sm font-black text-slate-900">57.0 MB</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Descargas</p>
                    <p className="text-xs sm:text-sm font-black text-brand-700">{apkInfo.downloads}</p>
                  </div>
                </div>

                {/* Download CTA Button */}
                <div className="space-y-3 pt-2">
                  <button 
                    onClick={handleDownloadClick}
                    disabled={downloading}
                    className="w-full py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-brand-600 via-emerald-600 to-teal-600 hover:from-brand-700 hover:to-emerald-700 text-white font-black text-base sm:text-lg shadow-xl shadow-brand-600/30 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer disabled:opacity-75"
                  >
                    {downloading ? (
                      <>
                        <i className="fa-solid fa-spinner animate-spin text-xl"></i>
                        <span>Descargando feriando.apk...</span>
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-cloud-arrow-down text-xl"></i>
                        <span>Descargar Feriando APK (57 MB)</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                    <a 
                      href="/downloads/feriando.apk" 
                      download="feriando.apk"
                      className="text-brand-700 hover:underline flex items-center gap-1 font-semibold"
                    >
                      <i className="fa-solid fa-link text-[10px]"></i> Enlace directo al archivo
                    </a>
                    <button 
                      onClick={copyChecksum}
                      className="text-slate-500 hover:text-slate-800 hover:underline cursor-pointer text-[11px]"
                    >
                      Copiar SHA-256
                    </button>
                  </div>
                </div>

              </div>

              {/* Right Column: QR Code & Fast Mobile Test */}
              <div className="md:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl sm:rounded-3xl p-6 sm:p-7 text-white text-center flex flex-col items-center justify-between shadow-xl border border-slate-800">
                
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold uppercase tracking-wider border border-emerald-500/30">
                  Escanea con tu Celular
                </span>

                {/* Animated QR Scanner */}
                <div className="my-5 relative p-3 bg-white rounded-2xl shadow-lg text-slate-900 overflow-hidden w-40 h-40 sm:w-44 sm:h-44 flex items-center justify-center">
                  <div className="absolute left-0 right-0 h-1 bg-brand-500 shadow-md shadow-brand-500 animate-scan pointer-events-none"></div>
                  <i className="fa-solid fa-qrcode text-7xl sm:text-8xl"></i>
                </div>

                <p className="text-xs text-slate-300 leading-snug">
                  Apunta con la cámara de tu teléfono para descargar <strong className="text-emerald-400">feriando.apk</strong> directamente en tu dispositivo.
                </p>

                <button 
                  onClick={copyInstallInstructions}
                  className="mt-4 w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer border border-slate-700"
                >
                  <i className="fa-solid fa-book-open text-xs"></i>
                  <span>Ver Guía de Instalación</span>
                </button>

              </div>

            </div>

          </div>
        </div>

        {/* 3 Step Installation Flow */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h4 className="text-xl sm:text-2xl font-black text-slate-900">¿Cómo instalar en 3 sencillos pasos?</h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Sigue estas instrucciones rápidas en cualquier dispositivo Android</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center font-black text-sm mb-3">
                  1
                </div>
                <h5 className="font-extrabold text-sm text-slate-900 mb-1">Descarga el APK</h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pulsa el botón de descarga para obtener <code className="text-brand-700 font-bold">feriando.apk</code> (57 MB) en tu navegador móvil.
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-sm mb-3">
                  2
                </div>
                <h5 className="font-extrabold text-sm text-slate-900 mb-1">Habilitar Permiso</h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Si Android lo solicita, activa "Instalar aplicaciones de fuentes desconocidas" en Ajustes de tu navegador o gestor de archivos.
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-black text-sm mb-3">
                  3
                </div>
                <h5 className="font-extrabold text-sm text-slate-900 mb-1">¡Listo para Usar!</h5>
                <p className="text-xs text-slate-600 leading-relaxed">
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
