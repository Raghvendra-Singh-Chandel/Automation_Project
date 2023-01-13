/// <reference types = "Cypress"/>

import Login_Page from "../Page_Method/Login_Page"
import function_call from "../page_Function/Login_function"
import dashboard_Page from "../Page_Method/allTabDisplayed"
import forget_Password from "../Page_Method/forgetPassword_Page"


const login        =     new Login_Page()


const funsn        =     new function_call()


const dash         =     new dashboard_Page()


const forgetpass        =        new forget_Password()

Cypress.Commands.add('URL',()=>
{
    login.getUrl()
})




Cypress.Commands.add('VerifyAllElementVisibleUnderLoginPage',()=>
{
    login.getUrl().url('contain','opensource-demo.orangehrmlive')
    login.getLogoComapnyBranding()
    login.getLogo().should('have.attr','src')
    login.getTitle().then(($LoginText)=>{

        expect($LoginText.text()).to.be.equal('Login')
    })
    login.getUserName().then(($UsernameText)=>
    {
        expect($UsernameText.text()).to.be.deep.equal('Username')
    })
    login.getUserInput().should('be.visible').and('have.attr','placeholder','Username')
    login.getPassword().then(($Password)=>
    {
        expect($Password.text()).to.be.deep.equal('Password')
    })
    login.getPasswordInput().should('be.visible').and('have.attr','placeholder','Password')
    login.getLoginButton().should('be.visible').then(($LoginText)=>
    {
        expect($LoginText.text()).to.be.equal(' Login ')
    })
    login.getForgetPassword().should('be.visible').then(($ForgetPassText)=>
    {
        expect($ForgetPassText.text()).to.be.deep.equal('Forgot your password? ')
    })
})



Cypress.Commands.add('VerifyfunctionalityOfLoginPage',()=>
{   
    funsn.Login_function('Wdmin','admin123')
    login.getAlertInvalidCredentials().should('be.visible').and('have.css','color','rgb(235, 9, 16)').then((InvalidCredentialText)=>
    {
        expect(InvalidCredentialText.text()).to.be.deep.equal('Invalid credentials')
        funsn.Login_function('Admin','admin123')
        dash.getHome().url('contain','dashboard')

    })

})


Cypress.Commands.add('FunctionalityOfForgetPasswordLink',()=>
{
    login.getForgetPassword().then(($Text)=>
    {
        expect($Text.text()).to.be.deep.equal('Forgot your password? ')
       cy.get('.orangehrm-login-forgot-header').should('have.css','color','rgb(255, 123, 29)').click()
        forgetpass.getForgetPasswordpage().url('contain','requestPasswordResetCode')
    })
})