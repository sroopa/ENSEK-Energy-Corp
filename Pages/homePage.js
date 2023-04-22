class homepage{
    elements = {
        pageHeader: () => cy.get("div[class='jumbotron'] h1"),
        registrationLink: () => cy.contains('Register'),
        loginLink: () => cy.get('#loginLink'),
        homeLink: () => cy.get('a[href="/"]'),
        contactLink:  () => cy.get("a[href='/Home/Contact']"),
        aboutLink: () => cy.get("ul[class='nav navbar-nav'] li:nth-child(2) a:nth-child(1)"),
        //("ul[class='nav navbar-nav']>li>a[href$='/Home/About']"),
        findOutMore: () => cy.get('.btn.btn-primary.btn-lg'),
        buyEnergy: () => cy.get("a[href='/Energy/Buy']"),
        sellEnergy: () => cy.get("a[href='/Energy/Sell']"),
        learnMore: () =>  cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > p:nth-child(3) > a:nth-child(1)")
        //("a[href='/Home/About']")
 

    }
    verifyPageHeader(pageheader){
        this.elements.pageHeader().contains('')
    }
    
    clickRegisterLink(registerlink){
        this.elements.registrationLink().click();
    }

    clickLoginLink(loginLink){
        this.elements.loginLink().click()
    }
    clickHomeLink(homeLink){
        this.elements.homeLink().click()
    }
    clickAboutLink(aboutLink){
        this.elements.aboutLink().click()
    }
    clickContactLink(contactLink){
        this.elements.contactLink().click()
    }
    clickFindOutMore(findOutMore){
        this.elements.findOutMore().click();
    }

    clickBuyEnergyLink(buyEnergy){
        this.elements.buyEnergy().click()
    }
    clickSellEnergyLink(sellEnergy){
        this.elements.sellEnergy().click()
    }
    clicklearnMoreLink(learnMore){
        this.elements.learnMore().click()
    }
}



module.exports = new homepage();