it('To verify user is able to regiter and login', () => {
    cy.RegisterAndLogin()
    cy.UserLogout()
}) 