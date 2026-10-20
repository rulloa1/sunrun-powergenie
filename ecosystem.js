// Brand context is passed to the existing referral destination. It is not proof
// of a signup or commission: confirmed conversions require provider reporting.
(() => {
  const allowed = new Set(['celebrity-solar', 'hip-hop-solar', 'gas-genie']);
  const incoming = new URLSearchParams(location.search).get('source');
  const pageBrand = location.pathname.split('/').pop().replace('.html', '');
  let source = allowed.has(incoming) ? incoming : allowed.has(pageBrand) ? pageBrand : null;
  try {
    if (source) sessionStorage.setItem('powergenie-source', source);
    else source = sessionStorage.getItem('powergenie-source');
  } catch (_) { /* Navigation remains usable when browser storage is unavailable. */ }
  if (allowed.has(source)) {
    // Covers both outbound links and the embedded quote form (iframe src).
    document.querySelectorAll('a[href], iframe[data-src]').forEach(node => {
      const attr = node.tagName === 'IFRAME' ? 'data-src' : 'href';
      const url = new URL(node.getAttribute(attr), location.href);
      if (url.hostname === 'sunrun.my.salesforce-sites.com' && url.searchParams.get('srep') === '/powergenie') {
        url.searchParams.set('utm_source', source);
        url.searchParams.set('utm_medium', 'brand_site');
        url.searchParams.set('utm_campaign', 'power_genie');
        node.setAttribute(attr, url.href);
      }
    });
  }
  const bar = document.querySelector('.sw-topbar');
  if (bar) {
    const link = document.createElement('a');
    link.href = 'brands.html'; link.className = 'sw-family-link'; link.textContent = 'Our brands';
    bar.insertBefore(link, bar.querySelector('.sw-topcta'));
  }
})();
