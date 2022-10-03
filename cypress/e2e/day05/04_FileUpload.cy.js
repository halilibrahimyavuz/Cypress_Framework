/// references type="cypress"/>

describe('File Upload Test', ()=> {

    it('Single File Upload ', ()=> {
        //https://www.npmjs.com/package/cypress-file-upload
        //npm install --save-dev cypress-file-upload
     //attachFile --> dosya yüklemeyle alakalı 
      
     cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

     cy.wait(3000)
   
     const path1="bir.jpg"
     cy.get('#filesToUpload').attachFile(path1)

     cy.get('#fileList > li').should('include.text','bir.jpg')



 })

 it('Multiple File Upload1', ()=> {
   
    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
  const path1="bir.jpg"
  const path2="iki.jpg"
  const path3="uc.jpg"

  cy.get('#filesToUpload').attachFile(path1)
                         .wait(2000)
                          .attachFile(path2)
                          .wait(2000)
                          .attachFile(path3)




 })

 it('Multiple File Upload3', ()=> {
   
    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
    const path1="bir.jpg"
    const path2="iki.jpg"
    const path3="uc.jpg"

   cy.get('#filesToUpload').attachFile([path1,path2,path3])
   
   cy.get('#fileList > :nth-child(1)').should('have.text','bir.jpg') // bırebır aynı olmak zırunda
   cy.get('#fileList > :nth-child(2)').should('include.text','iki.jpg') //iceriyormu?
   cy.get('#fileList > :nth-child(3)').should('contain.text','uc.jpg')  //iceriyormu

})


it.only('OverWrite  File Name ', ()=> {
   
    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
  
    const path1="bir.jpg"
   cy.get('#filesToUpload').attachFile({filePath:  path1, fileName: 'image01.jpg'})

   // verdıgımız path dekı dosyanın ısmını degıstırerek gonderıyor
   
})
 
 })