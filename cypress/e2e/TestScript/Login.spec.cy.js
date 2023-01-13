/// <reference types = "Cypress"/>



describe ('Login page functionality',()=>
{
    beforeEach(()=>
    {
        cy.URL()
    })
    it ('Verify All element visible under Login page',()=>
    {
        cy.VerifyAllElementVisibleUnderLoginPage()
    })
    it ('Verify the functionality of Login page',()=>
    {
        cy.VerifyfunctionalityOfLoginPage()
    })
    it ('Verify the functionality of forget password link text',()=>
    {
        cy.FunctionalityOfForgetPasswordLink()
    })
    it ('Verify all element visible in the forget password page',()=>
    {
        cy.VerifyAllElementPresentInForgetPasswordPage()
    })
    it('Verify all element present on Home page',()=>
    {
        cy.VerifyALLTabVisible()
    })

})
describe('Functionality of the element and page',()=>
{
    beforeEach(()=>
    {
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
    it.only ('Verify all input field and its functionality',()=>
    {
        // first, middle, last name
        cy.VerifFunctionalityofInputNamefield()
        cy.VerifyFunctionalityOfEmployedDetail()
        cy.VerifyFunctionalityOfDOB()
        cy.VerifyFunctionalityOfOtherDetails()
    })
})