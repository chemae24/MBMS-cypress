
    Cypress.on('uncaught:exception', (err, runnable) => {
       
        return false
     })
    
     class r_print{
        Deposit_validation(){
            cy.get("ul > div a").click();
            cy.get("#navigatoraction").type("Reprint Label");
            cy.get("li.selected > div.title").click();
            cy.get('#btnSave').click()
            cy.get('.alert').should('contain','The following field cannot be empty or invalid:')
            cy.get('.alert').should('contain','Label Type')
            cy.get('#item_type').invoke("val",)
            cy.get('#item_type').select('Deposit Barcode Label(s)')
            cy.get('#btnSave').click()
            cy.get('.alert').should('contain','The following field cannot be empty or invalid:')
            cy.get('.alert').should('contain','Barcode to Reprint')
            cy.get('#item_type').invoke("val",)
            cy.get('#item_type').select('Deposit Barcode Label(s)')
            cy.get('#scanItem').type('Invalid')
            cy.get('#btnSave').click()
            cy.get('.alert').should('contain','The following field cannot be empty or invalid:')
            cy.get('#scanItem').clear()
        }
         
          //press enter on barcode field
          

Deposit(){
    cy.get("ul > div a").click();
    cy.get("#navigatoraction").type("Reprint Label");
    cy.get("li.selected > div.title").click();
    cy.get('#item_type').invoke("val",)
    cy.get('#item_type').select('Deposit Barcode Label(s)')
    cy.wait(2000)
    cy.fixture('BARCODES.json').then((data) => {
        cy.get('#scanItem').type(data.ActiveDeposit.dep1);
    }),
    
    cy.get("#label_count").select("1")
    cy.get('#printer').should('exist')
    cy.get("#btnSave").click()
    cy.get('.alert-success').should('contain','You have successfully reprinted the following milk barcode Label.')
    cy.get('#qz_information > .btn').click()
    cy.wait(4000)
    cy.get('#qz_information > .btn').click()
    cy.get('.action-list > :nth-child(2) > a').click()
}


       
    pool_validation(){
            cy.get("ul > div a").click();
            cy.get("#navigatoraction").type("Reprint Label");
            cy.get("li.selected > div.title").click();
            cy.get('#btnSave').click()
            cy.get('.alert').should('contain','The following field cannot be empty or invalid:')
            cy.get('.alert').should('contain','Label Type')
            cy.get('#item_type').invoke("val",)
            cy.get('#item_type').select('Pool Label(s)')
            cy.get('#btnSave').click()
            cy.get('.alert').should('contain','The following field cannot be empty or invalid:')
            cy.get('.alert').should('contain','Barcode to Reprint')
            cy.get('#item_type').invoke("val",)
            cy.get('#item_type').select('Pool Label(s)')
            cy.get('#scanItem').type('Invalid')
            cy.get('#btnSave').click()
            cy.get('.alert').should('contain','The following field cannot be empty or invalid:')
            cy.get('#scanItem').clear()
            cy.wait(2000)
            //the value can be changed
            // cy.get('#item_type').invoke("val",)
            // cy.get('#item_type').select('Pool Label(s)')
         
        }
        reprint_pool(){
            cy.get("ul > div a").click();
            cy.get("#navigatoraction").type("Reprint Label");
            cy.get("li.selected > div.title").click();
            cy.get('#btnSave').click()
            cy.get('#item_type').invoke("val",)
            cy.get('#item_type').select('Pool Label(s)')
            cy.get("#label_count").select("1")
            // cy.get('#scanItem').focus().type("001503 {Enter}")
            cy.fixture('BARCODES.json').then((data) => {
                cy.get('#scanItem').type(data.POOL)
                cy.get('#scanItem').type('{Enter}');
            }),
            cy.wait(4000)
            cy.log('press the barcode field and add one space then enter')
            cy.get('#printer').should('exist')
            cy.get("#btnSave").click() 
            cy.get('.alert-success').should('contain','You have successfully reprinted the following milk barcode Label.')
            cy.get('#qz_information > .btn').click()
            cy.wait(4000)
            cy.get('#qz_information > .btn').click()
            cy.get('.action-list > :nth-child(1) > a').click()
        }
        batch_validation(){
            cy.get("ul > div a").click();
            cy.get("#navigatoraction").type("Reprint Label");
            cy.get("li.selected > div.title").click();
            cy.get('#btnSave').click()
            cy.get('.alert').should('contain','The following field cannot be empty or invalid:')
            cy.get('.alert').should('contain','Label Type')
            cy.get('#item_type').invoke("val",)
            cy.get('#item_type').select('Batch Barcode Label(s)')
            cy.get('#btnSave').click()
            cy.get('.alert').should('contain','The following field cannot be empty or invalid:')
            cy.get('.alert').should('contain','Barcode to Reprint')
            cy.get('#item_type').invoke("val",)
            cy.get('#item_type').select('Batch Barcode Label(s)')
            cy.get('#scanItem').type('Invalid')
            cy.get('#btnSave').click()
            cy.get('.alert').should('contain','The following field cannot be empty or invalid:')
            cy.get('#scanItem').clear()
            cy.wait(2000)
            // cy.get('.bold').click()
            //the value can be changed
        }
        reprint_batch(){
            cy.get("ul > div a").click();
            cy.get("#navigatoraction").type("Reprint Label");
            cy.get("li.selected > div.title").click();
            cy.get('#btnSave').click()
            cy.get('#breadcrumb > :nth-child(1) > a > .fas').click()
            cy.get("ul > div a").click();
            cy.get("#navigatoraction").type("Reprint Label");
            cy.get("li.selected > div.title").click();
            cy.get('#item_type').invoke("val",)
            cy.get('#item_type').select('Batch Barcode Label(s)')
            cy.get("#batchLabelSelect").select("Full Batch")
            cy.get("#barcodeVersion").select("Version 3")
            cy.get('#scanItem').focus().type('000558-1{Enter}')
            cy.wait(8000)
            cy.log('press the barcode field and add one space then enter')
            //press enter
            cy.get('#printer').should('exist')
            cy.get("#btnSave").click() 
            cy.get('.alert-success').should('contain','You have successfully reprinted the following milk barcode Label.')
            cy.get('#qz_information > .btn').click()
            cy.wait(4000)
            cy.get('#qz_information > .btn').click()
            cy.get('.action-list > :nth-child(2) > a').click()
        }
        batch_select(){
            cy.get("ul > div a").click();
            cy.get("#navigatoraction").type("Reprint Label");
            cy.get("li.selected > div.title").click();
            cy.get('#btnSave').click()
            cy.get('#breadcrumb > :nth-child(1) > a > .fas').click()
            cy.get("ul > div a").click();
            cy.get("#navigatoraction").type("Reprint Label");
            cy.get("li.selected > div.title").click();
            cy.get('#item_type').invoke("val",)
            cy.get('#item_type').select('Batch Barcode Label(s)')
            cy.get("#batchLabelSelect").select("Select Labels")
            cy.get("#barcodeVersion").select("Version 4")
            cy.get('#scanItem').focus().type('000558-1{Enter}')
            cy.get('#batch_label_count').invoke("val",)
            cy.get('#batch_label_count').select("1",)

            cy.wait(8000)
            cy.log('press the barcode field and add one space then enter')
            //press enter
            cy.get('#printer').should('exist')
            cy.get("#btnSave").click() 
            cy.get('.alert-success').should('contain','You have successfully reprinted the following milk barcode Label.')
            cy.get('#qz_information > .btn').click()
            cy.wait(4000)
            cy.get('#qz_information > .btn').click()
            cy.get('.action-list > :nth-child(2) > a').click()
        }

        order_validation(){
            cy.get("ul > div a").click();
            cy.get("#navigatoraction").type("Reprint Label");
            cy.get("li.selected > div.title").click();
            cy.get('#btnSave').click()
            cy.get('.alert').should('contain','The following field cannot be empty or invalid:')
            cy.get('.alert').should('contain','Label Type')
            cy.get('#item_type').invoke("val",)
            cy.get('#item_type').select('Order Barcode Label(s)')
            cy.get('#btnSave').click()
            cy.get('.alert').should('contain','The following field cannot be empty or invalid:')
            cy.get('.alert').should('contain','Order Number')
            cy.get('#item_type').invoke("val",)
            cy.get('#item_type').select('Order Barcode Label(s)')
            cy.get('#scanItem').type('Invalid')
            cy.get('#btnSave').click()
            cy.get('.alert').should('contain','The following field cannot be empty or invalid:')
            cy.get('#scanItem').clear()
            cy.wait(2000)
            cy.get('#item_type').select('Order Barcode Label(s)')
            cy.get('#orderLabelSelect').select("Full Batches")
            // cy.get("#barcodeVersion").select("Version 3")
            cy.get('#scanItem').focus().type('ORD000562{Enter}')
            cy.get('.alert').should('contain','The following field cannot be empty or invalid:')
            
            
            cy.wait(8000)
            cy.log('press the barcode field and add one space then enter')
            //press enter
            cy.get('#printer').should('exist')
            cy.get("#btnSave").click() 
            //ready to be dispense status

        }
        reprint_order(){
            cy.get("ul > div a").click();
            cy.get("#navigatoraction").type("Reprint Label");
            cy.get("li.selected > div.title").click();
            cy.get('#btnSave').click()
            cy.get('#breadcrumb > :nth-child(1) > a > .fas').click()
            cy.get("ul > div a").click();
            cy.get("#navigatoraction").type("Reprint Label");
            cy.get("li.selected > div.title").click();
            cy.get('#item_type').invoke("val",)
            cy.get('#item_type').select('Order Barcode Label(s)')
            cy.get('#orderLabelSelect').select("Full Batches")
            // cy.get("#barcodeVersion").select("Version 3")
            cy.get('#scanItem').focus().type('ORD000576{Enter}')
            cy.wait(8000)
            cy.log('press the barcode field and add one space then enter')
            //press enter
            cy.get('#printer').should('exist')
            cy.get("#btnSave").click() 
            cy.get('.alert-success').should('contain','You have successfully reprinted the following milk barcode Label.')
            cy.get('#qz_information > .btn').click()
            cy.wait(4000)
            cy.get('#qz_information > .btn').click()
            cy.get('.action-list > :nth-child(2) > a').click()
        }
        reprint_ordersummary(){
            cy.get("ul > div a").click();
            cy.get("#navigatoraction").type("Reprint Label");
            cy.get("li.selected > div.title").click();
            cy.get('#btnSave').click()
            cy.get('#breadcrumb > :nth-child(1) > a > .fas').click()
            cy.get("ul > div a").click();
            cy.get("#navigatoraction").type("Reprint Label");
            cy.get("li.selected > div.title").click();
            cy.get('#item_type').invoke("val",)
            cy.get('#item_type').select('Order Barcode Label(s)')
            cy.get('#orderLabelSelect').select("Summary")
            // cy.get("#barcodeVersion").select("Version 3")
            cy.get('#scanItem').focus().type('ORD000576{Enter}')
            cy.wait(8000)
            cy.log('press the barcode field and add one space then enter')
            //press enter
            cy.get('#printer').should('exist')
            cy.get("#btnSave").click() 
            cy.get('.alert-success').should('contain','You have successfully reprinted the following milk barcode Label.')
            cy.get('#qz_information > .btn').click()
            cy.wait(4000)
            cy.get('#qz_information > .btn').click()
            cy.get('.action-list > :nth-child(2) > a').click()
        }
        
        Takehome(){
    
        }
     }
     export default r_print