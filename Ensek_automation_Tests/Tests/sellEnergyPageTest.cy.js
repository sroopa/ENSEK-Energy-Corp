 import homePage from "../../../Pages/homePage.js";
 import SellEnergy from "../../../Pages/sellEnergyPage.js";
 
describe('Sell Energy Page Tests', () => {
     beforeEach(() => {
        cy.visit('https://ensekautomationcandidatetest.azurewebsites.net')
        homePage.clickSellEnergyLink();
})

     it('Verify Page Headers',() => {
        //SellEnergy.verifySellEnergyPageHeader();
        cy.get("div[class='container body-content'] h2").should('have.text', 'Here to sell some energy?');
       
    

     })

     it('Verify the Maintainance Image Displayed', () =>{

         cy.get("img[src='/Content/Images/maintenance-1151312_960_720.png']").should('be.visible');
     })

    })
    