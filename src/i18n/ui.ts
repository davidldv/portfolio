export type Lang = 'en' | 'es';

export const LANGS: readonly Lang[] = ['en', 'es'] as const;

export function detectLang(pathname: string): Lang {
  if (pathname.startsWith('/es')) return 'es';
  return 'en';
}

type Experience = {
  role: string;
  dateRange: string;
  description: string;
  currentBadge?: string;
};

type Project = {
  tagline: string;
  description: string;
  highlights?: string[];
};

type UI = {
  htmlLang: string;
  nav: {
    about: string;
    timeline: string;
    skills: string;
    projects: string;
    certs: string;
    writeups: string;
    services: string;
    contact: string;
    homeAriaLabel: string;
    mainAriaLabel: string;
    skipToMain: string;
    openMenu: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    subtitle1: string;
    subtitle2: string;
    ctaPrimary: string;
    github: string;
  };
  proof: {
    lead: string;
    items: { title: string; desc: string }[];
  };
  about: {
    eyebrow: string;
    heading: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    location: string;
    stats: { value: string; label: string }[];
    portraitAlt: string;
  };
  certs: {
    eyebrow: string;
    heading: string;
    intro: string;
    inProgress: string;
    planned: string;
    targetLabel: string;
  };
  timeline: {
    eyebrow: string;
    heading: string;
    current: string;
    visit: string;
    experiences: Record<string, Experience>;
  };
  skills: {
    eyebrow: string;
    heading: string;
    categories: Record<string, string>;
  };
  projects: {
    eyebrow: string;
    heading: string;
    visit: string;
    play: string;
    playable: string;
    items: Record<string, Project>;
  };
  contact: {
    eyebrow: string;
    heading: string;
    intro: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      sent: string;
      error: string;
      subjectPrefix: string;
    };
    orReach: string;
  };
  footer: {
    rightsPrefix: string;
  };
};

export const ui: Record<Lang, UI> = {
  en: {
    htmlLang: 'en',
    nav: {
      about: 'About',
      timeline: 'Timeline',
      skills: 'Skills',
      projects: 'Projects',
      certs: 'Certifications',
      writeups: 'Writeups',
      services: 'Services',
      contact: 'Contact',
      homeAriaLabel: 'David London home',
      mainAriaLabel: 'Main navigation',
      skipToMain: 'Skip to main content',
      openMenu: 'Open navigation menu',
    },
    hero: {
      badge: 'Software Engineer · Application Security & AI Systems',
      title1: 'David',
      title2: 'Builds & Breaks',
      subtitle1: 'Full-Stack Engineer focused on Application Security.',
      subtitle2: 'Shipping web systems with security as a design input, not an afterthought.',
      ctaPrimary: 'Explore my journey',
      github: 'GitHub',
    },
    proof: {
      lead: 'I work the layer where shipping fast meets shipping safe — auth, sessions, tokens, RBAC, and the OWASP Top 10. Offense-first, then hardened.',
      items: [
        {
          title: 'JWT Security Lab',
          desc: 'Five production-grade JWT flaws reproduced from scratch, then hardened against a secure mirror.',
        },
        {
          title: 'jwt-scan',
          desc: 'npm CLI that hunts those same bugs in tokens and live endpoints — CI-friendly exit codes.',
        },
        {
          title: 'Security writeups',
          desc: 'Offense-and-defense breakdowns: alg=none bypass, HS/RS confusion, kid injection.',
        },
      ],
    },
    about: {
      eyebrow: 'About',
      heading: 'Who I am',
      p1: "I'm a Full-Stack Engineer from Pereira, Colombia, focused on Application Security and the reliability of modern web systems. I build end-to-end, React and Next.js on the front, Node, TypeScript, and PostgreSQL on the back, with attention on the layer where working code becomes a security risk.",
      p2: 'I approach development with a security-first mindset: threat modeling features before they ship, using the OWASP Top 10 as a baseline, and validating systems through offensive testing. I actively train on platforms like TryHackMe and PortSwigger Web Security Academy to understand how real attacks work and how to prevent them.',
      p3: "I'm particularly interested in securing AI-integrated applications as they introduce new attack surfaces beyond traditional web security.",
      p4: "Open to full-time roles, freelance, or interesting side projects. If you have a problem worth solving, let's talk.",
      location: 'Pereira, Colombia',
      stats: [
        { value: '2024', label: 'Building since' },
        { value: 'AppSec', label: 'Focus area' },
        { value: 'EN / ES / DE', label: 'C1 / Native / B1' },
        { value: 'Visa', label: 'EU / US sponsor' },
      ],
      portraitAlt: 'David portrait',
    },
    certs: {
      eyebrow: 'Credentials',
      heading: 'Certification roadmap',
      intro:
        "Certifications I'm actively working toward — backing the security pivot with credentials, not just shipped projects.",
      inProgress: 'In progress',
      planned: 'Planned',
      targetLabel: 'Target',
    },
    timeline: {
      eyebrow: 'Career',
      heading: 'Experience',
      current: 'Current',
      visit: 'Visit',
      experiences: {
        tambora: {
          role: 'Frontend Developer',
          dateRange: 'Jul 2025 - Sep 2025',
          description:
            'Migrated business-critical legacy modules from jQuery to React: 40% bundle-size reduction and shrunk the client-side attack surface by consolidating logic into a modular Atomic Design library. Engineered Azure CI/CD to replace manual SSH deploys, cutting deploy time from 2+ hours to <15 min and enabling automated test gates — foundation for SAST and dependency scanning.',
        },
        elitestack: {
          role: 'Full-Stack Development',
          dateRange: 'Jun 2024 - Jul 2024',
          description:
            'Hands-on bootcamp: Linux/CLI, TypeScript, Node.js, Docker, REST APIs, WebSockets, Next.js, AWS. Foundation of how modern production systems fit together.',
        },
      },
    },
    skills: {
      eyebrow: 'Expertise',
      heading: 'Skills',
      categories: {
        appsec: 'Application Security',
        offensive: 'Offensive & AppSec Tooling',
        backend: 'Backend',
        frontend: 'Frontend',
        databases: 'Databases',
        devops: 'DevOps & Cloud',
        languages: 'Languages',
        ai: 'AI & LLM',
        tooling: 'Tooling',
      },
    },
    projects: {
      eyebrow: 'Work',
      heading: 'Projects',
      visit: 'Visit',
      play: 'Play',
      playable: 'Playable',
      items: {
        paircode: {
          tagline: 'Secure real-time collaborative workspace',
          description:
            'Secure collaborative system with verified identity, hardened authentication, and a purpose-built realtime layer.',
          highlights: [
            'In-house auth stack: EdDSA JWTs, rotating refresh tokens with reuse detection, Argon2id hashing, CSRF protection.',
            'Custom WebSocket server with single-use ticket handshake, per-event authorization, and RBAC enforced server-side.',
            'Realtime room layer: presence, typing, shared threaded context, and persistent history that survives reconnects.',
          ],
        },
        'jwt-lab': {
          tagline: 'Offense-and-defense JWT vulnerability lab',
          description:
            'Offense-and-defense lab exercising real-world JWT vulnerabilities against a hardened mirror, proving each fix rather than claiming it.',
          highlights: [
            'From-scratch JWT sign/verify in TypeScript (no libraries) reproducing five production-grade flaws: alg=none bypass, HS256/RS256 key confusion, weak-secret brute-force, kid header injection, and missing iss/aud/exp validation.',
            'Reproducible exploit scripts (Bash + OpenSSL) and a harness that proves each payload succeeds against the vulnerable API and is rejected by the secure one.',
            'Hardened service eliminates entire bug classes: single-algorithm RS256 allowlist, fixed in-memory kid registry with rotation, generic errors, and scrypt password hashing.',
          ],
        },
        'la-bodega': {
          tagline: 'Solo-built, in-production e-commerce platform',
          description:
            'Solo-built, in-production e-commerce platform for a family-owned hardware retailer.',
          highlights: [
            'Sole engineer end-to-end: requirements, architecture, real-time inventory catalog, deployment, and ongoing maintenance for a live retail storefront.',
            'Designed and shipped authentication, session security, and RBAC for staff vs. customer surfaces; integrated Mercado Pago for live online transactions.',
            'Hardened the application layer against OWASP Top 10 risks: parameterized queries, server-side input validation, CSRF protection on state-changing endpoints, and least-privilege database roles.',
          ],
        },
        kanby: {
          tagline: 'Kanban app with auth and access control',
          description:
            'Collaborative Kanban: boards, lists, drag-and-drop cards, secure session handling and per-board authorization over SSE.',
        },
        macos: {
          tagline: 'Portfolio site as a MacOS app',
          description:
            'Interactive portfolio mimicking a real OS experience: macOS-style desktop windows on desktop and iPhone-style full-screen apps on mobile.',
        },
        ctf: {
          tagline: 'Playable, sandboxed web-security CTF',
          description:
            'An interactive hacking terminal you can actually play — four boxes reproducing real vulnerability classes, safely simulated in the browser with no network and no eval.',
          highlights: [
            'Four exploit paths: SQLi auth bypass, IDOR / broken access control, JWT alg=none signature strip, and reflected XSS — each pattern-matched against a fake target.',
            'Full terminal UX: command interpreter, command history, typewriter boot, matrix-rain canvas, CRT scanlines, and flag-capture progression.',
            'The same attack classes I defend against in my JWT Security Lab and jwt-scan work — offense to prove the defense.',
          ],
        },
      },
    },
    contact: {
      eyebrow: 'Get in touch',
      heading: "Let's build something",
      intro:
        "Open to Software Engineer and junior AppSec roles — remote, or relocating. If you're hiring for security-minded developers, let's talk.",
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'you@example.com',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project or idea...',
        submit: 'Send message',
        sending: 'Sending...',
        sent: 'Message sent!',
        error: 'Error sending',
        subjectPrefix: '✨ New Portfolio Inquiry from',
      },
      orReach: 'Or reach me directly',
    },
    footer: {
      rightsPrefix: '©',
    },
  },
  es: {
    htmlLang: 'es',
    nav: {
      about: 'Sobre mí',
      timeline: 'Trayectoria',
      skills: 'Habilidades',
      projects: 'Proyectos',
      certs: 'Certificaciones',
      writeups: 'Writeups',
      services: 'Servicios',
      contact: 'Contacto',
      homeAriaLabel: 'Inicio — David London',
      mainAriaLabel: 'Navegación principal',
      skipToMain: 'Saltar al contenido principal',
      openMenu: 'Abrir menú de navegación',
    },
    hero: {
      badge: 'Ingeniero de Software · Seguridad de Aplicaciones y Sistemas de IA',
      title1: 'David',
      title2: 'Construye y Rompe',
      subtitle1: 'Ingeniero Full-Stack enfocado en Seguridad de Aplicaciones.',
      subtitle2:
        'Sistemas web con la seguridad integrada desde el diseño, no como un agregado al final.',
      ctaPrimary: 'Conoce mi recorrido',
      github: 'GitHub',
    },
    proof: {
      lead: 'Trabajo en la capa donde entregar rápido se cruza con entregar seguro — auth, sesiones, tokens, RBAC y el OWASP Top 10. Primero ofensiva, luego endurecido.',
      items: [
        {
          title: 'JWT Security Lab',
          desc: 'Cinco fallos de JWT de nivel producción reproducidos desde cero y endurecidos contra una versión segura.',
        },
        {
          title: 'jwt-scan',
          desc: 'CLI en npm que caza esos mismos bugs en tokens y endpoints en vivo — con exit codes para CI.',
        },
        {
          title: 'Writeups de seguridad',
          desc: 'Análisis de ataque y defensa: bypass alg=none, confusión HS/RS, inyección kid.',
        },
      ],
    },
    about: {
      eyebrow: 'Sobre mí',
      heading: 'Quién soy',
      p1: 'Soy Ingeniero Full-Stack de Pereira, Colombia, enfocado en Seguridad de Aplicaciones y en la confiabilidad de los sistemas web modernos. Construyo de punta a punta: React y Next.js en el frontend; Node, TypeScript y PostgreSQL en el backend, con atención especial en la capa donde el código que funciona se convierte en un riesgo de seguridad.',
      p2: 'Trabajo con mentalidad de seguridad desde el inicio: threat modeling de las features antes de lanzarlas, OWASP Top 10 como línea base y validación mediante pruebas ofensivas. Entreno de forma activa en plataformas como TryHackMe y la PortSwigger Web Security Academy para entender cómo funcionan los ataques reales y cómo prevenirlos.',
      p3: 'Me interesa especialmente la seguridad de aplicaciones integradas con IA, ya que introducen nuevas superficies de ataque más allá de la seguridad web tradicional.',
      p4: 'Abierto a roles full-time, freelance o proyectos personales interesantes. Si tienes un problema que valga la pena resolver, hablemos.',
      location: 'Pereira, Colombia',
      stats: [
        { value: '2024', label: 'Programando desde' },
        { value: 'AppSec', label: 'Área de enfoque' },
        { value: 'EN / ES / DE', label: 'C1 / Nativo / B1' },
        { value: 'Visa', label: 'Patrocinio EU / US' },
      ],
      portraitAlt: 'Retrato de David',
    },
    certs: {
      eyebrow: 'Credenciales',
      heading: 'Hoja de ruta de certificaciones',
      intro:
        'Certificaciones en las que trabajo activamente — respaldando el pivote hacia seguridad con credenciales, no solo con proyectos.',
      inProgress: 'En curso',
      planned: 'Planeada',
      targetLabel: 'Objetivo',
    },
    timeline: {
      eyebrow: 'Carrera',
      heading: 'Experiencia',
      current: 'Actual',
      visit: 'Visitar',
      experiences: {
        tambora: {
          role: 'Desarrollador Frontend',
          dateRange: 'Jul 2025 - Sep 2025',
          description:
            'Migré módulos críticos del negocio de jQuery a React: reducción del 40% en el tamaño del bundle y disminución de la superficie de ataque del cliente al consolidar la lógica en una librería modular con Atomic Design. Diseñé CI/CD en Azure para reemplazar los deploys manuales por SSH, bajando el tiempo de despliegue de más de 2 horas a menos de 15 minutos y habilitando test gates automáticos — base para SAST y escaneo de dependencias.',
        },
        elitestack: {
          role: 'Desarrollo Full-Stack',
          dateRange: 'Jun 2024 - Jul 2024',
          description:
            'Bootcamp práctico: Linux/CLI, TypeScript, Node.js, Docker, REST APIs, WebSockets, Next.js, AWS. Base de cómo encajan los sistemas modernos de producción.',
        },
      },
    },
    skills: {
      eyebrow: 'Áreas',
      heading: 'Habilidades',
      categories: {
        appsec: 'Seguridad de Aplicaciones',
        offensive: 'Ofensiva y Herramientas AppSec',
        backend: 'Backend',
        frontend: 'Frontend',
        databases: 'Bases de datos',
        devops: 'DevOps y Cloud',
        languages: 'Lenguajes',
        ai: 'IA y LLM',
        tooling: 'Herramientas',
      },
    },
    projects: {
      eyebrow: 'Trabajo',
      heading: 'Proyectos',
      visit: 'Visitar',
      play: 'Jugar',
      playable: 'Jugable',
      items: {
        paircode: {
          tagline: 'Workspace colaborativo seguro en tiempo real',
          description:
            'Sistema colaborativo seguro con identidad verificada, autenticación endurecida y una capa de tiempo real hecha a medida.',
          highlights: [
            'Stack de autenticación propio: JWT con EdDSA, refresh tokens rotativos con detección de reutilización, hashing con Argon2id y protección CSRF.',
            'Servidor WebSocket propio con handshake de ticket de un solo uso, autorización por evento y RBAC aplicado del lado del servidor.',
            'Capa de rooms en tiempo real: presencia, indicador de escritura, contexto compartido por hilos e historial persistente que sobrevive a reconexiones.',
          ],
        },
        'jwt-lab': {
          tagline: 'Laboratorio ofensivo y defensivo de vulnerabilidades JWT',
          description:
            'Laboratorio de ataque y defensa que ejercita vulnerabilidades reales de JWT contra una versión endurecida, demostrando cada mitigación en lugar de sólo afirmarla.',
          highlights: [
            'Firma y verificación de JWT en TypeScript desde cero (sin librerías) reproduciendo cinco fallos de nivel producción: bypass con alg=none, confusión de claves HS256/RS256, fuerza bruta de secretos débiles, inyección en el header kid y falta de validación de iss/aud/exp.',
            'Scripts de explotación reproducibles (Bash + OpenSSL) y un harness que prueba que cada payload tiene éxito contra la API vulnerable y es rechazado por la segura.',
            'Servicio endurecido que elimina clases enteras de bugs: allowlist de un único algoritmo RS256, registro fijo de kids en memoria con rotación, errores genéricos y hashing de contraseñas con scrypt.',
          ],
        },
        'la-bodega': {
          tagline: 'Plataforma e-commerce en producción construida en solitario',
          description:
            'Plataforma e-commerce en producción, construida de extremo a extremo en solitario para una ferretería familiar.',
          highlights: [
            'Único ingeniero de extremo a extremo: requisitos, arquitectura, catálogo de inventario en tiempo real, despliegue y mantenimiento continuo de una tienda retail en vivo.',
            'Diseñé e implementé autenticación, seguridad de sesiones y RBAC para superficies de staff y clientes; integré Mercado Pago para transacciones reales en línea.',
            'Endurecí la capa de aplicación frente al OWASP Top 10: consultas parametrizadas, validación de entrada en el servidor, protección CSRF en endpoints que modifican estado y roles de base de datos con mínimos privilegios.',
          ],
        },
        kanby: {
          tagline: 'App Kanban con autenticación y control de acceso',
          description:
            'Kanban colaborativo: tableros, listas, tarjetas arrastrables, manejo seguro de sesiones y autorización por tablero sobre SSE.',
        },
        macos: {
          tagline: 'Portfolio como aplicación MacOS',
          description:
            'Portfolio interactivo que imita una experiencia de sistema operativo: ventanas estilo macOS en desktop y apps tipo iPhone a pantalla completa en móvil.',
        },
        ctf: {
          tagline: 'CTF de seguridad web jugable y en sandbox',
          description:
            'Una terminal de hacking que puedes jugar de verdad — cuatro retos que reproducen clases reales de vulnerabilidades, simuladas de forma segura en el navegador, sin red ni eval.',
          highlights: [
            'Cuatro vías de explotación: bypass de login por SQLi, IDOR / control de acceso roto, JWT alg=none y XSS reflejado — cada una contra un objetivo simulado.',
            'Experiencia de terminal completa: intérprete de comandos, historial, arranque con efecto máquina de escribir, lluvia matrix en canvas, scanlines CRT y progresión por flags.',
            'Las mismas clases de ataque que defiendo en mi JWT Security Lab y jwt-scan — ofensiva para demostrar la defensa.',
          ],
        },
      },
    },
    contact: {
      eyebrow: 'Contacto',
      heading: 'Construyamos algo',
      intro:
        'Abierto a roles de Software Engineer y junior AppSec — remoto o con reubicación. Si contratas desarrolladores con mentalidad de seguridad, hablemos.',
      form: {
        name: 'Nombre',
        namePlaceholder: 'Tu nombre',
        email: 'Correo',
        emailPlaceholder: 'tu@correo.com',
        message: 'Mensaje',
        messagePlaceholder: 'Cuéntame sobre tu proyecto o idea...',
        submit: 'Enviar mensaje',
        sending: 'Enviando...',
        sent: '¡Mensaje enviado!',
        error: 'Error al enviar',
        subjectPrefix: '✨ Nuevo contacto del portfolio de',
      },
      orReach: 'O escríbeme directamente',
    },
    footer: {
      rightsPrefix: '©',
    },
  },
};
