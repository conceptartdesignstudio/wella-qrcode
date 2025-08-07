# Deploy de aplicação **Next.js** na **Vercel**

Guia direto para colocar no ar com Git ou via CLI, incluindo envs, rotas dinâmicas, imagens e troubleshooting.

---

## Especificações do projeto (`wella-qrcode`)

**Stack**: Next.js 15 (App Router), React 19, TypeScript, Tailwind v4, Turbopack (`next dev --turbo`).

**Pontos de atenção no deploy**

- **Node**: use 18+. Se quiser fixar, configure em _Project > Settings > General > Node.js Version_.
- **Imagens remotas** (já configuradas):

  ```js
  // next.config.js
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pro.sistemawca.com.br',
        pathname: '/wp-content/uploads/**'
      },
      {
        protocol: 'https',
        hostname: 'retail.sistemawca.com.br',
        pathname: '/wp-content/uploads/**'
      }
    ]
  }
  ```

- **Estrutura de rotas (App Router)**:
  - `app/page.tsx` – home
  - `app/[slug]/page.tsx` – rota dinâmica por slug
  - `app/grupo/[group-name]/page.tsx` – rota dinâmica por grupo
  - `app/api/*` – route handlers (API serverless na Vercel)

- **Tailwind v4**: garanta `@tailwindcss/postcss` no `postcss.config.js`:

  ```js
  // postcss.config.js
  module.exports = { plugins: { '@tailwindcss/postcss': {} } }
  ```

  (A Vercel detecta automaticamente.)

**Variáveis de ambiente** (adicione _os nomes abaixo_ nas três envs: Development, Preview, Production):

```
NEXT_PUBLIC_API_URL
NEXT_PUBLIC_BASE_URL
NEXT_PUBLIC_WELLA_ENDPOINT
NEXT_PUBLIC_WELLA_NAME
```

> São públicas por começarem com `NEXT_PUBLIC_`. Não coloque segredos aqui.

**Scripts** (Vercel usa estes por padrão):

- Install: `npm ci` (ou o seu gerenciador)
- Build: `next build`
- Output: `.next`

**Fluxo recomendado**

1. Push para branch -> Preview automático (URL única por PR/branch).
2. Validar imagens remotas, rotas dinâmicas e logs.
3. Merge na `main` -> Production atualizado.
4. Rollback: _Deployments > Promote to Production_ em um deploy anterior.

---

## Requisitos

- Node 18+ (ou o que seu projeto pede em `package.json > engines`)
- Next.js 13+ (App Router ou Pages Router)
- Conta na Vercel e acesso ao repositório (GitHub, GitLab ou Bitbucket)
- NPM, PNPM ou Yarn

---

## Scripts padrão no `package.json`

Confirme que você tem:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## Passo a passo (Dashboard da Vercel)

1. **Push no Git** com o projeto.
2. Acesse **Vercel > New Project > Import Git Repository**.
3. Selecione o repo. A Vercel detecta **Next.js** automaticamente.
4. **Configurações** (se necessário):
   - _Framework Preset_: Next.js
   - _Build Command_: `next build`
   - _Install Command_: `npm ci` (ou `pnpm i --frozen-lockfile`)
   - _Output Directory_: `.next`

5. **Variáveis de ambiente** (aba _Environment Variables_): adicione para _Development_, _Preview_ e _Production_.
6. Clique em **Deploy**. A Vercel cria um _Preview Deployment_. Ao dar merge na branch principal, cria **Production Deployment**.

---

## Passo a passo (CLI)

Instale e faça login:

```bash
npm i -g vercel
vercel login
```

Primeiro deploy (interativo):

```bash
vercel
```

Deploy em produção:

```bash
vercel --prod
```

Gerenciar envs pela CLI:

```bash
vercel env add
vercel env pull .env.local
vercel env ls
```

---

## Estrutura de envs

Use arquivos locais e cadastre os mesmos valores na Vercel:

```
.env.local           # dev local
.env.development     # opcional
.env.preview         # usado em PRs
.env.production      # produção
```

- Variáveis que vão para o browser **precisam** começar com `NEXT_PUBLIC_`.
- Não exponha segredos no client.

---

## Configurações comuns do Next.js

### Imagens

`next.config.js`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'example.com' }]
  }
}
module.exports = nextConfig
```

### Rotas dinâmicas e cache (App Router)

Em `app/route.ts|tsx` ou `page.tsx`:

```ts
export const revalidate = 60 // ISR
export const dynamic = 'force-dynamic' // desabilita cache (quando necessário)
export const fetchCache = 'force-no-store' // não cachear fetch
```

Para rotas estáticas com params:

```ts
export async function generateStaticParams() {
  return [{ slug: 'exemplo' }]
}
```

### Edge/Node runtime

```ts
export const runtime = 'edge' // ou 'nodejs'
```

---

## `vercel.json` (opcional)

Use para headers, redirects, regiões, etc.

```json
{
  "version": 2,
  "routes": [
    { "src": "/old", "dest": "/new", "status": 308 },
    { "src": "/api/(.*)", "dest": "/api/$1" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [{ "key": "X-Frame-Options", "value": "SAMEORIGIN" }]
    }
  ],
  "regions": ["gru1", "iad1"]
}
```

> `gru1` = São Paulo.

---

## Monorepo

- Configure _Root Directory_ para o app dentro do monorepo.
- Garanta `package.json` e `next.config.js` no diretório raiz do app.
- Se usar PNPM Workspaces, a Vercel entende automaticamente.

---

## Integração com Git (fluxo recomendado)

1. **PR** abre -> Vercel cria **Preview** com URL única.
2. Revisou e aprovou -> Merge na `main` -> **Production** é atualizado.
3. **Rollback**: em _Deployments_, clique em _Promote to Production_ em um deploy anterior.

---

## Observabilidade

- **Logs**: _Project > Logs_ (filtre por Function / Edge / Build).
- **Analytics**: habilite _Web Analytics_ se quiser métricas de tráfego.
- **Speed Insights**: ative para medir Core Web Vitals.

---

## Dicas de build

- Evite chamadas externas no `next build` que dependem de serviços privados.
- Se precisar, mova chamadas para **runtime** (Server Components / Route Handlers) ou use mocks no build.
- Otimize dependências para não estourar o tamanho das Serverless Functions.

---

## Troubleshooting rápido

**1) 404 em rotas dinâmicas (App Router)**

- Use `generateStaticParams()` para SSG ou `dynamic = 'force-dynamic'` para SSR.

**2) "Module not found: 'fs'" em Client Component**

- `fs` é apenas no server. Mova o código para Server Component ou use `dynamic import` no server.

**3) Tamanho da função excedido**

- Remova libs pesadas do client, use import dinâmico, revise `dependencies` x `devDependencies`.

**4) Erros de imagem externa**

- Configure `images.remotePatterns`/`domains` no `next.config.js`.

**5) Variáveis não carregam no Preview/Prod**

- Cadastre em _todas_ as envs (Development, Preview, Production). Baixe com `vercel env pull`.

**6) Falha ao conectar a APIs no build**

- Não chame APIs privadas no `next build`. Chame em runtime (server) ou use stubs no build.

**7) Cache agressivo**

- Ajuste `revalidate`, `fetchCache`, `dynamic` por rota ou fetch.

---

## Checklist de produção

- [ ] `NEXT_PUBLIC_*` apenas para o que o client precisa saber
- [ ] `images` configurado
- [ ] Metadados (`app/metadata.ts`) e OG Image
- [ ] Rotas dinâmicas revisadas (ISR/SSR conforme o caso)
- [ ] Monitore logs após o primeiro deploy
- [ ] Configure domínios personalizados (Project > Settings > Domains)

---

## Comandos úteis

```bash
# Primeiro deploy (pergunta tudo)
vercel

# Produção
vercel --prod

# Sincronizar variáveis para local
vercel env pull .env.local

# Adicionar/editar envs
vercel env add

# Linkar diretório local ao projeto da Vercel
vercel link
```

---

## Exemplo mínimo de projeto

```
my-app/
├─ app/
│  ├─ page.tsx
│  └─ layout.tsx
├─ next.config.js
├─ package.json
└─ tsconfig.json
```

`app/page.tsx`:

```tsx
export default function Page() {
  return <h1>Olá, Vercel 👋</h1>
}
```

---

## Referências

- Docs Next.js (Deployment)
- Docs Vercel (Projects, Env Vars, Monorepos)

---

> Dica final: faça um **Preview Deploy** por PR e valide logs/rotas/imagens antes de promover para produção.
