/// <reference types="cypress" />

describe('My First Test' ,    ()=> {

    //describe= tanımlamak demek- Testı tanımlıyorum
    //isim verme kısmı --> mocha kutuphanesınden gelıyor


    it('URL Test' ,   ()=> {

     
    //it 
    //javadakı get methodunun dengı =cy
  
      cy.visit('https://www.google.com/')
        //visit('URL e gıt')

      cy.url().should('include','google')

      //include= içeriyormu??
      //should= assert etme meli -malı?
      //should('include','google') url de google ıcerırmı?
      
    })


 it('Title Test', ()=> {

    cy.visit('https://www.google.com/')
   

  cy.title().should('include','Google')
  //title=sayfasnın titleını alır

  cy.title().should('eq','Google')
  //eq = eşitmi equals 





 })
 
 })