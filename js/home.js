document.addEventListener('DOMContentLoaded', () => {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------
     1. STAT COUNTERS — animate numbers up when scrolled into view
  --------------------------------------------------------- */
  (function initStatCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const animateCounter = (el) => {
      const target = parseFloat(el.getAttribute('data-target'));
      const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
      const suffix = el.getAttribute('data-suffix') || '';
      if (isReducedMotion) {
        el.textContent = target.toFixed(decimals) + suffix;
        return;
      }
      const duration = 1400;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        const value = target * eased;
        el.textContent = value.toFixed(decimals) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    counters.forEach((el) => observer.observe(el));
  })();

  /* ---------------------------------------------------------
     2. TECH NETWORK — hover/focus a node to highlight it,
        dim its siblings, animate its connecting line, and
        update the shared info panel.
  --------------------------------------------------------- */
  (function initTechNetwork() {
    const nodes = document.querySelectorAll('.tech-node');
    const lines = document.querySelectorAll('.tech-network-lines line');
    const titleEl = document.getElementById('techNetworkTitle');
    const descEl = document.getElementById('techNetworkDesc');
    const infoEl = document.getElementById('techNetworkInfo');
    const tagEl = infoEl ? infoEl.querySelector('.tech-network-tag') : null;
    const deliverablesEl = document.getElementById('techNetworkDeliverables');
    if (!nodes.length || !titleEl || !descEl || !infoEl || !tagEl || !deliverablesEl) return;

    const capabilityDetails = {
      ai: {
        label: 'Capability 01 • Intelligence',
        deliverables: [
          'Production LLM & RAG Pipelines',
          'MLOps & Model Governance',
          'Predictive Forecasting Engines',
          'AI Readiness Audits',
        ],
      },
      cloud: {
        label: 'Capability 02 • Infrastructure',
        deliverables: [
          'Zero-Downtime Cloud Migrations',
          'FinOps & Cost Optimization',
          'Kubernetes & Serverless Mesh',
          'Disaster Recovery Architecture',
        ],
      },
      security: {
        label: 'Capability 03 • Trust',
        deliverables: [
          'Zero-Trust Identity & Access',
          'Continuous Threat Telemetry',
          'Automated Compliance & Audit Trails',
          'DevSecOps Pipeline Hardening',
        ],
      },
      data: {
        label: 'Capability 04 • Insights',
        deliverables: [
          'Modern Lakehouse Warehousing',
          'Executive Decision Intelligence',
          'Real-Time Streaming Pipelines',
          'Data Quality & Lineage Governance',
        ],
      },
      engineering: {
        label: 'Capability 05 • Platforms',
        deliverables: [
          'Distributed Microservices & APIs',
          'Legacy Core Modernization',
          'High-Craft Web & Mobile Platforms',
          'Automated CI/CD & Quality Gates',
        ],
      },
      automation: {
        label: 'Capability 06 • Velocity',
        deliverables: [
          'Intelligent Process Orchestration',
          'Human-in-the-Loop AI Agents',
          'Automated Infrastructure Provisioning',
          'Cross-System Workflow Integration',
        ],
      },
    };

    const lineByKey = {};
    lines.forEach((line) => { lineByKey[line.getAttribute('data-line')] = line; });

    const setActive = (activeNode) => {
      const key = activeNode.getAttribute('data-key');
      const details = capabilityDetails[key];

      nodes.forEach((n) => {
        const isActive = n === activeNode;
        n.classList.toggle('is-active', isActive);
        n.classList.toggle('is-dimmed', !isActive);
      });

      lines.forEach((line) => {
        line.classList.toggle('is-active', line.getAttribute('data-line') === key);
      });

      infoEl.dataset.tone = activeNode.getAttribute('data-tone');
      tagEl.textContent = details.label;
      deliverablesEl.replaceChildren(...details.deliverables.map((text) => {
        const item = document.createElement('li');
        item.className = 'tech-network-deliverable';
        item.textContent = text;
        return item;
      }));

      titleEl.style.opacity = '0';
      descEl.style.opacity = '0';
      setTimeout(() => {
        titleEl.innerHTML = activeNode.getAttribute('data-title');
        descEl.textContent = activeNode.getAttribute('data-desc');
        titleEl.style.opacity = '1';
        descEl.style.opacity = '1';
      }, 120);
    };

    const clearActive = () => {
      nodes.forEach((n) => {
        n.classList.remove('is-active', 'is-dimmed');
      });
      lines.forEach((line) => line.classList.remove('is-active'));
    };

    let pinnedNode = nodes[0] || null;
    if (pinnedNode) setActive(pinnedNode);

    nodes.forEach((node) => {
      node.addEventListener('mouseenter', () => {
        if (!pinnedNode) setActive(node);
      });
      node.addEventListener('focus', () => {
        pinnedNode = node;
        setActive(node);
      });
      node.addEventListener('mouseleave', () => {
        if (pinnedNode) setActive(pinnedNode);
        else clearActive();
      });
      node.addEventListener('click', (e) => {
        e.preventDefault();
        pinnedNode = node;
        setActive(node);
      });
      node.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          pinnedNode = node;
          setActive(node);
        }
      });
    });
  })();

  /* ---------------------------------------------------------
     3. TESTIMONIALS CAROUSEL — autoplay, arrows, dots,
        pauses on hover/focus.
  --------------------------------------------------------- */
  (function initTestimonials() {
    const track = document.getElementById('testimonialsTrack');
    const dotsWrap = document.getElementById('testimonialsDots');
    const prevBtn = document.getElementById('testimonialsPrev');
    const nextBtn = document.getElementById('testimonialsNext');
    if (!track || !dotsWrap || !prevBtn || !nextBtn) return;

    const cards = Array.from(track.children);
    let cardsPerView = getCardsPerView();
    let index = 0;
    let autoplayTimer = null;

    function getCardsPerView() {
      const w = window.innerWidth;
      if (w <= 640) return 1;
      if (w <= 980) return 2;
      return 3;
    }

    function maxIndex() {
      return Math.max(0, cards.length - cardsPerView);
    }

    function buildDots() {
      dotsWrap.innerHTML = '';
      const dotCount = maxIndex() + 1;
      for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('button');
        dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
        dot.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(dot);
      }
      updateDots();
    }

    function updateDots() {
      Array.from(dotsWrap.children).forEach((dot, i) => {
        dot.classList.toggle('is-active', i === index);
      });
    }

    function render() {
      const cardWidth = cards[0].getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(track).gap || '0');
      track.style.transform = `translateX(-${index * (cardWidth + gap)}px)`;
      updateDots();
    }

    function goTo(i) {
      index = Math.max(0, Math.min(i, maxIndex()));
      render();
    }

    function next() {
      index = index >= maxIndex() ? 0 : index + 1;
      render();
    }

    function prev() {
      index = index <= 0 ? maxIndex() : index - 1;
      render();
    }

    function startAutoplay() {
      if (isReducedMotion) return;
      stopAutoplay();
      autoplayTimer = setInterval(next, 5000);
    }

    function stopAutoplay() {
      if (autoplayTimer) clearInterval(autoplayTimer);
    }

    prevBtn.addEventListener('click', () => { prev(); stopAutoplay(); startAutoplay(); });
    nextBtn.addEventListener('click', () => { next(); stopAutoplay(); startAutoplay(); });

    const section = document.getElementById('testimonials');
    if (section) {
      section.addEventListener('mouseenter', stopAutoplay);
      section.addEventListener('mouseleave', startAutoplay);
      section.addEventListener('focusin', stopAutoplay);
      section.addEventListener('focusout', startAutoplay);
    }

    window.addEventListener('resize', () => {
      cardsPerView = getCardsPerView();
      index = Math.min(index, maxIndex());
      buildDots();
      render();
    }, { passive: true });

    buildDots();
    render();
    startAutoplay();
  })();
});
