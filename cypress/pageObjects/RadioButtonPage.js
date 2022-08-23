import BasePage from "./basePage";

class RadioButtonPage extends BasePage{
    static get url (){
        return "/radio-button";
    }

    static get yesRadio(){
        return cy.get("[id='yesRadio']");
    }


    static get impressiveRadio(){
        return cy.get("[id='impressiveRadio']");

    }

    static get noRadio(){
        return cy.get("[id='noRadio']");
    }

    static get buttonValidation(){
        return cy.get('p[class="mt-3"]');
    }

    static get xxx(){
        return cy.get('#noRadio');
    }

}

export default RadioButtonPage;