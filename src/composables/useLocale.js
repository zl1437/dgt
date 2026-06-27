import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { translate } from '../locales/translate.js'

export function useLocale() {
  const route = useRoute()
  const router = useRouter()

  /** @type {import('vue').ComputedRef<'zh'|'en'>} */
  const lang = computed(() => (route.query.lang === 'en' ? 'en' : 'zh'))
  const isEn = computed(() => lang.value === 'en')

  /**
   * @param {string} key 点号路径，如 nav.home
   * @param {Record<string, string | number>} [vars] 替换文案中的 {q}、{n} 等
   */
  function t(key, vars) {
    return translate(lang.value, key, vars)
  }

  function switchLang(nextLang) {
    const query = { ...route.query }
    if (nextLang === 'en') {
      query.lang = 'en'
    } else {
      query.lang = 'zh'
    }
    router.push({ path: route.path, query, hash: route.hash })
  }

  return {
    lang,
    isEn,
    t,
    switchLang,
  }
}
