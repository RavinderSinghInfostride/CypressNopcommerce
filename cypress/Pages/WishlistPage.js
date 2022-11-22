class WishlistPage {
    productAddedToWishlistVerify = "//a[contains(text(),'Lenovo Thinkpad X1 Carbon Laptop')]"

    productAddedToWishlistVerification() {
        cy.xpath(this.productAddedToWishlistVerify).should('have.text', 'Lenovo Thinkpad X1 Carbon Laptop')
        cy.screenshot()
    }
}
export default WishlistPage