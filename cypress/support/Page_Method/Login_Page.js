/// <reference types="cypress" />

class Login_Page {
    getUrl() {
        return cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    };
    getLogoComapnyBranding() {
        return cy.get('img').first()
    };
    getLogo() {
        return cy.get('img').eq(2)
    };
    getTitle() {
        return cy.get('.orangehrm-login-title')
    };
    getUserName() {
        return cy.get('.oxd-label').first()
    };
    getUserInput() {
        return cy.get('.oxd-input').first()
    };
    getPassword() {
        return cy.get('.oxd-label').eq(1)
    };
    getPasswordInput() {
        return cy.get('.oxd-input[name=password]')
    };
    getLoginButton() {
        return cy.get('.oxd-button')
    };
    getForgetPassword() {
        return cy.get('.orangehrm-login-forgot')
    };
    getAlertInvalidCredentials() {
        return cy.get('.oxd-alert-content-text')
    };
}

export default Login_Page 