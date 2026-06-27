import cn from './cn.json'
import en from './en.json'

const packs = { zh: cn, en }

function getByPath(obj, path) {
  const parts = path.split('.')
  let cur = obj
  for (const p of parts) {
    if (cur == null || typeof cur !== 'object') return undefined
    cur = cur[p]
  }
  return cur
}

/**
 * @param {'zh'|'en'} lang
 * @param {string} key 点号路径，如 nav.home
 * @param {Record<string, string | number>} [vars] 替换 {q}、{n} 等占位符
 */
export function translate(lang, key, vars) {
  const pack = packs[lang] || cn
  let s = getByPath(pack, key)
  if (typeof s !== 'string') return key
  if (vars && typeof vars === 'object' && s.includes('{')) {
    return s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''))
  }
  return s
}

/** @param {'zh'|'en'} lang */
export function getPack(lang) {
  return packs[lang] || cn
}
