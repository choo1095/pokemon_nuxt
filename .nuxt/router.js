import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9dc480a4 = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _7771fdb0 = () => interopDefault(import('../pages/signin.vue' /* webpackChunkName: "pages/signin" */))
const _e7ef57b4 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _38663f34 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cart",
    component: _9dc480a4,
    name: "cart"
  }, {
    path: "/signin",
    component: _7771fdb0,
    name: "signin"
  }, {
    path: "/signup",
    component: _e7ef57b4,
    name: "signup"
  }, {
    path: "/",
    component: _38663f34,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
