/// <reference types="cypress" />

describe('SuperDomain', () => {

    it('Test Case 1', () => {
 cy.visit('https://www.amazon.com/')
 cy.visit('https://www.amazon.com/gp/help/customer/display.html?nodeId=508510&ref_=nav_cs_customerservice')
 //Ayni domain icindeki 2. sayfalara gidebilirsiniz
cy.wait(3000)


    })

    it.skip('Test Case 1.5', () => {
        cy.visit('https://www.cypress.io/')
        cy.wait(3000)
        cy.visit('https://docs.cypress.io/plugins/directory')
 // domain basida cypressle baslamassa gene hata veriyor
  
    })
 

    it.skip('Test Case 2', () => {
        cy.visit('https://www.google.com/')
        cy.wait(3000)
        cy.visit('https://www.amazon.com/')

   //cypresin dez avantafi ayni test case de farkli 2 siteye gidemessiniz
    })
 





})