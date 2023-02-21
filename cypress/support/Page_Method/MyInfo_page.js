
/// <reference types = "Cypress"/>

class Myinfo 
{
   
    getEmployedImage()
    {
        return cy.get('.employee-image')
    }
    getTabList()
    {
        return cy.get('div [role = "tablist"]').find('[role = tab]')
    }
    getMainTitle()
    {
        return cy.get('.orangehrm-main-title')
    }
    getCustomFields()
    {
        return cy.get('div .orangehrm-custom-fields')
    }
    getFormEmployedDetail()
    {
       return cy.get('form .oxd-form-row')
    }
    getLabel()
    {
       return cy.get('.oxd-label')
    }
  
    getInput()
    {
        return cy.get('form .oxd-form-row').find('.oxd-input--active')
    }
    getGender()
    {
        return cy.get('.--gender-grouped-field')
    }
    getDropdown()
    {
        return cy.get('.oxd-select-text--active')
    }
    getSmokerCheckbox()
    {
        return cy.get('.bi-check')
    }

    getSaveButton()
    {
        return cy.get('button[type="submit"]')
    }
    getAddButton()
    {
        return cy.get('.bi-plus')
    }


}
export default Myinfo