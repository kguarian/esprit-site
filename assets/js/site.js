const pagePath = `${window.location.pathname.replace(/\/+$/, '') || '/'}/`

function renderSiteChrome(site) {
  document.querySelectorAll('[data-site-name]').forEach((element) => {
    element.textContent = site.name
  })

  document.querySelectorAll('[data-site-role]').forEach((element) => {
    element.textContent = site.role
  })

  document.querySelectorAll('[data-site-nav]').forEach((nav) => {
    nav.innerHTML = site.nav
      .map((item) => {
        const active = pagePath === item.href
        const accent = item.accent ? ' nav-link--accent' : ''
        return `<a class="nav-link${accent}${active ? ' is-active' : ''}" href="${item.href}"${active ? ' aria-current="page"' : ''}>${item.label}</a>`
      })
      .join('')
  })

  document.querySelectorAll('[data-site-footer-note]').forEach((element) => {
    element.textContent = site.footerNote
  })

  document.querySelectorAll('[data-current-year]').forEach((element) => {
    element.textContent = new Date().getFullYear()
  })
}

function initialiseMenu() {
  const menuButton = document.querySelector('[data-menu-button]')
  const nav = document.querySelector('[data-site-nav]')
  if (!menuButton || !nav) return

  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open')
    menuButton.setAttribute('aria-expanded', String(open))
  })
}

function initialiseReveal() {
  const revealItems = document.querySelectorAll('[data-reveal]')
  if (!('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'))
    return
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-visible')
      currentObserver.unobserve(entry.target)
    })
  }, { threshold: 0.12 })

  revealItems.forEach((item) => observer.observe(item))
}

document.documentElement.classList.add('js')
fetch('/data/site.json')
  .then((response) => response.json())
  .then(renderSiteChrome)
  .catch(() => {})

initialiseMenu()
initialiseReveal()
