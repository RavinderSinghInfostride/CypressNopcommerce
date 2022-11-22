import RegisterAndLoginPage from '../Pages/RegisterAndLoginPage'
const registerAndLoginPage = new RegisterAndLoginPage
import HomePage from '../Pages/HomePage'
const homePage = new HomePage
let websiteUrl = "https://demo.nopcommerce.com/"
Cypress.Commands.add('RegisterAndLogin', () => {
    cy.visit(websiteUrl)
    cy.url().should('include', websiteUrl)
    homePage.navigateToRegisterPage()
    registerAndLoginPage.fillRegistrationDetailsAndRegister()
})

Cypress.Commands.add('UserLogout', () => {
    homePage.logoutFromWebsite()
})