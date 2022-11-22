class NotebooksPage {
    notebooksProductLink = "//a[contains(text(),'Lenovo Thinkpad X1 Carbon Laptop')]"

    navigateToProductDescriptionPage() {
        cy.xpath(this.notebooksProductLink).click()
    }
}
export default NotebooksPage