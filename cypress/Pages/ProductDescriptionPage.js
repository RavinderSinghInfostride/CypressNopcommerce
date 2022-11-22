class ProductDescriptionPage {
    productAddToWishlistButton = "(//button[contains(@class,'add-to-wishlist-button')])[1]"
    productAddedNotification = "//p[contains(text(),'The product has been added to your ')]"
    wishlistPageLink = "//a[@class='ico-wishlist']"
    productAddToCartButton = "(//button[contains(@class,'add-to-cart-button')])[1]"
    shoppingCartLink = "//a[@class='ico-cart']"

    addProductToWishlist() {
        cy.xpath(this.productAddToWishlistButton).click()
        cy.xpath(this.productAddedNotification).wait(2000).should('have.text', 'The product has been added to your wishlist')
    }

    navigateToWishlistPage() {
        cy.xpath(this.wishlistPageLink).click()
    }

    addProductToCart() {
        cy.xpath(this.productAddToCartButton).click()
        cy.xpath(this.productAddedNotification).wait(2000).should('have.text', 'The product has been added to your shopping cart')
    }

    navigateToShoppingCartPage() {
        cy.xpath(this.shoppingCartLink).click()
    }
}
export default ProductDescriptionPage