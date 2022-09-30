/// references type="cypress"/>

describe('Custom Command1', ()=> {

    it('Positive Logın Test', ()=> {
        cy.visit('http://automationpractice.com/index.php')

        cy.get('.login').click()

        cy.get('#email').type('123murat123@gmail.com')

        cy.get('#passwd').type('123murat123')

        cy.get('#SubmitLogin > span').click()

        cy.get('.account > span').should('have.text','Murat Murat')



    })

 it('Logın Test', ()=> {
    
    //commands clasındakı hazır methodumuzu kullandık logın methodunu cagırdık ve kolay olarak kullandık
    cy.login('123murat123@gmail.com','123murat123')

    cy.get('.account > span').should('have.text','Murat Murat')


 })
 

 it.only('Negative Logın Test', ()=> {

    cy.login('123murat123@gmail.com','123murat')

    cy.get('#center_column > :nth-child(2)').should('be.visible')

    



})
 })