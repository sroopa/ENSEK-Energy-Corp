import homePage from "../../../Pages/homePage";


describe('Home Page Tests', () => {
    beforeEach(() => {
        cy.visit('https://ensekautomationcandidatetest.azurewebsites.net/')

     }); 


     it('Verify Home Page Title', () =>{
       // homePage.pageHeader().contains('ENSEK Energy Corp.')
     })

     it('Navigate to Buy Energy Page', () =>{
        homePage.clickBuyEnergyLink();
        cy.get("div[class='container body-content'] h2").contains('Buy Energy')
     })


     it('Navigate to Sell Energy Page', () =>{
        homePage.clickSellEnergyLink();
        cy.get("div[class='container body-content'] h2").contains('Here to sell some energy?')
     })

     
     it('Navigate to Find Out More Page', () =>{
        homePage.clickFindOutMore();
        cy.url().should('eq', 'https://ensek.com/')
     })


     it('Navigate to Learn More Page', () =>{
        homePage.clicklearnMoreLink();
        cy.get("div[class='container body-content'] h2").contains('About ENSEK Energy Corp..')


     })

     it('Navigate to About Page', () =>{
        homePage.clickAboutLink();
        cy.get("div[class='container body-content'] h2").contains('About ENSEK Energy Corp..')
     })

     it('Navigate to Contact Page', () =>{
        homePage.clickContactLink();
        cy.get("div[class='container body-content'] h2").contains('Contact.')
     })


     it('Navigate to Registration Page', () =>{
        homePage.clickRegisterLink();
        cy.get("div[class='container body-content'] h2").contains('Register.')
     })


     it('Navigate to Login Page', () =>{
        homePage.clickLoginLink();
        cy.get("div[class='container body-content'] h2").contains('Log in.')
     })
    })