import HomePage from '../../Pages/HomePage'
const homePage = new HomePage
import ComputersPage from '../../Pages/ComputersPage'
const computersPage = new ComputersPage
import NotebooksPage from '../../Pages/NotebooksPage'
const notebooksPage = new NotebooksPage
import ProductDescriptionPage from '../../Pages/ProductDescriptionPage'
const productDescriptionPage = new ProductDescriptionPage
import WishlistPage from '../../Pages/WishlistPage'
const wishlistPage = new WishlistPage

it('To verify user is able to add notebooks product to wishlist', () => {
    cy.RegisterAndLogin()
    homePage.navigateToComputersPage()
    computersPage.navigateToNotebooksPage()
    notebooksPage.navigateToProductDescriptionPage()
    productDescriptionPage.addProductToWishlist()
    productDescriptionPage.navigateToWishlistPage()
    wishlistPage.productAddedToWishlistVerification()
    cy.UserLogout()
})