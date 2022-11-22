class ComputersPage {
    notebooksPageLink = "//a[contains(text(),' Notebooks ')]"

    navigateToNotebooksPage() {
        cy.xpath(this.notebooksPageLink).click()
    }
}
export default ComputersPage