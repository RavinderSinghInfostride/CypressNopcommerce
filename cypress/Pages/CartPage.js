class CartPage {
    productAddedToCartVerify = "(//a[contains(text(),'Lenovo Thinkpad X1 Carbon Laptop')])[2]"
    termsAndServiceCheckbox = "//input[@name='termsofservice']"
    checkoutButton = "//button[@name='checkout']"

    productAddedToCartVerification() {
        cy.xpath(this.productAddedToCartVerify).should('have.text', 'Lenovo Thinkpad X1 Carbon Laptop')
    }

    navigateToCheckoutPage() {
        cy.xpath(this.termsAndServiceCheckbox).click()
        cy.xpath(this.checkoutButton).click()
    }
}
export default CartPage