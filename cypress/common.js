export function footerShouldExist() {
  cy.get('#footer').should('exist')
}

export function linkToTargetExist(target = '/') {
  cy.get(`a[href='${target}']`).should('exist')
}

export function titleLevelShouldBeVisible(level = 'h1') {
  cy.get(level).should('exist')
}
