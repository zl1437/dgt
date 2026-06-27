# dgt

## 中英文文案（`cn.json` / `en.json`）

- 中文：`src/locales/cn.json`
- 英文：`src/locales/en.json`
- 组件内：`import { useLocale } from './composables/useLocale'`，使用 `const { t } = useLocale()`，调用 **`t('键路径')`**，例如 `t('nav.home')`；带占位符：`t('product.searchSummary', { q, n: 5 })`（文案里写 `{q}`、`{n}`）。
- 路由等非组件：`src/locales/translate.js` 的 **`translate('zh'|'en', key, vars?)`**。
