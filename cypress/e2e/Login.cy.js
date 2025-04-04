Cypress.on('uncaught:exception', (err, runnable) => {
       
    return false
  })
  
  import login from './login'

   describe('VALIDATE LOGIN PAGE', () => {
        it('Should be able to Load the site', () => {
        login.navigate()
        login.Incorrect_credential()
        login.enterEmail()
        login.enterPassword()
        login.submit()
      })
    
    })