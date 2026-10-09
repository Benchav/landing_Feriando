import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solution from './components/Solution';
import Simulator from './components/Simulator';
import Downloads from './components/Downloads';
import DemoForm from './components/DemoForm';
import Footer from './components/Footer';
import Toast from './components/Toast';
import AdminModal from './components/AdminModal';
import AdminDashboard from './components/AdminDashboard';
import { DEFAULT_RELEASES, SAMPLE_REQUESTS } from './data/initialData';

export default function App() {
  const [releases, setReleases] = useState(() => {
    try {
      const saved = localStorage.getItem('feriando_releases');
      return saved ? JSON.parse(saved) : DEFAULT_RELEASES;
    } catch {
      return DEFAULT_RELEASES;
    }
  });

  const [requests, setRequests] = useState(() => {
    try {
      const saved = localStorage.getItem('feriando_requests');
      return saved ? JSON.parse(saved) : SAMPLE_REQUESTS;
    } catch {
      return SAMPLE_REQUESTS;
    }
  });

  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [toasts, setToasts] = useState([]);

  // Save to localStorage whenever state changes
  useEffect(() => {
    try {
      localStorage.setItem('feriando_releases', JSON.stringify(releases));
    } catch (e) {
      console.error('Error saving releases to localStorage', e);
    }
  }, [releases]);

  useEffect(() => {
    try {
      localStorage.setItem('feriando_requests', JSON.stringify(requests));
    } catch (e) {
      console.error('Error saving requests to localStorage', e);
    }
  }, [requests]);

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

  const handleAddRequest = (newRequest) => {
    setRequests((prev) => [newRequest, ...prev]);
  };

  const handleUpdateRequestStatus = (requestId, newStatus) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === requestId ? { ...r, estado: newStatus } : r))
    );
    showToast(`Solicitud ${requestId} actualizada a "${newStatus}"`, 'info');
  };

  const handleDeleteRequest = (requestId) => {
    setRequests((prev) => prev.filter((r) => r.id !== requestId));
    showToast(`Solicitud ${requestId} eliminada.`, 'info');
  };

  const handleUpdateRelease = (releaseId, updatedFields) => {
    setReleases((prev) =>
      prev.map((r) => (r.id === releaseId ? { ...r, ...updatedFields } : r))
    );
    showToast('Release actualizada correctamente.', 'success');
  };

  // If superadmin is logged in, show the admin dashboard
  if (isAdminLoggedIn) {
    return (
      <div className="font-sans antialiased text-slate-900 bg-slate-900 selection:bg-brand-500 selection:text-white">
        <AdminDashboard
          requests={requests}
          releases={releases}
          onUpdateRequestStatus={handleUpdateRequestStatus}
          onDeleteRequest={handleDeleteRequest}
          onUpdateRelease={handleUpdateRelease}
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
        <DemoForm onSubmitRequest={handleAddRequest} onShowToast={showToast} />
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
