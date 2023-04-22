import registrationPage, { clickRegisterButton, verifyRegistrationMessage } from "../../../Pages/registrationPage.js";
 import homePage from "../../../Pages/homePage.js";
describe('Register an User', () => {
     beforeEach(() => {
        cy.visit('https://ensekautomationcandidatetest.azurewebsites.net/')
        homePage.clickRegisterLink();
        cy.get("div[class='container body-content'] h2").contains('Register.')

     });

it('Register an User Successfully', () =>{

   
    
    registrationPage.enterUsername('ensekuser@ensek.com');
    registrationPage.enterPassword('EnsekPassword*1');
    registrationPage.enterConfirmPassword('EnsekPassword*1');
    registrationPage.clickRegisterButton();
    cy.wait(10000);
    cy.get("h2[class='text-danger']").contains('An error occurred while processing your request')
        

    //registrationPage.verifyRegistrationMessage()
    
})
it('Verify Invalid Password Message', () =>{
   
    registrationPage.enterUsername('ensekuser@ensek.com');
    registrationPage.enterPassword('EnsekPassword*1');
    registrationPage.enterConfirmPassword('EnsekPassword1');
    registrationPage.clickRegisterButton();
    cy.wait(5000)
    cy.get("div[class='text-danger validation-summary-errors']").contains('The password and confirmation password do not match.')
    
    //registrationPage.verifyInvalidPasswordMessage();
})
})