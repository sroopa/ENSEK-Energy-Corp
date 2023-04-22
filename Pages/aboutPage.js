class aboutPage{
    elements = {
        pageHeader: () => cy.get("div[class='container body-content'] h2"),
        findOutMoreAboutUs: () =>cy.get('.btn.btn-primary.btn-lg')
    }

    verifyAboutPageHeader(aboutpageheader){

        this.elements.pageHeader().should('have.text', 'About ENSEK Energy Corp..')
    }

    clickFindOutMoreAboutUs(findoutmoreaboutus){
        this.elements.findOutMoreAboutUs().click();
    }
}
module.exports = new aboutPage();