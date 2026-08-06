const pagePath = `${window.location.pathname.replace(/\/+$/, '') || '/'}/`

function setTheme(theme) {
  document.documentElement.dataset.theme = theme
}

function initialiseTheme() {
  let savedTheme
  try {
    savedTheme = window.localStorage.getItem('theme')
  } catch {
    savedTheme = undefined
  }
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  setTheme(savedTheme || systemTheme)

  const topbar = document.querySelector('.topbar')
  if (!topbar) return

  const themeButton = document.createElement('button')
  themeButton.className = 'theme-toggle'
  themeButton.type = 'button'

  function renderThemeButton() {
    const theme = document.documentElement.dataset.theme
    themeButton.setAttribute('aria-label', theme === 'dark' ? 'Use light theme' : 'Use dark theme')
    themeButton.innerHTML = theme === 'dark'
      ? '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path></svg>'
      : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 14.3A8.5 8.5 0 1 1 9.7 3.5 6.7 6.7 0 0 0 20.5 14.3Z"></path></svg>'
  }

  themeButton.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
    try {
      window.localStorage.setItem('theme', nextTheme)
    } catch {}
    setTheme(nextTheme)
    renderThemeButton()
  })

  renderThemeButton()
  topbar.append(themeButton)
}

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
initialiseTheme()
fetch('/data/site.json')
  .then((response) => response.json())
  .then(renderSiteChrome)
  .catch(() => {})

initialiseMenu()
initialiseReveal()
