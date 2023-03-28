/// <reference types = "Cypress"/>

import All_Tab_Displayed from "../Page_Method/allTabDisplayed";
import loginFunctionCall from "../page_Function/Login_function";



const tab = new All_Tab_Displayed();


const loginfunction = new loginFunctionCall();

/*
   All Tabshould be visible
*/

Cypress.Commands.add('verifyAllTabVisible', () => {
    // login function 
    loginfunction.loginFunction('Admin', 'admin123');


    cy.url('contain', 'opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    tab.getBrandBanner().should('be.visible').and('have.attr', 'src');
    tab.getSearchBar().should('be.visible').and('have.attr', 'placeholder', 'Search');


    // tabs name 
    let tabs = ['Admin', 'PIM', 'Leave', 'Time', 'Recruitment', 'My Info', 'Performance',
                 'Dashboard', 'Directory', 'Maintenance', 'Buzz'];

    for (let i = 0; i < 11; i++) {
        tab.getMainMenu().should('be.visible').then(($AllTab) => {
            cy.wrap($AllTab).eq(i).then(($Tabs) => {
                expect($Tabs.text()).to.be.deep.equal(tabs[i])
            })
        })
    };

});