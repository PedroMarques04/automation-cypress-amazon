# Repositório dedicado aos estudos de automação com Cypress 🇧🇷 🟢🟡

### Descrição: 
Para fins de estudo, utilizei o website da Amazon como fonte de testes, separando-os em três módulos diferentes: pesquisa, produtos e carrinho. Não se trata de uma cobertura completa de todos esses módulos; há apenas as validações mais básicas para exercitar meus conhecimentos com o framework. Os testes foram editados pela última vez em 27 de março de 2024 e todos eles passaram; caso haja alguma mudança no website, eles podem falhar.

#### Pesquisa:
- Pesquisa de produtos no website da Amazon: neste teste é realizada a pesquisa de três produtos diferentes e é validado se o que foi digitado na barra de pesquisa é exibido na tela.
- Pesquisa por categoria: neste teste, a barra de pesquisa não é utilizada, mas sim os filtros por categoria. Também é validado se o filtro inserido é exibido na tela.
- Filtrando produtos: os três últimos testes procuram validar o comportamento da aplicação após a pesquisa de um produto e a filtragem dos resultados.

#### Produtos:
- Acessando a tela de um produto após uma pesquisa: neste teste é feita uma pesquisa de produtos e é verificado se o nome e o preço do produto conferem tanto na tela de pesquisa quanto na tela do produto em si.
- Acessando a tela de um produto após filtrar por categoria: este teste valida a mesma condição que o anterior, mas os elementos têm um comportamento diferente quando são apenas filtrados por categoria, isso pode ser visualizado via código.
- Acessando a tela de um livro: este teste valida a mesma condição que os dois anteriores, porém a tela de produto dos livros tem um comportamento diferente das demais.

#### Carrinho:
- Adicionar um produto ao carrinho: o teste valida se é possível adicionar um produto ao carrinho a partir da tela do produto que já foi inserida previamente. São realizadas validações de texto e valor do produto.
- Remover um produto do carrinho: o teste adiciona um produto e o remove do carrinho. São realizadas validações de texto e valor do produto.
- Adicionar vários produtos ao carrinho: o teste pesquisa produtos, obtém o primeiro produto exibido em tela e o adiciona ao carrinho. Este processo é repetido. São realizadas validações de texto e valor dos produtos e do carrinho após a adição dos produtos.
- Remover todos os produtos do carrinho: o teste pesquisa produtos, obtém o primeiro produto exibido em tela e o adiciona ao carrinho. Este processo é repetido e todos os produtos são removidos do carrinho. São realizadas validações de texto e valor dos produtos e do carrinho após a adição dos produtos.
- Selecionar mais de um produto: o teste altera a quantidade do produto adicionado ao carrinho. São realizadas validações de texto e valor dos produtos e do carrinho após a adição dos produtos.
- Mudar a quantidade dos produtos adicionados ao carrinho: o teste pesquisa produtos, obtém o primeiro produto exibido em tela e o adiciona ao carrinho. Este processo é repetido. Ao acessar o carrinho, a quantidade de cada produto é alterada. São realizadas validações de texto e valor dos produtos e do carrinho após a adição e alteração na quantidade dos produtos.

###### Pontos a ressaltar:
1. Apesar de todos os testes estarem passando, foram encontrados alguns problemas quanto à validação de preço de alguns produtos. A seguir segue o link de um produto validado:

![Caderno](https://www.amazon.com.br/Caderno-Universit%C3%A1rio-Tilibra-305421-Mat%C3%A9rias/dp/B07VFWFS4P/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&sr=8-1)
O preço do produto encontrado foi esse:
![Preço do Caderno](URL_da_Imagem)
O preço do produto após alterar a quantidade para 3 está em desacordo. Não foi informada em tela nenhuma razão para alteração do valor
![Carrinho após a mudança de quantidade do produto](URL_da_Imagem)

# Repository dedicated to automation studies with Cypress 🇺🇸🔵🔴

### Description: 
For study purposes, I used the Amazon website as a testing source, dividing it into three different modules: search, products, and cart. This is not a comprehensive coverage of all these modules; there are only the most basic validations to exercise my knowledge with the framework. The tests were last edited on March 27, 2024, and they all passed; if there is any change on the website, they may fail.

#### Search:
- Product search on the Amazon website: in this test, the search for three different products is performed, and it is validated whether what was typed in the search bar is displayed on the screen.
- Category search: in this test, the search bar is not used; instead, category filters are used. It is also validated whether the inserted filter is displayed on the screen.
- Filtering products: the last three tests aim to validate the application's behavior after searching for a product and filtering the results.

#### Products:
- Accessing a product page after a search: in this test, a product search is performed, and it is verified whether the name and price of the product match both on the search page and on the product page itself.
- Accessing a product page after filtering by category: this test validates the same condition as the previous one, but the elements behave differently when filtered only by category, which can be observed via code.
- Accessing a book page: this test validates the same condition as the previous two, but the product page for books behaves differently from the others.

#### Cart:
- Adding a product to the cart: the test validates if it is possible to add a product to the cart from the previously inserted product page. Validations of text and product value are performed.
- Removing a product from the cart: the test adds a product and removes it from the cart. Validations of text and product value are performed.
- Adding multiple products to the cart: the test searches for products, obtains the first product displayed on the screen, and adds it to the cart. This process is repeated. Validations of text and value of the products and the cart are performed after adding the products.
- Removing all products from the cart: the test searches for products, obtains the first product displayed on the screen, and adds it to the cart. This process is repeated, and all products are removed from the cart. Validations of text and value of the products and the cart are performed after adding the products.
- Selecting more than one product: the test changes the quantity of the product added to the cart. Validations of text and value of the products and the cart are performed after adding the products.
- Changing the quantity of products added to the cart: the test searches for products, obtains the first product displayed on the screen, and adds it to the cart. This process is repeated. When accessing the cart, the quantity of each product is changed. Validations of text and value of the products and the cart are performed after adding and changing the quantity of the products.

###### Points to Highlight:
1. Despite all tests passing, some issues were found regarding the validation of prices for certain products. Below is the link to a validated product:
![Notebook](https://www.amazon.com.br/Caderno-Universit%C3%A1rio-Tilibra-305421-Mat%C3%A9rias/dp/B07VFWFS4P/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&sr=8-1)
The price of the found product was:
![Notebook price](URL_da_Imagem)
The price of the product after changing the quantity to 3 is inconsistent. No reason for the price change was displayed on the screen.
![Cart after changing the quantity of the product](URL_da_Imagem)