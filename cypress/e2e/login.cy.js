import loginPage from '../pages/LoginPage'

describe('Practice Test Login', () => {
  const validUsername = 'student'
  const validPassword = 'Password123'

  it('logs in successfully with valid credentials', () => {
    loginPage.login(validUsername, validPassword).assertLoginSuccess()
  })

  it('shows an error for an invalid username', () => {
    loginPage.login('incorrectUser', validPassword).assertInvalidLogin('Your username is invalid!')
  })

  it('shows an error for an invalid password', () => {
    loginPage.login(validUsername, 'incorrectPassword').assertInvalidLogin('Your password is invalid!')
  })

  it('shows an error for an invalid password', () => {
    loginPage.login(validUsername, 'incorrectPassword').assertInvalidLogin('Your password is invalid!')
  })
})
