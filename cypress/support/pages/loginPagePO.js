import { BasePage } from "./base";

export class LoginTest extends BasePage {
  // locators 

  elements = {
    username: '#user-name',
    password: '#password',
    submitBtn: '#login-button',
    errorMessage: "h3[data-test='error']"

  }

  inputUsername(username) {
    cy.get(this.elements.username).type(username);
  }

  inputPassword(password) {
    cy.get(this.elements.password).type(password);
  }

  submitButton() {
    cy.get(this.elements.submitBtn).click();
  }

  verifyErrorMessage(message) {
    this.isVisible(this.elements.errorMessage);
    this.containsText(this.elements.errorMessage , message);
  }

}