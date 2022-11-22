import HomePage from '../../Pages/HomePage'
const homePage = new HomePage
import ComputersPage from '../../Pages/ComputersPage'
const computersPage = new ComputersPage
import NotebooksPage from '../../Pages/NotebooksPage'
const notebooksPage = new NotebooksPage
import ProductDescriptionPage from '../../Pages/ProductDescriptionPage'
const productDescriptionPage = new ProductDescriptionPage
import CartPage from '../../Pages/CartPage'
const cartPage = new CartPage
import CheckoutPage from '../../Pages/CheckoutPage'
const checkoutPage = new CheckoutPage

it('To verify user is able to add product to cart and checkout', () => {
    cy.RegisterAndLogin()
    homePage.navigateToComputersPage()
    computersPage.navigateToNotebooksPage()
    notebooksPage.navigateToProductDescriptionPage()
    productDescriptionPage.addProductToCart()
    productDescriptionPage.navigateToShoppingCartPage()
    cartPage.navigateToCheckoutPage()
    checkoutPage.completeCheckoutProcess()
    cy.UserLogout()
})
