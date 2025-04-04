Cypress.on('uncaught:exception', (err, runnable) => {
       
    return false
 })


class Pool{
    //RECEIVE TRHOUGH NAVIGATION.
    pool_fields(){
    cy.get("#inventory-menu > a").click();
    cy.wait(2000)
    cy.get("div:nth-of-type(3) > a").click();
    cy.get("#btnNext").click();
    cy.wait(2000)
    cy.get('#favoriteIcon').click()
    cy.wait(4000)
    cy.get('h1').should('contain','Prepare Pool')
    cy.get('#btnNext').should('exist')
    cy.get('.btn-danger').should('exist')

    //REQUIRED FIELDS
    }
    prepare_pool(){
        cy.get("ul > div a").click();
                cy.get("#navigatoraction").type("prepare pool");
                cy.get("li.selected > div.title").click();
                cy.wait(4000)
        cy.get('#btnNext').click()
        cy.wait(4000)
        cy.get('.alert').should('contain','Please scan at least one milk item.')
        //Enter Invalid barcode
        cy.get("#scanItem").click();
        cy.wait(2000)
        cy.get("#scanItem").type("INVALID BARCODE");
        cy.get("#scanItem").type('{enter}')
        cy.get('#btnNext').click()
        cy.get('.alert').should('contain','The selected milk is not valid.')
        cy.get("#btnNext").click();
        cy.get(':nth-child(2) > :nth-child(2) > a > .fas').click()
        cy.wait(2000)
        //valid barcode change the value with the receive deposit
        cy.fixture('BARCODES.json').then((data) => {
            cy.get('#scanItem').type(data.ActiveDeposit.dep1);
        }),
        cy.get('#btnNext').click()
        cy.wait(2000)
        //the ui might change depending on the unit convertion that the client is using for now the unit convertion is using ml only 
        //check the volume it should match in the deposit volume used
        //100 ml deposit is used
        cy.get('.card > p').should('exist')
        cy.get('.card > p').should('contain','100')
        cy.get(':nth-child(2) > label').should('contain','Select storage Location:')
        cy.get('[style="font-size: x-small;"]').should('contain','Assign Volume')
        cy.get('.mb-2 > .form-group > label').should('contain','Please select which printer you wish to print the label with.')
        cy.get("#printer").should('exist')
        cy.get("#pool_volume").clear()
        cy.get("#pool_volume").type("0")
        cy.get('#btnNext').click()
        //error message should display
        cy.get('.alert').should('contain','The volume of each new item (i.e. new or original) must be a number greater than zero.')
        cy.get("#pool_volume").clear()
        cy.get("#pool_volume").type("-100")
        cy.wait(2000)
        cy.get('.alert').should('contain','The volume of each new item (i.e. new or original) must be a number greater than zero.')
        cy.get("#pool_volume").clear()
        cy.get("#pool_volume").type("100")
        cy.wait(2000)
        cy.get('#btnNext').click()
        //sucess page of pool
      
       cy.get(".action-list").should('contain','Prepare Another Pool')
       cy.get(".action-list").should('contain','Create Batch(es) with Pool Barcode')
       cy.get(".action-list").should('contain','Go to Main Menu')
       cy.get(".action-list").should('contain','Create Batch(es) with Pool Barcode').dblclick()
    }
    
    //used expired deposit
    used_Dep(){
        cy.get("#inventory-menu > a").click();
        cy.wait(2000)
        cy.get("div:nth-of-type(3) > a").click();
        cy.get("#btnNext").click();
        cy.wait(2000)
        cy.get('#favoriteIcon').click()
        cy.wait(4000)
        cy.get('h1').should('contain','Prepare Pool')
        cy.get('#btnNext').should('exist')
        cy.get('.btn-danger').should('exist')
        cy.get("#scanItem").type("DEP013864");
        cy.get("#scanItem").type('{enter}')
        cy.get('#btnNext').click()
        cy.get('.alert').should('contain','The selected milk has no remaining volume or has already been fully used.')
        cy.reload()

        cy.get('#breadcrumb > :nth-child(1) > a').click()
        cy.wait(2000)
    }
    //used disposed deposit barcode

   //used deposit coming from group deposit to prepare pool
   Group_dep(){

   }
   //used deposit with hardstop donor requirement
   Hardstop_barcode(){

   }
   Unapproved_Donor(){
    cy.get("#scanItem").type("DEP012115");
    cy.get("#scanItem").type('{enter}')
    cy.get('#btnNext').click()
    cy.get('.alert').should('contain','The donor has not been approved.')
    cy.reload()
    cy.get("#scanItem").type("DEP013874");
    cy.get("#scanItem").type('{enter}')
    cy.get('#btnNext').click()
    cy.get('.alert').should('contain','The selected milk has already been disposed.')
    cy.get('#breadcrumb > :nth-child(1) > a').click()
    cy.wait(2000)


   }
  

}
   
export default Pool

  