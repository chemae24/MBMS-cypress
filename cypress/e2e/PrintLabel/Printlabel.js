
Cypress.on('uncaught:exception', (err, runnable) => {
       
    return false
 })
class PrintLabel{
print_l(){
    //validate print label
    cy.get("ul > div a").click();
    cy.get("#navigatoraction").type("Print Label");
    cy.get("li.selected > div.title").click();
    cy.wait(8000)
    //selecting a donor in the dropdown
    cy.get('#donor_select').click()
    .invoke("val")
    cy.get("#vs1__option-4").click();
    cy.get("#btnSave").click()
    cy.get(".vs__clear").click()
    cy.get("#btnSave").click({force:true})
    cy.wait(4000)
    cy.get('.alert').should('contain','Please either select/scan a donor.')
    cy.get("#btnSave").click({force:true})
    cy.wait(2000)
    cy.get('#scanItem').type('Invalid')
    cy.get('.alert').should('contain','The scanned donor is invalid.')
    cy.reload()
    cy.wait(8000)
    cy.get('#donor_select').click()
    .invoke("val")
    cy.get("#vs1__option-4").click();
    cy.get("#btnSave").click()
    cy.get('.alert').should('contain','Please provide the number of labels to issue.')
    cy.wait(2000)
    //selecting number of label to print
    cy.get("#label_count").select("1")
    cy.get('#printer').should('exist')
    cy.get("#btnSave").click()
    cy.wait(8000)
    cy.get('.alert-success').should('exist')
    cy.get('.alert > .btn').click()
    cy.wait(2000)
    cy.get('.alert > .btn').click()
    cy.wait(2000)
    cy.get('.action-list > :nth-child(1) > a').click()
    cy.wait(2000)
    cy.get("#label_count").select("1")
    cy.get('#printer').should('exist')
    cy.get('#btnSave').click()
    cy.get('.action-list > :nth-child(3) > a').click()
    
}
receivedep(){

}
}

export default PrintLabel
