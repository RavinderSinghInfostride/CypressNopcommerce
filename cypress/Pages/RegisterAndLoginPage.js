import Chance from 'chance'
const chance = new Chance()
const firstName = chance.first()
const lastName = chance.last()
const email = chance.email()

let registrationData
before(() => {
    cy.fixture('UserRegisterDetails').then((testData) => {
        registrationData = testData
    })
})

class RegisterAndLoginPage {
    firstNameInputBox = "//input[@name='FirstName']"
    lastNameInputBox = "//input[@name='LastName']"
    emailInputBox = "//input[@name='Email']"
    passwordInputBox = "//input[@name='Password']"
    confirmPasswordInputBox = "//input[@name='ConfirmPassword']"
    registerButton = "//button[contains(@class,'register-next-step-button')]"
    registerSuccessfullVerification = "//div[@class='result']"
    afterRegistrationContinueLink = "//a[contains(@class,'register-continue-button')]"
    loginButton = "//button[contains(@class,'login-button')]"

    fillRegistrationDetailsAndRegister() {
        cy.xpath(this.firstNameInputBox).type(firstName)
        cy.xpath(this.lastNameInputBox).type(lastName)
        cy.xpath(this.emailInputBox).type(email)
        cy.xpath(this.passwordInputBox).type(registrationData.password)
        cy.xpath(this.confirmPasswordInputBox).type(registrationData.password)
        cy.xpath(this.registerButton).click()
        cy.xpath(this.registerSuccessfullVerification).should('have.text', 'Your registration completed')
        cy.xpath(this.afterRegistrationContinueLink).click()
        cy.screenshot()
    }

    login() {
        cy.xpath(this.emailInputBox).type(email)
        cy.xpath(this.passwordInputBox).type(registrationData.password)
        cy.xpath(this.loginButton).click()
    }
}
export default RegisterAndLoginPage