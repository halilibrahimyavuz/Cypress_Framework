/// references type="cypress"/>

describe('Amazon Urun artma TEst', ()=> {

    it('Nutella Search', ()=> {
    //    cy.amazonSearch('nutella')
        cy.amazonSearch('iphone')
        cy.get('.a-color-state').should('include.text','iphone')
        cy.get('#twotabsearchtextbox').should('have.value','iphone') // atrıbute value nun iphone oldugu test edıldı
        //--> have.value --> HTML kodlarında araama butonundaki value degerını dogrulama
        //value=iphone
        cy.screenshot()    
    



 })

 
 })