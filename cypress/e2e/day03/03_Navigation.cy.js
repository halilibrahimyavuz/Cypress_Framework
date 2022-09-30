/// <reference types="cypress" />

describe('Navigation', () => {

    it('Back, Forward, Referesh', () => {
    cy.visit("https://qa-environment.koalaresorthotels.com/") 

    cy.wait(3000)

    cy.get('#navLogon > .nav-link').click()

    cy.wait(3000)

   // cy.go('back')
    
    cy.go(-1) //==> buda onceki sayfaya geri git  demek

    cy.wait(3000)
    //cy.go('forward') // ileri sayfaya git
    cy.go('forward') // forwardla ayni islemde kullanilir

    cy.wait(3000)
    cy.reload()

    // NOT JS de tek tirnak cift  tirnak esnekligi var 2 turlude calisir

    






    })

    it.only('Chaing Navigation', () => {

     cy.visit("https://qa-environment.koalaresorthotels.com/") 

    cy.wait(3000)
    
    cy.get('#navLogon > .nav-link').click()
    
    cy.wait(3000)


    cy.wait(3000)
    cy.reload(true)
    //cy.reload(true) sayfayi cashden(hafizadan) degil yeniden yukler

    
   //else if ("chrome-headless".equals(browser)) { 
   // WebDriverManager.chromedriver().setup();
   // driver = new ChromeDriver(new ChromeOptions().setHeadless(true));
   //53-54-55 selenyumda calisir burda degil arkada web browser acilmadan calisir





    })

})