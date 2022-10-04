import { Given, When, Then, Before } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../../pages/loginPage";
const homeSaucePage = require ('../../pages/loginPage')

Given('A user opens a login page', () => {
    cy.visit('/')
  })

  When('A user enters the username {string}', (username) => {
    homeSaucePage.typeUsername(username)
  })

  When('A user enters the password {string}', (password) => {
    homeSaucePage.typePassword(password)
  })

  When('A user provides incorrect credentials', (table) => {
    table.hashes().forEach(row => {
      loginPage.typeUsername(row.username)
      loginPage.typePassword(row.password)
    });
  })

  And('A user clicks on the login button', () => {
    homeSaucePage.clickLogin()
  })

  Then('A user will be logged in', () => {
    cy.url().should('contains', '/inventory.html')
  })

  Then('A user will receive {string} message', (errorMessage) => {
    homeSaucePage.elements.errorMessage().should('have.text', errorMessage)
  })