class buyEnergyPage{
    elements = {
        pageTitle: () => cy.get("div[class='container body-content'] h2"),
        resetButton: () => cy.get("input[value='Reset']"),
          
        gasQuantityOfUnitsAvailable: () => cy.get('table>tbody>tr:nth-child(1)>td:nth-child(5)'),
        gasNumberOfUnitsRequired: () => cy.get("table>tbody>tr:nth-child(1)>td:nth-child(6)"),
        gasBuyButton: () => cy.get("table[class='table']>tbody>tr:nth-child(1)>td:nth-child(7)"),
 
        electricityQuantityOfUnitsAvailable: () => cy.get("table[class='table']>tbody>tr:nth-child(3)>td:nth-child(5)"),
        electricityNumberOfUnitsRequired: () => cy.get("table[class='table']>tbody>tr:nth-child(3)>td:nth-child(6)"),
        electricityBuyButton: () => cy.get("table[class='table']>tbody>tr:nth-child(3)>td:nth-child(7)"),

        oilQuantityOfUnitsAvailable: () => cy.get("table[class='table']>tbody>tr:nth-child(4)>td:nth-child(5)"),
        oilNumberOfUnitsRequired: () => cy.get("table[class='table']>tbody>tr:nth-child(4)>td:nth-child(6)"),
        oilBuyButton: () => cy.get("table[class='table']>tbody>tr:nth-child(4)>td:nth-child(7)"),
        backToHomePage: () => cy.get("div[class='container body-content'] div a")


    }
   verifyBuyEnergyPageTitle(pageTitle){
        this.elements.pageTitle().should('have.text', "Buy Energy");
        
    }
    enterGasNumberOfUnitsRequired(gasnumberofunitsrequired){
        this.elements.gasNumberOfUnitsRequired().type(gasnumberofunitsrequired)
    }
    
    clickBuyGasButton(gasbuybutton)
    {
        this.elements.gasBuyButton().click();

    }

    enterElectricityNumberOfUnitsRequired(electricitynumberofunitsrequired){
        this.elements.electricityNumberOfUnitsRequired().type(electricitynumberofunitsrequired)
    }
    clickBuyElectricityButton(electricitybuybutton)
    {
        this.elements.electricityBuyButton().click();
    }

    enterOilNumberOfUnitsRequired(oilnumberofunitsrequired){
        this.elements.oilNumberOfUnitsRequired().type(oilnumberofunitsrequired)
    }

    clickBuyOilButton(oilbuybutton)
    {
        this.elements.oilBuyButton().click();
    }
    clickResetButton(resetbutton)
    {
        this.elements.resetButton().click();
    }

    clickBackToHomePage(backtohomepage)
    {
        this.elements.backToHomePage().click();
    }
   

}
module.exports = new buyEnergyPage();