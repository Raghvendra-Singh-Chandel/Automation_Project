/// <reference types = "Cypress"/>

import All_Tab_Displayed from "../Page_Method/allTabDisplayed"
import function_call from "../page_Function/Login_function"



const tab                                     =                                   new All_Tab_Displayed()


const loginfunction                           =                                   new function_call()


Cypress.Commands.add('VerifyALLTabVisible',()=>
{   
    loginfunction.Login_function('Admin','admin123')
     
    
    cy.url('contain','opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    
    tab.getBrandBanner().should('be.visible').and('have.attr','src','/web/images/orangehrm-logo.png?1666596668857')
    tab.getSearchBar().should('be.visible').and('have.attr','placeholder','Search')


    // Implement for loop
    let tabs = ['Admin','PIM','Leave','Time','Recruitment','My Info','Performance','Dashboard','Directory','Maintenance','Buzz']

    for (let i = 0 ; i<11 ; i++)
    {
        tab.getMainMenu().should('be.visible').then(($AllTab)=>
        {
           cy.wrap($AllTab).eq(i).then(($Tabs)=>
           {
            expect($Tabs.text()).to.be.deep.equal(tabs[i])
           })
    })
    }

})