import { fileURLToPath, URL } from 'node:url'

import uni from '@dcloudio/vite-plugin-uni'
import Components from '@uni-helper/vite-plugin-uni-components'
import { UniUIResolver } from '@uni-helper/vite-plugin-uni-components/resolvers'
import UniManifest from '@uni-helper/vite-plugin-uni-manifest'
import UniMiddleware from '@uni-helper/vite-plugin-uni-middleware'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import UniPlatform from '@uni-helper/vite-plugin-uni-platform'
import UniPlatformModifier from '@uni-helper/vite-plugin-uni-platform-modifier'
import UniRoot from '@uni-ku/root'
import { defineConfig } from 'vite'

export default defineConfig(async () => {
  const UnoCSS = (await import('unocss/vite')).default

  return {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    plugins: [
      Components({
        dts: true,
        resolvers: [UniUIResolver({ exclude: 'UniKuAppRoot' })],
      }),
      // https://github.com/uni-helper/vite-plugin-uni-pages
      UniPages({
        subPackages: [
          'src/pages-sub',
        ],
      }),
      // https://github.com/uni-helper/vite-plugin-uni-manifest
      UniManifest(),
      // https://github.com/uni-helper/vite-plugin-uni-platform
      UniPlatform(),
      // https://github.com/uni-helper/vite-plugin-uni-platform-modifier
      UniPlatformModifier(),
      // https://github.com/uni-helper/vite-plugin-uni-middleware
      UniMiddleware(),
      // https://github.com/uni-ku/root
      UniRoot(),
      uni(),
      UnoCSS(),
    ],
    build: {
      target: 'es6',
      cssTarget: 'chrome61',
    },
    optimizeDeps: {
      exclude: [
        'vue-demi',
      ],
    },
  }
})
