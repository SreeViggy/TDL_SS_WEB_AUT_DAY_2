import BasePage from "./basePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get clickTextBox() {
    return cy.get("[id='item-0']");
  }

  static get firstName(){
    return cy.get("[id='userName']");
  }

  static get emailId(){
    return cy.get("[id='userEmail']");
  }

  static get currentAddress(){
    return cy.get("[id='currentAddress']");

  }

  static get permanentAddress(){
    return cy.get("[id='permanentAddress']");
  }

  static get submitButton(){
    return cy.get("[id='submit']");
  }

  static get paraName(){
    return cy.get("[id='name']");
  }


  static get paraEmail(){
    return cy.get("[id='email']");
  }


  static get paraCurrentAddress(){
    return cy.get("p[id='currentAddress']");
  }

  static get paraPermanentAddress(){
    return cy.get("p[id='permanentAddress']");
  }

}

export default TextBoxPage;
