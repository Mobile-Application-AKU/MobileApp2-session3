# MobileApp2-session3/4
## session3:
In this code we used authGuard and authenticationServices to secure a page and disable
the routing to the page if the user is not logged in.

## session4:
In this code we created a simple login form to get the username & password form the user, 
then edited the login function to check the user input.

# How to run the code
After cloning the repository, we have to run the following command in the terminal:
'npm install' to install all the dependencies.
After installing the dependencies, we have to run the following command in the terminal:
'ionic serve --lab' to run the app in the browser.

# files to check:
## session3:
home page:
----------
- src/app/home/home.page.html
- src/app/home/home.page.ts

login page:
-----------
- src/app/login/login.page.html
- src/app/login/login.page.ts

dashboard page:
---------------
- src/app/dashboard/dashboard.page.html
- src/app/dashboard/dashboard.page.ts

app module:
-----------
- src/app/app.module.ts

app routing:
------------
- src/app/app-routing.module.ts

authGuard service page:
-----------------------
- src/app/services/auth-guard.service.ts

authentication service page:
----------------------------
- src/app/services/authentication.service.ts

## session 4:
home module:
------------
- src/app/home/home.module.ts (lines 10 & 20)

app module:
-----------
- src/app/app.module.ts (lines 18 & 32->36)

authentication service page:
----------------------------
- src/app/services/authentication.service.ts (lines 43->77)

login page:
-----------
- src/app/login/login.page.html (lines 8->18)
- src/app/login/login.page.ts (lines 12->15 & 26->32)