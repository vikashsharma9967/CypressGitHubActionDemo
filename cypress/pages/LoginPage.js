class LoginPage {
  elements = {
    username: '#username',
    password: '#password',
    submit: '#submit',
    error: '#error',
    successTitle: 'Congratulations',
    successText: 'successfully logged in',
    logoutButton: 'Log out',
  }

  visit() {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    return this
  }

  login(username, password) {
    cy.get(this.elements.username).clear().type(username)
    cy.get(this.elements.password).clear().type(password)
    cy.get(this.elements.submit).click()
    return this
  }

  assertLoginSuccess() {
    cy.url().should('include', '/logged-in-successfully/')
    cy.contains(this.elements.successTitle).should('be.visible')
    cy.contains(this.elements.successText).should('be.visible')
    cy.contains(this.elements.logoutButton).should('be.visible')
    return this
  }

  assertInvalidLogin(message) {
    cy.get(this.elements.error).should('be.visible').and('contain.text', message)
    return this
  }
}

export default new LoginPage()
