# App Base v1.0

Template oficial para criação dos aplicativos da família Apps Simples, desenvolvido com Vite, React, TypeScript e CSS.

Novos aplicativos devem nascer deste template e preservar sua estrutura comum. Componentes já disponíveis no Design System não devem ser recriados dentro dos aplicativos.

## Design System

Os componentes e tokens oficiais são consumidos pela biblioteca `@apps-simples/ui`, sem cópias locais no App Base. O CSS oficial também é carregado pela exportação pública `@apps-simples/ui/style.css`.

A dependência está fixada na tag `v0.4.1` do repositório `JeanLuis-DEV/design-system-apps-simples`.

O `AppLayout`, os estilos globais e os arquivos específicos da aplicação permanecem no App Base.

## Starter e showcase

O `index.html` é a entrada oficial do starter reutilizável. O `showcase.html` preserva a referência visual e interativa dos componentes oficiais sem fazer parte do build de produção padrão.

Para abrir o showcase durante o desenvolvimento, execute `npm run dev` e acesse `/showcase.html` no servidor local.

Ao criar um novo aplicativo a partir desta base, remova:

- `showcase.html`;
- `src/showcase/`.

## Execução

Requer Node.js `20.19+` na linha 20, ou `22.12+`, e npm.

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

O comando verifica os tipos com TypeScript e gera os arquivos de produção em `dist/`.

## Estrutura

```text
src/
  assets/
  components/
  hooks/
  layouts/
    AppLayout.tsx
  showcase/
    main.tsx
    ShowcaseApp.tsx
    showcase.css
  styles/
    global.css
    layout.css
  types/
  utils/
  App.css
  App.tsx
  main.tsx
public/
AGENTS.md
index.html
showcase.html
package.json
package-lock.json
tsconfig.json
vite.config.ts
```

`src/components/` fica disponível para componentes específicos do aplicativo. Componentes compartilhados e tokens visuais pertencem a `@apps-simples/ui`.
