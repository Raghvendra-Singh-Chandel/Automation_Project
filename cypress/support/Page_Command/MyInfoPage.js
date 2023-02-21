/// <reference types = "Cypress"/>
import Myinfo from "../Page_Method/MyInfo_page"
import function_call from "../page_Function/Login_function"
import All_Tab_Displayed from "../Page_Method/allTabDisplayed"
import Login_Page from "../Page_Method/Login_Page"



const info_page                               =                         new Myinfo()


const loginfunction                           =                         new function_call()



const myInfotab                               =                         new All_Tab_Displayed()



const login                                   =                         new Login_Page()

// Login functionality Command

Cypress.Commands.add('Login',()=>
{
    login.getUrl()
    loginfunction.Login_function('Admin','admin123')
})


// My Info tab Click functionality

Cypress.Commands.add('MyInfoTab',()=>
{
    myInfotab.getMainMenu().then(($AllTab)=>
    {
       cy.wrap($AllTab).eq(5).then(($MyInfo)=>
       {
        expect($MyInfo.text()).to.be.deep.equal('My Info')
        cy.wrap($MyInfo).click()
    })
       })  
})








Cypress.Commands.add('VerifyAllTabAndImageSectionInMyInfoPage',()=>
{
    myInfotab.getMainMenu().then(($AllTab)=>
    {
       cy.wrap($AllTab).eq(5).then(($MyInfo)=>
       {
        expect($MyInfo.text()).to.be.deep.equal('My Info')
        cy.wrap($MyInfo).click()
       })     
    })
    info_page.getEmployedImage().should('have.attr','src','/web/index.php/pim/viewPhoto/empNumber/7')

    // Implement using for loop
    let tabs = ['Personal Details','Contact Details','Emergency Contacts','Dependents','Immigration','Job','Salary','Tax Exemptions','Report-to','Qualifications','Memberships']
    for (let i = 0; i < 11 ; i++) {
        info_page.getTabList().then(($Tab)=>
    {
        cy.wrap($Tab).eq(i).should('be.visible').then(($tabs)=>
        {
            expect($tabs.text()).to.be.deep.equal(tabs[i])
        })
      })

    }

})



Cypress.Commands.add('VerifyAllTitleAndLabelDisplayed',()=>
{    
     
     let main_Title = ['Personal Details','Attachments']
     for (let i=0;i<2;i++)
     {
        info_page.getMainTitle().eq(i).then(($mainTitle)=>
        {
            expect($mainTitle.text()).to.be.deep.equal(main_Title[i])
        })
        
     }
     
     // Labels
    let label = ['Employee Full Name','Nickname','Employee Id','Other Id',"Driver's License Number",'License Expiry Date','SSN Number','SIN Number','Nationality','Marital Status','Date of Birth','Gender','Military Service','Smoker'] 

     for (let i=0;i<14;i++)
     {
        info_page.getLabel().eq(i).should('be.visible').then(($Label_fields)=>
        {
            expect($Label_fields.text()).to.be.deep.equal(label[i])
                
         })

     }

    })
    Cypress.Commands.add('VerifFunctionalityofInputNamefield',()=>
    {
        info_page.getInput().then(($InputName)=>
        {
            const name_field = ['firstName','middleName','lastName']
            const placeholder = ['First Name','Middle Name','Last Name']
            const value = ['Raghvendra','Singh','chandel']
            for (let i =0;i<3;i++)
            {
                cy.wrap($InputName).eq(i).should('have.attr','name',name_field[i]).and('have.attr','placeholder',placeholder[i]).click().clear().type(value[i])
            }
            cy.wrap($InputName).eq(3).click().clear().type('Raghu')
        })
    })





    Cypress.Commands.add('VerifyFunctionalityOfEmployedDetail',()=>
    {
        info_page.getFormEmployedDetail().eq(1).find('.oxd-input--active').then(($EmployedDetails)=>
        {
            const employedDetail = [1987990087,'No',123456756756,'2029-01-11',3434342343,454354654]
            for (var i=0;i<6;i++)
            {
                cy.wrap($EmployedDetails).eq(i).should('be.visible').click().clear().type(employedDetail[i])
            }
  
        })
    })

    Cypress.Commands.add('VerifyFunctionalityOfDOB',()=>
    {
        info_page.getFormEmployedDetail().eq(2).then(($DOB)=>
        {
            cy.wrap($DOB).find('.oxd-input--active').should('be.visible').click().clear().type('2022-01-12').click()

       
            info_page.getGender().find('.oxd-radio-input--active').then((Gender)=>
            {
                cy.wrap(Gender).eq(0).should('not.be.checked').click()
                cy.wrap(Gender).eq(1).should('not.be.checked').click()
            })


        })
    })
    Cypress.Commands.add('VerifyFunctionalityOfOtherDetails',()=>
    {
        info_page.getFormEmployedDetail().eq(3).then(($OtherDetail)=>
        {
            cy.wrap($OtherDetail).find('.oxd-input--active').should('be.visible').click().clear().type('Yes')
        })

        info_page.getSmokerCheckbox().first().click()

        info_page.getSaveButton().first().should('be.visible').and('have.text',' Save ').click()
    })



