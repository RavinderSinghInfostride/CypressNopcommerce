let searchProductData
before(() => {
    cy.fixture('SearchProduct').then((testData) => {
        searchProductData = testData
    })
})
class HomePage {
    registerPageLink = "//a[@class='ico-register']"
    loginPageLink = "//a[@class='ico-login']"
    naveMenuComputersPageLink = "(//a[contains(text(),'Computers ')])[1]"
    logoutLink = "//a[@class='ico-logout']"
    searchInputBox = "//input[contains(@class,'search-box-text')]"
    searchButton = "//button[contains(@class,'search-box-button')]"
    newsDetailsLink = "(//a[@class='read-more'])[1]"

    navigateToRegisterPage() {
        cy.xpath(this.registerPageLink).click()
        cy.title().should('eq', 'nopCommerce demo store. Register')
    }

    navigateToLoginPage() {
        cy.xpath(this.loginPageLink).click()
    }

    navigateToComputersPage() {
        cy.xpath(this.naveMenuComputersPageLink).click()
    }

    logoutFromWebsite() {
        cy.xpath(this.logoutLink).click()
    }

    searchProduct() {
        cy.xpath(this.searchInputBox).type(searchProductData.productToSearch)
        cy.xpath(this.searchButton).click()
    }

    navigateToNewsDesciptionPage() {
        cy.xpath(this.newsDetailsLink).click()
    }
}
export default HomePage