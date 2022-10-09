/// references type="cypress"/>


//--> endpoınt --> https://jsonplaceholder.cypress.io/comments
/*
{
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
*/

describe('Place HOlder Test', ()=> {
    const url='https://jsonplaceholder.cypress.io/comments'

    it('Test01', ()=> {

        cy.request(url).should( (response) => {
            assert.equal(response.status,200)
            assert.equal(response.body[0].postId,1)
            assert.equal(response.body[0].name,'id labore ex et quam laborum')
            assert.equal(response.body[0].email,'Eliseo@gardner.biz')
            
        })

 })


 /*
{
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
*/

    it('Test02 expect ile aSSEERT ', ()=> {
        cy.request(url).should( (response) => {
            expect(response.status).to.eq(200)
            expect(response.body[0].postId).to.eq(1)
            expect(response.body[0].name).to.eq('id labore ex et quam laborum')
            expect(response.body[0].email).to.eq('Eliseo@gardner.biz')



        })


    })

    it('Test03 ', ()=> {
       
        cy.request({
            url: url,
            method: 'GET'
                    }).should((response) =>{
                                 expect(response.status).to.eq(200)
                                 expect(response.body[0].postId).to.eq(1)
                                 expect(response.body[0].name).to.eq('id labore ex et quam laborum')
                                 expect(response.body[0].email).to.eq('Eliseo@gardner.biz')

        })
         
    })
 
 })