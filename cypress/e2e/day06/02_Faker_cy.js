/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
/*
Faker Kurulum
1)https://www.npmjs.com/package/@faker-js/faker
2)npm install --save-dev @faker-js/faker
3)import { faker } from '@faker-js/faker';  => clasin icinden import yapilmalidir 2. satira yazdik 1 defa import etmek tum classlarda calisir
*/
describe('Using Faker', () => {
    it('Faker Login Test', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
        let email=faker.internet.email()//Ignacio29@gmail.com bunu olusturdu
          //let var const javascript degiskenleri isimlendirmede kullaniyoruz
         cy.get('#email_create').type(email)
         cy.get('#SubmitCreate > span').click()
           cy.wait(7000)
         cy.get('#id_gender1').click()
     let firstName=faker.name.firstName('male')//male erke ismi female kadin ismi verir
     let lastname=faker.name.lastName('male')
         cy.get('#customer_firstname').type(firstName)
         cy.get('#customer_lastname').type(lastname)
         cy.get('#email')
         cy.get('#passwd')
         cy.get('#firstname')
         cy.get('#lastname')
         cy.get('#address1')
         cy.get('#city')
         cy.get('#id_state').select(1)
         cy.get('#id_state')
         cy.get('#phone_mobile')
         cy.get('#submitAccount > span')
    })
})