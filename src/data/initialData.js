export const DEFAULT_RELEASES = [
  {
    id: 'android',
    name: 'Android APK',
    platform: 'Android 8.0+ (Móvil / Tablet)',
    arch: 'armeabi-v7a / arm64-v8a',
    icon: 'fa-brands fa-android',
    version: 'v1.2.0',
    filename: 'feriando-release.apk',
    downloadUrl: '/downloads/feriando-release.apk',
    size: '57.0 MB',
    date: 'Octubre 2026',
    downloads: 142,
    isRealFile: true,
    notes: 'Compilación oficial de producción en Flutter. Soporte offline para catálogo local, cámara para fotos y notificaciones en tiempo real.'
  },
  {
    id: 'windows',
    name: 'Windows Desktop',
    platform: 'Windows 10 / 11 (64-bit)',
    arch: 'x86_64 Nativo',
    icon: 'fa-brands fa-windows',
    version: 'v1.2.0',
    filename: 'FeriandoSetup-x64-v1.2.0.exe',
    downloadUrl: '#',
    size: '52.4 MB',
    date: 'Octubre 2026',
    downloads: 38,
    isRealFile: false,
    notes: 'Cliente de escritorio nativo con panel optimizado para coordinadores y feriantes con laptop.'
  },
  {
    id: 'macos',
    name: 'macOS DMG',
    platform: 'macOS Monterey o superior',
    arch: 'Universal (Apple Silicon & Intel)',
    icon: 'fa-brands fa-apple',
    version: 'v1.2.0',
    filename: 'Feriando-macOS-Universal.dmg',
    downloadUrl: '#',
    size: '48.1 MB',
    date: 'Octubre 2026',
    downloads: 24,
    isRealFile: false,
    notes: 'Compilación universal de alto rendimiento optimizada para pantallas Retina y chips M1/M2/M3.'
  }
];

export const SAMPLE_REQUESTS = [
  {
    id: 'REQ-101',
    nombre: 'Carlos Mendoza',
    email: 'carlos.mendoza@feriaverde.org',
    org: 'Cooperativa Orgánica del Norte',
    rol: 'Organizador de Feria',
    plataforma: 'Android (APK Móvil)',
    fecha: '2026-10-15',
    mensaje: 'Queremos probar el sistema de trueques con 40 productores de café y miel.',
    estado: 'Agendada',
    timestamp: 'Hace 2 horas'
  },
  {
    id: 'REQ-102',
    nombre: 'Lic. Martha Ruiz',
    email: 'martha.ruiz@colectivoartesanal.com',
    org: 'Colectivo Manos Creativas',
    rol: 'Feriante / Artesano',
    plataforma: 'Todas las plataformas',
    fecha: '2026-10-18',
    mensaje: 'Nos interesa ver cómo coordinar entregas físicas mediante el chat de la app.',
    estado: 'Pendiente',
    timestamp: 'Hace 1 día'
  },
  {
    id: 'REQ-103',
    nombre: 'Ing. David Gómez',
    email: 'dgomez@redcomunitaria.org',
    org: 'Red de Ferias del Pacífico',
    rol: 'Coordinador Comunitario',
    plataforma: 'Windows (EXE Escritorio)',
    fecha: '2026-10-12',
    mensaje: 'Revisión técnica de la sincronización de instalables y rendimiento en ferias locales.',
    estado: 'Realizada',
    timestamp: 'Hace 3 días'
  }
];
