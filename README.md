# App Base v1.0

Estrutura técnica inicial do template da família Apps Simples, com Vite, React e TypeScript. CSS será escrito diretamente, sem frameworks de estilos.

## Execução

Requer Node.js 20.19+ na linha 20, ou 22.12+ e npm, conforme os [requisitos do Vite](https://vite.dev/guide/).

```sh
npm install
npm run dev
```

## Validação

```sh
npm run build
```

O build verifica os tipos com TypeScript e gera os arquivos de produção em `dist/`.
Para visualizar esse resultado localmente, execute `npm run preview` após o build.

## Estrutura

```text
src/
  assets/
  components/
  hooks/
  layouts/
  styles/
  types/
  utils/
  App.tsx
  main.tsx
public/
```

As pastas vazias são preservadas com `.gitkeep`. `index.html` é a entrada do Vite e `src/main.tsx` inicializa o React e importa os tokens e estilos globais.

`AppLayout` recebe `appName`, conteúdo (`children`) e áreas opcionais `icon`, `actions` e `footer`. Organiza header, conteúdo centralizado e rodapé em fluxo normal, com safe areas. O ícone padrão é apenas uma representação geométrica decorativa. `App.tsx` demonstra somente o nome, uma descrição e o rodapé.

O layout utiliza os tokens existentes, largura máxima de 720px (incluindo o padding) e espaçamentos laterais de 16px no mobile, 24px a partir de 640px e 32px a partir de 1024px. A fonte usa a família e os fallbacks definidos nos tokens, sem download ou instalação da Inter.

Esta etapa implementa somente tokens e a estrutura visual base. Não inclui componentes reutilizáveis do Design System, PWA, armazenamento, backup, login, backend, assinatura, recursos premium ou funcionalidades de aplicativos. Os documentos aprovados foram preservados.
