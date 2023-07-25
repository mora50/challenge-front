describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')

    cy.intercept('POST', 'http://localhost:3333/').as('postRequest')

    cy.get('article').first().should('be.visible').click()

    cy.get('[aria-label="Adicionar produto ao carrinho"]')
      .should('be.visible')
      .click()

    cy.get('[aria-label="Abrir carrinho"]').should('be.visible').click()
  })
})
