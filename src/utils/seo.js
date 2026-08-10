/**
 * Lightweight document head helpers for SPA route metadata.
 * Restorers reverse changes when leaving a route.
 */

export function setMetaTag(attr, key, content) {
  let element = document.head.querySelector(`meta[${attr}="${key}"]`)
  const created = !element

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, key)
    document.head.appendChild(element)
  }

  const previous = element.getAttribute('content')
  element.setAttribute('content', content)

  return () => {
    if (created) {
      element.remove()
      return
    }

    if (previous == null) {
      element.removeAttribute('content')
    } else {
      element.setAttribute('content', previous)
    }
  }
}

export function setCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]')
  const created = !element

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }

  const previous = element.getAttribute('href')
  element.setAttribute('href', href)

  return () => {
    if (created) {
      element.remove()
      return
    }

    if (previous == null) {
      element.removeAttribute('href')
    } else {
      element.setAttribute('href', previous)
    }
  }
}

export function applyPageSeo({ title, description, canonical, ogType = 'website' }) {
  const previousTitle = document.title
  document.title = title

  const restorers = [
    () => {
      document.title = previousTitle
    },
    setMetaTag('name', 'description', description),
    setCanonical(canonical),
    setMetaTag('property', 'og:title', title),
    setMetaTag('property', 'og:description', description),
    setMetaTag('property', 'og:type', ogType),
    setMetaTag('property', 'og:url', canonical),
    setMetaTag('name', 'twitter:card', 'summary_large_image'),
    setMetaTag('name', 'twitter:title', title),
    setMetaTag('name', 'twitter:description', description),
  ]

  return () => {
    restorers.forEach((restore) => restore())
  }
}
