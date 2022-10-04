import { Given, When, Then, Before } from "cypress-cucumber-preprocessor/steps";
const homeSaucePage = require ('../../pages/homeSaucePage')

Given('A user opens a login page', () => {
    cy.visit('/')
  })

  When('A user enters the username {string}', (username) => {
    homeSaucePage.typeUsername(username)
  })

  When('A user enters the password {string}', (password) => {
    homeSaucePage.typePassword(password)
  })

  And('A user clicks on the login button', () => {
    homeSaucePage.clickLogin()
  })

  Then('A user will be logged in', () => {
    cy.url().should('contains', '/inventory.html')
  })

  Then('A user will be receiving an incorrect login message', ()=>{
    homeSaucePage.elements.errorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service')
  })

  Then('A user will be receiving a locked out user message', ()=>{
    homeSaucePage.elements.errorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
  })