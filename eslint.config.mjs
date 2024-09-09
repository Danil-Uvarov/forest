import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    tooling: true,
    typescript: true,
    vue: true,
    javascript: true,
  },

  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'indent': ['error', 'tab'],
      }
    }
  ]
})