/// <reference types="cypress"/>

//run tests on requests from transliterate run

const urls = new Map();
urls.set('live',Cypress.env('LIVE_URL'))
//urls.set('dev',Cypress.env('DEV_URL')) 

const sizes= new Map();
sizes.set('desktop',[1000, 660])
sizes.set('mobile','iphone-x')


urls.forEach((urlValue,urlKey)=>{

  sizes.forEach((sizeValue,sizeKey) => {


    describe('requestsTests '+urlKey+' '+sizeKey,()=>{

    
      beforeEach(() => {
        cy.screenSize({size:sizeValue})
        cy.visitpage({url:urlValue})
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
})

