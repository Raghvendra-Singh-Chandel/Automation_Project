/// <reference types = "Cypress"/>



describe('Login page functionality', { tags: ['smoke', 'regression'] }, () => {
    beforeEach(() => {
        /*
        run before every it block to get the url of the login page
        */
        cy.URL()
    })
    /*
         Element should be visible under  login page
    */

    it('Verify All element visible under Login page', () => {
        cy.verifyAllElementVisibleUnderLoginPage()
    })

    /*
        Element under Login page should be worked properly
    */

    it('Verify the functionality of Login page with invalid credential', { tags: ['smoke', 'regression'] }, () => {
        cy.verifyFunctionalityOfLoginPageWithInvalidCredential()
    })

    it('Verify the functionality of the login page with valid Credentials', { tag: ['smoke', 'regression'] }, () => {
          cy.verifyFunctionalityOfLoginPageWithValidCredential()
    })

    /*
        forget link text should be worked properly
    */

    it('Verify the functionality of forget password link text', { tags: ['smoke', 'regression'] }, () => {
        cy.functionalityOfForgetPasswordLink()
    })

    /*
        All element should be visible under forget
    */

    it('Verify all element visible in the forget password page', { tags: 'regression' }, () => {
        cy.verifyAllElementPresentInForgetPasswordPage()
    })

    /*
        All tabs should be visible on Home page
    */

    it('Verify all tabs present on Home page', { tags: ['smoke', 'regression'] }, () => {
        cy.verifyAllTabVisible()
    })

})
describe('Functionality of the My Info page element', () => {
    beforeEach(() => {

        /*
            run before every it block to get Login and Click on MyInfo Tab
        */


        cy.loginSession('Admin','admin123')
        cy.MyInfoTab()
    })
    it('Verify All tabs and Image is displayed on the My Info page', () => {
        cy.verifyAllTabsAndImageSectionInMyInfoPage()
    })
    it('Verify all elemet visible and its functional under personal detail page', () => {
        cy.verifyAllTitleAndLabelDisplayed()
    })
    it('Verify all input field and its functionality', () => {
        // first, middle, last name
        cy.verifFunctionalityofInputNamefield()
        // Employ detail field
        cy.verifyFunctionalityOfEmployedDetail()
        // functionality of DOB
        cy.verifyFunctionalityOfDOB()
        // Other details of the Employe
        cy.verifyFunctionalityOfOtherDetails()
    })
})