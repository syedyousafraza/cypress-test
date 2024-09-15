

describe("this is test to learn then command", () => {
    it('test the then command of cypress ', () => {
        cy.visit('/');

        cy.get('#root > div > div.login_logo').then((el) => {
            const textValue = el.text();
            console.log("I am here> " + textValue)

            // Use Chai assertions directly
            expect(textValue).to.be.a('string'); // Check if it's a string
            expect(textValue).to.include('Swag Labs'); // Check if the string includes 'Cypress'
            //    expect(textValue).to.have.lengthOf(15); // Check the length of the string
            //    expect(textValue).to.match(/Cypress/); // Check if the string matches a regex pattern

            /*
                // Basic Assertions
        expect(myString).to.equal('Hello, Cypress!');
        expect(myString).to.not.equal('Goodbye, Cypress!');
    
        // Type Assertions
        expect(myString).to.be.a('string');
        expect(myNumber).to.be.a('number');
    
        // String Assertions
        expect(myString).to.include('Cypress');
        expect(myString).to.have.lengthOf(14);
    
        // Array Assertions
        expect(myArray).to.include(2);
        expect(myArray).to.have.lengthOf(3);
    
        // DOM Assertions (Assuming `cy.get('element')` is used)
        cy.get('element').should('be.visible');
        cy.get('element').should('have.class', 'active');
    
        // Number Assertions
        expect(myNumber).to.be.greaterThan(40);
        expect(myNumber).to.be.lessThan(50);
    
        // Boolean Assertions
        expect(true).to.be.true;
        expect(false).to.be.false;
    
        */



            //If you want to use DOM again in cypress chaining commands you need to use wrap Keyword, then all cypress build in Keywords can be ised 
            cy.wrap(el).should('have.text', "Swag Labs")

            /*
             // Basic Assertions
    cy.get('button').should('exist');
    cy.get('button').should('not.exist');
    
    // Element Properties
    cy.get('h1').should('have.text', 'Welcome');
    cy.get('h1').should('contain.text', 'Welcome');
    cy.get('button').should('have.class', 'btn-primary');
    
    // Element State
    cy.get('button').should('be.enabled');
    cy.get('button').should('not.be.enabled');
    cy.get('input[type="checkbox"]').should('be.checked');
    cy.get('input[type="checkbox"]').should('not.be.checked');
    
    // Form Assertions
    cy.get('input').should('have.length', 3);
    cy.get('button').should('have.css', 'color', 'rgb(255, 255, 255)');
    
    // URL and Navigation
    cy.url().should('eq', 'https://example.com');
    cy.url().should('include', '/dashboard');
    
    // Advanced Assertions
    cy.get('input').should('be.focused');
    cy.get('input').should('have.prop', 'checked', true);

    */

        })




    })
})