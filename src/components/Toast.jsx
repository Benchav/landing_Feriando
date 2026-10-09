import React from 'react';

export default function Toast({ toasts, onDismiss }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full px-3 pointer-events-none">
      {toasts.map((toast) => {
        let bgStyle = 'bg-slate-900 border-slate-700 text-white';
        let icon = 'fa-solid fa-circle-info text-sky-400';

        if (toast.type === 'success') {
          bgStyle = 'bg-emerald-950/95 border-emerald-600 text-emerald-100';
          icon = 'fa-solid fa-circle-check text-emerald-400';
        } else if (toast.type === 'warning') {
          bgStyle = 'bg-amber-950/95 border-amber-600 text-amber-100';
          icon = 'fa-solid fa-triangle-exclamation text-amber-400';
        } else if (toast.type === 'error') {
          bgStyle = 'bg-rose-950/95 border-rose-600 text-rose-100';
          icon = 'fa-solid fa-circle-xmark text-rose-400';
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto p-3.5 sm:p-4 rounded-2xl border shadow-2xl backdrop-blur-md flex items-start gap-3 transform transition-all duration-300 animate-slide-up ${bgStyle}`}
          >
            <i className={`${icon} text-lg shrink-0 mt-0.5`}></i>
            <div className="flex-1 text-xs sm:text-sm font-semibold leading-snug">
              {toast.message}
            </div>
            <button
              onClick={() => onDismiss(toast.id)}
              className="text-white/60 hover:text-white shrink-0 p-1 cursor-pointer transition-colors"
              aria-label="Cerrar notificación"
            >
              <i className="fa-solid fa-xmark text-xs"></i>
            </button>
          </div>
        );
      })}
    </div>
  );
}
