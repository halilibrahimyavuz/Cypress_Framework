/// references type="cypress"/>

describe('DELETE', ()=> {
      
    

    it('test01', ()=> {
      
        cy.request({
            url : 'https://dummy.restapiexample.com/api/v1/delete/2',
            method :'DELETE'                          
         }).then(response => {
            expect( response.body.status).to.equal('success')
            expect( response.body.message).to.equal('Successfully! Record has been deleted')
         })

        })

 })


 
