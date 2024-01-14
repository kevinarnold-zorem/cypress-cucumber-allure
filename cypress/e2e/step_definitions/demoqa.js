import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {
    click,
    type,
    select,
    scrollToElement,
    assertInputValueEQ,
    waitForElementVisibility
} from "cypress/integration/common";
import $ from "../../integration/elements";

// Background
Given("User is signed up", () => {
    
});

Given("User is at the login page", () => {
    cy.intercept('**').as('requests')
    cy.visit("/login");
    cy.screenshot();
});


When("User enters username as {string} and password as {string} and clicks on login button", function (username, password) {
    type(username, "Demo Input Username");
    type(password, "Input Password");
    click("Demo Button Login");
});

Then("User should be able to login to the Website", function () {
    //$("Demo Profile").should('be.visible');
    //cy.get("#userName-label",{timeout: 10000}).should('be.visible');
    waitForElementVisibility("Demo Profile");
    cy.url().should("contains", "/profile");

});

When("User enters invalid username as {string} and password as {string} and clicks on login button", function (username, password) {
    type(username, "Demo Input Username");
    type(password, "Input Password");
    click("Demo Button Login");
});

Then("User should NOT be able to login to the Website", function () {
    cy.url().should("contains", "/login");
});

Then("should display an error message as {string}", function (errorMessage) {
    $("Demo Error Message Login").should("have.text", errorMessage);
});