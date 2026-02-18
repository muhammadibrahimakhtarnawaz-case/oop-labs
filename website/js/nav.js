/**
 * Shared navigation & footer injection.
 * Sets the active link based on the current page.
 */
(function () {
  const NAV_HTML = `
  <nav class="navbar">
    <div class="navbar__inner">
      <a href="index.html" class="navbar__logo">&#x2B21; OOP Labs</a>
      <div class="navbar__menus">
        <!-- Product -->
        <div class="nav-dropdown">
          <button class="nav-dropdown__trigger">
            Product
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="nav-dropdown__menu">
            <a href="product.html">&#x1F680; Product</a>
            <a href="features.html">&#x2728; Features</a>
            <a href="pricing.html">&#x1F4B0; Pricing</a>
            <a href="integrations.html">&#x1F517; Integrations</a>
            <a href="changelog.html">&#x1F4CB; Changelog</a>
            <a href="roadmap.html">&#x1F5FA; Roadmap</a>
          </div>
        </div>
        <!-- Company -->
        <div class="nav-dropdown">
          <button class="nav-dropdown__trigger">
            Company
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="nav-dropdown__menu">
            <a href="about.html">&#x1F3E2; About Us</a>
            <a href="blog.html">&#x1F4DD; Blog</a>
            <a href="careers.html">&#x1F4BC; Careers</a>
            <a href="press.html">&#x1F4F0; Press</a>
            <a href="partners.html">&#x1F91D; Partners</a>
          </div>
        </div>
        <!-- Support -->
        <div class="nav-dropdown">
          <button class="nav-dropdown__trigger">
            Support
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="nav-dropdown__menu">
            <a href="support.html">&#x1F198; Support</a>
            <a href="help-center.html">&#x2753; Help Center</a>
            <a href="documentation.html">&#x1F4DA; Documentation</a>
            <a href="api-reference.html">&#x26A1; API Reference</a>
            <a href="status.html">&#x1F4E1; Status Page</a>
            <a href="contact.html">&#x2709;&#xFE0F; Contact Us</a>
          </div>
        </div>
      </div>
      <div class="navbar__spacer"></div>
      <div class="navbar__actions">
        <a href="#" class="btn btn-ghost btn-sm">Sign in</a>
        <a href="#" class="btn btn-primary btn-sm">Get Started</a>
      </div>
    </div>
  </nav>`;

  const FOOTER_HTML = `
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__top">
        <div class="footer__brand">
          <div class="footer__logo">&#x2B21; OOP Labs</div>
          <p>A modern platform built for developers. Ship faster with the tools you love.</p>
        </div>
        <div class="footer__col">
          <h5>Product</h5>
          <a href="product.html">Product</a>
          <a href="features.html">Features</a>
          <a href="pricing.html">Pricing</a>
          <a href="integrations.html">Integrations</a>
          <a href="changelog.html">Changelog</a>
          <a href="roadmap.html">Roadmap</a>
        </div>
        <div class="footer__col">
          <h5>Company</h5>
          <a href="about.html">About Us</a>
          <a href="blog.html">Blog</a>
          <a href="careers.html">Careers</a>
          <a href="press.html">Press</a>
          <a href="partners.html">Partners</a>
        </div>
        <div class="footer__col">
          <h5>Support</h5>
          <a href="support.html">Support</a>
          <a href="help-center.html">Help Center</a>
          <a href="documentation.html">Documentation</a>
          <a href="api-reference.html">API Reference</a>
          <a href="status.html">Status Page</a>
          <a href="contact.html">Contact Us</a>
        </div>
      </div>
      <div class="footer__bottom">
        <span>&copy; 2024 OOP Labs. All rights reserved.</span>
        <span><a href="#">Privacy</a> &middot; <a href="#">Terms</a> &middot; <a href="#">Cookies</a></span>
      </div>
    </div>
  </footer>`;

  // Inject nav & footer
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Highlight current page in dropdowns
  var currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-dropdown__menu a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentFile) {
      link.classList.add('current');
      link.closest('.nav-dropdown')
          .querySelector('.nav-dropdown__trigger')
          .classList.add('active');
    }
  });
})();
