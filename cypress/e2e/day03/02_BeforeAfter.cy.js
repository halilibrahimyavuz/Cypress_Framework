/// <reference types="cypress" />

describe('Befor After', () => {

    before( () =>{//befora butun test clasimdan once calsiir
   cy.log('Her Test Dosyasindan once bir kere calisacak bu class da calisacak')
    })

    
    after( () =>{//befora butun test clasimdan once calsiir
        cy.log('Her Test Dosyasindan SONRA bir kere calisacak bu class da calisacak')
         })

    beforeEach( () =>{//befora butun test clasimdan once calsiir
    cy.log('Her Testen once bir kere calisacak bu class da calisacak')
    })
    
    afterEach( () =>{//befora butun test clasimdan once calsiir
        cy.log('Her Testen sonra bir kere calisacak bu class da calisacak')
        }) 

    it('Test Case 1', () => {

     cy.log('Test Case 1')

    })

    it('Test Case 2', () => {

        cy.log('Test Case 2')







    })

})