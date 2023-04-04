/// <reference types = "cypress"/>


import contactDetails from "../Page_Method/contactDetails";
import loginPage from "../Page_Method/loginPage";
import allTabsDisplayed from "../Page_Method/allTabDisplayed";



const login                         =                  new loginPage()
const details                       =                  new contactDetails()
const tabs                     =                  new allTabsDisplayed()

Cypress.Commands.add('contactDetailstab',()=>
{
    login.getUrl()
    tabs.getMainMenu().then(($AllTab) => {
        cy.wrap($AllTab).eq(5).then(($MyInfo) => {
            expect($MyInfo.text()).to.be.deep.equal('My Info')
            cy.wrap($MyInfo).click()
        })
    })
    details.getContactDetailsTab().click({force:true})
});
Cypress.Commands.add('verifyMainTitlesHeading',()=> {
   
    let title = ['Contact Details','Attachment']
    for (let i = 0;i<2;i++)
    {
       details.getPageMainTitle().eq(i).invoke('text').should('contain', title[i]) 
    }   
});



Cypress.Commands.add('verifyAddressDetailsSection',()=> {
    details.getContactHeading().first().invoke('text').should('deep.equal','Address')
        let addressLabel = ['Street 1','Street 2','City','State/Province','Zip/Postal Code','Country']
       let addressValue = ['test123','Chandigarh','Punjab','140301']
        for (let label = 0; label<6;label++) {
          details.getAddressDetailsLabel().eq(label).invoke('text').should('deep.equal',addressLabel[label])
          
          if (label <4)
          {
            details.getAddressDetailsInputFields().eq(label).click().clear().type(addressValue[label])
          }
        }
        details.getAddressCountryDropdown().click()
        details.getSelectCountry().click()
   
});

Cypress.Commands.add('verifyTelephoneDetailsSection',()=> {
    details.getContactHeading().eq(1).invoke('text').should('deep.equal','Telephone')

    let telephoneLabel = ['Home','Mobile','Work']
    let telephoneValue = ['1234567891','9889766745']
    for (let tlabel = 0;tlabel<3;tlabel++) {
        details.getTelephoneDetailsLabel().eq(tlabel).invoke('text').should('deep.equal',telephoneLabel[tlabel])
        
        if (tlabel < 2){
            details.getTelephoneDetailsInputField().eq(tlabel).click().clear().type(telephoneValue[tlabel])
        }
    }
});

Cypress.Commands.add('verifyEmailDetailsSection',()=> {
    details.getContactHeading().eq(2).invoke('text').should('deep.equal','Email')
    let emailLabel = ['Work Email','Other Email']
    let emailValue = ['test1@gmail.com','test1@demo.com']
    for (let elabel = 0;elabel<2;elabel++) {
        details.getEmailLabel().eq(elabel).invoke('text').should('deep.equal',emailLabel[elabel])
        if (elabel ==0) {
            details.getEmailInputFields().eq(elabel).click().clear().type(emailValue[elabel])

        }
       
    }
});

Cypress.Commands.add('savedTheDetails',()=> {
    details.getSaveFormButton().first().click({force:true})
    details.getToastSuccessMessage().then(($toast)=> {
        expect($toast).to.have.css({'background-color':'#84d225'})
        cy.wrap($toast).find('.oxd-text--toast-title').invoke('text').should('deep.equal','Success')
        cy.wrap($toast).find('.oxd-text--toast-message').invoke('text').should('deep.equal','Successfully Saved')
    })
})

Cypress.Commands.add('verifyTheAttachmentSection',()=> {
    details.getAddAttachmentButton().click()
    let attachmentLabel = ['Select File','Comment']
    for (let alabel = 0 ; alabel<2;alabel++) {
        details.getAttachmentSectionLabel().eq(alabel).invoke('text').should('contain',attachmentLabel[alabel])
    }

    details.getAttachmentCommentTextArea().click().clear().type('This is a demo! Hope You like it')
    details.getUploadAttachment().attachFile('demo.1.jpg')
    details.getUploadAttachment().selectFile('cypress/fixtures/demo.1.jpg',{force:true})
    details.getSaveAttachmentButton().should('contain',' Save ').click()
    details.getToastSuccessMessage().then(($toast)=> {
        expect($toast).to.have.css({'background-color':'#84d225'})
        cy.wrap($toast).find('.oxd-text--toast-title').invoke('text').should('deep.equal','Success' || 'success')
        cy.wrap($toast).find('.oxd-text--toast-message').invoke('text').should('deep.equal','Successfully Saved')
       
    })
    
});


Cypress.Commands.add('verifyAllTheColumnPresentInTableHeader',()=> {
    details.getTableHeader().find('.oxd-table-th').then(($tableHeader)=> {
        expect($tableHeader).to.have.length('8')
        expect($tableHeader.first().children()).to.have.class('oxd-checkbox-wrapper')
        let columnName = ['File Name','Description','Size','Type','Date Added','Added By','Actions']
        for (let colName = 1; colName<8; colName++){
            cy.wrap($tableHeader).eq(colName).invoke('text').should('deep.equal',columnName[colName-1])
            
        }

    });

    details.getTableBodyColumn().first().click()
    details.getDeleteSelectedRecord().should('have.text',' Delete Selected ').click({force:true})
    details.getDeleteSelectedRecord().eq(1).should('have.text',' Yes, Delete ').click()
    details.getToastSuccessMessage().then(($toast)=> {
        expect($toast).to.have.css({'background-color':'#84d225'})
        cy.wrap($toast).find('.oxd-text--toast-title').invoke('text').should('deep.equal','Success' || 'success')
        cy.wrap($toast).find('.oxd-text--toast-message').invoke('text').should('deep.equal','Successfully Deleted')
       
    })

    /* code to delete all the records*/
    // details.getDeleteAllRecords().click()
    // details.getDeleteSelectedRecord().should('have.text',' Delete Selected ').click({force:true})
    // details.getDeleteSelectedRecord().eq(1).should('have.text',' Yes, Delete ').click()
    // details.getToastSuccessMessage().then(($toast)=> {
    //     expect($toast).to.have.css({'background-color':'#84d225'})
    //     cy.wrap($toast).find('.oxd-text--toast-title').invoke('text').should('deep.equal','Success' || 'success')
    //     cy.wrap($toast).find('.oxd-text--toast-message').invoke('text').should('deep.equal','Successfully Deleted')
       
    // })
    

});