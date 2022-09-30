/// references type="cypress"/>

describe(' Check Boxes ', ()=> {

    it('Single CheckBox', ()=> {

        cy.visit('http://automationpractice.com/index.php')

        //first --> eleemnetın 1. sıne gıt ve tıkla yanı o sayfada bu elementten 4 5 tane olabılır sadece 1. sını ıstersen bunu kullan
        //  cy.get("a[title='Women']").first().click()

        //eq--> index mantıgında 0 yazınca 1. elemente tıklar
        cy.get("a[title='Women']").eq(0).click()


        //not be checked --> tıklı degılmiyi dogrular
        cy.get('#layered_category_4').should('not.be.checked')

        //check --> kutuya tıklar clıck gıbı
        //be.checked --> tıklımı dogrular

        cy.get('#layered_category_4').check().should('be.checked')

//UNCHECK tıklamayı kadır 
        cy.get('#layered_category_4').uncheck().should('not.be.checked')





 })

 it('All CheckBox 01 ', ()=> {
    cy.visit('http://automationpractice.com/index.php')

    cy.get("a[title='Women']").eq(0).click()
    //type=checkbox olan 19 tane checkbox var
    cy.get("input[type='checkbox']").check()

    cy.wait(5000)

    // 19 tane tıklı haldekı checkbox ın tıklarını kaldırır.
    cy.get("input[type='checkbox']").uncheck()

})


 it('All CheckBox 02', ()=> {

    cy.visit('http://automationpractice.com/index.php')

    cy.get("a[title='Women']").eq(0).click()

        //1. kutuya tıkla 
        cy.get("input[type='checkbox']").eq(0).check().should('be.checked')
        cy.wait(2000)
        //5. kutuya tıkla 
        cy.get("input[type='checkbox']").eq(4).check().should('be.checked')
        cy.wait(2000)

        //12. kutuya tıkla
        cy.get("input[type='checkbox']").eq(11).check().should('be.checked')
        cy.wait(2000)



        //1. tıkını kadlır
        cy.get("input[type='checkbox']").eq(0).uncheck().should('not.be.checked')
        cy.wait(2000)


        


})

it.only('All Checkbox 3', ()=> {
    cy.visit('http://automationpractice.com/index.php')

    cy.get("a[title='Women']").eq(0).click()

    //19 tane oldugu ıcın clck komutunu dırek calıstırmaz multıple true ıle calısır
    cy.get("input[type='checkbox']").click({ multiple: true })

    cy.wait(5000)
    //1. checkbox (first) tıklımı kontrol dogrulaması 
    cy.get("input[type='checkbox']").first().parent().should('have.class','checked')

    cy.get("input[type='checkbox']").parent().should('have.class','checked')





})


 
 })