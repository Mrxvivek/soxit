(() => {
  "use strict";

  const path = window.location.pathname.replace(/\\/g, "/");
  const folderDepth = path.split("/").filter(Boolean).length > 1 ? 1 : 0;
  const root = folderDepth ? "../" : "";
  const current = path.toLowerCase();
  const isActive = (name) => current.includes(`/${name}/`) || current.endsWith(`/${name}/index.html`);

  const shellStyle = document.createElement("style");
  shellStyle.textContent = `
    .shared-site-header{position:sticky;top:0;z-index:1000;background:rgba(255,255,255,.96);border-bottom:1px solid #e2e8f0;backdrop-filter:blur(14px);font-family:Inter,system-ui,sans-serif}
    .shared-site-header__inner{width:min(1280px,100% - 40px);min-height:62px;margin:auto;display:grid;grid-template-columns:minmax(120px,1fr) auto minmax(190px,1fr);align-items:center;gap:24px;position:relative}
    .shared-site-header__logo{display:block;flex:0 0 auto}
    .shared-site-header__brand{display:flex;align-items:center;flex:0 0 auto}
    .shared-site-header__logo img{display:block;width:104px;height:36px;object-fit:contain}
    .shared-site-header__nav{display:flex;align-items:center;justify-content:center;gap:clamp(14px,2vw,30px);white-space:nowrap;min-width:0}
    .shared-site-header__nav{visibility:visible;opacity:1}
    .shared-site-header__nav a{display:inline-block!important;visibility:visible!important;opacity:1!important;color:#475569!important;text-decoration:none;font-size:.86rem;font-weight:600;padding:6px 0;border-bottom:2px solid transparent;transition:color .2s ease,border-color .2s ease}
    .shared-site-header__nav a:hover,.shared-site-header__nav a.is-active{color:#f97316!important;border-bottom-color:#f97316}
    .shared-site-header__nav a[href$="#contact"]{color:#64748b!important}
    .shared-site-header__nav a[href$="#contact"]:hover{color:#64748b!important}
    .shared-site-header__actions{display:flex;align-items:center;justify-content:flex-end;gap:12px}
    .shared-site-header__login{display:inline-flex;align-items:center;justify-content:center;min-height:38px;padding:0 12px;border:1px solid #cbd5e1;border-radius:8px;background:#fff;color:#475569;text-decoration:none;font-size:.82rem;font-weight:700;white-space:nowrap}
    .shared-site-header__login:hover{border-color:#f97316;color:#f97316}
    .shared-site-header__cta{display:inline-flex;align-items:center;justify-content:center;min-height:40px;padding:0 18px;border-radius:999px;background:#f97316;color:#fff;text-decoration:none;font-size:.82rem;font-weight:700;white-space:nowrap}
    .shared-site-header__cta:hover{background:#c2410c}
    .shared-site-back{display:block;width:min(1280px,100% - 40px);margin:0 auto;padding:16px 0;color:#64748b;text-decoration:none;font:600 .86rem Inter,system-ui,sans-serif;transition:color .2s ease}
    .shared-site-back:hover{color:#f97316}
    .shared-site-footer{background:#061224;color:#94a3b8;padding:4rem 20px 2rem;font-family:Inter,system-ui,sans-serif}
    .shared-site-footer__grid{width:min(1280px,100%);margin:0 auto 4rem;display:grid;grid-template-columns:2fr .75fr .9fr 1.15fr;gap:3.75rem}
    .shared-site-footer__brand img{display:block;width:118px;height:42px;object-fit:contain;filter:grayscale(1) brightness(2);margin-bottom:1.25rem}
    .shared-site-footer__brand p{max-width:20rem;margin:0;font-size:.9rem;line-height:1.7}
    .shared-site-footer__socials{display:flex;gap:.85rem;margin-top:2rem}
    .shared-site-footer__socials a{width:2.25rem;height:2.25rem;display:grid;place-items:center;border-radius:50%;background:rgba(255,255,255,.06);color:#cbd5e1;text-decoration:none;font-size:.9rem}
    .shared-site-footer__socials a:hover{background:#f97316;color:#061224}
    .shared-site-footer__column h4{margin:0 0 1.25rem;color:#fff;font-size:.75rem;letter-spacing:.08em;text-transform:uppercase}
    .shared-site-footer__column a{display:block;width:max-content;margin-bottom:.85rem;color:#94a3b8;font-size:.9rem;text-decoration:none}
    .shared-site-footer__column a:hover{color:#f97316}
    .shared-site-footer__bottom{width:min(1280px,100%);display:flex;justify-content:space-between;gap:1.5rem;margin:auto;padding-top:1.5rem;border-top:1px solid rgba(255,255,255,.1);font-size:.75rem}
    .shared-site-footer__bottom p{margin:0}.shared-site-footer__bottom a{color:inherit;text-decoration:none}
    .shared-site-header__menu{display:none;background:transparent;border:0;color:#0f172a;padding:8px;cursor:pointer}
    .shared-site-header__menu span{display:block;width:22px;height:2px;margin:4px 0;background:currentColor;transition:transform .2s ease,opacity .2s ease}
    @media(max-width:900px){.shared-site-header__inner{padding:7px 0}.shared-site-header__nav{overflow-x:auto;padding-bottom:2px}}
    @media(max-width:768px){.shared-site-header__inner{display:flex;flex-wrap:wrap}.shared-site-header__actions{order:2;margin-left:auto}.shared-site-header__login{order:1}.shared-site-header__menu{display:block;order:2}.shared-site-header__nav{display:none;flex-direction:column;align-items:stretch;gap:2px;overflow:visible;padding:10px 0 4px;order:3;width:100%}.shared-site-header__nav.is-open{display:flex}.shared-site-header__nav a{padding:10px 4px}.shared-site-header__menu[aria-expanded="true"] span:nth-child(1){transform:translateY(6px) rotate(45deg)}.shared-site-header__menu[aria-expanded="true"] span:nth-child(2){opacity:0}.shared-site-header__menu[aria-expanded="true"] span:nth-child(3){transform:translateY(-6px) rotate(-45deg)}}
    @media(max-width:520px){.shared-site-header__inner{width:min(100% - 24px,1280px)}.shared-site-header__logo img{width:90px;height:32px}.shared-site-header__cta{display:none}.shared-site-footer{padding:3rem 20px 1.5rem}.shared-site-footer__grid{grid-template-columns:1fr;gap:2rem;margin-bottom:2.5rem}.shared-site-footer__bottom{flex-direction:column;gap:.5rem}}
  `;
  document.head.appendChild(shellStyle);

  function buildHeader() {
    const header = document.createElement("header");
    header.className = "shared-site-header";
    header.innerHTML = `
      <div class="shared-site-header__inner">
        <div class="shared-site-header__brand"><a class="shared-site-header__logo" href="${root}index.html" aria-label="SOXIT home"><img src="${root}soxit.webp" alt="SOXIT Logo"></a></div>
        <nav class="shared-site-header__nav" aria-label="Primary navigation">
          <a href="${root}index.html">Home</a>
          <a href="${root}consulting/index.html" class="${isActive("consulting") ? "is-active" : ""}">Consulting</a>
          <a href="${root}academia/index.html" class="${isActive("academia") ? "is-active" : ""}">Academia</a>
          <a href="${root}open-media/index.html" class="${isActive("open-media") ? "is-active" : ""}">Open Media</a>
          <a href="${root}index.html#about">About Us</a>
          <a href="${root}index.html#contact">Contact</a>
        </nav>
        <div class="shared-site-header__actions">
          <a class="shared-site-header__cta" href="${root}index.html#final-cta">Let's Build Together</a>
          <a class="shared-site-header__login" href="${root}index.html#loginOverlay">Login</a>
          <button class="shared-site-header__menu" type="button" aria-label="Toggle menu" aria-expanded="false" aria-controls="sharedPrimaryNav"><span></span><span></span><span></span></button>
        </div>
      </div>`;
    return header;
  }

  function buildFooter() {
    const footer = document.createElement("footer");
    footer.className = "shared-site-footer";
    footer.innerHTML = `
      <div class="shared-site-footer__grid">
        <div class="shared-site-footer__brand"><img src="${root}soxit.webp" alt="SOXIT Logo"><p>Unified enterprise platform delivering consulting solutions across industries.</p><div class="shared-site-footer__socials"><a href="${root}index.html" aria-label="Website">◎</a><a href="https://www.linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn">in</a><a href="mailto:hello@soxit.example" aria-label="Email">✉</a></div></div>
        <div class="shared-site-footer__column"><h4>Solutions</h4><a href="${root}consulting/index.html">Strategy &amp; Transformation</a><a href="${root}consulting/technology.html">Technology &amp; Digital</a><a href="${root}consulting/methodology.html">Operations &amp; Excellence</a></div>
        <div class="shared-site-footer__column"><h4>Industries</h4><a href="${root}consulting/industries.html">BFSI</a><a href="${root}consulting/industries.html">Technology &amp; Digital</a><a href="${root}consulting/industries.html">Industrial &amp; Manufacturing</a><a href="${root}consulting/industries.html">Pharma &amp; Healthcare</a><a href="${root}open-media/index.html">Creative &amp; Media</a></div>
        <div class="shared-site-footer__column"><h4>Company</h4><a href="${root}index.html#pillars">Our Work</a><a href="${root}index.html#contact">Contact</a></div>
      </div>
      <div class="shared-site-footer__bottom"><p>&copy; ${new Date().getFullYear()} SOXIT. All rights reserved.</p><p><a href="${root}index.html#contact">Privacy Policy</a> &nbsp; <a href="${root}index.html#contact">Terms of Service</a></p></div>`;
    return footer;
  }

  function buildBackLink() {
    const link = document.createElement("a");
    link.className = "shared-site-back";
    link.href = "index.html";
    link.setAttribute("aria-label", "Back to Academia");
    link.innerHTML = "&larr; Back to Academia";
    return link;
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (folderDepth === 0) return;

    const isConsultingPage = current.includes("/consulting/");

    // Replace only the page-level navigation. Consulting pages keep their
    // existing footer/content structure while adopting the shared header.
    document.querySelectorAll("body > header, body > nav").forEach((element) => element.remove());
    if (!isConsultingPage) {
      document.querySelectorAll("body > footer").forEach((element) => element.remove());
    }

    const header = buildHeader();
    document.body.prepend(header);

    document.querySelectorAll('input[name="name"], input[name="fullName"]').forEach((input) => {
      input.addEventListener("input", () => {
        input.value = input.value.replace(/[^A-Za-z ]/g, "").replace(/ {2,}/g, " ");
      });
    });

    const menu = header.querySelector(".shared-site-header__menu");
    const nav = header.querySelector(".shared-site-header__nav");
    nav.id = "sharedPrimaryNav";
    menu.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      menu.setAttribute("aria-expanded", String(isOpen));
    });
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        nav.classList.remove("is-open");
        menu.setAttribute("aria-expanded", "false");
      }
    });

    if (current.includes("/academia/") && !current.endsWith("/academia/index.html") && !document.querySelector(".back-link, .back-to-home")) {
      header.insertAdjacentElement("afterend", buildBackLink());
    }

    if (!isConsultingPage) {
      document.body.append(buildFooter());
    }
  });
})();
