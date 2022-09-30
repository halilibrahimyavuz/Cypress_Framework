/// references type="cypress"/>

describe('Drag And Drop', ()=> {

    it('DragAndDrop', ()=> {

        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')

        // tut ve tasıma ıslemı plugın ıle oluyor
        // -- https://www.npmjs.com/package/@4tw/cypress-drag-drop

       // cy.get('#column-a').wait(4000).drag('#column-b') --> buda calıstı ancak a yı b nın ustuen bırakıyor ancak b ıle a yer degıstırmıyor
      
       //google ıle bulunan yontem
       const dataTransfer = new DataTransfer();
        cy.get('#column-a').trigger('dragstart', {
          dataTransfer
        })
        cy.get('#column-b').trigger('drop', {
          dataTransfer
        })



 })

 
 })