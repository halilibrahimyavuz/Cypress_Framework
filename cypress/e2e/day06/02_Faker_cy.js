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

          cy.wait(3000)
         cy.get('#email_create').type(email)

         cy.get('#SubmitCreate > span').click()
           cy.wait(13000)
         cy.get('#id_gender1').click()

        
     let firstName=faker.name.firstName('male')//male erke ismi female kadin ismi verir
     
         cy.get('#customer_firstname').type(firstName)
         let lastname=faker.name.lastName()
         cy.get('#customer_lastname').type(lastname)
         
         //cy.get('#email') email oto yaziyor burayi yazmadik gerekli kisimlari doldurcaz
         
         let password=faker.internet.password()
         cy.get('#passwd').type(password)
         cy.wait(2000) 
         let address =faker.address.streetAddress()
         cy.get('#address1').type(address)
     
         let city=faker.address.city() 
         cy.get('#city').type(city)

         cy.get('#id_state').select('1')

         let zipcode=faker.address.zipCode('#####')
         cy.get('#postcode').type(zipcode)

         let tel=faker.phone.number('###-###-##-##')
         cy.get('#phone_mobile').type(tel)

        
  
         cy.get('#submitAccount > span').click()
         cy.wait(6000)

         cy.get('.account > span').should('include.text',firstName)
         cy.get('.account > span').should('include.text',lastname)



         


    








    })

   

})