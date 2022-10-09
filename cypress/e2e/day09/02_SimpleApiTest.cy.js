/// references type="cypress"/>

// https://jsonplaceholder.cypress.io/comments

describe(' Simple APİ Test', ()=> {
    
    const requestURL = 'https://jsonplaceholder.cypress.io/comments'

    it('Header Assert1 ', ()=> {
        cy.request(requestURL)
                        .its('headers')
                        .its('content-type')
                        .should('include','application/json; charset=utf-8')

     })



    it('Header Assert2', ()=> {
        cy.request( {
            url :'https://jsonplaceholder.cypress.io/comments' ,
            //url=requestURL
            method : 'GET'     }).its('headers')
                                 .its('content-type')
                                .should('include','application/json; charset=utf-8')


 })
 
 })