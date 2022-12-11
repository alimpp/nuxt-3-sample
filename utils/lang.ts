import { useI18n } from 'vue-i18n'

export interface ILocales {
  [key: string]: {
    name: string
    iso: string
    dir: string
    flag: string
  }
}

export const availableLocales: ILocales = {
  fa: {
    name: 'Persian',
    iso: 'fa',
    dir: 'rtl',
    flag: '🇮🇷',
  },
  en: {
    name: 'English',
    iso: 'en',
    dir: 'ltr',
    flag: '🇺🇸',
  },
}

export function LanguageManager() {
  // composable
  const { locale } = useI18n()
  const localeUserSetting = useCookie('locale')

  // methods
  const getSystemLocale = (): string => {
    try {
      const foundLang = window
        ? window.navigator.language.substring(0, 2)
        : 'en'
      return availableLocales[foundLang] ? foundLang : 'en'
    } catch (error) {
      return 'en'
    }
  }
  const getUserLocale = (): string =>
    localeUserSetting.value || getSystemLocale()

  const getUserLocaleDirection = (): string =>
    availableLocales[getUserLocale()].dir

  // state
  const localeSetting = useState<string>('locale.setting', () =>
    getUserLocale()
  )

  const dirSetting = useState<string>('dir.setting', () =>
    getUserLocaleDirection()
  )

  // watchers
  watch(localeSetting, (localeSetting) => {
    localeUserSetting.value = localeSetting
    locale.value = localeSetting
    dirSetting.value = getUserLocaleDirection()
  })

  // init locale
  const init = () => {
    localeSetting.value = getUserLocale()
    dirSetting.value = getUserLocaleDirection()
  }
  locale.value = localeSetting.value

  // lifecycle
  onBeforeMount(() => init())

  return {
    localeSetting,
    dirSetting,
    init,
  }
}
