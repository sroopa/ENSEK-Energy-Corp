import homePage from "../../../Pages/homePage";
import saleConfirmPage from "../../../Pages/saleConfirmPage";

import buyEnergyPage from "../../../Pages/buyEnergyPage";


describe('Sale Confirm Page Tests', () =>{
    beforeEach(() => {
        cy.visit('https://ensekautomationcandidatetest.azurewebsites.net/')

     });
    it('Navigate to Buy Energy Page Using Buy More From Sale Confirmed Page', () =>{
        homePage.clickBuyEnergyLink();
        buyEnergyPage.enterGasNumberOfUnitsRequired();
        buyEnergyPage.clickBuyGasButton();
        saleConfirmPage.clickBuyMore();
        cy.get("div[class='container body-content'] h2").contains("Buy Energy");
    
    })
})