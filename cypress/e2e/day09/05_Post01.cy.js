/// references type="cypress"/>

describe('POST', ()=> {
      
    const url='https://jsonplaceholder.cypress.io/comments'

    it('test01', ()=> {
        cy.request('POST', url , {
            userId : 501 ,
            title : 'Cypress cok kolay' ,
            body : 'Javascript daha da kolay'

        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.userId).to.eq(501)
            expect(response.title).to.eq('Cypress cok kolay')
            expect(response.body).to.eq('Javascript daha da kolay')
            
        })

 })


 
 })