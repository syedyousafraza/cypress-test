
describe("Testing children command in cypress", ()=>{
    it("testing children locators" , ()=>{

        cy.visit('https://example.cypress.io/commands/traversal')

     //   cy.get('.fruits-list>li').eq(1).should('have.text' , 'oranges')

     cy.get('.fruits-list>li').then((elements) => {
        let i = 0; 
        while (i < elements.length) { // Make sure to limit based on the number of elements
          cy.wrap(elements[i])
            .invoke('text') // Get the text content of the element
            .should('eq', elements[i].innerText); // Compare the text with the innerText of the DOM element
          i++; // Increment the loop counter
        }
      });
      


        cy.get('.fruits-list>li').eq(1).invoke('text').should('be.a', 'string');



    })})


