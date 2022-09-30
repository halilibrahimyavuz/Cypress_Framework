/// <reference types="cypress" />

describe('HoverOver', () => {

    it('Test Case', () => {
    
   cy.visit('https://www.amazon.com/')
   cy.wait(3000)
   cy.get('#icp-nav-flyout').trigger('mouseover')

   cy.contains('Change country/region').click()

   cy.get('#icp-dropdown').select('Turkey (Türkiye)', {force: true})


 


    })


})