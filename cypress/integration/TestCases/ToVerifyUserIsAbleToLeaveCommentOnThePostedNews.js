import HomePage from '../../Pages/HomePage'
const homePage = new HomePage
import NewsDescriptionPage from '../../Pages/NewsDescriptionPage'
const newsDescriptionPage = new NewsDescriptionPage

it('To verify user is able to comment on news', () => {
    cy.RegisterAndLogin()
    homePage.navigateToNewsDesciptionPage()
    newsDescriptionPage.commentOnNews()
    cy.UserLogout()
})