class HomePage{
    getSigninLink(){
       return cy.get('[href="/login"] > .header__option > .header__lineTwo')
        // return cy.contains('Sing In')
    }
}
export default HomePage




