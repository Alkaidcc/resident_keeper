import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@store': path.resolve(__dirname, 'src/store'),
    },
  },
  plugins: [
    vue(),
    Components({
      // 按需引入 ElementPlus
      resolvers: [ElementPlusResolver(), IconsResolver({ enabledCollections: ['ep'] })],
      // 按需引入组件 ts声明文件目录
      dts: path.resolve(__dirname, 'src/components.d.ts'),
    }),
    Unocss(),
    AutoImport({
      // 自动引入 ElementPlus
      resolvers: [ElementPlusResolver(), IconsResolver({ prefix: 'Icon' })],
      imports: ['vue', 'vue-router', '@vueuse/core'],
      // 自动引入 ts声明文件目录
      dts: path.resolve(__dirname, 'src/auto-imports.d.ts'),
    }),
    Icons({
      autoInstall: true,
    }),
  ],
})
