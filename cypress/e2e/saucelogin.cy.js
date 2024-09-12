import { LoginTest } from "../support/pages/loginPagePO";

const login = new LoginTest();

beforeEach("Opening the URL" , ()=> {
    cy.visit('/');

})

describe("this is group for login tests", ()=>{
    it("test successful login", ()=>{
        login.inputUsername("standard_user");
        login.inputPassword("secret_sauce"); 
        login.submitButton();       
    })
})

describe("this is group for failed login tests", ()=>{
    it("test successful login", ()=>{
        login.inputUsername("standard");
        login.inputPassword("secret_sauce"); 
        login.submitButton();   
        login.verifyErrorMessage("Epic sadface: Username and password do not match any user in this service")            
    })


    it("test unsuccessfull login by empty username", ()=>{
        login.inputUsername('1');
        login.inputPassword("secret_sauce"); 
        cy.debug(); 
        cy.pause();
        login.submitButton();   
        login.verifyErrorMessage("Epic sadface: Username and password do not match any user in this service")            
    })
})