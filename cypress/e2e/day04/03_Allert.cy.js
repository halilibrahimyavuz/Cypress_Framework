
/// references type="cypress"/>

describe('Allerts Test', ()=> {

    it.only('TC01', ()=> {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        //cypress otomatık olarak tamam butonuna tıklar

        cy.wait(3000)
        cy.get(':nth-child(1) > button').click()

        cy.get('#result').should('have.text', 'You Successfully clicked an alert')
                
        


 })

 it('Accept alert test ', ()=> {

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    //cypress otomatık olarak tamam butonuna tıklar

    cy.wait(3000)
    cy.get(':nth-child(2) > button').click()
    //2. secenek var ıptal ve tamam cypress otomatık olarak tamam a tıklar

    //tamama a tıkladıgını dogurlarız
    cy.get('#result').should('have.text','You clicked: Ok')


    
    

})
it('Dismiss Alert test', ()=> {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    //cypress otomatık olarak tamam butonuna tıklar bız dısmıss yapacagız

    cy.wait(3000)
    cy.get(':nth-child(2) > button').click()
    cy.wait(3000)

    //dismiss yaptıracagız iptal e tıklatacagız --> cy.on() ıle yaparız
    cy.on('window:confirm', () => {
            return false 
        //default olarak cypress true oalrak dondurur ve tamam a tıklatıyor
    })

    cy.get('#result').should('have.text','You clicked: Cancel')

    // on()  --> jQuery bır fonksıyondur
    //browserlarda acılan wındowlar için kullanılır
    

})
it.only('Alleert text send test', ()=> {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

   //window acılan pencerılerı konjterol etmek ıcın kullanırız
   //acılacak pencerelerı kontrol ediyoruz
    cy.window().then(($windowsElement) => {
         //window Element --> prompt a bilgi girer
    cy.stub($windowsElement,'prompt').returns('Cypress Dersi Cok Güzel')
   //prompt= acılan kutunun ıcı dır
    cy.wait(3000)
    cy.get(':nth-child(3) > button').click()
    }) 
    //window Element tanımladık ve prompt komutuyla ıcıne bır sey gomderecegız dedık
    // returns ile de ıcıne text gonderdık
   
  //dogrulamasını da yaptık
    cy.get('#result').should('have.text','You entered: Cypress Dersi Cok Güzel')
    

})

 
 })