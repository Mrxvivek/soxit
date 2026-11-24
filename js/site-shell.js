/* SOXIT shared shell — ONE header + footer for every page (root, academia, consulting, open-media).
   Direct Academia link (no dropdown) & Mobile-optimized navigation. */
(() => {
  "use strict";

  const path = decodeURIComponent(window.location.pathname).replace(/\\/g, "/");
  const lower = path.toLowerCase();
  const inSection = /\/(academia|consulting|open-media)\//.test(lower);
  const inRoles = /\/academia\/roles\//.test(lower);
  const root = inRoles ? "../../" : inSection ? "../" : "";
  const isHome = !inSection && !inRoles && !/\/(privacy|terms)(\.html)?$/i.test(lower) && (lower.endsWith("/index.html") || lower.endsWith("/") || lower === "" || !lower.includes(".html"));
  const section = inSection ? lower.match(/\/(academia|consulting|open-media)\//)[1] : "";

  const chevron = '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 4.5l4 4 4-4"/></svg>';

  function headerHTML() {
    const act = (name) => (section === name ? " is-active" : "");
    return `
    <div class="sx-header__inner">
      <a class="sx-logo" href="${root}index.html" aria-label="SOXIT home">
        <img src="${root}resources/soxit.webp" alt="SOXIT Logo" width="112" height="40">
      </a>
      <nav class="sx-nav" id="sxNav" aria-label="Primary navigation">
        <a href="${root}index.html" class="${isHome ? "is-active" : ""}">Home</a>
        <a href="${root}consulting/index.html" class="${act("consulting").trim()}">Consulting</a>
        <a href="${root}academia/index.html" class="${act("academia").trim()}">Academia</a>
        <a href="${root}open-media/index.html" class="${act("open-media").trim()}">Open Media</a>
        <div class="sx-dd">
          <button type="button" aria-expanded="false" aria-haspopup="true">About Us ${chevron}</button>
          <div class="sx-panel sx-panel--list">
            <a href="${root}index.html#about">Get to Know Us</a>
            <a href="${root}index.html#mission">Mission &amp; Vision</a>
            <a href="${root}index.html#careers">Careers</a>
          </div>
        </div>
        <a href="${root}index.html#contact">Contact</a>
        <div class="sx-mobile-actions">
          <a class="sx-mobile-login" href="${root}index.html#loginOverlay">Login</a>
          <a class="sx-mobile-cta" href="${root}index.html#final-cta">Let's Build Together</a>
        </div>
      </nav>
      <div class="sx-actions">
        <a class="sx-login" href="${root}index.html#loginOverlay" id="sxLogin">Login</a>
        <a class="sx-cta" href="${root}index.html#final-cta">Let's Build Together</a>
        <button class="sx-burger" type="button" aria-label="Toggle menu" aria-expanded="false" aria-controls="sxNav">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>`;
  }

  function footerHTML() {
    const L = (href, text) => `<a href="${root}${href}">${text}</a>`;
    return `
    <div class="sx-footer__grid">
      <div class="sx-footer__brand">
        <img src="${root}resources/soxit.webp" alt="SOXIT Logo" width="128" height="46">
        <p>Unified enterprise platform delivering excellence across Consulting, Academia, and Open Media.</p>
        <div class="sx-socials">
          <a href="https://soxit.org" target="_blank" rel="noopener" aria-label="Website">&#9678;</a>
          <a href="https://www.linkedin.com/company/soxit" target="_blank" rel="noopener" aria-label="LinkedIn">in</a>
          <a href="mailto:consult@soxit.org" aria-label="Email">&#9993;</a>
        </div>
      </div>
      <div class="sx-footer__col">
        <h4>Solutions</h4>
        ${L("consulting/index.html", "Strategy &amp; Transformation")}
        ${L("consulting/technology.html", "Technology &amp; Digital")}
        ${L("consulting/methodology.html", "Operations &amp; Excellence")}
      </div>
      <div class="sx-footer__col">
        <h4>Industries</h4>
        ${L("consulting/industries.html", "BFSI")}
        ${L("consulting/industries.html", "Technology &amp; Digital")}
        ${L("consulting/industries.html", "Industrial &amp; Manufacturing")}
        ${L("consulting/industries.html", "Pharma &amp; Healthcare")}
        ${L("open-media/index.html", "Creative &amp; Media")}
      </div>
      <div class="sx-footer__col">
        <h4>Company</h4>
        ${L("index.html#pillars", "Our Work")}
        ${L("index.html#contact", "Contact")}
      </div>
    </div>
    <div class="sx-footer__bottom">
      <p>&copy; ${new Date().getFullYear()} SOXIT. All rights reserved.</p>
      <p>${L("privacy.html", "Privacy Policy")}${L("terms.html", "Terms of Service")}</p>
    </div>`;
  }

  /* Remove each page's own navigation bar / footer, but never real content heroes or roadmap toolbars. */
  function removeLegacyChrome() {
    const isNavBar = (el) =>
      !el.classList.contains("glass-navbar") &&
      !el.classList.contains("topbar") &&
      (
        el.matches("header.navbar, .site-nav, .shared-site-header, .soxit-header") ||
        (el.tagName === "NAV" && el.parentElement === document.body) ||
        (el.tagName === "HEADER" && el.querySelector("nav, .nav-logo, .logo, .site-nav-logo, .nav-links") && !el.querySelector("h1, h2"))
      );
    document.querySelectorAll("body > header, body > nav, body > div > header, body > div > nav, body > .site-nav, body > .navbar, body > .soxit-header").forEach((el) => {
      if (!el.classList.contains("sx-header") && isNavBar(el)) el.remove();
    });
    document.querySelectorAll("footer:not(.sx-footer)").forEach((el) => el.remove());
  }

  function init() {
    if (document.querySelector(".sx-header")) return;
    removeLegacyChrome();

    const header = document.createElement("header");
    header.className = "sx-header";
    header.innerHTML = headerHTML();
    document.body.prepend(header);

    const footer = document.createElement("footer");
    footer.className = "sx-footer";
    footer.innerHTML = footerHTML();
    document.body.append(footer);
    document.body.classList.add("sx-ready");

    /* back link on Academia sub-pages (only when no page-specific back link or roadmap toolbar exists) */
    if (section === "academia" && !/\/academia\/index\.html$/.test(lower) && !/\/academia\/?$/.test(lower) && !document.querySelector(".back-link, .back-to-home, .back-to-roadmaps, .glass-navbar, .topbar")) {
      const back = document.createElement("a");
      back.className = "sx-back";
      const isRolesIndex = /\/academia\/roles\/(index\.html)?$/.test(lower);
      back.href = isRolesIndex ? "../index.html" : inRoles ? "index.html" : "index.html";
      back.innerHTML = isRolesIndex ? "&larr; Back to Academia" : inRoles ? "&larr; Back to Roadmaps" : "&larr; Back to Academia";
      header.insertAdjacentElement("afterend", back);
    }

    /* scrolled state */
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    /* mobile menu + dropdowns */
    const burger = header.querySelector(".sx-burger");
    const nav = header.querySelector(".sx-nav");
    const closeAll = () => {
      nav.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
      document.body.classList.remove("sx-menu-open");
      header.querySelectorAll(".sx-dd").forEach((d) => {
        d.classList.remove("is-open");
        const btn = d.querySelector("button");
        if (btn) btn.setAttribute("aria-expanded", "false");
      });
    };

    burger.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("sx-menu-open", open);
    });

    header.querySelectorAll(".sx-dd > button").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const dd = btn.parentElement;
        const open = !dd.classList.contains("is-open");
        header.querySelectorAll(".sx-dd").forEach((d) => {
          if (d !== dd) {
            d.classList.remove("is-open");
            const b = d.querySelector("button");
            if (b) b.setAttribute("aria-expanded", "false");
          }
        });
        dd.classList.toggle("is-open", open);
        btn.setAttribute("aria-expanded", String(open));
      });
    });

    nav.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (a && !a.classList.contains("sx-mobile-login")) {
        closeAll();
      }
    });

    document.addEventListener("click", (e) => {
      if (!header.contains(e.target)) closeAll();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeAll();
    });

    /* Login: open the home-page overlay in place when it exists */
    const overlay = document.getElementById("loginOverlay");
    const openLoginModal = (e) => {
      if (overlay) {
        e.preventDefault();
        closeAll();
        overlay.classList.add("open");
        overlay.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        const emailInput = overlay.querySelector('input[type="email"]');
        if (emailInput) setTimeout(() => emailInput.focus(), 100);
      }
    };

    const loginBtn = header.querySelector("#sxLogin");
    if (loginBtn) loginBtn.addEventListener("click", openLoginModal);

    const mobileLoginBtn = header.querySelector(".sx-mobile-login");
    if (mobileLoginBtn) mobileLoginBtn.addEventListener("click", openLoginModal);

    /* letters-only enforcement on name fields */
    document.querySelectorAll('input[name="name"], input[name="fullName"]').forEach((input) => {
      input.addEventListener("input", () => {
        input.value = input.value.replace(/[^A-Za-z ]/g, "").replace(/ {2,}/g, " ");
      });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
