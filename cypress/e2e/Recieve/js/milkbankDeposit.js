class MilkbankDeposit{

selectmilkbank(){
    cy.get('#receive-menu > .nav-link > .menu-text').click();
    cy.get('[bind="1"] > a').click()
    cy.wait(4000)
    // cy.get('[bind="2"] > a').click()
    cy.get('#btnNext').click()
    cy.wait(2000)
    cy.get('.alert').should('contain','Please either select/scan a milkbank.')
    cy.get('.card > :nth-child(1)').should('exist')
    cy.get('.vs__actions').click();
    cy.get("#milkbank_select").click();
    cy.get("#vs1__option-3").click();
    cy.get("#btnNext").click();
    cy.get('.sub-menu').should('exist')
    cy.get('#milk').should('exist')
    cy.get(':nth-child(3) > label').should('exist')
    cy.get(':nth-child(2) > :nth-child(4) > label').should('exist')
    cy.get("#volume").click();
    cy.get("#location").select("Freezer 1")
    .invoke("val")
    cy.get('#btnBack').click()
    cy.wait(5000)
    cy.get("#milkbank_select").type('Test{Enter}')
    cy.wait(4000)
    cy.get("#btnNext").click();
     cy.get("#volume").should('be.visible')
     /cy.get("#btnNext").click();
     cy.wait(2000)
     cy.get(".alert").should('contain','Please select printer.')
     cy.get("#volume").clear()
     cy.get("#volume").type('-100')
     /cy.get("#btnNext").click();
     cy.get(".alert").should('contain','The value of the field must be positive number')
     cy.get("#volume").clear('100')
     cy.get("#location").select("Freezer 1")
     .invoke("val")
     cy.get('#printer').should('exist')
     /cy.get("#btnNext").click();
     cy.get("#volume").type('100')
    cy.get("#btnNext").click();
  //success page information
  cy.get('.alert-success > p').should('exist')
  cy.get('#qz_information').should('exist') 
  cy.get('.btn-link').should('contain','Repeat with Same Donor Information')
  cy.get('.btn-link').should('contain','Repeat with Same Donor Information')
  cy.get('.btn-link').should('contain','Reprint Label(s)')
  cy.get('.btn-link').should('contain','Go to Main Menu')

    // cy.get("#main-content li:nth-of-type(1) > a").click();
}








}
export default MilkbankDeposit