import homePage from "../../../Pages/homePage";


describe('Contact Page Tests', () =>{
    beforeEach(() => {
        cy.visit('https://ensekautomationcandidatetest.azurewebsites.net/')
        homePage.clickContactLink();
    })

    it('Verify The Page Header', () =>{
         
        cy.get("div[class='container body-content'] h2").contains('Contact.')
    })

    it('Verify The Error Image Displayed On The Contact Page', () =>{
        
        cy.get("img[src='/Content/Images/Error-message.jpg']").should('be.visible');
    
    })

})