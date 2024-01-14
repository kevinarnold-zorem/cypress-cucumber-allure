Feature: Account Login

	Background: Precondiciones para iniciar sesión
		Given User is signed up
		And User is at the login page

	Scenario Outline: Check the Login correctly to DemoQA
		When User enters username as '<username>' and password as '<password>' and clicks on login button
		Then User should be able to login to the Website
		Examples:
			| username | password |
			| Lorem412    | Admin123! |

	Scenario Outline: Check the Login is not possible when user enters invalid credentials
		When User enters invalid username as '<username>' and password as '<password>' and clicks on login button
		Then User should NOT be able to login to the Website
		And should display an error message as "Invalid username or password!"
		Examples:
			| username | password  |
			| Admin2   | admin1234 |

