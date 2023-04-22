class registrationPage{

    elements = {
        enterusername: () => cy.get('#Email'),
        enterpassword: () => cy.get('#Password'),
        enterconfirmpassword: () => cy.get('#ConfirmPassword'),
        clickregisterbutton: () => cy.get('input[value="Register"]'),
        registrationmessage: () => cy.get("h2[class='text-danger']"),
        invalidPasswordMessage: () => cy.get("div[class='text-danger validation-summary-errors']")
    }

    enterUsername(username){
        this.elements.enterusername().type(username)

    }
    enterPassword(password){
        this.elements.enterpassword().type(password)
    }

    enterConfirmPassword(confirmpassword){
        this.elements.enterconfirmpassword().type(confirmpassword)
    }

     
    clickRegisterButton(Register){
        this.elements.clickregisterbutton().click();
    }

    verifyRegistrationMessage(registrationmessage){
        this.elements.registrationmessage().should('have.text', 'An error occurred while processing your request')
        
    }

    verifyInvalidPasswordMessage(invalidpasswordmessage){
        this.elements.invalidPasswordMessage().should('have.text', 'The password and confirmation password do not match.')
    }

}
module.exports = new registrationPage();


    