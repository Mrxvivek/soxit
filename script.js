(() => {
  "use strict";

  const isReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const isMobile = window.innerWidth <= 768;

  /* 1. INITIALIZATION & UTILITIES */
  document.addEventListener("DOMContentLoaded", () => {
    initLoader();
    initYear();
    initCursorGlow();
    initNavbar();
    initNameValidation();
    initScrollReveal();
    init3DBackground();
    initParticleCanvas();
    initCardTilt();
    initCardGlow();
    initRippleEffects();
    initMagneticButtons();
    initClickFeedback();
    initAboutMenu();
    initContactForm();
    initCareersForm();
    initLoginModal();
  });

  /* Loader */
  function initLoader() {
    window.addEventListener("load", () => {
      const loader = document.getElementById("loader");
      if (loader) setTimeout(() => loader.classList.add("hide"), 250);
    });
  }

  /* Dynamic Copyright Year */
  function initYear() {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  function initNameValidation() {
    document.querySelectorAll('input[name="name"], input[name="fullName"]').forEach((input) => {
      input.addEventListener("input", () => {
        input.value = input.value.replace(/[^A-Za-z ]/g, "").replace(/ {2,}/g, " ");
      });
    });
  }

  /* Subtle Cursor Glow Tracking */
  function initCursorGlow() {
    const glow = document.getElementById("cursorGlow");
    if (glow && !isReducedMotion && !isMobile) {
      window.addEventListener(
        "pointermove",
        (e) => {
          glow.style.left = `${e.clientX}px`;
          glow.style.top = `${e.clientY}px`;
        },
        { passive: true },
      );
    }
  }

  /* Navbar Scroll State & Mobile Navigation */
  function initNavbar() {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      const onScroll = () =>
        navbar.classList.toggle("scrolled", window.scrollY > 30);
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    const burger = document.getElementById("navBurger");
    const navLinks = document.getElementById("navLinks");
    if (burger && navLinks) {
      burger.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        burger.setAttribute("aria-expanded", String(isOpen));
      });

      navLinks.addEventListener("click", (event) => {
        if (event.target.closest("a")) {
          navLinks.classList.remove("open");
          burger.setAttribute("aria-expanded", "false");
        }
      });
    }
  }

  function initAboutMenu() {
    const dropdown = document.querySelector(".nav-dropdown");
    const toggle = document.querySelector(".nav-dropdown-toggle");
    const links = document.querySelectorAll(".nav-dropdown-link");
    if (!dropdown || !toggle) return;

    toggle.addEventListener("click", () => {
      const isOpen = dropdown.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.forEach((link) =>
      link.addEventListener("click", () => {
        dropdown.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }),
    );

    document.addEventListener("click", (event) => {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  function initContactForm() {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("contactStatus");
    if (!form || !status) return;

    const phone = form.elements.namedItem("phone");
    phone?.addEventListener("input", () => {
      phone.value = phone.value.replace(/\D/g, "").slice(0, 10);
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const data = new FormData(form);
      const subject = `${data.get("interest")} enquiry from ${data.get("name")}`;
      const body = [
        `Name: ${data.get("name")}`,
        `Email: ${data.get("email")}`,
        `Contact number: ${data.get("phone")}`,
        `Interest: ${data.get("interest")}`,
        "",
        data.get("message"),
      ].join("\n");

      status.textContent = `Thanks, ${data.get("name")}. Your enquiry details were captured. Opening your email app with the draft now...`;
      window.location.href = `mailto:hello@soxit.example?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  function initCareersForm() {
    const form = document.getElementById("careersForm");
    const status = document.getElementById("careersStatus");
    if (!form || !status) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const data = new FormData(form);
      const subject = `SOXIT career profile from ${data.get("name")}`;
      const body = [
        `Name: ${data.get("name")}`,
        `Email: ${data.get("email")}`,
        `Role of interest: ${data.get("role")}`,
        `Profile or portfolio: ${data.get("profile") || "Not provided"}`,
        "",
        "Introduction:",
        data.get("introduction"),
      ].join("\n");

      status.textContent = `Thanks, ${data.get("name")}. Your profile details were captured. Opening your email app with the draft now...`;
      window.location.href = `mailto:hello@soxit.example?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  /* 2. THREE.JS 3D HERO BACKGROUND ENGINE */
  function init3DBackground() {
    const container = document.getElementById("threejs-hero-container");
    if (!container || isReducedMotion || typeof THREE === "undefined") return;

    try {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        60,
        container.clientWidth / container.clientHeight,
        0.1,
        1000,
      );
      camera.position.z = 15;

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Ambient & Directional Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      scene.add(ambientLight);

      const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
      dirLight.position.set(10, 20, 15);
      scene.add(dirLight);

      // Connected Network Group
      const group = new THREE.Group();
      scene.add(group);

      // Floating Nodes Geometry
      const nodeCount = isMobile ? 25 : 45;
      const nodesGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(nodeCount * 3);
      const colors = new Float32Array(nodeCount * 3);

      const colorPalette = [
        new THREE.Color("#F97316"), // Orange
        new THREE.Color("#22C55E"), // Green
        new THREE.Color("#EAB308"), // Yellow
        new THREE.Color("#94A3B8"), // Slate
      ];

      for (let i = 0; i < nodeCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

        const c = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
      }

      nodesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3),
      );
      nodesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      const nodesMaterial = new THREE.PointsMaterial({
        size: 0.35,
        vertexColors: true,
        transparent: true,
        opacity: 0.65,
      });

      const pointCloud = new THREE.Points(nodesGeometry, nodesMaterial);
      group.add(pointCloud);

      // Central Abstract Geometry Structure (Torus / Ring)
      const ringGeo = new THREE.TorusGeometry(5, 0.02, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xf97316,
        transparent: true,
        opacity: 0.2,
        wireframe: true,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      group.add(ringMesh);

      const icoGeo = new THREE.IcosahedronGeometry(2.5, 1);
      const icoMat = new THREE.MeshBasicMaterial({
        color: 0x22c55e,
        transparent: true,
        opacity: 0.15,
        wireframe: true,
      });
      const icoMesh = new THREE.Mesh(icoGeo, icoMat);
      group.add(icoMesh);

      // Mouse Parallax Dynamic Targets
      let targetMouseX = 0;
      let targetMouseY = 0;

      if (!isMobile) {
        window.addEventListener(
          "mousemove",
          (e) => {
            targetMouseX = (e.clientX / window.innerWidth - 0.5) * 1.5;
            targetMouseY = (e.clientY / window.innerHeight - 0.5) * 1.5;
          },
          { passive: true },
        );
      }

      // Smooth Animation Loop
      let reqId;
      const animate = () => {
        reqId = requestAnimationFrame(animate);

        group.rotation.y += 0.0015;
        group.rotation.x += 0.0008;
        ringMesh.rotation.z -= 0.002;
        icoMesh.rotation.y += 0.003;

        // Smooth camera dampening
        camera.position.x += (targetMouseX - camera.position.x) * 0.05;
        camera.position.y += (-targetMouseY - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
      };

      animate();

      // Handle Window Resize
      window.addEventListener("resize", () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      });
    } catch (err) {
      console.warn("WebGL fallback activated:", err);
    }
  }

  /* 3. PARTICLE CANVAS ENGINE (2D Safe Fallback Layer) */
  function initParticleCanvas() {
    const canvas = document.getElementById("particleCanvas");
    if (!canvas || isReducedMotion) return;

    const ctx = canvas.getContext("2d");
    let w, h, particles;
    const palette = ["#F97316", "#22C55E", "#EAB308", "#CBD5E1"];

    function resize() {
      w = canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1);
      h = canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1);
    }

    function createParticles() {
      const count = isMobile ? 18 : 35;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: (Math.random() * 2 + 1) * (window.devicePixelRatio || 1),
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        color: palette[Math.floor(Math.random() * palette.length)],
        alpha: Math.random() * 0.35 + 0.15,
      }));
    }

    function render() {
      ctx.clearRect(0, 0, w, h);
      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      }
      requestAnimationFrame(render);
    }

    resize();
    createParticles();
    render();
    window.addEventListener(
      "resize",
      () => {
        resize();
        createParticles();
      },
      { passive: true },
    );
  }

  /* 4. 3D CARD TILT EFFECT */
  function initCardTilt() {
    if (isMobile || isReducedMotion) return;

    const cards = document.querySelectorAll(".tilt-card, .interactive-card");
    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -6; // Subtle 6 deg max tilt
        const rotateY = ((x - centerX) / centerX) * 6;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
      });
    });
  }

  /* 5. CURSOR-FOLLOWING CARD SPOTLIGHT GLOW */
  function initCardGlow() {
    const glowCards = document.querySelectorAll(
      ".glow-follow, .interactive-card",
    );
    glowCards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    });
  }

  /* 6. ADVANCED BUTTON RIPPLE & CLICK FEEDBACK */
  function initRippleEffects() {
    document.querySelectorAll(".btn-ripple, .btn").forEach((btn) => {
      btn.addEventListener("click", function (e) {
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const ripple = document.createElement("span");

        ripple.className = "ripple-el";
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      });
    });
  }

  function initMagneticButtons() {
    if (isMobile || isReducedMotion) return;

    const magneticBtns = document.querySelectorAll(".magnetic-button");
    magneticBtns.forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      });

      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translate(0px, 0px)";
      });
    });
  }

  function initClickFeedback() {
    const clickableElements = document.querySelectorAll(
      ".click-feedback, .interactive-card, .btn",
    );
    clickableElements.forEach((el) => {
      el.addEventListener("mousedown", () => {
        el.style.transform = "scale(0.96)";
      });
      el.addEventListener("mouseup", () => {
        el.style.transform = "";
      });
    });
  }

  /* 7. SCROLL REVEAL OBSERVER */
  function initScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
              // Stagger delay for grid items
              setTimeout(() => {
                entry.target.classList.add("in");
              }, idx * 80);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 },
      );

      revealElements.forEach((el) => observer.observe(el));
    } else {
      revealElements.forEach((el) => el.classList.add("in"));
    }
  }

  /* 8. UNIVERSAL LOGIN MODAL SYSTEM */
  function initLoginModal() {
    const overlay = document.getElementById("loginOverlay");
    const closeBtn = document.getElementById("loginClose");
    const loginForm = overlay?.querySelector(".login-form");
    const loginStatus = overlay?.querySelector(".login-status");
    const openBtns = document.querySelectorAll(".js-open-login, #openLogin");

    function openLogin() {
      if (!overlay) return;
      overlay.classList.add("open");
      overlay.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    function closeLogin() {
      if (!overlay) return;
      overlay.classList.remove("open");
      overlay.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    openBtns.forEach((btn) => btn.addEventListener("click", openLogin));
    if (window.location.hash === "#loginOverlay") openLogin();
    if (closeBtn) closeBtn.addEventListener("click", closeLogin);
    if (loginForm && loginStatus) {
      loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!loginForm.checkValidity()) {
          loginForm.reportValidity();
          return;
        }
        loginStatus.textContent = "Login successful.";
        loginForm.reset();
        window.setTimeout(() => {
          closeLogin();
          window.close();
        }, 1200);
      });
    }

    if (overlay) {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeLogin();
      });
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLogin();
    });
  }
})();
