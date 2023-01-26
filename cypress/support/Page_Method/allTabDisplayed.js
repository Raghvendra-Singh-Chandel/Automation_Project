/// <reference types = "Cypress"/>

class All_Tab_Displayed
{
    getHome()
    {
        return cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    
    }
    getBrandBanner()
    {
        return cy.get('.oxd-brand-banner').find('img')
    }
    getSearchBar()
    {
        return cy.get('.oxd-input')
    }
    getMainMenu()
    {
        return cy.get('.oxd-main-menu').eq(1).find('li')
    }
    
    getIconAlltab()
    {
        return cy.find('svg')
    }
}
export default All_Tab_Displayed