Cypress.on('uncaught:exception', (err, runnable) => {
       
    return false
  })
  
     import Deposit from './Deposit'
     import Login from './login'
     import Pool from './Pool'
     const log = new Login
     const Dep = new Deposit()
     const pol = new Pool()
     
     describe('VALIDATE LOGIN PAGE', () => {
      it('Should be able to Load the site', () => {
        log.navigate()
        // login.Incorrect_credential()
        log.enterEmail()
        log.enterPassword()
        log.submit()      
        // pol.pool_fields()
        // pol.Unapproved_Donor()
        // pol.used_Dep()
        pol.prepare_pool()
  
        // pol.prepare_pool()
        // pol.pool_fields()
      })
    
    })