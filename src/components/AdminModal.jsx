import React, { useState } from 'react';

export default function AdminModal({ isOpen, onClose, onLoginSuccess, onShowToast }) {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('feriando2026');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (username.trim() === 'admin' && password === 'feriando2026') {
        setLoading(false);
        onShowToast('¡Acceso concedido al Panel Administrativo!', 'success');
        onLoginSuccess();
      } else {
        setLoading(false);
        setError('Credenciales incorrectas. Usa admin / feriando2026');
        onShowToast('Credenciales incorrectas.', 'error');
      }
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <i className="fa-solid fa-xmark text-sm"></i>
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-brand-100 text-brand-700 mx-auto flex items-center justify-center text-2xl mb-3 shadow-sm">
            <i className="fa-solid fa-lock"></i>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Acceso Administrativo</h3>
          <p className="text-xs text-slate-500 mt-1">Gestión de solicitudes de demostración y distribución de releases</p>
        </div>

        {/* Credentials Pill / Help */}
        <div className="mb-5 p-3 rounded-2xl bg-brand-50/70 border border-brand-200 text-xs text-brand-900 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-key text-brand-600"></i>
            <span>Credenciales Demo:</span>
          </div>
          <span className="font-mono font-bold bg-white px-2 py-0.5 rounded-lg border border-brand-200">
            admin / feriando2026
          </span>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-center gap-2">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Usuario</label>
            <div className="relative">
              <i className="fa-regular fa-user absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-sm outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Contraseña</label>
            <div className="relative">
              <i className="fa-solid fa-lock absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-sm outline-none transition-all"
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-emerald-600 hover:from-brand-700 hover:to-emerald-700 text-white font-black text-sm shadow-lg shadow-brand-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
          >
            {loading ? (
              <>
                <i className="fa-solid fa-spinner animate-spin"></i>
                <span>Ingresando...</span>
              </>
            ) : (
              <>
                <i className="fa-solid fa-arrow-right-to-bracket"></i>
                <span>Ingresar al Panel</span>
              </>
            )}
          </button>
        </form>

      </div>
    </div>
  );
}
