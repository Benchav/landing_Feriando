import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solution from './components/Solution';
import Simulator from './components/Simulator';
import Downloads from './components/Downloads';
import Footer from './components/Footer';
import Toast from './components/Toast';
import AdminModal from './components/AdminModal';
import AdminDashboard from './components/AdminDashboard';
import { DEFAULT_RELEASES } from './data/initialData';

export default function App() {
  const [releases, setReleases] = useState(() => {
    try {
      const saved = localStorage.getItem('feriando_releases');
      return saved ? JSON.parse(saved) : DEFAULT_RELEASES;
    } catch {
      return DEFAULT_RELEASES;
    }
  });

  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [toasts, setToasts] = useState([]);

  // Save to localStorage whenever releases change
  useEffect(() => {
    try {
      localStorage.setItem('feriando_releases', JSON.stringify(releases));
    } catch (e) {
      console.error('Error saving releases to localStorage', e);
    }
  }, [releases]);

  const showToast = (message, type = 'info') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4200);
  };

  const dismissToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleDownload = (releaseId) => {
    setReleases((prev) =>
      prev.map((r) => (r.id === releaseId ? { ...r, downloads: (r.downloads || 0) + 1 } : r))
    );
  };

  // If superadmin is logged in, show the admin dashboard
  if (isAdminLoggedIn) {
    return (
      <div className="font-sans antialiased text-slate-900 bg-slate-900 selection:bg-brand-500 selection:text-white">
        <AdminDashboard
          releases={releases}
          onLogout={() => setIsAdminLoggedIn(false)}
          onShowToast={showToast}
        />
        <Toast toasts={toasts} onDismiss={dismissToast} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-slate-800 bg-white selection:bg-brand-500 selection:text-white scroll-smooth">
      {/* Sticky Navigation */}
      <Navbar onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* Main Page Sections */}
      <main className="flex-1">
        <Hero onShowToast={showToast} />
        <Solution />
        <Simulator onShowToast={showToast} />
        <Downloads releases={releases} onDownload={handleDownload} onShowToast={showToast} />
      </main>

      {/* Comprehensive Footer */}
      <Footer onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* Administrative Login Modal */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        onLoginSuccess={() => {
          setIsAdminOpen(false);
          setIsAdminLoggedIn(true);
        }}
        onShowToast={showToast}
      />

      {/* Floating System Toasts */}
      <Toast toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}
