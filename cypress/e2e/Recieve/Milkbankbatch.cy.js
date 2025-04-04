Cypress.on('uncaught:exception', (err, runnable) => {
       
    return false
  })
import milkbatchBatch from './js/milkbankbatch.js'
import Login from '../login'

const MBBatch  = new milkbatchBatch
const log = new Login

describe('VALIDATE LOGIN PAGE', () => {
it('Should be able to Load the site', () => {
    log.navigate()
    log.enterEmail()
    log.enterPassword()
    log.submit()   
    MBBatch.Milkbankbatch_validation()


})

})