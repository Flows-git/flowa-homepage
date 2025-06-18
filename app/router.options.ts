import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to) { // , from, savedPosition
    if (to.hash) {
      return {
        el: to.hash,
        top: 64,
        behavior: 'smooth',
      }
    }
    if (to.fullPath === '/') {
      return {
        top: 0,
        behavior: 'smooth',
      }
    }

    return {
      top: 0,
    }
  },
}
