
describe("Testing children command in cypress", ()=>{
    it("testing children locators" , ()=>{

        cy.visit('/')
            cy.document().its('contentType').should('eq', 'text/html')

        
    


        cy.get('.form_group').children().should('have.class', 'input_error form_input');
        cy.get('.form_group').children().should('have.id', 'user-name');
        cy.get('.form_group').children().should('have.attr', 'autocapitalize');
        cy.get('.form_group').children().should('not.have.id', 'placeholder');

        cy.get('.form_group').children('#password').type('HELO')
        cy.get('.form_group').children('#password').should('have.css' , 'appearance' , 'none')







    }

);
});