/// <reference types="cypress" />

describe('Scroll', () => {

    it('Scrollintowiew', () => {

    cy.visit("https://qa-environment.koalaresorthotels.com/")
    
    cy.wait(3000)
    cy.get('.col-md-7 > .mb-4').scrollIntoView()//locate ettigimiz yerin altina sayfayi kaydirir 
   
    cy.wait(3000) 
    cy.get(':nth-child(9) > .container > .justify-content-center > .col-md-7 > h2')
    .scrollIntoView({duration: 4000}) // 4sn icerisinde locate edilen yerin hemen altina gel
   // cy.get(':nth-child(6) > .container > .mb-5').scrollIntoView({offset:-100}) // iyazilan locatin 100 pixsel yukari cik


   //scrollTo(x,y)
   cy.wait(3000) 
   cy.scrollTo(0,0)//sayfanin en yukarisina cikmis oldu

   //sayfayi 500 pixsel asagi kaydiralim

   cy.wait(3000) 
   cy.scrollTo(0,500)//cy.scrollTo('500px') ayni anlamda kullanilir

   cy.wait(3000) 
   cy.scrollTo('500px')

   cy.wait(3000) 
   cy.scrollTo(0,-500) //should() kullanamayiz dogrulama yapamayiz

   


    })

    it('', () => {







    })

})