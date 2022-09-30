/// references type="cypress"/>

describe('Koala Resolt Hotel', ()=> {

    it('Log in Testi2', ()=> {
            cy.visit('https://qa-environment.koalaresorthotels.com/')

            cy.contains('log in',{matchCase: false}).click()
            //--> {matchCase: false} --> buyuk kucuk harfı FALSE oldugu ıcın dıkkate almıyor


            //ASSERT 
            // LOgın sayfasındakı Assert et
            //1-have.text ---- locate edılen yerdekı text de Log ın yazıyormu dogrular
            cy.get('#navLogon > .nav-link').should('have.text','Log in')

            //2-url den dogrulama
            cy.url().should('include','Account/Logon')

            // ***********************************
            //3-be.visible -- gorunur oldumu dogrular
            cy.get('.row > .mb-4').should('be.visible')

            //4- cy.title  methodu
            cy.title().should('eq','KoalaResortHotels - Log in')

            //5-include.text   log ın locate edılen yerde içeriyormu dıye?
            cy.get('#navLogon > .nav-link').should('include.text','Log in')


            //toplam lınk sayısını bul
           // cy.get('li a').should('have.lenght',45)

           //cy.get().find seklınde kullanılıyor
           //find --> belırlı bır html secımının alt elemanları bulmak ıcın kulanılıur.
           cy.get('li').find('a[href="/Rooms/320"]').should('have.text','Twin 2')

           /*************************************************
            *             Not: Web element once get ıle bulunur sonra find sonra within ile

           1--cy.get()
           2-cy.get.find^
           3-cy.get.within
            */

            // within() -->  fonksıyon olusturyorz locatelerin parent chıld ılıskıse gore
            //parent --> div.categories
            //child  --> a[href="/Rooms/320"]
            cy.get('div.categories').within( ()=> {
                    cy.get('a[href="/Rooms/320"]').click()
            })

          


 })


 
 })