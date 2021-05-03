///<reference types="cypress"/>

//run basic tests on transliterate

let sizes = ['iphone-x',[1000, 660]]

sizes.forEach((size) => {

    describe('basicTests',()=>{

        before(() => {
            if (Cypress._.isArray(size)) {
                Cypress.config({
                    viewportWidth: size[0],
                    viewportHeight: size[1]
                })
                cy.viewport(size[0], size[1])
            } else {
                Cypress.config({
                    viewportWidth: 375,
                    viewportHeight: 812
                })
                cy.viewport(size)
            }
            cy.visit('/')
        })
        
    
        it('transliterateRun',()=>{
            cy.get('[placeholder="הזן טקסט כאן"]').type('תּוֹרָה')
            cy.get('[class*="spinner"]').should('not.exist')
            cy.get('.results-content').should('contain','torah')
        })
    
           
    })

})
