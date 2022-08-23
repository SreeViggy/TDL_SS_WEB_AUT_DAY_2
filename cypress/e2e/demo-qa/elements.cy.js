import TextBoxPage from "../../pageObjects/textBoxPage";
import checkBoxPage from "../../pageObjects/checkBoxPage";
import RadioButtonPage from "../../pageObjects/RadioButtonPage";


context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    // Create texbox scenario
    // fill in textboxes with necessary information
    // validate the paragraphs

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

    it.only("RadioButton Validatoin", ()=>{
      RadioButtonPage.yesRadio.click({force: true});
      RadioButtonPage.buttonValidation.should("contains.text",'Yes');
      RadioButtonPage.impressiveRadio.click({force: true});
      RadioButtonPage.buttonValidation.should("contains.text",'Impressive');
      RadioButtonPage.noRadio.should('exist').should('be.disabled')

    });
   
  });
   
  context("Web tables scenarios", () => {
    // Create WebTables page object
    // Create scenario 1:
    // Click add record button
    // fill in the necessary information
    // click submit button
    // search for the user based on previously added information
    // validate tha the user is visible

    // Create Scenario 2:
    // Delete all table rows
    // Validate that we see text - No rows found
  });

  context("Buttons scenarios", () => {
    // Create buttons clicking scenario
    // Create Buttons page
    // Check documentation https://docs.cypress.io/api/commands/and for how to perform different types of clicking
    // Click Double click button
    // Validate the double click message
    // Click rightclick button
    // Validate the right click message
    // Do dynamic click
    // Validate dynamic click message
  });
});
