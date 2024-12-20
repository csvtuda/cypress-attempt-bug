/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('https://example.cypress.io');
    // simulate a flaky test
    if (Cypress.currentRetry < 2) {
      expect(true).to.eq(false)
    } else {
      expect(true).to.eq(true)
    }
  })
})
