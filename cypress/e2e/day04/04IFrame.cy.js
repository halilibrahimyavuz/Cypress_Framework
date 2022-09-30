/// references type="cypress"/>

describe('IFrame Test', ()=> {
    //window sayfası içindeki baska sayfaya olan baglantıdır
     //plugin indirmemiz lazım

    it('TC01', ()=> {
        cy.visit('https://the-internet.herokuapp.com/iframe')

        /* IFrame ile ılgılı
        1-plugın ındır --> https://www.npmjs.com/ --> cypress iframe bul ve oradakı kodu termınale yaz
        npm install -D cypress-iframe,

        2- import plugin =require('cypress-iframe'); bu komutu support -->e2e.js a koydum
 
        3- bu işlmelerde sonra cy.frameLoaded() VE cy.iframe()  komutlarına ulasabılecegız.
        */

        cy.frameLoaded('#mce_0_ifr')
        //selenıum da --> driver.swichtTo.frame('mce_0_ifr') 

        //p tagını bul clear yap ıcını sıl 
        cy.iframe().find('p').clear()

        cy.iframe().find('p').type('Cypress dersindesin...')
    
        cy.get('.large-4 > div > a').should('contain.text','Elemental Selenium').click()
        // click yapınca yenı sayfada actı ancak benım dıreverim ılk sayfada kaldı

        



 })

 it('', ()=> {


 })
 
 })