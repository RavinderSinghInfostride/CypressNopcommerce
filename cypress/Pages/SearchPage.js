class SearchPage {
    searchedProductVerify = "//h2[@class='product-title']//a[contains(text(),'Apple MacBook Pro 13-inch')]"

    searchedProductVerification() {
        cy.xpath(this.searchedProductVerify).should('have.text', 'Apple MacBook Pro 13-inch')
        cy.screenshot()
    }
}
export default SearchPage