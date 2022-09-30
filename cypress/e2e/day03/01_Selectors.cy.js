/// <reference types="cypress" />

describe('Selectors Examples', () => {

    it.skip('Css Selectors', () => {
    
    cy.visit('https://www.amazon.com/')    
//amazon arama cubugu selector ornekleri asagida 5 adet yazdik
    //1) By Tag Name
 cy.get('input')

    //2) By id
      cy.get('#twotabsearchbox')

    //3) By Class
     cy.get('.nav-search-field') 
    

    //4) By Attribute name and value
   cy.get("'input[type='text']")


   //5) By 2 Attribute

    cy.get("[type='text'][id='twotabsearchbox']")

    //cy.get('#twotabsearchtextbox')
    })

    it('Xpath', () => {
    cy.visit('https://www.google.com')

    //6) By Xpath

    cy.xpath("//a[@class='gb_d']").should('include.text', 'Gmail') // benim xpath i gordu 36 yi ben yapmadim
    // hala xpath algilanmadiysa 1. satira /// <reference types="cypress-xpath" />  yaziyoruz
    // support dosayasi e2e.js nin icine xpath gormesi icin require('cypress-xpath'); bunuda eklemeliyiz
    cy.xpath("//a[@class='gb_d']").click({multiple: true})
    //xpath le tiklamak istedik bunu onerdi {multiple: true} yaptik ama sayfaya gitti ama hala hata verdi bu yuzden xpath degil css selectorle devam etmek gereklidir.
    

    })

})