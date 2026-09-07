# App Base v1.0

Template oficial para criação dos aplicativos da família Apps Simples, desenvolvido com Vite, React, TypeScript e CSS.

Novos aplicativos devem nascer deste template e preservar sua estrutura comum. Componentes já disponíveis no Design System não devem ser recriados dentro dos aplicativos.

## Design System

Os componentes e tokens oficiais são consumidos pela biblioteca `@apps-simples/ui`, sem cópias locais no App Base. O CSS oficial também é carregado pela exportação pública `@apps-simples/ui/style.css`.

A dependência está fixada na tag `v0.4.1` do repositório `JeanLuis-DEV/design-system-apps-simples`.

O `AppLayout`, os estilos globais e os arquivos específicos da aplicação permanecem no App Base.

## Starter e showcase

O `index.html` é a entrada oficial do starter reutilizável. O `showcase.html` preserva a referência visual e interativa dos componentes oficiais sem fazer parte do build de produção padrão.

A versão exibida pelo starter é lida diretamente de `package.json`, habilitada por `resolveJsonModule`.

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
npm test
npm run build
```

O teste aceita a ausência inicial de arquivos de teste. O build verifica os tipos com TypeScript e gera os arquivos de produção em `dist/`.

## Derivar um novo aplicativo

- Copiar o App Base.
- Remover `showcase.html` e `src/showcase/`.
- Trocar o nome em `package.json` e o título em `index.html`.
- Atualizar o `README.md` e configurar os dados institucionais do aplicativo.
- Criar funcionalidades em `src/features/` e usar a versão de `package.json`.
- Executar `npm test` e `npm run build`.
- Validar em 375 px, 640 px e 1440 px.
- Confirmar `@apps-simples/ui@0.4.1`.

## Estrutura

```text
src/
  assets/
  components/
  features/
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

`src/features/` é a convenção recomendada para funcionalidades específicas do aplicativo. `src/components/` fica disponível para componentes locais reutilizáveis. Componentes compartilhados e tokens visuais pertencem a `@apps-simples/ui`.
