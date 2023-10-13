## Próximos passos

Nesse desafio, você vai aproveitar a aplicação que já desenvolvemos na trilha para implementar um carrinho que utilizará os dados da API do Stripe para buscar os itens existentes, e controlará, através da sua aplicação, o número de itens que a pessoa deseja comprar.

### Requisitos

- [x] Você utilizará a listagem já criada pela aplicação, mas adicionará a possibilidade de adicionar aquele item ao carrinho na página do produto.
- [x] Salvar todos os itens selecionados em sua aplicação, e exibir o número de itens no carrinho
- [ ] Enviar o carrinho que você armazenou na aplicação para a rota de checkout, onde irá gerar a sessão de checkout com os `line_items` necessários.

Para completar esse desafio você vai precisar de realizar algumas pesquisas para entender sobre a API do Stripe.

Layout: https://www.figma.com/file/qmsUES7HA9SN7If869pmUb/Ignite-Shop-2.0-%E2%80%A2-Desafio-React-(Copy)?node-id=408%3A147&mode=dev

## Considerar

- [x] Animação ao navegar entre as páginas internas do projeto.
- [ ] Adição do item ao carrinho, na página específica do produto.
- [ ] Mover o checkout para o submit do cart.
- [ ] Filtro de produto (formato de select ou botões horizontais).
- [ ] Geração de imagens do produto com um modelo, via IA generativa.
- [ ] Context Selector.
- [ ] Barra fixa ao topo da página, acompanhando o carregamento da mesma.

~~- [ ] Migração para App Router e Server Components.~~

Tal implementação exige a migração do Stitches para o PandaCSS, pois o primeiro não é suportado no App Router.

## Aprendizado

1. https://app.rocketseat.com.br/h/forum/react-js/8c0249bb-2dc2-4f2f-bc6e-aaf1e647525a#0dba58b7-9dcb-4127-b5d5-6e1f6ae29ae3

2. https://app.rocketseat.com.br/h/forum/react-js/f120410e-0c3a-45a0-a18e-9cad1b131b02

3. https://stackoverflow.com/questions/54676966/push-method-in-react-hooks-usestate

4. Devido à introdução do **Streaming** e **Server Components** com o React 18, o Stitches não é mais ativamente suportado. (https://github.com/stitchesjs/stitches/discussions/1149);

- PandaCSS é uma opção viável: https://panda-css.com/docs/migration/stitches

5. https://stackoverflow.com/questions/52423842/what-is-not-assignable-to-parameter-of-type-never-error-in-typescript

6. https://github.com/vercel/next.js/discussions/48255

7. https://github.com/vercel/next.js/discussions/38256

8. https://www.youtube.com/watch?v=Bz3No1RFXWY&ab_channel=DaveGray

9. Turbopack aparenta estar razoavelmente estável; porém, não é possível realizar a requisição do checkout no modo de desenvolvimento. Por algum motivo, o Turbopack é incapaz de ler os secrets presentes em **.env**. (https://github.com/vercel/turbo/issues/3876)

10. https://levelup.gitconnected.com/how-to-sort-imports-in-react-project-550f5ce70cbf

11. https://github.com/vercel/next.js/discussions/13448
