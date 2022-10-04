Feature: Login Feature

    Scenario: Success Login
    Given A user opens a login page
    When A user enters the username "standard_user"
    And A user enters the password "secret_sauce"
    And A user clicks on the login button
    Then A user will be logged in

    Scenario: Incorrect Login
    Given A user opens a login page
    When A user enters the username "standard_user"
    And A user enters the password "locked_out_user"
    And A user clicks on the login button
    Then A user will be receiving an incorrect login message

    Scenario: Locked out user Login
    Given A user opens a login page
    When A user enters the username "locked_out_user"
    And A user enters the password "secret_sauce"
    And A user clicks on the login button
    Then A user will be receiving a locked out user message