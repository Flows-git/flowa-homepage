import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        top: 64,
        behavior: from.name ? 'smooth' : 'auto',
      }
    }
    if (to.fullPath === '/') {
      return {
        top: 0,
        behavior: from.name ? 'smooth' : 'auto',
      }
    }

    return {
      top: 0,
    }
  },
}
