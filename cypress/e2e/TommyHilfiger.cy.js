import {Homepage} from "../fixtures/elementSelectors";

describe("Testlio",function(){
    beforeEach(() => {
        cy.clearCookies();
        cy.visit ("/");
        Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
        
})

it("Tommy Hilfilger Website",()=>{
    cy.get(Homepage.showMoreBtn).click();
    cy.get(Homepage.saveAndAccept).click();
    cy.get(Homepage.categorySection).contains('DAMES').should('be.visible');
    cy.get(Homepage.categorySection).contains('HEREN').should('be.visible');
    cy.get(Homepage.categorySection).contains('KINDEREN').should('be.visible');
    cy.get(Homepage.categorySection).contains('TOMMY JEANS').should('be.visible');
    cy.get(Homepage.categorySection).contains('OUT OF SEASON').should('be.visible');
    cy.get(Homepage.categorySection).contains('TOMMY STORIES').should('be.visible');
});

it("Login no email or password",()=>{
    cy.get(Homepage.showMoreBtn).click();
    cy.get(Homepage.saveAndAccept).click();
    cy.get(Homepage.signInBtn).click();
    cy.get(Homepage.loginBtn).click();
    cy.get(Homepage.loginModal).should('not.be.hidden');
});

it("Login with invalid Email",()=>{
    cy.get(Homepage.showMoreBtn).click();
    cy.get(Homepage.saveAndAccept).click();
    cy.get(Homepage.signInBtn).click();
    cy.get(Homepage.emailField).click().type(Homepage.wrongEmail);
    cy.get(Homepage.passwordField).click().type(Cypress.env('password'));
    cy.get(Homepage.loginBtn).click();
    cy.get(Homepage.loginModal).should('not.be.hidden');
});

it("Login with invalid Password",()=>{
    cy.get(Homepage.showMoreBtn).click();
    cy.get(Homepage.saveAndAccept).click();
    cy.get(Homepage.signInBtn).click();
    cy.get(Homepage.emailField).click().type(Cypress.env('email'));
    cy.get(Homepage.passwordField).click().type(Homepage.wrongPassword);
    cy.get(Homepage.loginBtn).click();
    cy.get(Homepage.loginModal).should('not.be.hidden');
});

it("Login with valid credentials",()=>{
    cy.get(Homepage.showMoreBtn).click();
    cy.get(Homepage.saveAndAccept).click();
    cy.get(Homepage.signInBtn).click();
    cy.get(Homepage.emailField).click().type(Cypress.env('email'));
    cy.get(Homepage.passwordField).click().type(Cypress.env('password'));
    cy.get(Homepage.loginBtn).click();
    cy.document()
        .its('cookie')
        .should('contain', 'optimizelyUserId');
    // cy.get('.some-button').click();
    // cy.get('.some-modal').within( ()=> {
    //   cy.contains('abc').should('be.visible');
    //   cy.contains('def').should('be.visible');
    //   cy.contains('xyz').should('be.visible');
    // });
});
});