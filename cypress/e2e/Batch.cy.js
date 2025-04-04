Cypress.on('uncaught:exception', (err, runnable) => {
       
    return false
  })
  
     import Login from './login'
     import batch from './Batch'
     const log = new Login
     const bt = new batch
     
     describe('VALIDATE LOGIN PAGE', () => {
      it('Should be able to Load the site', () => {
        log.navigate()
        // login.Incorrect_credential()
        log.enterEmail()
        log.enterPassword()
        log.submit()   
        bt.batch_validation()   
        bt.prepbatch()
      })
    
    })