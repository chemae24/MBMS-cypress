
class MilkbatchBatch{

    Milkbankbatch_validation(){
        cy.get('#receive-menu > .nav-link > .menu-text').click();
        cy.get('[bind="2"] > a').click()
        cy.wait(4000)
        // cy.get('[bind="2"] > a').click()
        cy.get('#btnNext').click()
        cy.wait(2000)
        cy.get('.alert').should('contain','Batch Number cannot be empty.')
        cy.get("#scanItem").type("001503-1")
        cy.get("#milkbank_select").click();
        cy.get("#vs1__option-3").click();
        cy.get("#btnNext").click();
        cy.get('#btnNext').click()
        cy.wait(2000)
        cy.get('.alert').should('contain','Expiry date/time field is required.')
        cy.get("#vs1__listbox").should('exist')
        cy.get("#batchInfo").should('exist')
        cy.wait(4000)
        cy.get('#approveBatch').should('not.be.checked')
        cy.get('#approveBatch').check()
        cy.get("#expiryDate").click();
        cy.get("#expiryDate").type("2026-02-28");
        cy.get("#milkLocation").select("Freezer 1")
        cy.get("#pasteurizer").select("19")
        cy.get("#milkPasteurizationDate").click();
        cy.get("#milkPasteurizationDate").type("2025-03-31");
       cy.get("#bottleCount_3").select("3")
        cy.get('#barcodeVersion').select('3')
        cy.get("#btnNext").click();




//checking if the table components is present
        cy.get('#batchInfo').eq(0).find('th').then(($cells) => {
            expect($cells.eq(0)).to.contain('Batch Approved');
            expect($cells.eq(1)).to.contain('Expiry Date');
            expect($cells.eq(2)).to.contain('Storage Location');
            expect($cells.eq(3)).to.contain('Pasteurizer');
            expect($cells.eq(4)).to.contain('Date of pasteurization');
            // ... more checks
          });
//checking if the table components is present in the batch label required.
        cy.get('#tblbatch').eq(0).find('th').then(($cells) => {
            expect($cells.eq(0)).to.contain('20 ml');
            expect($cells.eq(1)).to.contain('50 ml');
            expect($cells.eq(2)).to.contain('90 ml');
            expect($cells.eq(3)).to.contain('100 ml');
            expect($cells.eq(4)).to.contain('120 ml');
            expect($cells.eq(5)).to.contain('130 ml');
            expect($cells.eq(6)).to.contain('200 ml');
            expect($cells.eq(7)).to.contain('250 ml');
            expect($cells.eq(8)).to.contain('300 ml');
            expect($cells.eq(9)).to.contain('400 ml');




            // ... more checks
        });

     
    }
    
    
    
    
    }
    export default MilkbatchBatch
