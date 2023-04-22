class saleConfirmPage{
    elements = {
       
        buyMore: () => cy.get('.btn')
       
    }

  
    
    clickBuyMore(buymore)
    {
        this.elements.buyMore().click();
    }

}
module.exports - new saleConfirmPage();