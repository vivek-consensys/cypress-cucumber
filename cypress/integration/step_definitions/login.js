import { Given, When, Then, Before } from "cypress-cucumber-preprocessor/steps";

Given('A user opens a login page', () => {
    cy.visit('/')
  })

  When('A user enters the username {string}', (username) => {
    cy.get('#user-name').type(username)
  })

  When('A user enters the password {string}', (password) => {
    cy.get('#password').type(password)
  })

  And('A user clicks on the login button', () => {
    cy.get('#login-button').click()
  })

  Then('A user will be logged in', () => {
    cy.url().should('contains', '/inventory.html')
  })

  Then('A user will be receiving an incorrect login message', ()=>{
    cy.get('h3').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
  })

  Then('A user will be receiving a locked out user message', ()=>{
    cy.get('h3').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
  })