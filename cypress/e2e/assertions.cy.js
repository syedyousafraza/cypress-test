/// <reference types="cypress" />


describe("assertions", ()=>{
    it("testing assertions" , ()=>{
        cy.visit("https://www.saucedemo.com/")

        cy.get(".login_logo").should('be.visible')
        cy.get(".login_logo").should('have.text', "Swag Labs")
        cy.get(".login_logo").should('contain' , "Sw")
        cy.get("input[type='submit']").should('have.value' , "Login")


        
    })

// Explicait
    it.only("testing assertions" , ()=>{
        cy.visit("https://www.saucedemo.com/")

        cy.get(".login_logo")
        cy.get(".login_logo").invoke('text').then((element) =>{
            let a1 = element;
            console.log("Element text:", element);
            cy.wrap(element).should('include', 'Swag Labs');

        })

        
    })
}
)