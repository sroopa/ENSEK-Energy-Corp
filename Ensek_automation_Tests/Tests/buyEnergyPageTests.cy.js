

 import buyEnergyPage from "../../../Pages/buyEnergyPage";
 import homePage from "../../../Pages/homePage";
 import saleConfirmPage from "../../../Pages/saleConfirmPage"

describe('Buy Energy Tests', () => {
    beforeEach(() => {
       cy.visit('https://ensekautomationcandidatetest.azurewebsites.net/')
       homePage.clickBuyEnergyLink();


    });
    it('Verify Buy Energy Page Header', () => {
        buyEnergyPage.verifyBuyEnergyPageTitle
        cy.get("div[class='container body-content'] h2").contains('Buy Energy')
    })

    it('Verify User Can Buy Energy - Gas', () =>{
       
        buyEnergyPage.enterGasNumberOfUnitsRequired('200')
        buyEnergyPage.clickBuyGasButton();
        cy.get('div.well').contains('Thank you for your purchase of 200 units of Gas We have popped it in the post and it will be with you shortly.').contains('200');
    
    })

    it('Verify User Can Buy Energy - Electricity', () =>{
        buyEnergyPage.enterElectricityNumberOfUnitsRequired('200')
        buyEnergyPage.clickBuyElectricityButton();
        cy.get('div.well').contains('Thank you for your purchase of 200 units of Electricity We have popped it in the post and it will be with you shortly.');
         
    })


    it('Verify User Can Buy Energy - Oil', () =>{
        buyEnergyPage.enterOilNumberOfUnitsRequired('200')
        buyEnergyPage.clickBuyOilButton()
        cy.get('div.well').contains('Thank you for your purchase of 200 units of oil We have popped it in the post and it will be with you shortly.');
    
    })

    it('Verify the Reset Button, Resets The Values Of The Quantity Of Units Available', () =>{
        buyEnergyPage.clickResetButton();
        cy.get("table[class='table']>tbody>tr:nth-child(1)>td:nth-child(5)").contains('3000')
        cy.get("table[class='table']>tbody>tr:nth-child(3)>td:nth-child(5)").contains('4322')
        cy.get("table[class='table']>tbody>tr:nth-child(4)>td:nth-child(5)").contains('20')
        
    })
    it('Verify Back TO Home Page Lands User on Home Page', () => {
        buyEnergyPage.clickBackToHomePage()
        cy.get("div[class='jumbotron'] h1").contains('ENSEK Energy Corp.')
    })
    

    } )
