/// references type="cypress"/>

describe('Write & Read File', ()=> {

    it('Write File', ()=> {
        cy.writeFile('./cypress/e2e/day07/NotDefteri.txt', 'CYPRESS NOTES  \n ')
        cy.writeFile('./cypress/e2e/day07/NotDefteri.txt', '1-Cypress ınstall \n', {flag:'a+'})
        cy.writeFile('./cypress/e2e/day07/NotDefteri.txt', '2-Plugins\n' ,{flag:'a+'})

 })



 it('Read File', ()=> {
    cy.readFile('./cypress/e2e/day07/NotDefteri.txt').should('contain','Plugins')


    

 })
 
 })