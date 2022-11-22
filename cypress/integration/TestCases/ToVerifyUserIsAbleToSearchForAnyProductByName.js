import HomePage from "../../Pages/HomePage";
const homePage = new HomePage
import SearchPage from '../../Pages/SearchPage'
const searchPage = new SearchPage

it('To verify user is able to search a product', () => {
    cy.RegisterAndLogin()
    homePage.searchProduct()
    searchPage.searchedProductVerification()
    cy.UserLogout()
})