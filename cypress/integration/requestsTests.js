/// <reference types="cypress"/>

//run tests on requests from transliterate run

let sizes = ['iphone-x',[1000, 660]]

sizes.forEach((size) => {

  describe('requestsTests',()=>{

    
    beforeEach(() => {
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
  
  
    it('Error message for api response with a delay of 3 minutes when',()=>{
      cy.transliterateRequest({
        url:'api',
        message:'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר',
        delaySeconds:60*5
      })
    })
  
    
  
    it('Error message for api response with status code 500',()=>{
      cy.transliterateRequest({
        url:'api',
        status:500,
        message:'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר'
      })
    })
      
  })

})

