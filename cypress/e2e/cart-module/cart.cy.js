/// <reference types="cypress" />

describe('Cart functionality', () => {
    beforeEach(() => {
        cy.visit('https://www.amazon.com.br/');
    });

    it('Adding a product to the cart', () => {
        cy.visit('https://www.amazon.com.br/Controle-Sem-Fio-Dualshock-Preto/dp/B01LWVX2RG?ref_=Oct_d_obs_d_16253332011_3&pd_rd_i=B01LWVX2RG')
        cy.get("#corePrice_feature_div .a-price .a-price-symbol").siblings().invoke('text').then((price) => {
            cy.get('#add-to-cart-button').click();
            cy.get('#sw-atc-confirmation').find('h1').should('contain', 'Adicionado ao carrinho')
            cy.get('#nav-cart-count').should('contain', '1');
            cy.get('.ewc-subtotal-amount').invoke('text').should('include', price);
            cy.get('#sw-subtotal .a-price .a-price-symbol').siblings().invoke('text').should('include', price);
        })
    });

    it('Removing a product from the cart', () => {
        cy.visit('https://www.amazon.com.br/Controle-Sem-Fio-Dualshock-Preto/dp/B01LWVX2RG?ref_=Oct_d_obs_d_16253332011_3&pd_rd_i=B01LWVX2RG')
        cy.get("#corePrice_feature_div .a-price .a-price-symbol").siblings().invoke('text').then((price) => {
            cy.get('#add-to-cart-button').click();
            cy.get('#sw-atc-confirmation').find('h1').should('contain', 'Adicionado ao carrinho');
            cy.get('#nav-cart-count').should('contain', '1');
            cy.get('.ewc-subtotal-amount').invoke('text').should('include', price);
            cy.get('#sw-subtotal .a-price .a-price-symbol').siblings().invoke('text').should('include', price);

            cy.get('#sw-atc-buy-box .a-button-text').should('contain', 'Ir para o carrinho');
            cy.contains('.a-button-text', 'Ir para o carrinho').click({ force: true });
            cy.get('input[value="Excluir"]').click();
            cy.contains(' Seu carrinho de compras da Amazon está vazio.');
        })
    });

    it('Adding multiple products to the cart', () => {
        cy.get('#twotabsearchtextbox').then(() => {
            const products = ['fone de ouvido', 'amaciante', 'Cadeira'];
            var priceNumber = 0;
            products.forEach((product, index) => {
                cy.get('#twotabsearchtextbox').type(product);
                cy.get('#nav-search-submit-button').click();
                cy.get('[data-component-type="s-result-info-bar"]').should('contain', product);
                //clicking on the first product that the page returns
                //getting the product title and price to make assertions at the end of the test
                cy.get("div[data-index='3']").find('h2').as('productTitle');
                cy.get("div[data-index='3'] .a-price .a-price-symbol").siblings().invoke('text').then((price) => {
                    cy.get('@productTitle').invoke('text').then((productTitleContent) => {

                        priceNumber += parseFloat(price.replace(',', '.'));
                        cy.get('@productTitle').find('a').click();
                        cy.get('#productTitle').invoke('text').should('contain', productTitleContent);
                        cy.get("#corePrice_feature_div .a-price .a-price-symbol").siblings().invoke('text').should('contain', price);
                        cy.get('#add-to-cart-button').click();
                        cy.get('#sw-atc-confirmation').find('h1').should('contain', 'Adicionado ao carrinho');
                        cy.get('#nav-cart-count').should('contain', index + 1);

                        var priceString = priceNumber.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
                        priceString = priceString.replace('R$', '');
                        cy.get('.ewc-subtotal-amount').invoke('text').should('include', priceString);
                        cy.get('#sw-subtotal .a-price .a-price-symbol').siblings().invoke('text').should('include', priceString);
                    })
                })
                cy.get('#nav-logo').click();
            })
        })
    });

    it('Removing all products from the cart', () => {
        cy.get('#twotabsearchtextbox').then(() => {
            const products = ['fone de ouvido', 'amaciante'];
            var priceNumber = 0;
            products.forEach((product, index) => {
                cy.get('#twotabsearchtextbox').type(product);
                cy.get('#nav-search-submit-button').click();
                cy.get('[data-component-type="s-result-info-bar"]').should('contain', product);
                //clicking on the first product that the page returns
                //getting the product title and price to make assertions at the end of the test
                cy.get("div[data-index='3']").find('h2').as('productTitle');
                cy.get("div[data-index='3'] .a-price .a-price-symbol").siblings().invoke('text').then((price) => {
                    cy.get('@productTitle').invoke('text').then((productTitleContent) => {

                        priceNumber += parseFloat(price.replace(',', '.'));
                        cy.get('@productTitle').find('a').click();
                        cy.get('#productTitle').invoke('text').should('contain', productTitleContent);
                        cy.get("#corePrice_feature_div .a-price .a-price-symbol").siblings().invoke('text').should('contain', price);
                        cy.get('#add-to-cart-button').click();
                        cy.get('#sw-atc-confirmation').find('h1').should('contain', 'Adicionado ao carrinho');
                        cy.get('#nav-cart-count').should('contain', index + 1);

                        var priceString = priceNumber.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
                        priceString = priceString.replace('R$', '');
                        cy.get('.ewc-subtotal-amount').invoke('text').should('include', priceString);
                        cy.get('#sw-subtotal .a-price .a-price-symbol').siblings().invoke('text').should('include', priceString);
                    })
                })
                cy.get('#nav-logo').click();
            })
            cy.get('#nav-cart').click();
            cy.get('input[value="Excluir"]').as('exclusionButton').click({ multiple: true });
            //cy.get('@exclusionButton').click({ multiple: true })
            cy.contains('Seu carrinho de compras da Amazon está vazio.');
        })
    });

    it('Selecting more than one product', () => {

        cy.get('#twotabsearchtextbox').then(() => {
            const products = ['fone de ouvido', 'amaciante']
            var priceNumber = 0;
            var totalPrice = 0;
            products.forEach((product, index) => {
                cy.get('#twotabsearchtextbox').type(product);
                cy.get('#nav-search-submit-button').click();
                cy.get('[data-component-type="s-result-info-bar"]').should('contain', product);
                //clicking on the first product that the page returns
                //getting the product title and price to make assertions at the end of the test
                cy.get("div[data-index='3']").find('h2').as('productTitle');
                cy.get("div[data-index='3'] .a-price .a-price-symbol").siblings().invoke('text').then((price) => {
                    cy.get('@productTitle').invoke('text').then((productTitleContent) => {

                        priceNumber = parseFloat(price.replace(',', '.'));
                        cy.get('@productTitle').find('a').click();
                        cy.get('#productTitle').invoke('text').should('contain', productTitleContent);
                        cy.get("#corePrice_feature_div .a-price .a-price-symbol").siblings().invoke('text').should('contain', price);
                        //selecting 3 as the quantity of each product
                        cy.get('#quantity').select('3', { force: true }).invoke('val').as('quantity');
                        cy.get('@quantity').then((quantity) => {
                            var quantityValue = Number('@quantity');
                            cy.log(quantity);
                            cy.get('#add-to-cart-button').click();
                            cy.get('#sw-atc-confirmation').find('h1').should('contain', 'Adicionado ao carrinho');
                            cy.get('#nav-cart-count').should('contain', (index + 1) * quantity);
                            totalPrice += priceNumber * quantity;

                            var priceString = totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
                            priceString = priceString.replace('R$', '');
                            cy.get('.ewc-subtotal-amount').invoke('text').should('include', priceString);
                            cy.get('#sw-subtotal .a-price .a-price-symbol').siblings().invoke('text').should('include', priceString);
                        })

                    })
                })
                cy.get('#nav-logo').click();
            })
        })

    });
    it('Changing the number of a product in the cart', () => {
        cy.get('#twotabsearchtextbox').then(() => {
            const products = ['travesseiro']
            var priceNumber = 0;
            var totalPrice = 0;
            var totalPriceString = '';
            products.forEach((product, index) => {
                cy.get('#twotabsearchtextbox').type(product);
                cy.get('#nav-search-submit-button').click();
                cy.get('[data-component-type="s-result-info-bar"]').should('contain', product);
                //clicking on the first product that the page returns
                //getting the product title and price to make assertions at the end of the test
                cy.get("div[data-index='3']").find('h2').as('productTitle');
                cy.get("div[data-index='3'] .a-price .a-price-symbol").siblings().invoke('text').then((price) => {
                    cy.get('@productTitle').invoke('text').then((productTitleContent) => {

                        priceNumber += parseFloat(price.replace(',', '.'));
                        cy.get('@productTitle').find('a').click();
                        cy.get('#productTitle').invoke('text').should('contain', productTitleContent);
                        cy.get("#corePrice_feature_div .a-price .a-price-symbol").siblings().invoke('text').should('contain', price);
                        cy.get('#add-to-cart-button').click();
                        cy.get('#sw-atc-confirmation').find('h1').should('contain', 'Adicionado ao carrinho');
                        cy.get('#nav-cart-count').should('contain', index + 1);

                        var priceString = priceNumber.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
                        priceString = priceString.replace('R$', '');
                        cy.get('.ewc-subtotal-amount').invoke('text').should('include', priceString);
                        cy.get('#sw-subtotal .a-price .a-price-symbol').siblings().invoke('text').should('include', priceString);
                    })
                })
                cy.get('#nav-logo').click();
            })
            cy.get('#nav-cart').click();
            cy.get('#quantity').select('4', { force: true }).invoke('val').as('quantity');
            cy.get('@quantity').then((quantity) => {
                totalPrice = quantity * priceNumber;
                totalPriceString = totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
                totalPriceString = totalPriceString.replace('R$', '');

                cy.get('#sc-subtotal-amount-buybox').invoke('text').should('include', totalPriceString);
                cy.get('#sc-subtotal-amount-activecart').invoke('text').should('include', totalPriceString);
            })
        })
    })
});
