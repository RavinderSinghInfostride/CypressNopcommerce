let checkoutDetailsData
before(() => {
    cy.fixture('CheckoutBillingDetails').then((testData) => {
        checkoutDetailsData = testData
    })
})

class CheckoutPage {
    countryDropdown = "//select[@name='BillingNewAddress.CountryId']"
    cityInputBox = "//input[@name='BillingNewAddress.City']"
    address1InputBox = "//input[@name='BillingNewAddress.Address1']"
    zipCodeInputBox = "//input[@name='BillingNewAddress.ZipPostalCode']"
    phoneNumberInputBox = "//input[@name='BillingNewAddress.PhoneNumber']"
    billingAddressContinueButton = "(//button[contains(@class,'new-address-next-step-button')])[1]"
    shippingMethodContinueButton = "//button[contains(@class,'shipping-method-next-step-button')]"
    paymentMethodContinueButton = "//button[contains(@class,'payment-method-next-step-button')]"
    paymentInformationContinueButton = "//button[contains(@class,'payment-info-next-step-button')]"
    confirmOrderContinueButton = "//button[contains(@class,'confirm-order-next-step-button')]"
    orderSuccessfullyPlacedMessage = "//strong[contains(text(),'Your order has been successfully processed!')]"
    orderCompleteContinueButton = "//button[contains(@class,'order-completed-continue-button')]"

    completeCheckoutProcess() {
        cy.xpath(this.countryDropdown).select("133")
        cy.xpath(this.cityInputBox).type(checkoutDetailsData.city)
        cy.xpath(this.address1InputBox).type(checkoutDetailsData.address1)
        cy.xpath(this.zipCodeInputBox).type(checkoutDetailsData.zipCode)
        cy.xpath(this.phoneNumberInputBox).type(checkoutDetailsData.phoneNumber)
        cy.xpath(this.billingAddressContinueButton).click()
        cy.xpath(this.shippingMethodContinueButton).click()
        cy.xpath(this.paymentMethodContinueButton).click()
        cy.xpath(this.paymentInformationContinueButton).click()
        cy.xpath(this.confirmOrderContinueButton).click()
        cy.xpath(this.orderSuccessfullyPlacedMessage).should('have.text', 'Your order has been successfully processed!')
        cy.screenshot()
        cy.xpath(this.orderCompleteContinueButton).click()
    }
}
export default CheckoutPage