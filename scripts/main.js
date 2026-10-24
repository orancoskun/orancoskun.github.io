/**
 * Oran Coşkun — IT Teacher & Computer Science Educator
 * Personal Portfolio & Classroom Showcase
 * Vanilla JavaScript Implementation - Clean Minimalist & Editorial
 */

(function () {
  'use strict';

  // ==========================================
  // PROJECT DATA REPOSITORY (DEEP DIVE MODAL)
  // ==========================================
  const PROJECTS_DATA = {
    cloudpulse: {
      title: "EduByte Code Sandbox & Autograder",
      category: "Classroom Platform & EdTech",
      year: "2025 – 2026",
      tagline: "Browser-based interactive coding environment with automated unit tests and student mastery analytics.",
      image: "assets/images/project-cloudpulse.jpg",
      metrics: [
        { label: "Submissions Evaluated", value: "1,200+ labs" },
        { label: "Grading Latency", value: "< 250ms" },
        { label: "Active Student Seats", value: "450+ learners" },
        { label: "Hardware Target", value: "Chromebook / Low-spec" }
      ],
      overview: "EduByte is an educational coding platform engineered to eliminate environment setup headaches in school computer labs. It compiles and evaluates student Python and JavaScript exercises in a sandboxed WebAssembly container directly in the browser, providing instant automated diagnostics and feedback.",
      architecture: [
        "In-browser WebAssembly engine executing untrusted student code safely with memory limits and execution timeouts.",
        "Abstract Syntax Tree (AST) linter offering gentle, constructive hints when common beginner syntax bugs are detected.",
        "Teacher analytics dashboard rendering real-time class comprehension heatmaps and concept breakdown matrices."
      ],
      techStack: ["Python", "TypeScript", "WebAssembly", "Docker", "React", "PostgreSQL", "Node.js"],
      liveUrl: "https://edubyte.orancoskun.dev",
      githubUrl: "https://github.com/orancoskun/edubyte-classroom"
    },
    kroma: {
      title: "NetSim: Visual Network & Packet Lab",
      category: "Simulators & Lab Tools",
      year: "2024 – 2025",
      tagline: "Interactive packet tracer and network protocol visualizer designed for secondary school IT labs.",
      image: "assets/images/project-kroma.svg",
      metrics: [
        { label: "Simulated Protocols", value: "8 core RFCs" },
        { label: "Student Labs Built", value: "24 modules" },
        { label: "Subnetting Drills", value: "100% interactive" },
        { label: "Classroom Usage", value: "12 schools" }
      ],
      overview: "A lightweight alternative to bloated commercial network simulation software. NetSim allows high school students to visually drag-and-drop switches, routers, and client PCs to observe simulated ARP, DNS, DHCP, and TCP packet handshakes frame by frame.",
      architecture: [
        "Interactive HTML5 Canvas engine animating packet transmissions with step-by-step OSI layer inspection.",
        "Gamified IP address calculator and CIDR subnetting challenge suite with instant graphical validation.",
        "Zero-install web client enabling seamless student participation on school Chromebooks and laptops."
      ],
      techStack: ["TypeScript", "HTML5 Canvas", "WebSockets", "Vite", "Networking", "CSS Custom Properties"],
      liveUrl: "https://netsim.orancoskun.dev",
      githubUrl: "https://github.com/orancoskun/netsim-interactive"
    },
    hyperion: {
      title: "CyberShield Student Security Range",
      category: "Cybersecurity & Digital Literacy",
      year: "2024",
      tagline: "Gamified Capture-the-Flag (CTF) and ethical online defense range for young technologists.",
      image: "assets/images/project-hyperion.svg",
      metrics: [
        { label: "Security Challenges", value: "35 levels" },
        { label: "Student Completion", value: "96.4%" },
        { label: "Sandbox Reset Time", value: "< 3 seconds" },
        { label: "Ethics Module", value: "Integrated" }
      ],
      overview: "CyberShield introduces secondary school students to digital privacy, cryptography, and defensive cybersecurity through guided puzzle missions. Emphasizes responsible ethical hacking and digital hygiene in modern internet ecosystems.",
      architecture: [
        "Ephemeral Docker containers spun up dynamically for each student team to experiment with web security safely.",
        "Progressive challenge hierarchy covering Caesar ciphers, hashing, SQL injection defense, and multi-factor authentication.",
        "Teacher oversight console with anti-cheat telemetry and hint distribution tools."
      ],
      techStack: ["Python", "Docker", "Linux", "Cybersecurity", "Redis", "Tailwind CSS"],
      liveUrl: "https://cybershield.orancoskun.dev",
      githubUrl: "https://github.com/orancoskun/cybershield-ctf"
    },
    prism: {
      title: "Prism: Student Web Dev Starter Kit",
      category: "Open Curriculum & Web Basics",
      year: "2023 – 2024",
      tagline: "Semantic HTML & CSS curriculum kit curated for high school students building their first web projects.",
      image: "assets/images/project-prism.svg",
      metrics: [
        { label: "Student Portfolios", value: "800+ built" },
        { label: "External Dependencies", value: "0 (Pure Web)" },
        { label: "WCAG Accessibility", value: "100% compliant" },
        { label: "Teacher Adoption", value: "18 districts" }
      ],
      overview: "An unstyled, accessible starter kit designed specifically for beginners learning web development. Replaces intimidating build tools and CSS frameworks with pure, readable HTML5 semantic tags and modern CSS Flexbox and Grid.",
      architecture: [
        "Pure semantic HTML structure emphasizing heading hierarchy, ARIA landmarks, and keyboard focus states.",
        "Modular CSS variable design system teaching students clean design tokens and responsive media queries.",
        "Accompanied by interactive visual cheat sheets and step-by-step classroom coding exercises."
      ],
      techStack: ["HTML5", "CSS3", "Vanilla JavaScript", "Web Accessibility", "GitHub Classroom"],
      liveUrl: "https://prism.orancoskun.dev",
      githubUrl: "https://github.com/orancoskun/prism-student-webkit"
    },
    aura: {
      title: "Aura Lesson & Rubric Synthesizer",
      category: "AI in Education & Curriculum",
      year: "2023",
      tagline: "AI-assisted lesson planner and rubric generator aligned with Computer Science education standards.",
      image: "assets/images/project-aura.svg",
      metrics: [
        { label: "Educator Time Saved", value: "5+ hrs / week" },
        { label: "Curriculum Standards", value: "CSTA & K-12 aligned" },
        { label: "Differentiation Tiers", value: "3 levels (PBL)" },
        { label: "Student Privacy", value: "100% On-Premise" }
      ],
      overview: "A specialized assistant for technology educators that generates differentiated programming exercises, coding rubrics, and project prompts. Runs locally to ensure student classroom records remain strictly confidential.",
      architecture: [
        "Retrieval-Augmented Generation (RAG) referencing CSTA and National Computer Science curriculum frameworks.",
        "Automatic generation of 3-tiered assignment rubrics: Foundation, Core Application, and Stretch Extension.",
        "Local open-weights language model integration guaranteeing zero classroom data leaves school servers."
      ],
      techStack: ["Python", "FastAPI", "Next.js", "Local LLM", "pgvector", "Docker"],
      liveUrl: "https://aura-edu.orancoskun.dev",
      githubUrl: "https://github.com/orancoskun/aura-curriculum-ai"
    }
  };

  // ==========================================
  // INITIALIZATION & EVENT LISTENERS
  // ==========================================
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initReadingProgress();
    initLiveClock();
    initProjectFilters();
    initProjectModal();
    initTerminalSandbox();
    initCommandPalette();
    initContactForm();
    initCopyEmailButtons();
    initMobileNav();
  });

  // ==========================================
  // 1. THEME SWITCHER (OBSIDIAN / PAPER)
  // ==========================================
  function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('oran-portfolio-theme');
    
    const initialTheme = storedTheme ? storedTheme : (prefersDark ? 'dark' : 'light');
    applyTheme(initialTheme);

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        showToast(`Theme switched to ${newTheme === 'dark' ? 'Obsidian Dark' : 'Editorial Paper'}`);
      });
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('oran-portfolio-theme', theme);
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  // ==========================================
  // 2. READING PROGRESS BAR
  // ==========================================
  function initReadingProgress() {
    const bar = document.getElementById('reading-progress-bar');
    if (!bar) return;

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = `${progress}%`;
    }, { passive: true });
  }

  // ==========================================
  // 3. REAL-TIME LOCAL CLOCK
  // ==========================================
  function initLiveClock() {
    const clockEl = document.getElementById('live-time-display');
    if (!clockEl) return;

    function updateClock() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      clockEl.textContent = `${hours}:${minutes}:${seconds} (${tz.split('/')[1] || 'Local'})`;
    }

    updateClock();
    setInterval(updateClock, 1000);
  }

  // ==========================================
  // 4. PROJECT FILTERING
  // ==========================================
  function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category.includes(filter)) {
            card.style.display = 'grid';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 50);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 200);
          }
        });
      });
    });
  }

  // ==========================================
  // 5. PROJECT DETAIL DEEP-DIVE MODAL
  // ==========================================
  function initProjectModal() {
    const modalBackdrop = document.getElementById('project-modal');
    const closeBtn = document.getElementById('modal-close-btn');
    const inspectButtons = document.querySelectorAll('.btn-inspect');

    if (!modalBackdrop) return;

    inspectButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = btn.getAttribute('data-project');
        openProjectModal(projectId);
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeProjectModal);
    }

    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeProjectModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
        closeProjectModal();
      }
    });
  }

  function openProjectModal(projectId) {
    const data = PROJECTS_DATA[projectId];
    if (!data) return;

    const modalBackdrop = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-project-title');
    const modalBody = document.getElementById('modal-project-body');

    modalTitle.textContent = data.title;

    let metricsHtml = data.metrics.map(m => `
      <div style="background: var(--badge-bg); border: 1px solid var(--border-subtle); padding: 0.85rem 1rem; border-radius: var(--radius-sm);">
        <div style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono); text-transform: uppercase;">${m.label}</div>
        <div style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); font-family: var(--font-mono);">${m.value}</div>
      </div>
    `).join('');

    let archHtml = data.architecture.map(item => `
      <li style="margin-bottom: 0.5rem; color: var(--text-secondary); font-size: 0.95rem;">
        <span style="color: var(--accent-emerald); font-weight: bold; margin-right: 0.5rem;">▸</span>${item}
      </li>
    `).join('');

    let tagsHtml = data.techStack.map(tag => `
      <span class="tech-tag">${tag}</span>
    `).join('');

    modalBody.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <div style="display: flex; gap: 0.75rem; align-items: center; margin-bottom: 0.5rem; font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted);">
          <span class="project-category-tag">${data.category}</span>
          <span>// ${data.year}</span>
        </div>
        <p style="font-size: 1.15rem; color: var(--text-primary); font-weight: 500; line-height: 1.5;">${data.tagline}</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
        ${metricsHtml}
      </div>

      <div style="margin-bottom: 2rem;">
        <h4 style="font-size: 1.05rem; margin-bottom: 0.75rem; color: var(--text-primary);">Educational Rationale & Overview</h4>
        <p style="line-height: 1.7; font-size: 0.98rem; color: var(--text-secondary);">${data.overview}</p>
      </div>

      <div style="margin-bottom: 2rem;">
        <h4 style="font-size: 1.05rem; margin-bottom: 0.75rem; color: var(--text-primary);">Classroom Design & Pedagogical Choices</h4>
        <ul style="list-style: none; padding-left: 0;">
          ${archHtml}
        </ul>
      </div>

      <div style="margin-bottom: 2rem;">
        <h4 style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 0.75rem;">Technology & Tools</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${tagsHtml}
        </div>
      </div>

      <div style="display: flex; gap: 1rem; padding-top: 1.5rem; border-top: 1px solid var(--border-hairline);">
        <a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="padding: 0.6rem 1.25rem; font-size: 0.88rem;">
          Explore Tool ↗
        </a>
        <a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="padding: 0.6rem 1.25rem; font-size: 0.88rem;">
          Classroom Repository ↗
        </a>
      </div>
    `;

    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    const modalBackdrop = document.getElementById('project-modal');
    if (modalBackdrop) {
      modalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  // ==========================================
  // 6. INTERACTIVE CLASSROOM TERMINAL SANDBOX
  // ==========================================
  function initTerminalSandbox() {
    const terminalInput = document.getElementById('terminal-cli-input');
    const terminalBody = document.getElementById('terminal-output-body');
    const chips = document.querySelectorAll('.term-chip');

    if (!terminalInput || !terminalBody) return;

    const commandHistory = [];
    let historyIndex = -1;

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const cmd = chip.getAttribute('data-cmd');
        executeTerminalCommand(cmd);
      });
    });

    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = terminalInput.value.trim();
        if (cmd) {
          commandHistory.push(cmd);
          historyIndex = commandHistory.length;
          executeTerminalCommand(cmd);
          terminalInput.value = '';
        }
      } else if (e.key === 'ArrowUp') {
        if (historyIndex > 0) {
          historyIndex--;
          terminalInput.value = commandHistory[historyIndex];
        }
        e.preventDefault();
      } else if (e.key === 'ArrowDown') {
        if (historyIndex < commandHistory.length - 1) {
          historyIndex++;
          terminalInput.value = commandHistory[historyIndex];
        } else {
          historyIndex = commandHistory.length;
          terminalInput.value = '';
        }
        e.preventDefault();
      }
    });

    function executeTerminalCommand(rawCmd) {
      const cmd = rawCmd.toLowerCase().trim();
      appendTerminalLine(`<span class="term-prompt">oran@classroom:~$</span> ${escapeHtml(rawCmd)}`);

      switch (cmd) {
        case 'help':
          appendTerminalLine(`
<span class="term-success">Available classroom commands:</span>
  <span class="term-accent">courses</span>      - Display current teaching curriculum & course outlines
  <span class="term-accent">skills</span>       - List technical & pedagogical proficiencies
  <span class="term-accent">projects</span>     - Display educational tools, simulators & repositories
  <span class="term-accent">pedagogy</span>     - View core educational philosophy & learning principles
  <span class="term-accent">bio</span>          - Print teacher biography and background
  <span class="term-accent">exp</span>          - Show teaching journey and institutional impact
  <span class="term-accent">contact</span>      - Show teacher email, GitHub Classroom and contact info
  <span class="term-accent">curl cv</span>      - Download / print teacher CV
  <span class="term-accent">theme</span>        - Toggle between Obsidian and Paper themes
  <span class="term-accent">clear</span>        - Clear terminal screen
          `);
          break;

        case 'courses':
          appendTerminalLine(`
<span class="term-success">COURSES & MODULES TAUGHT:</span>
  • <span class="term-accent">CS 101</span>: Introduction to Python & Algorithmic Problem Solving
  • <span class="term-accent">WEB 201</span>: Modern Web Design (Semantic HTML5, CSS Grid/Flexbox, JavaScript)
  • <span class="term-accent">NET 301</span>: Computer Networks, Hardware Assembly & Linux Administration
  • <span class="term-accent">SEC 401</span>: Fundamentals of Cybersecurity, Digital Safety & Cryptography
  • <span class="term-accent">IOT 102</span>: Physical Computing with Arduino & Raspberry Pi Microcontrollers
          `);
          break;

        case 'skills':
          appendTerminalLine(`
<span class="term-success">TEACHING & TECHNICAL CAPABILITIES:</span>
  • <span class="term-accent">Languages</span>:       Python (Mastery), JavaScript, HTML5/CSS3, SQL, C++ (Embedded)
  • <span class="term-backend">Infrastructure</span>:  Linux Lab Administration, Docker, GitHub Classroom, Networks (TCP/IP)
  • <span class="term-accent">Pedagogy</span>:       Project-Based Learning (PBL), Differentiated Instruction, Autograders
  • <span class="term-accent">Physical Tech</span>:  Raspberry Pi, Arduino, Micro:bit, Breadboard sensor circuits
          `);
          break;

        case 'pedagogy':
          appendTerminalLine(`
<span class="term-success">PEDAGOGICAL VALUES:</span>
  1. <span class="term-accent">Learn by Building</span>: Code comes alive when students construct real games and tools.
  2. <span class="term-accent">Failure is Data</span>: Debugging syntax and logic builds true problem-solving grit.
  3. <span class="term-accent">Demystify Tech</span>: Teach students how the machine actually works beneath the screen.
  4. <span class="term-accent">Equitable Access</span>: Computer science literacy is an essential modern life skill.
          `);
          break;

        case 'projects':
          appendTerminalLine(`
<span class="term-success">EDUCATIONAL TOOLS & LAB REPOSITORIES:</span>
  [1] <span class="term-accent">EduByte Sandbox</span>   - In-browser code runner & automated lab evaluator (1,200+ labs)
  [2] <span class="term-accent">NetSim Lab</span>        - Step-by-step visual packet tracer for secondary schools
  [3] <span class="term-accent">CyberShield CTF</span>   - Beginner-friendly ethical hacking & security challenges
  [4] <span class="term-accent">Prism Web Kit</span>    - Pure semantic web starter kit for high school students
  [5] <span class="term-accent">Aura Curriculum</span>  - Open lesson planning & rubric synthesizer for educators
          `);
          break;

        case 'exp':
        case 'experience':
          appendTerminalLine(`
<span class="term-success">TEACHING JOURNEY:</span>
  • 2022 - Present: <span class="term-accent">Lead IT Teacher & Dept Chair</span> @ Science & Tech Academy
    - Overseeing high school CS curriculum and robotics team mentorship.
  • 2019 - 2022:    <span class="term-accent">Computer Science & IT Teacher</span> @ Vocational Tech High School
    - Taught Web Systems, Database Administration, and PC Hardware Assembly.
  • 2017 - 2019:    <span class="term-accent">EdTech Specialist & Trainer</span> @ Future Tech Education Center
    - Facilitated teacher professional development and youth coding bootcamps.
          `);
          break;

        case 'bio':
          appendTerminalLine(`
<span class="term-success">ABOUT ORAN COŞKUN:</span>
Information Technology Teacher with 20+ years of experience blending modern software development with dynamic, student-centered pedagogy. Passionate about empowering teenagers to become creators rather than just consumers of technology. Based in Istanbul.
          `);
          break;

        case 'contact':
          appendTerminalLine(`
<span class="term-success">DIRECT CHANNELS:</span>
  • Email:     <a href="mailto:orancskn@gmail.com" class="term-accent">orancskn@gmail.com</a>
  • Instagram: <a href="https://instagram.com/0orco0" target="_blank" class="term-accent">instagram.com/0orco0</a>
  • GitHub:    <a href="https://github.com/orancoskun" target="_blank" class="term-accent">github.com/orancoskun</a>
  • LinkedIn:  <a href="https://linkedin.com/in/orancoskun" target="_blank" class="term-accent">linkedin.com/in/orancoskun</a>
  • Location:  Yalova / Istanbul, Turkey
          `);
          break;

        case 'curl resume':
        case 'curl cv':
        case 'cv':
        case 'resume':
          appendTerminalLine(`<span class="term-success">Preparing teaching CV for printing...</span>`);
          setTimeout(() => {
            window.print();
            appendTerminalLine(`<span class="term-accent">✓ Teaching CV dialogue triggered.</span>`);
          }, 400);
          break;

        case 'theme':
          const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
          const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
          applyTheme(newTheme);
          appendTerminalLine(`<span class="term-success">✓ Switched theme to: ${newTheme}</span>`);
          break;

        case 'clear':
          terminalBody.innerHTML = '';
          return;

        default:
          appendTerminalLine(`<span class="term-warning">Command not recognized: '${escapeHtml(rawCmd)}'. Type 'help' for options.</span>`);
      }

      // Auto scroll to bottom
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    function appendTerminalLine(html) {
      const line = document.createElement('div');
      line.className = 'term-line';
      line.innerHTML = html;
      terminalBody.appendChild(line);
    }
  }

  // ==========================================
  // 7. COMMAND PALETTE (CMD+K / CTRL+K)
  // ==========================================
  function initCommandPalette() {
    const paletteBackdrop = document.getElementById('cmd-palette');
    const cmdInput = document.getElementById('cmd-palette-input');
    const cmdResults = document.getElementById('cmd-palette-results');
    const triggerButtons = document.querySelectorAll('.trigger-cmd-k');

    if (!paletteBackdrop || !cmdInput || !cmdResults) return;

    const commands = [
      { id: 'works', label: 'Jump to Educational Projects', category: 'Navigation', action: () => scrollToSection('works') },
      { id: 'stack', label: 'Jump to Curriculum & Technologies', category: 'Navigation', action: () => scrollToSection('stack') },
      { id: 'terminal', label: 'Jump to Classroom CLI', category: 'Navigation', action: () => scrollToSection('terminal') },
      { id: 'experience', label: 'Jump to Teaching Journey', category: 'Navigation', action: () => scrollToSection('experience') },
      { id: 'writing', label: 'Jump to Articles & Notes', category: 'Navigation', action: () => scrollToSection('writing') },
      { id: 'about', label: 'Jump to Teaching Philosophy', category: 'Navigation', action: () => scrollToSection('about') },
      { id: 'contact', label: 'Jump to Contact Section', category: 'Navigation', action: () => scrollToSection('contact') },
      { id: 'theme', label: 'Toggle Dark / Light Theme', category: 'Action', action: () => {
        const cur = document.documentElement.getAttribute('data-theme') || 'dark';
        applyTheme(cur === 'dark' ? 'light' : 'dark');
        showToast('Theme switched!');
      }},
      { id: 'resume', label: 'Print / Save Teacher CV', category: 'Action', action: () => window.print() },
      { id: 'copy-email', label: 'Copy Email Address (orancskn@gmail.com)', category: 'Action', action: () => copyEmailToClipboard() }
    ];

    function renderCommandList(filter = '') {
      const filtered = commands.filter(c => 
        c.label.toLowerCase().includes(filter.toLowerCase()) || 
        c.category.toLowerCase().includes(filter.toLowerCase())
      );

      if (filtered.length === 0) {
        cmdResults.innerHTML = `<li style="padding: 1rem; color: var(--text-muted); text-align: center;">No matching actions found.</li>`;
        return;
      }

      cmdResults.innerHTML = filtered.map((cmd, i) => `
        <li class="cmd-item ${i === 0 ? 'selected' : ''}" data-index="${i}">
          <span>${cmd.label}</span>
          <span class="cmd-item-shortcut">${cmd.category}</span>
        </li>
      `).join('');

      // Add click handlers
      const items = cmdResults.querySelectorAll('.cmd-item');
      items.forEach((item, index) => {
        item.addEventListener('click', () => {
          filtered[index].action();
          closePalette();
        });
      });
    }

    function openPalette() {
      paletteBackdrop.classList.add('open');
      cmdInput.value = '';
      renderCommandList('');
      setTimeout(() => cmdInput.focus(), 50);
      document.body.style.overflow = 'hidden';
    }

    function closePalette() {
      paletteBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }

    triggerButtons.forEach(btn => {
      btn.addEventListener('click', openPalette);
    });

    paletteBackdrop.addEventListener('click', (e) => {
      if (e.target === paletteBackdrop) {
        closePalette();
      }
    });

    cmdInput.addEventListener('input', (e) => {
      renderCommandList(e.target.value);
    });

    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (paletteBackdrop.classList.contains('open')) {
          closePalette();
        } else {
          openPalette();
        }
      } else if (e.key === 'Escape' && paletteBackdrop.classList.contains('open')) {
        closePalette();
      }
    });
  }

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // ==========================================
  // 8. CONTACT FORM SUBMISSION
  // ==========================================
  function initContactForm() {
    const form = document.getElementById('contact-form');
    const statusMsg = document.getElementById('form-status-msg');
    const submitBtn = document.getElementById('form-submit-btn');

    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const message = document.getElementById('form-message').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill out all required fields.');
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Transmitting...</span>';
      }

      // Simulate server roundtrip
      setTimeout(() => {
        if (statusMsg) {
          statusMsg.className = 'form-status-msg success';
          statusMsg.innerHTML = `<strong>Thank you, ${escapeHtml(name)}!</strong> Your message has reached Oran Coşkun. I typically reply within 24 hours.`;
        }

        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>Send Message ↗</span>';
        }
        showToast('Message sent successfully! ✉');
      }, 700);
    });
  }

  // ==========================================
  // 9. COPY EMAIL TO CLIPBOARD & TOASTS
  // ==========================================
  function initCopyEmailButtons() {
    const copyButtons = document.querySelectorAll('.btn-copy-email');
    copyButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        copyEmailToClipboard();
      });
    });
  }

  function copyEmailToClipboard() {
    const email = 'orancskn@gmail.com';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Copied ${email} to clipboard! 📋`);
      }).catch(() => {
        fallbackCopy(email);
      });
    } else {
      fallbackCopy(email);
    }
  }

  function fallbackCopy(text) {
    const input = document.createElement('textarea');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showToast(`Copied ${text} to clipboard! 📋`);
  }

  function showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>●</span><span>${escapeHtml(message)}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.25s ease-out';
      setTimeout(() => toast.remove(), 250);
    }, 3200);
  }

  // ==========================================
  // 10. MOBILE NAVIGATION DRAWER
  // ==========================================
  function initMobileNav() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const drawer = document.getElementById('mobile-drawer');
    const navLinks = drawer ? drawer.querySelectorAll('a') : [];

    if (!toggleBtn || !drawer) return;

    toggleBtn.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
      });
    });
  }

  // Utility to prevent XSS in output
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

})();
