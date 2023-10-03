## Próximos passos

Nesse desafio, você vai aproveitar a aplicação que já desenvolvemos na trilha para implementar um carrinho que utilizará os dados da API do Stripe para buscar os itens existentes, e controlará, através da sua aplicação, o número de itens que a pessoa deseja comprar.

- [x] Você utilizará a listagem já criada pela aplicação, mas adicionará a possibilidade de adicionar aquele item ao carrinho na página do produto.
- [x] Salvar todos os itens selecionados em sua aplicação, e exibir o número de itens no carrinho
- [ ] Enviar o carrinho que você armazenou na aplicação para a rota de checkout, onde irá gerar a sessão de checkout com os `line_items` necessários.

Para completar esse desafio você vai precisar de realizar algumas pesquisas para entender sobre a API do Stripe.

Layout: https://www.figma.com/file/qmsUES7HA9SN7If869pmUb/Ignite-Shop-2.0-%E2%80%A2-Desafio-React-(Copy)?node-id=408%3A147&mode=dev

## Informações importantes

1. https://app.rocketseat.com.br/h/forum/react-js/8c0249bb-2dc2-4f2f-bc6e-aaf1e647525a#0dba58b7-9dcb-4127-b5d5-6e1f6ae29ae3

2. https://app.rocketseat.com.br/h/forum/react-js/f120410e-0c3a-45a0-a18e-9cad1b131b02

3. https://stackoverflow.com/questions/54676966/push-method-in-react-hooks-usestate

4. Devido à introdução do Streaming e o uso de Server Components com o React 18, o Stitches não é mais ativamente suportado.

https://github.com/stitchesjs/stitches/discussions/1149

PandaCSS é uma opção viável: https://panda-css.com/docs/migration/stitches

5. https://stackoverflow.com/questions/52423842/what-is-not-assignable-to-parameter-of-type-never-error-in-typescript

6. https://github.com/vercel/next.js/discussions/48255

7. https://github.com/vercel/next.js/discussions/38256

8. https://www.youtube.com/watch?v=Bz3No1RFXWY&ab_channel=DaveGray

## Considerar

- [ ] Permitir adicao do item ao carrinho, na pagina especifica do produto.
- [ ] Filtro de produto (formato de select)
- [ ] Geracao de imagens do produto com uma pessoa utilizando, via AI.
- [ ] Transicao animada entre paginas.
- [ ] Context Selector.

## Docs

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
