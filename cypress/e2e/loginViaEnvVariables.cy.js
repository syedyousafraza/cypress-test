
describe("login via Environment Variables", () => {
    it('Login Values using environemt variables', () => {

        cy.visit('/') //base Url is also getting from environemt variable

        cy.get('input[name="user-name"]').type(Cypress.env('username'));  //Get the values of env variable from cypress.config.js file
        cy.get('input[name="password"]').type(Cypress.env('password'));


    })

})