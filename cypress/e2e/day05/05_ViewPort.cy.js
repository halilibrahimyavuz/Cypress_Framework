/// references type="cypress"/>

describe('View Port Test', ()=> {

    it('TC01', ()=> {
        cy.visit('http://www.googl.com')
        cy.viewport('iphone-6')
        cy.screenshot()

 })

 it('TC02', ()=> {
    cy.visit('http://www.google.com')
    cy.viewport('macbook-16')
    cy.screenshot()


 })
 it('TC02', ()=> {
    cy.visit('http://www.google.com')
    cy.viewport(500,800)
    cy.screenshot()


 })
 
 })