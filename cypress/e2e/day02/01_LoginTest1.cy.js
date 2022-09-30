/// references type="cypress"/>

describe('Koala Resolt Hotel', ()=> {

    it('Log in Testi', ()=> {
            cy.visit('https://qa-environment.koalaresorthotels.com/')
            
           //1.yontem -- locate vererek tıklama 
           // cy.get('#navLogon > .nav-link').click()

           //2.yontem -- ***contains** ---DOM da adında Log in olan elemnetı bul ve clıck ap
           cy.contains('Log in').click()

           cy.url().should('include','Account/Logon')

           cy.get('#UserName').type('Manager')


           
              cy.get('#Password').type('Manager1!')
        //2.- cy.get('#Password').type('Manager1!{enter}')
          
        cy.get('#btnSubmit').click()


 })
 
 })