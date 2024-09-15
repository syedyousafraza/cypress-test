/// <reference types="cypress" />

describe("login via fixtures", () => {
    it('successfull login where fixture use as alias', () => {

        cy.visit('/');
        cy.fixture("user.json").as('users');
        cy.get('@users').then((users) => {
            cy.get('input[name="user-name"]').type(users.username);
            cy.get('input[name="password"]').type(users.password);

        })
    })

    it('login without using any alias', () => {

        cy.visit('/');
        cy.fixture("user.json").then((users) => {
            cy.get('input[name="user-name"]').type(users.username);
            cy.get('input[name="password"]').type(users.password);

        })


    })

})
