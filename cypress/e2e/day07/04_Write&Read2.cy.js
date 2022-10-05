/// references type="cypress"/>

describe('Write & Read File 2', ()=> {

    it('Write-read -JSON Fİle', ()=> {

    cy.writeFile('./cypress/e2e/day07/UserData.json',{ name: 'Eliza', 
    email: 'eliza@example.com'})
    

    cy.readFile('./cypress/e2e/day07/UserData.json').then( (user) =>{
        expect(user.name).to.equal('Eliza')
    } )
    
 })


   

 
 })