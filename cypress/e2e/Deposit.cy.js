Cypress.on('uncaught:exception', (err, runnable) => {
       
    return false
  })
  
     import Deposit from './Deposit'
     import Login from './login'
     const log = new Login
     const Dep = new Deposit()

     
     describe('VALIDATE LOGIN PAGE', () => {
      it('Should be able to Load the site', () => {
        log.navigate()
        // login.Incorrect_credential()
        log.enterEmail()
        log.enterPassword()
        log.submit()
        Dep.receive()
        // Dep.Dep_path()
        // log.logout()
      })
      it('should create another deposist using other link in sucess page')
    
    })