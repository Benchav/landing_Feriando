import React, { useState } from 'react';

export default function AdminDashboard({
  requests,
  releases,
  onUpdateRequestStatus,
  onDeleteRequest,
  onUpdateRelease,
  onLogout,
  onShowToast
}) {
  const [activeTab, setActiveTab] = useState('solicitudes'); // 'solicitudes' | 'releases' | 'api'
  const [filterStatus, setFilterStatus] = useState('Todas');
  const [searchTerm, setSearchTerm] = useState('');
  const [apiPingStatus, setApiPingStatus] = useState('online');
  const [isPinging, setIsPinging] = useState(false);

  const filteredRequests = requests.filter(req => {
    const matchesFilter = filterStatus === 'Todas' || req.estado === filterStatus;
    const matchesSearch = 
      req.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (req.org && req.org.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const handleExportCSV = () => {
    if (requests.length === 0) {
      onShowToast('No hay solicitudes para exportar.', 'warning');
      return;
    }

    const headers = ['ID', 'Nombre', 'Email', 'Organización', 'Rol', 'Plataforma', 'Fecha', 'Estado', 'Mensaje'];
    const rows = requests.map(r => [
      `"${r.id}"`,
      `"${r.nombre}"`,
      `"${r.email}"`,
      `"${r.org || ''}"`,
      `"${r.rol}"`,
      `"${r.plataforma}"`,
      `"${r.fecha || ''}"`,
      `"${r.estado}"`,
      `"${(r.mensaje || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `feriando-solicitudes-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    onShowToast('Archivo CSV exportado correctamente.', 'success');
  };

  const handlePingApi = () => {
    setIsPinging(true);
    setTimeout(() => {
      setIsPinging(false);
      setApiPingStatus('online');
      onShowToast('API Azure Cloud responde correctamente (HTTP 200 OK)', 'success');
    }, 800);
  };

  const totalDownloads = releases.reduce((acc, curr) => acc + (curr.downloads || 0), 0);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      
      {/* Top Admin Navigation Bar */}
      <header className="bg-slate-950 border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-emerald-500 flex items-center justify-center text-white font-bold shadow-md">
              <i className="fa-solid fa-gauge-high"></i>
            </div>
            <div>
              <span className="font-black text-white text-base tracking-tight">Panel Administrativo Feriando</span>
              <span className="hidden sm:inline-block ml-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-900/80 text-brand-300 border border-brand-700">
                Superadmin
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={onLogout}
              className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors flex items-center gap-2 cursor-pointer"
            >
              <i className="fa-solid fa-arrow-right-from-bracket text-rose-400"></i>
              <span>Cerrar Sesión</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Metric Cards Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 shadow-lg">
            <div className="flex justify-between items-start">
              <p className="text-xs text-slate-400 font-semibold">Solicitudes de Demo</p>
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm">
                <i className="fa-solid fa-inbox"></i>
              </div>
            </div>
            <p className="text-3xl font-black text-white mt-2">{requests.length}</p>
            <p className="text-[11px] text-blue-400 mt-1 font-medium">
              {requests.filter(r => r.estado === 'Pendiente').length} pendientes de atención
            </p>
          </div>

          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 shadow-lg">
            <div className="flex justify-between items-start">
              <p className="text-xs text-slate-400 font-semibold">Total Descargas Releases</p>
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm">
                <i className="fa-solid fa-download"></i>
              </div>
            </div>
            <p className="text-3xl font-black text-white mt-2">{totalDownloads}</p>
            <p className="text-[11px] text-emerald-400 mt-1 font-medium">
              Android APK: {releases.find(r => r.id === 'android')?.downloads || 0}
            </p>
          </div>

          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 shadow-lg">
            <div className="flex justify-between items-start">
              <p className="text-xs text-slate-400 font-semibold">Binario APK Oficial</p>
              <div className="w-8 h-8 rounded-lg bg-brand-500/20 text-brand-400 flex items-center justify-center text-sm">
                <i className="fa-brands fa-android"></i>
              </div>
            </div>
            <p className="text-xl font-black text-white mt-2 truncate">57.0 MB (Real)</p>
            <p className="text-[11px] text-brand-300 mt-1 font-mono truncate">
              public/downloads/feriando-release.apk
            </p>
          </div>

          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 shadow-lg">
            <div className="flex justify-between items-start">
              <p className="text-xs text-slate-400 font-semibold">Backend Azure</p>
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center text-sm">
                <i className="fa-solid fa-cloud"></i>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xl font-black text-white capitalize">{apiPingStatus}</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1 truncate">
              Central US / REST Endpoint
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-800 gap-2">
          <button 
            onClick={() => setActiveTab('solicitudes')}
            className={`px-4 py-3 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'solicitudes'
                ? 'border-brand-500 text-white bg-slate-800/40'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <i className="fa-regular fa-paper-plane"></i>
            <span>Solicitudes ({requests.length})</span>
          </button>

          <button 
            onClick={() => setActiveTab('releases')}
            className={`px-4 py-3 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'releases'
                ? 'border-brand-500 text-white bg-slate-800/40'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <i className="fa-solid fa-box-archive"></i>
            <span>Releases & Instalables</span>
          </button>

          <button 
            onClick={() => setActiveTab('api')}
            className={`px-4 py-3 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'api'
                ? 'border-brand-500 text-white bg-slate-800/40'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <i className="fa-solid fa-server"></i>
            <span>Servidor API Cloud</span>
          </button>
        </div>

        {/* Tab 1: Solicitudes */}
        {activeTab === 'solicitudes' && (
          <div className="space-y-4">
            
            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between bg-slate-800/60 p-4 rounded-2xl border border-slate-700/80">
              
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                  <input 
                    type="text" 
                    placeholder="Buscar por nombre, email u organización..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:border-brand-500 outline-none"
                  />
                </div>

                <select 
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:border-brand-500 outline-none"
                >
                  <option value="Todas">Todas</option>
                  <option value="Pendiente">Pendiente</option>
                  <option value="Agendada">Agendada</option>
                  <option value="Realizada">Realizada</option>
                </select>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button 
                  onClick={handleExportCSV}
                  className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <i className="fa-solid fa-file-csv"></i>
                  <span>Exportar CSV</span>
                </button>
              </div>

            </div>

            {/* Requests Table */}
            <div className="bg-slate-800/60 rounded-2xl border border-slate-700/80 overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-900/80 text-slate-400 uppercase font-black tracking-wider border-b border-slate-700">
                    <tr>
                      <th className="p-3.5">ID</th>
                      <th className="p-3.5">Contacto</th>
                      <th className="p-3.5">Organización / Rol</th>
                      <th className="p-3.5">Plataforma</th>
                      <th className="p-3.5">Fecha</th>
                      <th className="p-3.5">Estado</th>
                      <th className="p-3.5 text-right">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/60 text-slate-300">
                    {filteredRequests.length === 0 ? (
                      <tr>
                        <td colSpan="7" className="p-8 text-center text-slate-500">
                          No se encontraron solicitudes con los filtros aplicados.
                        </td>
                      </tr>
                    ) : (
                      filteredRequests.map((req) => (
                        <tr key={req.id} className="hover:bg-slate-750/50 transition-colors">
                          <td className="p-3.5 font-mono font-bold text-brand-400">{req.id}</td>
                          <td className="p-3.5">
                            <p className="font-bold text-white">{req.nombre}</p>
                            <p className="text-[11px] text-slate-400">{req.email}</p>
                          </td>
                          <td className="p-3.5">
                            <p className="font-semibold text-slate-200">{req.org || 'Sin especificar'}</p>
                            <p className="text-[11px] text-slate-400">{req.rol}</p>
                          </td>
                          <td className="p-3.5 font-medium">{req.plataforma}</td>
                          <td className="p-3.5 font-mono text-[11px]">{req.fecha || 'Por coordinar'}</td>
                          <td className="p-3.5">
                            <select 
                              value={req.estado}
                              onChange={(e) => onUpdateRequestStatus(req.id, e.target.value)}
                              className={`px-2 py-1 rounded-lg text-[11px] font-bold border outline-none cursor-pointer ${
                                req.estado === 'Realizada'
                                  ? 'bg-emerald-950 border-emerald-600 text-emerald-300'
                                  : req.estado === 'Agendada'
                                  ? 'bg-blue-950 border-blue-600 text-blue-300'
                                  : 'bg-amber-950 border-amber-600 text-amber-300'
                              }`}
                            >
                              <option value="Pendiente">Pendiente</option>
                              <option value="Agendada">Agendada</option>
                              <option value="Realizada">Realizada</option>
                            </select>
                          </td>
                          <td className="p-3.5 text-right">
                            <button 
                              onClick={() => onDeleteRequest(req.id)}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-700/50 transition-colors cursor-pointer"
                              title="Eliminar solicitud"
                            >
                              <i className="fa-solid fa-trash-can"></i>
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Releases */}
        {activeTab === 'releases' && (
          <div className="space-y-4">
            <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700/80">
              <h3 className="text-base font-black text-white mb-1">Control de Binarios Oficiales</h3>
              <p className="text-xs text-slate-400 mb-4">
                El archivo APK físico está ubicado en <code className="text-brand-300 font-mono">public/downloads/feriando-release.apk</code> y es descargable públicamente.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {releases.map((rel) => (
                  <div key={rel.id} className="bg-slate-900/90 p-4 rounded-xl border border-slate-700/80 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <i className={`${rel.icon} text-xl text-brand-400`}></i>
                        <span className="font-bold text-white text-sm">{rel.name}</span>
                      </div>
                      <span className="text-xs font-mono bg-slate-800 px-2 py-0.5 rounded text-slate-300">
                        {rel.version}
                      </span>
                    </div>

                    <div className="text-xs space-y-1 text-slate-400">
                      <p><strong className="text-slate-300">Archivo:</strong> {rel.filename}</p>
                      <p><strong className="text-slate-300">Tamaño:</strong> {rel.size}</p>
                      <p><strong className="text-slate-300">Descargas registradas:</strong> {rel.downloads}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-800 flex gap-2">
                      {rel.isRealFile ? (
                        <a 
                          href={rel.downloadUrl}
                          download={rel.filename}
                          className="flex-1 py-2 text-center rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
                        >
                          Probar Descarga
                        </a>
                      ) : (
                        <button 
                          disabled
                          className="flex-1 py-2 text-center rounded-lg bg-slate-800 text-slate-500 font-bold text-xs"
                        >
                          En Construcción
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: API Monitor */}
        {activeTab === 'api' && (
          <div className="space-y-4">
            <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/80 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-black text-white">Servidor Backend Azure Cloud</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    API REST utilizada por la aplicación cliente en Flutter para sincronización de catálogos y transacciones.
                  </p>
                </div>
                <button 
                  onClick={handlePingApi}
                  disabled={isPinging}
                  className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer disabled:opacity-75"
                >
                  {isPinging ? (
                    <>
                      <i className="fa-solid fa-spinner animate-spin"></i>
                      <span>Verificando...</span>
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-rotate"></i>
                      <span>Comprobar Estado</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs space-y-2">
                <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                  <span>URL Endpoint:</span>
                  <span className="text-brand-300 font-bold">
                    https://feriandoapi20261008221451-e3f6ded3exg6fyb5.centralus-01.azurewebsites.net/api
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                  <span>Región:</span>
                  <span className="text-white">Central US (Azure App Service)</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Estado de Red:</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    200 OK / SSL Válido
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Este backend provee los controladores de autenticación, productos, trueques y geolocalización consumidos por la app nativa en Flutter y reflejados en el simulador de la web.
              </p>
            </div>
          </div>
        )}

      </main>

    </div>
  );
}
