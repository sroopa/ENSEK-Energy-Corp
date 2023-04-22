class loginpage{

    elements = {

        enteremail: () => cy.get('#Email'),
        enterpassword: () => cy.get('#Password'),
        checkrememberme: () => cy.get('#RememberMe'),
        clickloginbutton: () => cy.get("input[value='Log in']"),
        clickregisterasnewuser: () => cy.get("form[role='form'] p a"),
        loginmessage: () => cy.get("h2[class='text-danger']"),
        invalidEmail: () => cy.get('span#Email-error')
    }
    enterEmail(email){
        this.elements.enteremail().type(email)
    }

    enterPassword(password){
        this.elements.enterpassword().type(password)
    }

    checkRememberMe(rememberme){
        this.elements.checkrememberme().check();

    }
    clickLoginButton(clickloginbutton){
        this.elements.clickloginbutton().click();

    }

    clickRegisterAaNewUser(clickregisterasnewuser){
        this.elements.clickregisterasnewuser().click();
    }

    verifyLoginMessage(loginmessage){
        this.elements.loginmessage().contains('An error occurred while processing your request');
        
    }

    invalidEmailErrorMessage(invalidemail){
        this.elements.invalidEmail().should('eq','The Email field is not a valid e-mail address.')
    }

}
module.exports = new loginpage();