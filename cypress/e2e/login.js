Cypress.on('uncaught:exception', (err, runnable) => {
       
    return false
 })
 import { PassThrough } from "stream"

class Login {

    constructor() {
        this.url = "https://mbmswebverify3.internal.timelessmedical.com/login"
    }

    navigate(){
        cy.viewport(1377, 945);
        cy.visit(this.url);
        cy.get("div.text-center > input").click();
        cy.location("href").should("eq", this.url);
   
    }
    enterEmail() {
         cy.viewport(1920 ,1080)
         cy.get('#loginName')
         .type('mmbadmin@timelessmedical.com').should('have.value', 'mmbadmin@timelessmedical.com')
       
    }      
    enterPassword() {
        cy.viewport(1920 ,1080)
         cy.get('[id=password]')
         .type('T1mele$$').should('have.value', 'T1mele$$')
    }
    submit() {
        cy.viewport(1920 ,1080)
        cy.get('[type=submit]').click()
        cy.wait(4000)

      
    }
    logout(){
        cy.viewport(1920 ,1080)
        cy.get("#main-navbar li:nth-of-type(5) > a").click();
        cy.get('[rel="logout"]').click()
        cy.wait(2000)
        cy.get('.text-danger').click({force:true})
       //failed to load the site while clicking logout button
    }
    //incorrect credential validation
    Incorrect_credential(){
        cy.viewport(1920 ,1080)
        cy.get('#loginName')
        .type('#!234').should('have.value', '#!234')
        cy.get('[id=password]')
         .type('timeless').should('have.value', 'timeless')
         cy.wait(4000)
        cy.get('[type=submit]').click()
        cy.get('.alert').should('contain','The email and password you entered is not correct.')
        cy.reload()
        cy.wait(4000)
    }

  }


  const login = new Login()

  export default login

  