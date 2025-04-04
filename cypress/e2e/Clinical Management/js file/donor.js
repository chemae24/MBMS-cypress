    Cypress.on('uncaught:exception', (err, runnable) => {
       
        return false
     })
     
     class Manage_Donor{
        Add(){
        cy.get("ul > div a").click();
        cy.get("#navigatoraction").type("Manage donor");
        cy.get("li:nth-of-type(2) > div.title").click();
        cy.get('.dropdown > .btn').click()
        cy.get('[href="/donor/edit"]').click()
        cy.wait(3000)
        cy.get("#btnSaveAndPreview").click();
        cy.get('.col-10 > :nth-child(1) > :nth-child(2) > .text-danger').should('contain','The following field is required: Donor ID')
        cy.get(':nth-child(4) > .text-danger').should('contain',' The following field is required: Last Name')

        }
     }
     export default Manage_Donor
    
    
    
    