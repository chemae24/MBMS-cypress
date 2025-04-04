Cypress.on('uncaught:exception', (err, runnable) => {
       
    return false
  })
  
  import login from '../login'
  import Manage_Donor from './js file/donor'
    const donor = new Manage_Donor()
   describe('VALIDATE LOGIN PAGE', () => {
        it('Should be able to Load the site', () => {
        login.navigate()
        login.enterEmail()
        login.enterPassword()
        login.submit()
        donor.Add()
      })
    
    })