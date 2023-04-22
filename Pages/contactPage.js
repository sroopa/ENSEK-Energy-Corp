class contactPage{
    elements = {
        pageHeader: () => cy.get("div[class='container body-content'] h2"),
        errorimage: () => cy.get("img[src='/Content/Images/Error-message.jpg']")
    
    }
}