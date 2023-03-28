/// <reference types = "Cypress"/>

import Login_Page from "../Page_Method/Login_Page"
import function_call from "../page_Function/Login_function"
import dashboard_Page from "../Page_Method/allTabDisplayed"
import forget_Password from "../Page_Method/forgetPassword_Page"


const login = new Login_Page();


const loginfunction = new function_call();


const dash = new dashboard_Page();


const forgetpass = new forget_Password();

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