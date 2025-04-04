Cypress.on('uncaught:exception', (err, runnable) => {
       
    return false
 })
class batch{
batch_validation(){
    cy.get("ul > div a").click();
    cy.get("#navigatoraction").type("prepare batch");
    cy.wait(2000)
    cy.get("li.selected > div.title").click();
    cy.wait(2000)
    //Pool fields validation
    cy.get("#scanItem").type("3424324");
    cy.get('.alert').should('contain','Please scan valid pool barcode.')
    cy.get("#scanItem").clear()
    cy.get('.btn-primary').click();
    cy.get('.alert').should('contain','Please scan or enter a barcode to proceed.')
    cy.get('#btnClear').click()
    cy.reload()
    //pool already used
    cy.get("#scanItem").type("001158");
    cy.get('.alert').should('contain','The pool has no volume and cannot be used, please use another pool to continue.')
    //enter valid pool barocde
    //try scanning expired pool
    //scan disposed pool
    //inactive pool
    //pool that is used in batch already
    

}
prepbatch(){
    cy.get('#inventory-menu').click()
    cy.get('[bind="6"] > a').click()
    cy.get("#scanItem").type("001169");
    cy.get('.btn-primary').click();
    cy.wait(2000)
    cy.get("#scanItem").should('exist')
    cy.get('.mt-4 > .card').should('exist')
    cy.get('#bottleTypes').should('exist')
    cy.get("#pasteurizer").should('exist')
    cy.get('#milkPasteurizationDate').should('exist')
    cy.get("#location").select("Freezer 1")
    cy.get('#barcodeVersion').select('3')
    cy.get("#btnSave").click();
    cy.get('.swal2-cancel').click()
    cy.get('.alert').should('contain','Please scan or enter a barcode to proceed.')
    //this can change it's value depending on the pasteurization you select
    cy.get('#newLabels_1').select('2')
    cy.get("#btnSave").click();
    //Validate all the information if it maches the information provided in preparing batch
    //Manually Change the infromation when comparing the data to the prepared batch
    cy.get('#swal2-title').should('contain','Is all the selected information for the batch correct?')
    cy.get('[style="width: 40%; padding-right: 10px;"]').should('exist')
    cy.get(':nth-child(2) > [style="padding-right: 10px;"]').should('exist')
    cy.get(':nth-child(3) > [style="padding-right: 10px;"]').should('exist')
    cy.get(':nth-child(4) > [style="padding-right: 10px;"]').should('exist')
    cy.get(':nth-child(5) > [style="padding-right: 10px;"]').should('exist')
    cy.get(':nth-child(6) > [style="padding-right: 10px;"]').should('exist')
    cy.get(':nth-child(7) > [style="padding-right: 10px;"]').should('exist')
    cy.get(':nth-child(8) > [style="padding-right: 10px;"]').should('exist')
    cy.get('.swal2-confirm').click()
    cy.wait(2000)
    cy.get('.alert-success').should('contain','You have successfully created the batch.')
    cy.get('#success-text').should('exist')
    cy.get('#qz_information > .btn').click()
    cy.wait(2000)
    cy.get('.action-list > :nth-child(1) > a').should('exist')
    cy.get('.action-list > :nth-child(2) > a').should('exist')
    cy.get('.action-list > :nth-child(1) > a').click()

    //batch validation
    //click save button without selecting a bottle
    //select batch without version barcode if app setting is true
    //modal components when preparing batch
    //ensure that the information match the data in each fields
}

    used_pool(){

    }

}
export default batch