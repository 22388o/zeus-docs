const redirects = require('./redirects')

// https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
const openVideo = embedEl => {
  const lazyAttr = 'data-src'
  const iframe = embedEl.querySelector(`iframe[${lazyAttr}]`)
  if (iframe) {
    const src = iframe.getAttribute(lazyAttr)
    iframe.setAttribute('src', src)
  }
}

const isEnter = e => e.code === 'Enter' || (e.keyCode || e.which) === 13

const handleClick = e => {
  const isSearchInput = e.target.matches('#algolia-search-input') && isEnter(e)

  // blur search field on select
  if (e.target.matches('.ds-dropdown-menu *') || isSearchInput) {
    document.getElementById('algolia-search-input').blur()
  }

  // youtube previews
  if (e.target.matches('.ytEmbed')) {
    e.preventDefault()
    openVideo(e.target)
  }
}
