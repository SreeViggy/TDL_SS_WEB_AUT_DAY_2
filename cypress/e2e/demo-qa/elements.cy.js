import TextBoxPage from "../../pageObjects/textBoxPage";
import checkBoxPage from "../../pageObjects/checkBoxPage";
import RadioButtonPage from "../../pageObjects/RadioButtonPage";
import WebTablesPage from "../../pageObjects/WebTablesPage";
import ButtonScenarioPage from "../../pageObjects/ButtonScenarioPage";


  context("Elements Page", () => {
  context("Text box scenarios", () => {
  beforeEach(() => {
  TextBoxPage.visit();
    });

      it("Filling in Text Boxes", () => {
      TextBoxPage.firstName.type("Vignesh Krishnan");
      TextBoxPage.emailId.type("viki.vconnect@gmail.com");
      TextBoxPage.currentAddress.type("Tallinas 35");
      TextBoxPage.permanentAddress.type("Latvia");
      TextBoxPage.submitButton.click();
      TextBoxPage.paraName.should("contains.text",'Vignesh Krishnan');
      TextBoxPage.paraEmail.should("contains.text",'viki.vconnect@gmail.com');
      TextBoxPage.paraCurrentAddress.should("contains.text",'Tallinas 35');
      TextBoxPage.paraPermanentAddress.should("contains.text",'Latvia');
      
    });
    });

  
    context("Check box scenarios", () => {
    beforeEach(()=>{
    checkBoxPage.visit();
    });

      it("Check-Box validation", ()=>{
      checkBoxPage.clickExpandButton.click();
      checkBoxPage.checkNotes.click({force: true});
      checkBoxPage.checkReact.click({force: true});
      checkBoxPage.checkAngular.click({force: true});
      checkBoxPage.checkGeneral.click({force: true});
      checkBoxPage.excelFile.click({force: true});
      checkBoxPage.checkBoxValid.should("contains.text",'notes' );
      checkBoxPage.checkBoxValid.should("contains.text",'react' );
      checkBoxPage.checkBoxValid.should("contains.text",'angular' );
      checkBoxPage.checkBoxValid.should("contains.text",'excelFile' );

    });
   
    });

    context("Radio button scenarios", () => {
    beforeEach(()=>{
    RadioButtonPage.visit();   
    });

      it("RadioButton Validatoin", ()=>{
      RadioButtonPage.yesRadio.click({force: true});
      RadioButtonPage.buttonValidation.should("contains.text",'Yes');
      RadioButtonPage.impressiveRadio.click({force: true});
      RadioButtonPage.buttonValidation.should("contains.text",'Impressive');
      RadioButtonPage.noRadio.should('exist').should('be.disabled')

    });
   
  });
   
  context("Web tables scenarios", () => {
  beforeEach(()=>{
  WebTablesPage.visit();

  });

    it("Web Tables", ()=>{
    WebTablesPage.addButton.click({force: true});
    WebTablesPage.firstName.type("Vignesh");
    WebTablesPage.lastName.type("Krishnan");
    WebTablesPage.emailID.type("viki.vconnect@gmail.com");
    WebTablesPage.age.type("30");
    WebTablesPage.salary.type("15000");
    WebTablesPage.department.type("IT");
    WebTablesPage.submitButton.click();
    WebTablesPage.searchBar.type("Vignesh");
    WebTablesPage.infoValidation.should("contain.text", 'Vignesh');

  });
  });


    context("Buttons scenarios", () => {
    beforeEach(()=>{
    ButtonScenarioPage.visit();
    });

    it.only("ButtonValidation",()=>{
    ButtonScenarioPage.doubleClickMe.click({force: true});
    ButtonScenarioPage.rightClickMe.click({force: true});
    ButtonScenarioPage.clickMe.click({force: true});
    ButtonScenarioPage.doubleClickMsgValidation.should("contains.text",'double click');
    ButtonScenarioPage.rightClickMsgValidation.should("contains.text",'You have done a right click');
    ButtonScenarioPage.dynamiclickMsgValidation.should("contains.text",'You have done a dynamic click');

    });

    });

  })
