export class BasePage{
    // add something which click on field

    clear(locator) {
        return cy.get(locator).clear();
    }

    isVisible(locator){
       cy.get(locator).should('be.visible')
    }

    containsText(locator, text){
        cy.get(locator).should('have.text' , text)

    }

}