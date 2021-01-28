///<reference types="cypress"/>

//run basic tests on transliterate

describe('basicTests',()=>{

    before(() => {
        cy.visit('https://transliterate.dicta.org.il/')
    })
    

    it('transliterateRun',()=>{
        cy.get('[placeholder="הזן טקסט כאן"]').type('תּוֹרָה')
        cy.get('[class*="spinner"]').should('not.exist')
        cy.get('.results-content').should('contain','torah')
    })

    

})