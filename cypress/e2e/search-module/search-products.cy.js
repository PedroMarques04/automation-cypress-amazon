/// <reference types="cypress" />

describe('Validate searching products module on amazon website', () => {
    beforeEach(() => {
        cy.visit('https://www.amazon.com.br/');
    })

    it('Searching products on website', () => {
        cy.get('#twotabsearchtextbox').then(() => {
            const product = ['fone de ouvido', 'Mochila', 'Notebook'];

            for (var i = 0; i < product.length; i++) {
                cy.get('#twotabsearchtextbox').type(product[i]);
                cy.get('#nav-search-submit-button').click();
                cy.get('[data-component-type="s-result-info-bar"]').should('contain', product[i]);
                cy.go('back')

            }

        })
    })

    it('Searching by product category', () => {
        cy.get('#searchDropdownBox').then(() => {
            const category = ['Alexa Skills', 'Beleza', 'Casa'];

            for (var i = 0; i < category.length; i++) {
                cy.get('#searchDropdownBox').select(category[i], { force: true });
                cy.get('#nav-search-submit-button').click();
                cy.get('#s-refinements').should('contain', category[i]);
                cy.go('back');
            }

        })
    })

    it('Filtering products by Prices: Low to High', () => {
        cy.get('#twotabsearchtextbox').then(() => {
            const product = ['Caderno', 'Smartphone'];
            for (var i = 0; i < product.length; i++) {
                cy.get('#twotabsearchtextbox').type(product[i]);
                cy.get('#nav-search-submit-button').click();
                cy.get('[data-component-type="s-result-info-bar"]').should('contain', product[i]);

                cy.get('#s-result-sort-select').select('Preço: Do menor para o maior', { force: true });
                cy.get('.a-dropdown-prompt').should('contain', 'Preço: Do menor para o maior');
                cy.go('back');
                cy.go('back');
            }
        })
    })

    it('Filtering products by Prices: High to Low', () => {
        cy.get('#twotabsearchtextbox').then(() => {
            const product = ['Caderno', 'Smartphone'];
            for (var i = 0; i < product.length; i++) {
                cy.get('#twotabsearchtextbox').type(product[i]);
                cy.get('#nav-search-submit-button').click();
                cy.get('[data-component-type="s-result-info-bar"]').should('contain', product[i]);

                cy.get('#s-result-sort-select').select('Preço: Do maior para o menor', { force: true });
                cy.get('.a-dropdown-prompt').should('contain', 'Preço: Do maior para o menor');
                cy.go('back');
                cy.go('back');
            }
        })
    })

    it('Filtering products by Average costumer review', () => {
        cy.get('#twotabsearchtextbox').then(() => {
            const product = ['Caderno', 'Smartphone']
            for (var i = 0; i < product.length; i++) {
                cy.get('#twotabsearchtextbox').type(product[i]);
                cy.get('#nav-search-submit-button').click()
                cy.get('[data-component-type="s-result-info-bar"]').should('contain', product[i])

                cy.get('#s-result-sort-select').select('Méd. Avaliações de clientes', { force: true })
                cy.get('.a-dropdown-prompt').should('contain', 'Méd. Avaliações de clientes')
                cy.go('back')
                cy.go('back')
            }
        })

    })

});