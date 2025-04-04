Cypress.on('uncaught:exception', (err, runnable) => {
       
    return false
 })


class Deposit{
    //RECEIVE TRHOUGH NAVIGATION.
   receive(){
        cy.get("ul > div a").click();
                cy.get("#navigatoraction").type("receive");
                cy.get("li.selected > div.title").click();
                cy.wait(2000)
                cy.get("#btnNext").click();
                cy.wait(2000)
                cy.get('.alert').should('contain','Please select or scan at least one deposit.')
                cy.reload()
                cy.wait(2000)
                cy.get("#receiveOption").select("Select Donor")
                .invoke("val")
                cy.get('#donor_select').click()
                .invoke("val")
                // cy.get("#receiveOption").type("2"); 
                // cy.get("#donor_select").click();
                // cy.get("#vs1__option-2").click();
                // cy.wait(2000)
                // cy.get("button path").click();
                // cy.get("#btnNext").click();
                // cy.get("#donor_select").click();
                cy.get("#vs1__option-4").click();
                cy.wait(2000)
                cy.get("#btnNext").click();
                cy.get("#volume").clear();
                cy.get("#btnNext").click();
                cy.wait(1000)
                //checking required message for volume
                cy.get('.alert').should('contain','The volume for deposit must be greater than zero')
                cy.get("#volume").click().clear();
                cy.get("#volume").type("-100"); 
                cy.get("#btnNext").click();
                cy.wait(2000)
             
                cy.get('.alert').should('contain','The value of the field must be positive number Volume Receive')
                cy.get("#volume").click().clear();
                cy.get("#volume").type("100"); 
                //required message for drop off location
                cy.get("#btnNext").click();
                //manually select dropdown location while the wait is executing
                cy.get("#milkdepot").select("Directly At Milk Bank")
                .invoke("val")
                cy.wait(2000)
                cy.get("#btnNext").click();
                cy.get("#milktype").select("Skim")
                .invoke("val")
                cy.get("#location").select("Freezer 1")
                .invoke("val")
                cy.wait(4000)
                cy.get("#btnNext").click();
                cy.wait(2000)
                //success page information
                cy.get('.alert-success > p').should('exist')
                cy.get('#qz_information').should('exist') 
                cy.get('.btn-link').should('contain','Repeat with Same Donor Information').click()
                cy.get('.btn-link').should('contain','Repeat with Same Donor Information')
                cy.get('.btn-link').should('contain','Reprint Label(s)')
                cy.get('.btn-link').should('contain','Go to Main Menu')

          //Valiadte the route for the link in sucesss page
          
          cy.get('.btn-link').should('contain','Repeat with Same Donor Information')
          cy.get('.btn-link').should('contain','Repeat with Same Donor Information')
          cy.get('.btn-link').should('contain','Reprint Label(s)')
          cy.get('.btn-link').should('contain','Go to Main Menu')

                }
    Dep_link(){
      


      
    }

}
   
export default Deposit

  