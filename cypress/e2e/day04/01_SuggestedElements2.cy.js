/// references type="cypress"/>

describe(' Suggested Element 2 ', ()=> {
// arama textbox a bır kelıme yazınca alternatıf kelımlerı kendısı otomatık getırıyormu bunun testı ıcın gereklı olacaktır,
// tıcaret sıtelerınde onemlı bır konu

    it('TC01', ()=> {

        cy.visit('http://automationpractice.com/index.php')
      
        cy.get('#search_query_top').type('dress').dblclick()
       
        cy.wait(5000)
      
        cy.get('.ac_results').contains('Blouse').click()



 })


 })