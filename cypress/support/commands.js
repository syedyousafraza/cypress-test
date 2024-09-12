// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js

// Custom command for logging in
Cypress.Commands.add('loginViaCustomCommand', (username, password) => {
    cy.visit('/'); // Visit the login page
    cy.get('input[name="user-name"]').type(username); // Enter username
    cy.get('input[name="password"]').type(password); // Enter password
    cy.get('input[name=login-button]').click(); // Click the submit button
  });
  