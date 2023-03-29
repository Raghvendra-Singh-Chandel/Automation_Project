/// <reference types = "Cypress"/>

import loginPage from "../Page_Method/loginPage"
import loginFunctionCall from "../page_Function/loginFunction"
import allTabsDisplayed from "../Page_Method/allTabDisplayed"
import forgetPassword from "../Page_Method/forgetPasswordPage"


const login = new loginPage();


const loginfunction = new loginFunctionCall();


const dash = new allTabsDisplayed();


const forgetpass = new forgetPassword();

Cypress.Commands.add('URL', () => {
    login.getUrl()
})


/*
   All element should be displayed in the login page
*/

Cypress.Commands.add('verifyAllElementVisibleUnderLoginPage', () => {
    login.getUrl().url('contain', 'opensource-demo.orangehrmlive')
    login.getLogoComapnyBranding()
    login.getLogo().should('have.attr', 'src')
    login.getTitle().then(($LoginText) => {

        expect($LoginText.text()).to.be.equal('Login')
    });

    login.getUserName().then(($UsernameText) => {
        expect($UsernameText.text()).to.be.deep.equal('Username')
    });

    login.getUserInput().should('be.visible').and('have.attr', 'placeholder', 'Username')
    login.getPassword().then(($Password) => {
        expect($Password.text()).to.be.deep.equal('Password')
    });

    login.getPasswordInput().should('be.visible').and('have.attr', 'placeholder', 'Password');
    login.getLoginButton().should('be.visible').then(($LoginText) => {
        expect($LoginText.text()).to.be.equal(' Login ')
    });

    login.getForgetPassword().should('be.visible').then(($ForgetPassText) => {
        expect($ForgetPassText.text()).to.be.deep.equal('Forgot your password? ')
    });
});

/*
    All the element should be worked properly (input field and Buttons)
*/

Cypress.Commands.add('verifyFunctionalityOfLoginPage', () => {
    loginfunction.loginFunction('Wdmin', 'admin123')
    login.getAlertInvalidCredentials().should('be.visible').and('have.css', 'color', 'rgb(235, 9, 16)').then((InvalidCredentialText) => {
        expect(InvalidCredentialText.text()).to.be.deep.equal('Invalid credentials');
        loginfunction.loginFunction('Admin', 'admin123');
        dash.getHome().url('contain', 'dashboard');

    });

});

/*
    Forget password link text should be worked properly
*/

Cypress.Commands.add('functionalityOfForgetPasswordLink', () => {
    login.getForgetPassword().then(($Text) => {
        expect($Text.text()).to.be.deep.equal('Forgot your password? ')
        cy.get('.orangehrm-login-forgot-header').click()
        forgetpass.getForgetPasswordPage().url('contain', 'requestPasswordResetCode')
    })
});