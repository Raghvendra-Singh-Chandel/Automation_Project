/// <reference types = "cypress"/>


class contactDetails {
    getContactHeading() {
        return cy.get('.orangehrm-sub-title')
    }

    getDetailsSection() {
        return cy.get('.oxd-grid-3')
    }

    getAddressDetailsLabel() {
        return cy.get('.oxd-form-row').eq(0).find('.oxd-grid-item .oxd-label')

    }

    getAddressDetailsInputFields() {
        return cy.get('.oxd-form-row').eq(0).find('.oxd-grid-item .oxd-input--active')
    }

    getAddressCountryDropdown() {
        return cy.get('.oxd-select-text-input')
    }
    getSelectCountry() {
        return cy.get('.oxd-select-dropdown > :nth-child(89)')
    }

    getTelephoneDetailsLabel() {
        return cy.get('.oxd-form-row').eq(1).find('.oxd-grid-item .oxd-label')
    }

    getTelephoneDetailsInputField() {
        return cy.get('.oxd-form-row').eq(1).find('.oxd-grid-item .oxd-input--active')
    }
    getEmailLabel() {
        return cy.get('.oxd-form-row').eq(2).find('.oxd-grid-item .oxd-label')  
    }
    getEmailInputFields() {
        return cy.get('.oxd-form-row').eq(2).find('.oxd-grid-item .oxd-input--active')
    }

    getSaveFormButton() {
        return cy.get('.oxd-button--secondary')
    }

    getAddAttachmentButton() {
        return cy.get('.bi-plus')
    }

    getAttachmentSection() {
        return cy.get('.orangehrm-attachment')
    }

    getAttachmentSectionLabel() {
        return cy.get('.orangehrm-attachment').find('.oxd-label')
    }

    getAttachmentCommentTextArea () {
        return cy.get('textarea')
    }

    getSaveAttachmentButton() {
        return cy.get('.orangehrm-attachment').find('.oxd-button--secondary')
    }

    getAttachmentCancelButton() {
        return cy.contains('button',' Cancel ')
    }

    getPageMainTitle() {
        return cy.get('.orangehrm-edit-employee-content').find('.orangehrm-main-title')

    }
    getContactDetailsTab() {
        return cy.contains('.orangehrm-tabs-item','Contact Details')
    }

    getUploadAttachment() {
        return cy.get('input[type="file"]')
    }
    getToastSuccessMessage() {
        return cy.get('.oxd-toast')
    }

    getTableHeader() {
        return cy.get('.oxd-table .oxd-table-header')
    }

    getTableBodyColumn() {
        return cy.get('.oxd-table-body .oxd-padding-cell')
    }

    getDeleteSelectedRecord() {
        return cy.get('.oxd-button--label-danger')
    }

    getDeleteAllRecords() {
        return cy.get('.oxd-table .oxd-table-header').find('.oxd-table-th').first()
    }



}

export default contactDetails