<template>
  <Html :class="`${theme}`" :lang="locale" :dir="dir">
    <Body
      class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900"
    >
      <NuxtLayout>
        <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script lang="ts" setup>
import { AppSetup } from './utils/app'
import { ITheme } from './utils/theme'

AppSetup()
const theme = useState<ITheme>('theme.current')
const locale = useState<string>('locale.setting')
const dir = useState<string>('dir.setting')
const { t } = useLang()

useHead({
  title: t('app.name'),
  titleTemplate: '%s - ' + t('app.description'),
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: t('app.description'),
    },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
})
</script>
