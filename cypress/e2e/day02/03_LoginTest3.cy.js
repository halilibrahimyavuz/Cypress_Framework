/// references type="cypress"/>

describe('Login Menu test', ()=> {

it('TC01', ()=> {
    cy.visit('http://automationpractice.com/index.php') 

    cy.get('.login').click()

    cy.contains('#create-account_form > .page-subheading','Create an account')
    cy.contains('#create-account_form > .form_content > .form-group > label','Email address')
   

 })



 it('TC02', ()=> {

    cy.visit('http://automationpractice.com/index.php') 

    cy.get('.login').click()

    //1.yol
    cy.get(':nth-child(1) > label').should('contain','Email address')

    //2.yol
    cy.get(':nth-child(1) > label').then( emailtext =>{
        expect(emailtext.text()).to.equal('Email address')
    })


    //3. yol
   cy.get(':nth-child(1) > label').invoke('text').then(emailText2 =>{
    expect(emailText2).to.equal('Email address')

    })


})
 
 })