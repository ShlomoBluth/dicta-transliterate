///<reference types="cypress"/>

//run basic tests on transliterate

let sizes = ['iphone-x',[1000, 660]]

sizes.forEach((size) => {

    describe('basicTests',()=>{

        before(() => {
            cy.screenSize({size:size})
            cy.visitpage({url:'/'})
        })
        
    
        it('transliterateRun',()=>{
            cy.get('[placeholder="הזן טקסט כאן"]').type('תּוֹרָה')
            cy.get('[class*="spinner"]').should('not.exist')
            cy.get('.results-content').should('contain','torah')
        })
    
           
    })

})
