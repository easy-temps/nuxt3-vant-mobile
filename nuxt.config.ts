import { currentLocales } from './app/config/i18n'
import { appDescription } from './app/constants/index'

export default defineNuxtConfig({
  modules: [
    '@vant/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
  ],

  experimental: {
    typedPages: true,
  },

  css: [
    '@unocss/reset/tailwind.css',
    './app/styles/vars.css',
    './app/styles/global.css',
    './app/styles/default-theme.css',
  ],

  postcss: {
    plugins: {
      'autoprefixer': {},

      // https://github.com/wswmsword/postcss-mobile-forever
      'postcss-mobile-forever': {
        appSelector: '#__nuxt',
        viewportWidth: 375,
        maxDisplayWidth: 600,
        // devtools excluded
        exclude: /@nuxt/,
        rootContainingBlockSelectorList: [
          'van-tabbar',
          'van-popup',
        ],
      },
    },
  },

  colorMode: {
    classSuffix: '',
  },

  i18n: {
    locales: currentLocales,
    lazy: true,
    strategy: 'no_prefix',
    detectBrowserLanguage: false,
    langDir: 'locales',
    defaultLocale: 'zh-CN',
    vueI18n: './app/config/i18n.config.ts',
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1,viewport-fit=cover',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'description', content: appDescription },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#ffffff' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],
    },
  },

  devtools: {
    enabled: true,
  },

  typescript: {
    shim: false,
  },

  features: {
    // For UnoCSS
    inlineStyles: false,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-09-24',
})
