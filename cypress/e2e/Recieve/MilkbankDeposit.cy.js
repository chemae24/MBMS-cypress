Cypress.on('uncaught:exception', (err, runnable) => {
       
    return false
  })
import MilkbankDeposit from './js/milkbankDeposit'
import Login from '../login'

const MBK = new MilkbankDeposit 
const log = new Login

describe('VALIDATE LOGIN PAGE', () => {
it('Should be able to Load the site', () => {
    log.navigate()
    log.enterEmail()
    log.enterPassword()
    log.submit()   
    MBK.selectmilkbank()


})

})

