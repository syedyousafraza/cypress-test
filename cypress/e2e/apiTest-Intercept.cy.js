// cypress/e2e/apiTest-Intercept.cy.js

describe('API Testing with Cypress', () => {
  it('Should intercept and validate a GET request to fetch posts', () => {
    // Intercept the GET request to /posts
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts').as('getPosts');

    // Make the request using cy.request instead of cy.visit
    cy.request('https://jsonplaceholder.typicode.com/posts').as('apiRequest');

    // Wait for the intercepted request and validate the response
    cy.get('@apiRequest').then((response) => {
      expect(response.status).to.equal(200);

      // Validate the response body (check if it contains an array of posts)
      expect(response.body).to.be.an('array');
      expect(response.body).to.have.length.greaterThan(0);

      // Verify a property of the first post
      expect(response.body[0]).to.have.property('title');
    });
  });

});