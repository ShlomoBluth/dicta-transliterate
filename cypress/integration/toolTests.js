///<reference types="cypress"/>

//run basic tests on transliterate

const urls = new Map();
urls.set('live',Cypress.env('LIVE_URL'))
//urls.set('dev',Cypress.env('DEV_URL')) 

const sizes= new Map();
sizes.set('desktop',[1000, 660])
sizes.set('mobile','iphone-x')


urls.forEach((urlValue,urlKey)=>{

    sizes.forEach((sizeValue,sizeKey) => {

    
        describe('toolTests '+urlKey+' '+sizeKey,()=>{
    
            beforeEach(() => {
                cy.screenSize({size:sizeValue})
                cy.visitpage({url:urlValue})
            })
            
            it('transliterateRun',()=>{
                cy.get('[placeholder="הזן טקסט כאן"]').type('תּוֹרָה')
                cy.get('[class*="spinner"]').should('not.exist')
                cy.get('.results-content').should('contain','torah')
            })
    
        })          
    })
})
