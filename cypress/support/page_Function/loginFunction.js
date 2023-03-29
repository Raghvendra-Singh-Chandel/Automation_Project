/// <reference types = "Cypress"/>

import loginPage from "../Page_Method/loginPage";


const login = new loginPage();


class loginFunctionCall {
    /*
    Handle the login function for positive and negative testing
    */
    loginFunction(username, password) {
        login.getUserInput().then(($Username) => {
            if ($Username.is(':visible')) {
                cy.wrap($Username).click().type(username)
            }
        });
        login.getPasswordInput().then(($Password) => {
            if ($Password.is(':visible')) {
                cy.wrap($Password).click().type(password)
            }
        });
        login.getLoginButton().then(($LoginBtn) => {
            if ($LoginBtn.is(':visible')) {
                cy.wrap($LoginBtn).click()
            }
        });
    }
};
export default loginFunctionCall