// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//uncaught exception: TypeError: c(...).setup is not a function
Cypress.Commands.add('throw',  (message, options) => {
    throw new Error(message);
})

Cypress.Commands.add('qaId',  (selector, options) => {
    cy.get(`[data-test-id=${selector}`);
});

// this remains in effect for the remainder of the tests in the same spec file.
Cypress.config({ defaultCommandTimeout: 10000 });
