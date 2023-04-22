
import aboutPage from "../../../Pages/AboutPage";
 import homePage from "../../../Pages/homePage";
 
describe('About Page Tests', () => {
   beforeEach(() => {
      cy.visit('https://ensekautomationcandidatetest.azurewebsites.net/')
      
   })

   it('Navigate to Find Out More About Us on About Page', () =>{
    homePage.clickAboutLink();
    aboutPage.clickFindOutMoreAboutUs();
    cy.wait(5000)
    cy.url().should('eq', 'https://ensek.com/about-us')

 
   })

   it( 'Verify the Page title', () => {
    homePage.clickAboutLink();
    cy.get("div[class='container body-content'] h2").contains('About ENSEK Energy Corp..')
    
})
   })
