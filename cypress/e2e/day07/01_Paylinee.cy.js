/// <reference types="cypress" />

import { should } from 'chai'
import HomePage from '../POM/HomePage.cy'
import LoginPage from '../POM/LoginPage.cy'


describe('PayLinn Bank', () => {

    before(function(){
        cy.fixture('paylinn').then(function(data){
         this.data=data   
        })
    })

    it('PayLinn Bank Login Test', function()  {
        
    const homePage=new HomePage()
    const loginPage=new LoginPage()

    cy.visit(this.data.url)

    //cy.get('[href="/login"] > .header__option > .header__lineTwo').click()  
    homePage.getSigninLink().click()
   
   // cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(this.data.username)
    loginPage.getUserNameBox().type(this.data.userName)

   // cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(this.data.password)
     loginPage.getPassword().type(this.data.passWord)
     
     loginPage.getLoginButton().click()

    //cy.get('.header__nav > :nth-child(1) > .header__lineOne').should('contain.text','Welcome')
        loginPage.getWelcomeText()
      //  loginPage.getHeader(),should('contain.text','Welcome')
       // .and('contain.text','Logout')
       // .and('contain.text','React')


    })

    it('', () => {


    })

})

