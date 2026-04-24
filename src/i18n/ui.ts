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
        { value: 'EN / DE', label: 'C1 / B1' },
        { value: 'Visa', label: 'EU / US sponsor' },
      ],
      portraitAlt: 'David portrait',
    },
    timeline: {
      eyebrow: 'Career',
      heading: 'Experience',
      current: 'Current',
      visit: 'Visit',
      experiences: {
        'la-bodega': {
          role: 'Full Stack Engineer',
          dateRange: 'Mar 2026 - Present',
          description:
            'Own and scale a production retail platform (~$1.5M COP/day across e-commerce and in-store). Responsible for authentication, session security and role-based access across staff and customer surfaces. Hardened the app layer against OWASP Top 10: parameterized queries, server-side input validation, CSRF on state-changing endpoints, least-privilege DB roles.',
        },
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
        { value: 'EN / DE', label: 'C1 / B1' },
        { value: 'Visa', label: 'Patrocinio EU / US' },
      ],
      portraitAlt: 'Retrato de David',
    },
    timeline: {
      eyebrow: 'Carrera',
      heading: 'Experiencia',
      current: 'Actual',
      visit: 'Visitar',
      experiences: {
        'la-bodega': {
          role: 'Ingeniero Full Stack',
          dateRange: 'Mar 2026 - Presente',
          description:
            'Dirijo y escalo una plataforma retail en producción (~$1.5M COP/día entre e-commerce y tienda). Responsable de autenticación, seguridad de sesiones y control de acceso por roles para empleados y clientes. Endurecí la capa de aplicación frente al OWASP Top 10: consultas parametrizadas, validación de entrada en el servidor, CSRF en endpoints que modifican estado y roles de base de datos con mínimos privilegios.',
        },
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
