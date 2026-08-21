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
    completed: string;
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
      badge: 'Full-Stack Engineer · TypeScript, Node & React · Security-Focused',
      title1: 'David',
      title2: 'Builds & Breaks',
      subtitle1: 'Full-Stack Engineer: React, Next.js, Node, TypeScript, PostgreSQL.',
      subtitle2: 'I build web systems and think about how they break while I build them.',
      ctaPrimary: 'Explore my journey',
      github: 'GitHub',
    },
    proof: {
      lead: 'Most of my work sits in auth, sessions, tokens and RBAC, with the OWASP Top 10 as the checklist. I attack it first, then fix what I found.',
      items: [
        {
          title: 'JWT Security Lab',
          desc: 'Five real JWT flaws rebuilt from scratch, then fixed in a hardened copy of the same API.',
        },
        {
          title: 'jwt-scan',
          desc: 'An npm CLI that looks for those same bugs in tokens and live endpoints. The exit codes work in CI.',
        },
        {
          title: 'Security writeups',
          desc: 'How the attacks work and how I stopped them: alg=none bypass, HS/RS confusion, kid injection.',
        },
      ],
    },
    about: {
      eyebrow: 'About',
      heading: 'Who I am',
      p1: "I'm a Full-Stack Engineer from Pereira, Colombia. I build production web systems end to end, React and Next.js on the front, Node, TypeScript and PostgreSQL on the back. I spend more time than most developers on the point where code that works correctly is still a security problem.",
      p2: 'That means threat modeling a feature before it ships, keeping the OWASP Top 10 as the baseline, and testing my own work by attacking it. I train on TryHackMe and the PortSwigger Web Security Academy, because it is hard to defend against an attack you have never run yourself.',
      p3: "Right now the part I'm most interested in is securing apps with an LLM inside them. They add attack surface that traditional web security doesn't cover.",
      p4: 'Open to full-time work, freelance, or a side project that sounds interesting. If you have a problem worth solving, send me a message.',
      location: 'Pereira, Colombia',
      stats: [
        { value: '2024', label: 'Building since' },
        { value: 'Full-Stack', label: 'Security-focused' },
        { value: 'EN / ES / DE', label: 'C1 / Native / B1' },
        { value: 'Remote', label: 'LATAM / US / EU hours' },
      ],
      portraitAlt: 'David portrait',
    },
    certs: {
      eyebrow: 'Credentials',
      heading: 'Certification roadmap',
      intro:
        "The certifications behind the move into security: what's finished, and what I'm studying for now. The projects are the other half.",
      completed: 'Completed',
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
            'Moved business-critical legacy modules from jQuery to React: 40% smaller bundle, and less client-side attack surface once the logic lived in one modular Atomic Design library. I also swapped the manual SSH deploys for an Azure CI/CD pipeline, which took a deploy from over two hours to under fifteen minutes and gave the team somewhere to hang automated test gates, SAST and dependency scanning.',
        },
        elitestack: {
          role: 'Full-Stack Development',
          dateRange: 'Jun 2024 - Jul 2024',
          description:
            'Hands-on bootcamp: Linux/CLI, TypeScript, Node.js, Docker, REST APIs, WebSockets, Next.js, AWS. Where I learned how the pieces of a production system fit together.',
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
            'A collaborative workspace where I wrote the identity and auth layer myself instead of importing one, plus a realtime layer built to match it.',
          highlights: [
            'Auth built in-house: EdDSA JWTs, rotating refresh tokens that detect reuse, Argon2id hashing, CSRF protection.',
            'My own WebSocket server. The handshake uses a single-use ticket, every event is authorized on its own, and RBAC is checked server-side.',
            'Rooms carry presence, typing indicators, shared threaded context, and history that survives a reconnect.',
          ],
        },
        'jwt-lab': {
          tagline: 'A JWT lab with a broken half and a fixed half',
          description:
            'Two versions of the same API, one vulnerable and one hardened. Every attack lands on the first and bounces off the second, so you can run the fixes instead of taking my word for them.',
          highlights: [
            'JWT signing and verification written from scratch in TypeScript, no libraries, reproducing five flaws that reach production: alg=none bypass, HS256/RS256 key confusion, weak-secret brute force, kid header injection, and missing iss/aud/exp validation.',
            'Exploit scripts in Bash and OpenSSL, plus a harness that runs every payload against both APIs and checks the result each way.',
            'The hardened service removes whole classes of bug at once: one allowed algorithm (RS256), a fixed in-memory kid registry with rotation, generic errors, and scrypt for passwords.',
          ],
        },
        'la-bodega': {
          tagline: 'Solo-built e-commerce platform, live in production',
          description:
            'A live storefront for a family-owned hardware retailer. Real customers, real payments, and nobody else to call when it breaks.',
          highlights: [
            'I was the only engineer on it: requirements, architecture, the real-time inventory catalog, deployment, and the maintenance it still gets.',
            'Built the authentication, session security and RBAC that keep the staff side separate from the customer side, and wired up Mercado Pago for live transactions.',
            'Hardened the application layer against the OWASP Top 10: parameterized queries, input validated on the server, CSRF protection on anything that changes state, and database roles with the least privilege that still works.',
          ],
        },
        authzscan: {
          tagline: 'IDOR/BOLA review that runs itself, on Claude agents',
          description:
            'An automated pentest of authorization logic in Next.js App Router repos. Agents follow every client-controlled identifier to the database query it reaches and flag the ownership checks nobody wrote. It is the top OWASP risk, and pattern-matching SAST mostly cannot see it.',
          highlights: [
            'Four phases: a deterministic endpoint inventory with ts-morph (route handlers, Server Actions, auth-library detection), an agent trace pass, an adversarial verify pass whose whole job is killing false positives, and reports in Markdown, SARIF or JSON with exit codes CI can gate on.',
            'The accuracy is a number, not a feeling: a seeded benchmark of 16 IDOR/BOLA bugs plus 6 correctly written twins as false-positive traps, recall and precision gates, and an oracle runner that proves the harness scores right regardless of how good the model is.',
            'It fails loudly. An endpoint it could not analyze is reported as not analyzed, never as clean, and a candidate it cannot confirm comes back as low confidence instead of quietly disappearing.',
          ],
        },
        llmseclab: {
          tagline: 'LLM/RAG security lab, attack side and defense side',
          description:
            'Two FastAPI services with the same RAG surface: one left vulnerable on purpose, one hardened. Every attack in the suite works on the first and fails on the second.',
          highlights: [
            'Five OWASP LLM Top 10 scenarios written as a pytest attack suite: cross-tenant retrieval leak (confused deputy), indirect prompt injection through retrieved documents, vector-store poisoning via forged ingest metadata, excessive agency over a real MCP tool server, and stored XSS coming straight out of the model.',
            'The RAG pipeline is hand-built (embeddings, in-memory vector store, multi-tenant ACL corpus) with no LangChain, so the diff between the two apps is the security decisions and nothing else.',
            'A deterministic mock LLM turns "every attack fails against the secure API" into something CI can rely on, and an OpenRouter provider re-runs the injection tests against a real model.',
          ],
        },
        ctf: {
          tagline: 'Playable, sandboxed web-security CTF',
          description:
            'A hacking terminal you can actually type into. Four boxes, four real vulnerability classes, all simulated in the browser: no network calls, no eval.',
          highlights: [
            'Four exploit paths: SQLi auth bypass, IDOR, a JWT alg=none signature strip, and reflected XSS, each matched against a fake target.',
            'The whole terminal: a command interpreter with history, a typewriter boot sequence, matrix rain on a canvas, CRT scanlines, and flags to capture in order.',
            'Same attack classes I defend against in the JWT Security Lab and jwt-scan.',
          ],
        },
      },
    },
    contact: {
      eyebrow: 'Get in touch',
      heading: "Let's build something",
      intro:
        'Open to Full-Stack, Backend and Software Engineer roles, remote or relocating. Security is what I bring on top of shipping features. If your team could use that, write to me.',
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
        subjectPrefix: 'New portfolio inquiry from',
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
      homeAriaLabel: 'Inicio: David London',
      mainAriaLabel: 'Navegación principal',
      skipToMain: 'Saltar al contenido principal',
      openMenu: 'Abrir menú de navegación',
    },
    hero: {
      badge: 'Ingeniero Full-Stack · TypeScript, Node y React · Enfoque en seguridad',
      title1: 'David',
      title2: 'Construye y Rompe',
      subtitle1: 'Ingeniero Full-Stack: React, Next.js, Node, TypeScript, PostgreSQL.',
      subtitle2: 'Construyo sistemas web y pienso en cómo se rompen mientras los construyo.',
      ctaPrimary: 'Conoce mi recorrido',
      github: 'GitHub',
    },
    proof: {
      lead: 'Casi todo mi trabajo está en auth, sesiones, tokens y RBAC, con el OWASP Top 10 como lista de chequeo. Primero lo ataco y después arreglo lo que encontré.',
      items: [
        {
          title: 'JWT Security Lab',
          desc: 'Cinco fallos reales de JWT reconstruidos desde cero y luego corregidos en una copia endurecida de la misma API.',
        },
        {
          title: 'jwt-scan',
          desc: 'CLI en npm que busca esos mismos bugs en tokens y endpoints en vivo. Los exit codes sirven en CI.',
        },
        {
          title: 'Writeups de seguridad',
          desc: 'Cómo funcionan los ataques y cómo los detuve: bypass alg=none, confusión HS/RS, inyección kid.',
        },
      ],
    },
    about: {
      eyebrow: 'Sobre mí',
      heading: 'Quién soy',
      p1: 'Soy Ingeniero Full-Stack de Pereira, Colombia. Construyo sistemas web de producción de punta a punta: React y Next.js en el frontend, Node, TypeScript y PostgreSQL en el backend. Le dedico más tiempo que la mayoría al punto donde un código que funciona bien sigue siendo un problema de seguridad.',
      p2: 'Eso significa hacer threat modeling de una feature antes de lanzarla, mantener el OWASP Top 10 como línea base y probar mi propio trabajo atacándolo. Entreno en TryHackMe y en la PortSwigger Web Security Academy, porque es difícil defenderse de un ataque que uno nunca ha ejecutado.',
      p3: 'Ahora mismo lo que más me interesa es asegurar aplicaciones que llevan un LLM adentro. Suman superficie de ataque que la seguridad web tradicional no cubre.',
      p4: 'Abierto a trabajo full-time, freelance o algún proyecto paralelo que suene interesante. Si tienes un problema que valga la pena resolver, escríbeme.',
      location: 'Pereira, Colombia',
      stats: [
        { value: '2024', label: 'Programando desde' },
        { value: 'Full-Stack', label: 'Con enfoque en seguridad' },
        { value: 'EN / ES / DE', label: 'C1 / Nativo / B1' },
        { value: 'Remoto', label: 'Horario LATAM / US / EU' },
      ],
      portraitAlt: 'Retrato de David',
    },
    certs: {
      eyebrow: 'Credenciales',
      heading: 'Hoja de ruta de certificaciones',
      intro:
        'Las certificaciones detrás del giro hacia seguridad: lo que ya terminé y lo que estoy estudiando ahora. Los proyectos son la otra mitad.',
      completed: 'Completada',
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
            'Pasé módulos críticos del negocio de jQuery a React: 40% menos de bundle, y menos superficie de ataque en el cliente al dejar la lógica en una sola librería modular con Atomic Design. También cambié los deploys manuales por SSH por un pipeline de CI/CD en Azure, que bajó un despliegue de más de dos horas a menos de quince minutos y le dio al equipo dónde poner test gates automáticos, SAST y escaneo de dependencias.',
        },
        elitestack: {
          role: 'Desarrollo Full-Stack',
          dateRange: 'Jun 2024 - Jul 2024',
          description:
            'Bootcamp práctico: Linux/CLI, TypeScript, Node.js, Docker, REST APIs, WebSockets, Next.js, AWS. Ahí aprendí cómo encajan las piezas de un sistema en producción.',
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
            'Un workspace colaborativo donde escribí yo mismo la capa de identidad y autenticación en vez de importar una, con una capa de tiempo real hecha a la medida.',
          highlights: [
            'Autenticación propia: JWT con EdDSA, refresh tokens rotativos que detectan reutilización, hashing con Argon2id y protección CSRF.',
            'Mi propio servidor WebSocket. El handshake usa un ticket de un solo uso, cada evento se autoriza por separado y el RBAC se verifica en el servidor.',
            'Las salas mantienen presencia, indicador de escritura, contexto compartido por hilos e historial que sobrevive a una reconexión.',
          ],
        },
        'jwt-lab': {
          tagline: 'Un laboratorio de JWT con una mitad rota y una mitad arreglada',
          description:
            'Dos versiones de la misma API, una vulnerable y otra endurecida. Cada ataque entra en la primera y rebota en la segunda, así que puedes correr las mitigaciones en vez de creerme.',
          highlights: [
            'Firma y verificación de JWT escritas desde cero en TypeScript, sin librerías, reproduciendo cinco fallos que llegan a producción: bypass con alg=none, confusión de claves HS256/RS256, fuerza bruta de secretos débiles, inyección en el header kid y falta de validación de iss/aud/exp.',
            'Scripts de explotación en Bash y OpenSSL, más un harness que corre cada payload contra las dos APIs y comprueba el resultado en ambos lados.',
            'El servicio endurecido elimina clases enteras de bug de una vez: un solo algoritmo permitido (RS256), un registro fijo de kids en memoria con rotación, errores genéricos y scrypt para contraseñas.',
          ],
        },
        'la-bodega': {
          tagline: 'Plataforma e-commerce hecha en solitario, viva en producción',
          description:
            'Una tienda en línea para una ferretería familiar. Clientes reales, pagos reales, y nadie más a quien llamar cuando algo se rompe.',
          highlights: [
            'Fui el único ingeniero: requisitos, arquitectura, catálogo de inventario en tiempo real, despliegue y el mantenimiento que todavía recibe.',
            'Construí la autenticación, la seguridad de sesiones y el RBAC que separan la parte del staff de la del cliente, y conecté Mercado Pago para transacciones reales.',
            'Endurecí la capa de aplicación frente al OWASP Top 10: consultas parametrizadas, validación de entrada en el servidor, protección CSRF en todo lo que cambia estado y roles de base de datos con los mínimos privilegios que aún funcionan.',
          ],
        },
        authzscan: {
          tagline: 'Revisión de IDOR/BOLA que se ejecuta sola, con agentes de Claude',
          description:
            'Un pentest automatizado de la lógica de autorización en repos Next.js App Router. Los agentes siguen cada identificador controlado por el cliente hasta la consulta de base de datos que alcanza y marcan los checks de propiedad que nadie escribió. Es el riesgo número uno de OWASP, y las herramientas SAST de pattern-matching casi nunca lo ven.',
          highlights: [
            'Cuatro fases: inventario determinista de endpoints con ts-morph (route handlers, Server Actions, detección de la librería de auth), una pasada de trazado por agente, una pasada adversarial de verificación cuyo único trabajo es matar falsos positivos, y reportes en Markdown, SARIF o JSON con códigos de salida que CI puede usar.',
            'La precisión es un número, no una intuición: un benchmark con 16 bugs IDOR/BOLA sembrados más 6 gemelos bien escritos como trampas de falsos positivos, umbrales de recall y precisión, y un runner oráculo que demuestra que el harness puntúa bien sin importar qué tan bueno sea el modelo.',
            'Falla en voz alta. Un endpoint que no pudo analizar se reporta como no analizado, nunca como limpio, y un candidato que no puede confirmar vuelve como baja confianza en lugar de desaparecer sin ruido.',
          ],
        },
        llmseclab: {
          tagline: 'Laboratorio de seguridad LLM/RAG, lado ataque y lado defensa',
          description:
            'Dos servicios FastAPI con la misma superficie RAG: uno vulnerable a propósito y otro endurecido. Cada ataque de la suite funciona en el primero y falla en el segundo.',
          highlights: [
            'Cinco escenarios del OWASP LLM Top 10 escritos como suite de ataques en pytest: fuga de recuperación entre tenants (confused deputy), inyección indirecta de prompts a través de documentos recuperados, envenenamiento del vector store con metadatos de ingesta falsificados, agencia excesiva sobre un servidor MCP real y XSS almacenado que sale directo del modelo.',
            'El pipeline RAG está hecho a mano (embeddings, vector store en memoria, corpus multi-tenant con ACL) y sin LangChain, así que el diff entre las dos apps son las decisiones de seguridad y nada más.',
            'Un mock LLM determinista convierte «todos los ataques fallan contra la API segura» en algo de lo que CI se puede fiar, y un proveedor sobre OpenRouter vuelve a correr las pruebas de inyección contra un modelo real.',
          ],
        },
        ctf: {
          tagline: 'CTF de seguridad web jugable y en sandbox',
          description:
            'Una terminal de hacking en la que puedes escribir de verdad. Cuatro retos, cuatro clases reales de vulnerabilidad, todo simulado en el navegador: sin llamadas de red y sin eval.',
          highlights: [
            'Cuatro vías de explotación: bypass de login por SQLi, IDOR, un JWT con alg=none al que se le quita la firma, y XSS reflejado, cada una contra un objetivo simulado.',
            'La terminal completa: intérprete de comandos con historial, arranque con efecto máquina de escribir, lluvia matrix en canvas, scanlines CRT y flags que se capturan en orden.',
            'Las mismas clases de ataque que defiendo en el JWT Security Lab y en jwt-scan.',
          ],
        },
      },
    },
    contact: {
      eyebrow: 'Contacto',
      heading: 'Construyamos algo',
      intro:
        'Abierto a roles Full-Stack, Backend y Software Engineer, remoto o con reubicación. La seguridad es lo que aporto además de entregar features. Si a tu equipo le sirve, escríbeme.',
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
        subjectPrefix: 'Nuevo contacto del portfolio de',
      },
      orReach: 'O escríbeme directamente',
    },
    footer: {
      rightsPrefix: '©',
    },
  },
};
