/// references type="cypress"/>

describe('POST2', ()=> {
      
    

    it('test01', ()=> {
        const bodyRequest ={"name":"Cypress","salary":"50000","age":"30"}

        cy.request({
            url:'https://dummy.restapiexample.com/api/v1/create' ,
            method :'POST' ,
            body : bodyRequest             
        }).then(response =>{
            expect(response.status).to.eq(200)
            expect(response.body.status).to.eq('success')
            expect(response.body.message).to.eq('Successfully! Record has been added.')

        })

 })


 
 })