/// references type="cypress"/>

describe('LOG In Test 4 ', ()=> {

    it('Pozitif test', ()=> {

        const userName="Manager"
        const password="Manager1!"

        cy.visit('https://qa-environment.koalaresorthotels.com/')

        cy.contains('Log in').click()

        cy.get('#UserName').type(userName)
        cy.get('#Password').type(password)

        cy.get('#btnSubmit').click()

        cy.get('.top-menu > .nav > .dropdown > .dropdown-toggle').should('be.visible')

        cy.url().should('contains','Admin')

        cy.get('.username').should('contain','manager')



     })

     it('Negatif Test', ()=> {
        const dogruUserName="Manager"
        const yanlisPassword="Manager"

        cy.visit('https://qa-environment.koalaresorthotels.com/')

        cy.contains('Log in').click()

        cy.get('#UserName').type(dogruUserName)
        cy.get('#Password').type(yanlisPassword)

        cy.get('#btnSubmit').click()

        cy.get('#divMessageResult').should('contain','Wrong password')

    })
 
 

})