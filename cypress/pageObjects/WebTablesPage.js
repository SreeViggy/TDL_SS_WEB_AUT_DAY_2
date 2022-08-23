import BasePage from "./basePage";

class WebTablesPage extends BasePage{
    static get url(){
        return "/webtables";
    }

    static get addButton(){
        return cy.get("[id='addNewRecordButton']");
    }
    static get firstName(){
        return cy.get("[id='firstName']");
    }

    static get lastName(){
        return cy.get("[id='lastName']");
    }

    static get emailID(){
        return cy.get("[id='userEmail']");
    }

    static get age(){
        return cy.get("[id='age']");
    }

    static get salary(){
        return cy.get("[id='salary']");
    }

    static get department(){
        return cy.get("[id='department']");
    }

    static get submitButton(){
        return cy.get("[id='submit']");
    
    }

    static get searchBar(){
        return cy.get("[id='searchBox']");
    }

    static get infoValidation(){
        return cy.get("[role='rowgroup']");
    }



}

export default WebTablesPage;