/// references type="cypress"/>


describe('JSON Object', ()=> {
    //JSON--> javaScript Object Notation 
    //Key -VAlue seklınde oldugundan dolayı kullanıslıdır.
    

    it('Json Object', ()=> {


        cy.visit('https://www.google.com')

        const simpleObject={"key1" : "value1",
                            "key2" : "value2" ,
                            "key3" : "value3"  }
        
        console.log(simpleObject.key2)   //value2
        console.log(simpleObject["key2"])   //value2 --> console da yazıdrmamızı saglar

        const simpleArrayOfValue= ["one","two","three"]
        console.log(simpleArrayOfValue[1]) // console da  "two " yazar...


        const arrayObject=[{  "key1" : "value1" },
                            {  "key2" : "value2" },
                            {  "key3" : "value3" }]

        console.log(arrayObject[2].key3)

        const dataType= {" string":"metin" , "number": 15}

        const body={
                     "Student" : [ 
                          {  "FirstName" : "Sena"  ,   "LastName" : "Cengiz" ,  },
                          {  "FirstName" : "Yusuf" ,   "LastName" : "Aslan" ,  },
                          {  "FirstName" : "Halil" ,   "LastName" : "Yavuz" ,  }    
                                  ]
                    }

        console.log(body.Student[2].LastName)  // yavuz console de ya<ar.
        console.log(body.Student[1].FirstName)  //YUSUF 
        console.log(body)  //tum lısteyı yazdırır console da
        


        

        



 })

 it('', ()=> {


 })
 
 })