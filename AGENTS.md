# AGENTS.md

## 项目概览

单包 Vue 3 + Vite 企业官网（`nuoer-bearing-site`），无后端、无数据库、无 Docker。内容与路由数据在 `src/site.js`。

## Cursor Cloud specific instructions

### 必需服务

| 服务 | 命令 | 说明 |
|------|------|------|
| Vite 开发服务器 | `npm run dev` | 默认 **http://localhost:5173**。在 Cloud VM 上对外访问请加 `--host 0.0.0.0`。 |

无需启动数据库、API 或其它本地服务。

### 常用命令（见 `package.json`）

- **安装依赖**：`npm ci`（有 `package-lock.json`）
- **开发**：`npm run dev`
- **生产构建**：`npm run build` → 输出 `dist/`
- **预览构建产物**：`npm run preview`（需先 `npm run build`）

### Lint / 测试

仓库未配置 ESLint、Prettier、Vitest 或 E2E。验证环境时以 `npm run build` 与浏览器手动走查为主。

### 开发时注意

- 全局主题样式来自 `index.html` 引用的 `public/resource/n07/` 静态资源，不是 npm 包。
- 联系页表单为前端占位（`@submit.prevent`），无 API。
- 页头搜索：点击导航栏搜索图标打开弹层；产品列表页左侧栏也有「产品搜索」表单，均基于 `src/site.js` 内存数据过滤。
- `README.md` 几乎为空；以本文件与 `package.json` 为准。

### 主要路由（E2E 走查）

`/`, `/cnabout`, `/cncase`, `/c_news`, `/c_news/:id`, `/cncontact`, `/products`, `/products/:slug`, `/products/item/:slug`
