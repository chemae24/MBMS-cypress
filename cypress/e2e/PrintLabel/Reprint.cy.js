Cypress.on('uncaught:exception', (err, runnable) => {
       
    return false
  })
  
  import Login from '../login'
  import r_print from './reprint'
  
  const log = new Login
  const rprint = new r_print

 
  describe('VALIDATE LOGIN PAGE', () => {
    it('Should be able to Load the site', () => {
      log.navigate()
      log.enterEmail()
      log.enterPassword()
      log.submit()   
      // rprint.Deposit_validation()
      // // rprint.Deposit()
      // rprint.pool_validation()
      // rprint.reprint_pool()
      // rprint.batch_validation()
      // rprint.reprint_batch()
      // rprint.batch_select()
      rprint.order_validation()
      rprint.reprint_order()
      rprint.reprint_ordersummary()

    })
    
    })