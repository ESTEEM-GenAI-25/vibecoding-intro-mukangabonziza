// Portfolio Configuration File
// Edit the values below to customize your portfolio website

const CONFIG = {
  // Site metadata
  site: {
    title: "Divine Uwera — Portfolio",
    description: "Portfolio website — human‑centered projects, services, and contact.",
    author: "Divine Uwera"
  },

  // Navigation
  navigation: {
    brand: "Divine Uwera",
    links: [
      { text: "About", href: "#about" },
      { text: "Services", href: "#services" },
      { text: "Work", href: "#work" },
      { text: "Gallery", href: "#gallery" },
      { text: "Contact", href: "#contact" }
    ],
    ctaButton: "Let's work"
  },

  // Hero section
  hero: {
    kicker: "Portfolio",
    title: "Warm, simple design for real people",
    description: "I build clear websites and lightweight tools that help schools, nonprofits, and local businesses do their work with ease. Based in South Bend, working with teams anywhere.",
    primaryButton: "See my work",
    secondaryButton: "About me",
    image: {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Portrait of Divine Uwera - Professional headshot of a brown East African woman with microlocs, glasses, and a beautiful smile"
    },
    badge: "Open for projects"
  },

  // About section
  about: {
    title: "About",
    description: "Hi, I'm Divine Uwera. I focus on practical, human‑centered design. I love simple layouts, fast sites, and content that's easy to understand. My work spans education, community, and small business — always aiming for clarity and impact.",
    profileImage: {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Profile photo of Divine Uwera - Professional headshot of a brown East African woman with microlocs, glasses, and a beautiful smile"
    },
    cards: [
      {
        title: "What I do",
        content: "Web design & dev • UX writing • No‑code"
      },
      {
        title: "Tools",
        content: "HTML/CSS/JS, React, Figma, Notion"
      },
      {
        title: "Values",
        content: "Clarity • Respect • Reliability"
      }
    ]
  },

  // Services section
  services: {
    title: "Services",
    items: [
      {
        title: "Websites",
        description: "Custom sites that are fast, mobile‑friendly, and easy to update."
      },
      {
        title: "Brand & Copy",
        description: "Clear messaging, tone, and simple brand systems for small teams."
      },
      {
        title: "Light Apps",
        description: "Simple tools that automate workflows without heavy software."
      }
    ]
  },

  // Work section
  work: {
    title: "Selected Work",
    items: [
      {
        title: "Digital Classroom Pilot",
        description: "Connectivity + simple teaching tools for a parish school.",
        image: {
          src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
          alt: "Classroom technology"
        },
        buttonText: "Ask about this"
      },
      {
        title: "Ops Dashboard",
        description: "Staffing & schedules made visible for a busy facility.",
        image: {
          src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop",
          alt: "Operations"
        },
        buttonText: "Learn more"
      },
      {
        title: "Insights Toolkit",
        description: "Research templates that turn data into decisions.",
        image: {
          src: "https://images.unsplash.com/photo-1551281044-8d8f4f99b3a8?q=80&w=1200&auto=format&fit=crop",
          alt: "Charts and data"
        },
        buttonText: "View details"
      },
      {
        title: "Story Lab",
        description: "Workshops that help teens craft and share their stories.",
        image: {
          src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
          alt: "Workshop"
        },
        buttonText: "Run a workshop"
      }
    ]
  },

  // Gallery section
  gallery: {
    title: "Gallery",
    description: "Swap these placeholders with your photos.",
    placeholderCount: 6
  },

  // Contact section
  contact: {
    title: "Contact",
    email: "duwera@nd.edu",
    phone: "(574) 555‑0134",
    location: "South Bend, Indiana • Notre Dame",
    form: {
      namePlaceholder: "Your name",
      emailPlaceholder: "Email",
      messagePlaceholder: "Your message",
      submitButton: "Send message",
      successMessage: "Thanks! I'll reply soon."
    }
  },

  // Footer
  footer: {
    copyright: "Divine Uwera",
    tagline: "Clear websites • Simple tools"
  }
};

// Make CONFIG available globally
if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
}

// Export for Node.js environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
