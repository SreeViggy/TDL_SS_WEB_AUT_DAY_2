import BasePage from "./basePage";

class checkBoxPage extends BasePage{
    static get url() {
        return "/checkbox";
      }

      static get clickExpandButton(){
        return cy.get("[title='Expand all']");
      }

      static get checkNotes(){
        return cy.get("[id='tree-node-notes']");
      }

      static get checkReact(){
        return cy.get("[id='tree-node-react']");
      }

      static get checkAngular(){
        return cy.get("[id='tree-node-angular']");
      }

      static get checkGeneral(){
        return cy.get("[id='tree-node-general']");
      }

      static get excelFile(){
        return cy.get("[id='tree-node-excelFile']");
      }

      static get checkBoxValid(){
        return cy.get("[id='result']");
      }
}

export default checkBoxPage;