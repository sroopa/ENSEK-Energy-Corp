import homePage from "../../../Pages/homePage";
import loginPage from "../../../Pages/loginPage";

describe('Login Page Tests', () => {
    beforeEach(() => {
        cy.visit('https://ensekautomationcandidatetest.azurewebsites.net/')
        homePage.clickLoginLink();
        cy.get("div[class='container body-content'] h2").contains('Log in.')

     }); 

     it.skip(' Verify Login Page Header',() =>{

      cy.get("div[class='container body-content'] h2").contains('Log in.')
     }
     )
     
     it('Verify User Can Login Successfully', () =>{
        homePage.clickLoginLink();
        loginPage.enterEmail('user@ensek.com')
        loginPage.enterPassword('Password*1')
        loginPage.checkRememberMe();
        loginPage.clickLoginButton();
        cy.wait(10000)
        cy.get("h2[class='text-danger']").contains('An error occurred while processing your request');
        //loginPage.verifyLoginMessage();
        cy.get('.container.body-content').screenshot('');
     })

     it('Verify User Can Login with Invalid Email', () =>{
      homePage.clickLoginLink();
        loginPage.enterEmail('user.ensek')
        loginPage.clickLoginButton();
       // loginPage.invalidEmailErrorMessage();
       cy.get('span#Email-error').contains('The Email field is not a valid e-mail address.')
          cy.get('.container.body-content').screenshot('');
    
     })

     it('Verify User Can Register From Login Page', () =>{
      homePage.clickLoginLink();
      loginPage.clickRegisterAaNewUser();
      cy.url().should('eq', 'https://ensekautomationcandidatetest.azurewebsites.net/Account/Register')
     })

    })

  

    
