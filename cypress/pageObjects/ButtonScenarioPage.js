import BasePage from "./basePage";

class ButtonScenarioPage extends BasePage{
    static get url(){
        return "/buttons";
    }

    static get doubleClickMe(){
        return cy.get("[id='doubleClickBtn']");
    }
    static get doubleClickMsgValidation(){
        return cy.get("[id='doubleClickMessage']");
    }

    static get rightClickMe(){
        return cy.get("[id=rightClickBtn']");
    }

    static get rightClickMsgValidation(){
        return cy.get("[id='rightClickMessage']");
    }

    static get clickMe(){
        return cy.get("[id='tKWEm']");
    }
    static get dynamiclickMsgValidation(){
        return cy.get("[id='dynamicClickMessage']");
    }

}

export default ButtonScenarioPage;