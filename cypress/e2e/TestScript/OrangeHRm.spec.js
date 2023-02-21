/// <reference types = "Cypress"/>



describe ('Login page functionality',{tags: ['smoke','regression']},()=>
{
    beforeEach(()=>
    {
        /*
        run before every it block to get the url of the login page
        */
        cy.URL()
    })
/*
     Element should be visible under  login page
*/

    it ('Verify All element visible under Login page',()=>
    {
        cy.VerifyAllElementVisibleUnderLoginPage()
    })

/*
    Element under Login page should be worked properly
*/

    it ('Verify the functionality of Login page',{tags:['smoke','regression']},()=>
    {
        cy.VerifyfunctionalityOfLoginPage()
    })

/*
    forget link text should be worked properly
*/

    it ('Verify the functionality of forget password link text',{tags:['smoke','regression']},()=>
    {
        cy.FunctionalityOfForgetPasswordLink()
    })

/*
    All element should be visible under forget
*/

    it ('Verify all element visible in the forget password page',{tags:'regression'},()=>
    {
        cy.VerifyAllElementPresentInForgetPasswordPage()
    })

/*
    All tabs should be visible on Home page
*/

    it('Verify all tabs present on Home page',{tags:['smoke','regression']},()=>
    {
        cy.VerifyALLTabVisible()
    })

})
describe('Functionality of the My Info page element',()=>
{
    beforeEach(()=>
    {

/*
    run before every it block to get Login and Click on MyInfo Tab
*/
        
        
        cy.Login()
        cy.MyInfoTab()
    })
    it ('Verify All tabs and Image is displayed on the My Info page',()=>
    {
        cy.VerifyAllTabAndImageSectionInMyInfoPage()
    })
    it('Verify all elemet visible and its functional under personal detail page',()=>
    {
        cy.VerifyAllTitleAndLabelDisplayed()
    })
    it ('Verify all input field and its functionality',()=>
    {
        // first, middle, last name
        cy.VerifFunctionalityofInputNamefield()
        // Employ detail field
        cy.VerifyFunctionalityOfEmployedDetail()
        // functionality of DOB
        cy.VerifyFunctionalityOfDOB()
        // Other details of the Employe
        cy.VerifyFunctionalityOfOtherDetails()
    })
})