# MobileApp2-session2
In this code we used authGuard and authenticationServices to secure a page and disable
the routing to the page if the user is not logged in.

# How to run the code
After cloning the repository, we have to run the following command in the terminal:
'npm install' to install all the dependencies.
After installing the dependencies, we have to run the following command in the terminal:
'ionic serve --lab' to run the app in the browser.

# files to check:
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