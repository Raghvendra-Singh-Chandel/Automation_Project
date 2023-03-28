/// <reference types = "Cypress"/>

class forget_Password {
    getForgetPasswordPage() {
        return cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
    };
    getForm() {
        return cy.get('.oxd-form')
    };
    getTitle() {
        return cy.get('.orangehrm-forgot-password-title')
    };
    getForgetNote() {
        return cy.get('.orangehrm-forgot-password-card-note')
    };
    getUsername() {
        return cy.get('.oxd-label')
    };
    getUserInput() {
        return cy.get('.oxd-input')
    };
    getCancelBtn() {
        return cy.get('.orangehrm-forgot-password-button--cancel')
    };
    getResetPassBtn() {
        return cy.get('.orangehrm-forgot-password-button--reset')
    };
};
export default forget_Password