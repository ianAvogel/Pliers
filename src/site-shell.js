const navItems = [
  { key: 'manifesto', href: '/index.html', label: 'Manifesto' },
  { key: 'foundations', href: '/principles.html', label: 'Foundations' },
  { key: 'taxonomy', href: '/taxonomy.html', label: 'Taxonomy' },
  { key: 'case-law', href: '/case-law.html', label: 'Case Law' },
  { key: 'amendments', href: '/amendments.html', label: 'Amendments' },
]

export function renderSkipLink() {
  return '<a class="skip-link" href="#main-content">Skip to content</a>'
}

export function renderSiteNav(activeKey) {
  const links = navItems
    .map((item) => {
      const activeClass = item.key === activeKey ? 'is-active' : ''
      const ariaCurrent = item.key === activeKey ? ' aria-current="page"' : ''
      return `<a class="${activeClass}" href="${item.href}"${ariaCurrent}>${item.label}</a>`
    })
    .join('')

  return `<nav class="top-nav" aria-label="Site navigation">${links}</nav>`
}
