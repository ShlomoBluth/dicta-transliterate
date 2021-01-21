/// <reference types="cypress"/>

//run tests on requests from transliterate run

describe('requestsTests',()=>{

    
  beforeEach(() => {
    cy.visit('https://transliterate.dicta.org.il/')
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