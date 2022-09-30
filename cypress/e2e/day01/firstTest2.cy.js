/// <reference types="cypress" />

describe('My 2 Test' ,    ()=> {
    // () => demek function demek - fonksiyon tanımlamak


    it('URL Test' ,   function() {

     
  
      cy.visit('https://www.google.com/')

      cy.url().should('include','google')

      
    })


 it('Title Test', ()=> {

    cy.visit('https://www.google.com/')
   

  cy.title().should('include','Google')

  cy.title().should('eq','Google')


 })
 
 })