/// <reference types = "Cypress"/>



import forget_Password from "../Page_Method/forgetPassword_Page"



const frgtpass             =            new forget_Password()





Cypress.Commands.add('VerifyAllElementPresentInForgetPasswordPage',()=>
{
    frgtpass.getForgetPasswordpage().url('contain','requestPasswordResetCode')
    frgtpass.getTitle().then(($TitleText)=>
    {
        expect($TitleText.text()).to.be.deep.equal('Reset Password')
    })
    frgtpass.getForgetNote().then(($NoteText)=>
    {
        expect($NoteText.text()).to.be.deep.equal('Please enter your username to identify your account to reset your password')
    
    })
    frgtpass.getUsername().then(($UserText)=>
    {
        expect($UserText.text()).to.be.deep.equal('Username')
    })
    frgtpass.getUserInput().then(($UserInput)=>
    {
        if ($UserInput.is(':visible'))
        {
            cy.wrap($UserInput).click()
        }
    })
    frgtpass.getCancelBtn().then(($CnclText)=>
    {
        expect($CnclText.text()).to.be.deep.equal(' Cancel ')
        cy.wrap($CnclText).should('have.css','font-size','14px')
    })
    frgtpass.getResetPassBtn().should('be.visible').then((ResetBtnText)=>
    {
        expect(ResetBtnText.text()).to.be.deep.equal(' Reset Password ')
        
    })
})