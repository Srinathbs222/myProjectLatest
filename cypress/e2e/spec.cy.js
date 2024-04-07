// cypress/integration/addNumbers.spec.js

describe('AddNumbers Component Test', () => {
  it('Visits the localhost and performs addition', () => {
    // Visit the URL
    cy.visit('http://localhost:3000')

    // Input values into the number fields
    cy.get('input[type="number"]').eq(0).type('5')
    cy.get('input[type="number"]').eq(1).type('7')

    // Click the add button
    cy.get('button').contains('Add').click()

    // Verify that the result is displayed correctly
    cy.get('h2').contains('12').should('be.visible')
    
  })
})