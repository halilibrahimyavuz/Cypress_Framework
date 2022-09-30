/// <references types="cypress"/>


context(' MY SECOND TEST ', ()=> {
//describe yerine context de kullanılır
beforeEach('Her test oncesinde calisir',()=> {

    cy.visit('/')

} )

//beforeEach --> her testen once calısır
it('URL TEst', ()=> {

    cy.url().should('include','google')
    cy.url().should('eq','https://www.google.com/')
    
 })

 it('Title Test', ()=> {
    cy.title().should('include','Google')

 })
 
 it('Search Test', ()=> {
    cy.get('.gLFyf').type('Cypress.io{enter}')
    // get() : otomatık  locate alıyoruz manuel css locate alıyoruz --> input[name='q']   xpath den farkı // ypk ve @ yok
    // type():  metin gonderıyoruz selenıumdakı sendKeys Enter dmeezsek gondermez
    // {enter } --> enter a bas demek


})

it('Search2 Test', ()=> {

    cy.get('.gLFyf', {timeout:8000}).type('Cypress.io{enter}')
    // {timeout:3000}--> 3 sanıye mola ver komutu

})

it.pnly('Click TEst', ()=> {
    // -->  it.only  --> sadece bu testı calsıtır demek
    // it.skip --> es gec demek
    

    cy.get('.gb_Ue').click()

   
})


 })