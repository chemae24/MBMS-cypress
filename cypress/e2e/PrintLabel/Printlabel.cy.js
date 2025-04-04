Cypress.on('uncaught:exception', (err, runnable) => {
       
    return false
  })
import PrintLabel from './Printlabel'
import Login from '../login'

const print = new PrintLabel
const log = new Login

describe('VALIDATE LOGIN PAGE', () => {
it('Should be able to Load the site', () => {
    log.navigate()
    log.enterEmail()
    log.enterPassword()
    log.submit()   
    print.print_l()
})

})

