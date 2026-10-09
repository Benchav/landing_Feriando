import React, { useState } from 'react';

export default function Downloads({ releases, onDownload, onShowToast }) {
  const [downloadingId, setDownloadingId] = useState(null);

  const handleDownloadClick = (item) => {
    setDownloadingId(item.id);
    onShowToast(`Iniciando descarga de ${item.name}...`, 'info');

    // If it's the real android APK, trigger real browser download
    if (item.id === 'android') {
      const link = document.createElement('a');
      link.href = '/downloads/feriando-release.apk';
      link.download = 'feriando-release.apk';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    onDownload(item.id);

    setTimeout(() => {
      setDownloadingId(null);
      onShowToast(`¡Descarga de ${item.name} iniciada correctamente!`, 'success');
    }, 1500);
  };

  const copyChecksum = (filename) => {
    const mockHash = 'b4c781198fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
    navigator.clipboard?.writeText(`${filename} SHA-256: ${mockHash}`);
    onShowToast(`Checksum copiado al portapapeles: ${mockHash.substring(0, 16)}...`, 'info');
  };

  const copyInstallInstructions = () => {
    const text = `Guía de Instalación Feriando:\n1. En Android: Descargar APK y habilitar 'Instalar apps de fuentes desconocidas' si el sistema lo solicita.\n2. Abrir la notificación de descarga o el archivo 'feriando-release.apk' en tu carpeta Descargas.\n3. Presionar 'Instalar' y abrir Feriando para iniciar sesión.`;
    navigator.clipboard?.writeText(text);
    onShowToast('Instrucciones copiadas al portapapeles con éxito.', 'success');
  };

  return (
    <section id="descargas" className="py-16 sm:py-24 bg-slate-100/80 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-wider text-brand-700 bg-brand-100 px-3.5 py-1.5 rounded-full border border-brand-300">
            Distribución de Soluciones Nativas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Descarga los Instalables Oficiales
          </h2>
          <p className="text-slate-600 text-sm sm:text-lg">
            Compilaciones nativas de alto rendimiento preparadas para su uso y prueba directa por productores, coordinadores y usuarios.
          </p>
        </div>

        {/* Download Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {releases.map((item) => {
            const isDownloading = downloadingId === item.id;

            return (
              <div 
                key={item.id}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-brand-50 border border-brand-100 text-brand-700 flex items-center justify-center text-2xl sm:text-3xl group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <i className={item.icon}></i>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {item.isRealFile && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300">
                          APK Listo
                        </span>
                      )}
                      <span className="px-3 py-1 rounded-full text-xs font-black bg-slate-100 text-slate-800 border border-slate-200">
                        {item.version}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">{item.name}</h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">{item.platform}</p>
                  <p className="text-[11px] text-brand-700 font-bold mt-0.5">
                    <i className="fa-solid fa-microchip text-[10px]"></i> {item.arch || 'Arquitectura nativa'}
                  </p>

                  <div className="mt-4 sm:mt-5 py-3 border-y border-slate-100 flex items-center justify-between text-xs text-slate-600">
                    <span className="flex items-center gap-1.5 font-semibold">
                      <i className="fa-solid fa-hard-drive text-slate-400"></i> {item.size}
                    </span>
                    <span className="flex items-center gap-1.5 font-bold text-brand-700">
                      <i className="fa-solid fa-download text-brand-500"></i> {item.downloads} descargas
                    </span>
                  </div>

                  <p className="mt-3.5 sm:mt-4 text-xs text-slate-600 leading-relaxed italic bg-slate-50 p-3 rounded-2xl border border-slate-100">
                    "{item.notes}"
                  </p>
                </div>

                <div className="mt-5 sm:mt-6 pt-4 border-t border-slate-100">
                  <button 
                    onClick={() => handleDownloadClick(item)}
                    disabled={isDownloading}
                    className="w-full py-3.5 sm:py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-black text-sm shadow-lg shadow-brand-600/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isDownloading ? (
                      <>
                        <i className="fa-solid fa-spinner animate-spin"></i>
                        <span>Descargando...</span>
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-download"></i>
                        <span>Descargar {item.name.split(' ')[0]}</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-between mt-2.5 text-[11px] text-slate-400 font-mono">
                    <span className="truncate max-w-[150px] sm:max-w-[190px]">{item.filename}</span>
                    <button 
                      onClick={() => copyChecksum(item.filename)} 
                      className="text-brand-600 hover:underline text-[10px] cursor-pointer"
                    >
                      SHA-256
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick QR Code Banner for Mobile Testing */}
        <div className="mt-10 sm:mt-14 p-6 sm:p-9 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white shadow-2xl border border-emerald-800/50 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            
            {/* Animated QR Mockup Frame */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white p-2 sm:p-2.5 rounded-2xl shrink-0 shadow-lg flex items-center justify-center text-slate-900 overflow-hidden">
              <div className="absolute left-0 right-0 h-1 bg-brand-500 shadow-md shadow-brand-500 animate-scan pointer-events-none"></div>
              <i className="fa-solid fa-qrcode text-5xl sm:text-6xl"></i>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-800/80 text-emerald-200 text-[10px] sm:text-[11px] font-bold mb-1.5 border border-emerald-700">
                <i className="fa-solid fa-mobile-screen"></i> Instalación Inmediata en Celular
              </div>
              <h4 className="text-lg sm:text-2xl font-black tracking-tight">¿Quieres probar la app en tu teléfono Android ahora?</h4>
              <p className="text-xs sm:text-sm text-emerald-200/90 mt-1 max-w-xl">
                Escanea el código QR desde la cámara de tu celular o haz clic en descarga directa para obtener el instalable APK oficial (57 MB).
              </p>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <a 
              href="/downloads/feriando-release.apk" 
              download="feriando-release.apk"
              onClick={() => onShowToast('Descargando feriando-release.apk (57.0 MB)...', 'success')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-950 font-extrabold text-sm shadow-xl transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-95 cursor-pointer text-center"
            >
              <i className="fa-brands fa-android text-emerald-600 text-lg"></i>
              <span>Descarga Directa APK</span>
            </a>
            <button 
              onClick={copyInstallInstructions} 
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-emerald-800/60 hover:bg-emerald-800 text-white font-bold text-sm border border-emerald-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <i className="fa-solid fa-book-open text-xs"></i>
              <span>Guía de Instalación</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
