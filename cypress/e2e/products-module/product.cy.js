/// <reference types="cypress" />

describe('Products', () => {
    beforeEach(() => {
        cy.visit('https://www.amazon.com.br/');
    });
    it('Accessing a product page after searching for a product', () => {
        cy.get('#twotabsearchtextbox').then(() => {
            const products = ['fone de ouvido', 'smartphone', 'TV']

            products.forEach(product => {
                cy.get('#twotabsearchtextbox').type(product);
                cy.get('#nav-search-submit-button').click();
                cy.get('[data-component-type="s-result-info-bar"]').should('contain', product);
                //clicking on the first product that the page returns
                //getting the product title and price to make assertions at the end of the test
                cy.get("div[data-index='3']").find('h2').as('productTitle');
                cy.get("div[data-index='3'] .a-price .a-price-symbol").siblings().invoke('text').then((price) => {
                    cy.get('@productTitle').invoke('text').then((productTitleContent) => {
                        cy.get('@productTitle').find('a').click();
                        cy.get('#productTitle').invoke('text').should('contain', productTitleContent);
                        cy.get("#corePrice_feature_div .a-price .a-price-symbol").siblings().invoke('text').should('contain', price);
                    })
                })
                cy.go('back');
                cy.go('back');
            })
        })
    });
    it('Accessing a product page after filtering by a category', () => {
        cy.get('#searchDropdownBox').then(() => {
            const category = ['Casa', 'Cozinha'];

            for (var i = 0; i < category.length; i++) {
                cy.get('#searchDropdownBox').select(category[i], { force: true });
                cy.get('#nav-search-submit-button').click();
                cy.get('#s-refinements').should('contain', category[i]);
                cy.get("ol[class='a-carousel'] > li").first().as('productTitle');
                cy.get("ol[class='a-carousel'] > li .a-price .a-price-symbol").first().siblings().invoke('text').then((price) => {
                    cy.log(price);
                    cy.get('@productTitle').find('.a-truncate-cut').invoke('text').then((productTitleContent) => {
                        const splitIndex = productTitleContent.indexOf('.'); // Encontrar o índice das reticências
                        const trimmedTitle = productTitleContent.substring(20, splitIndex).trim(); // Obter o texto com 20 caracteres antes das reticências
                        cy.get('@productTitle').find('a').click();
                        cy.get('#productTitle').invoke('text').should('include', trimmedTitle);
                        cy.get('.a-box-inner').as('priceBox').then(() => {
                            cy.get('@priceBox').find("#corePrice_feature_div .a-price .a-price-symbol").then(() => {
                                cy.get("#corePrice_feature_div .a-price .a-price-symbol").siblings().invoke('text').should('contain', price);
                            })
                        });
                    })
                });
                cy.go('back');
                cy.go('back');
            }
        });
    });

    //it is necessary to create a different case to find books because the price on the product page is displayed differently from the other products
    it('Accessing a book', () => {
        cy.get('#searchDropdownBox').then(() => {
            const category = ['Livros'];

            for (var i = 0; i < category.length; i++) {
                cy.get('#searchDropdownBox').select(category[i], { force: true });
                cy.get('#nav-search-submit-button').click();
                cy.get('#s-refinements').should('contain', category[i]);
                cy.get("ol[class='a-carousel'] > li").first().as('productTitle');
                //buscar o primeiro elemento da lista
                cy.get("ol[class='a-carousel'] > li .a-price .a-price-symbol").first().siblings().invoke('text').then((price) => {
                    cy.get('@productTitle').find('.a-truncate-cut').invoke('text').then((productTitleContent) => {
                        const splitIndex = productTitleContent.indexOf('.'); // Encontrar o índice das reticências
                        const trimmedTitle = productTitleContent.substring(20, splitIndex).trim(); // Obter o texto com 20 caracteres antes das reticências
                        cy.get('@productTitle').find('a').click();
                        cy.get('#productTitle').invoke('text').should('include', trimmedTitle);
                        cy.get('.a-box-inner').as('priceBox').then(() => {
                            cy.get('@priceBox').find("#price").then(() => {
                                cy.get("#price").invoke('text').should('contain', price);
                            })

                        });
                    })
                });
                cy.go('back');
                cy.go('back');
            }
        });
    })
});