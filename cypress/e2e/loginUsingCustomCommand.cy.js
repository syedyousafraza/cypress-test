

describe("login using custom command", () => {
    it("login via command", () => {
        cy.loginViaCustomCommand("standard_user", "secret_sauce");
        cy.url().should('include', '/inventory'); // Check if redirected to dashboard

    })
})