/* @flow */

import type VueRouter from '../index'
import { History } from './base'
import { getLocation } from './html5'
import { cleanPath } from '../util/path'

export class HashHistory extends History {
  constructor (router: VueRouter, base: ?string, fallback: boolean) {
    super(router, base)

    // check history fallback deeplinking
    if (fallback && this.checkFallback()) {
      return
    }

    ensureSlash()
    this.transitionTo(getHash(), route => {
      // possible redirect on start
      if (getHash() !== route.fullPath) {
        replaceHash(route.fullPath)
      }
    })

    window.addEventListener('hashchange', () => {
      this.onHashChange()
    })
  }

  checkFallback () {
    const location = getLocation(this.base)
    if (!/^\/#/.test(location)) {
      window.location.replace(
        cleanPath(this.base + '/#' + location)
      )
      return true
    }
  }

  onHashChange () {
    if (!ensureSlash()) {
      return
    }
    this.transitionTo(getHash(), route => {
      replaceHash(route.fullPath)
    })
  }

  push (location: RawLocation) {
    super.transitionTo(location, route => {
      pushHash(route.fullPath)
    })
  }

  replace (location: RawLocation) {
    super.transitionTo(location, route => {
      replaceHash(route.fullPath)
    })
  }

  go (n: number) {
    window.history.go(n)
  }
}

function ensureSlash (): boolean {
  const path = getHash()
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path)
  return false
}

function getHash (): string {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  const href = window.location.href
  const index = href.indexOf('#')
  return index === -1 ? '' : href.slice(index + 1)
}

function pushHash (path) {
  window.location.hash = path
}

function replaceHash (path) {
  const i = window.location.href.indexOf('#')
  window.location.replace(
    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
  )
}
