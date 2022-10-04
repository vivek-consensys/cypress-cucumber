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
        Then A user will receive "Epic sadface: Username and password do not match any user in this service" message

    Scenario: Locked out user Login
        Given A user opens a login page
        When A user provides incorrect credentials
            | username        | password     |
            | locked_out_user | secret_sauce |
        And A user clicks on the login button
        Then A user will receive "Epic sadface: Sorry, this user has been locked out." message

    Scenario: Incorrect Password
        Given A user opens a login page
        When A user provides incorrect credentials
            | username      | password |
            | standard_user | test     |
        And A user clicks on the login button
        Then A user will receive "Epic sadface: Username and password do not match any user in this service" message