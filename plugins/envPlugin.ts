import { Plugin } from '@nuxt/types'
import { Inject } from '@nuxt/types/app'

declare module '@nuxt/types' {
  interface Context {
    $envPlugin(): EnvPlugin
  }
}

class EnvPlugin {
  get baseUrl () {
    return process.env.BASE_URL
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const injectEnvPlugin : Plugin = (context : any, inject: Inject) => {
  inject('envPlugin', () => new EnvPlugin())
}

export default injectEnvPlugin
