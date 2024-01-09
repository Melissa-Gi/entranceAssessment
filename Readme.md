K so download nodejs
download npm
use npm to install:
    nodemon
    mongoose
    angular
    typescript
should you not have them already

ensure you have the versions in the package.json or later

run with 'ng serve --open' directly, or 
configure using nodemon and run 'npm run dev'

e2e is for testing purposes, that won't be running by default
The app will run in localhost:4200: the default port Angular uses

Left to do:
figuring out how to do routing by managing the path names to connect and perform actions with the endpoints
Test this connection on postman
- Endpoints perform a specific function, taking some number of parameters and return data to the client
- This is where you implement triggers

Connect front end with backend and get rid of the connections to this random hero data stuff
rename files accordingly
Get separate pages for subjects and students by integrating the routing, this will go with the connection by using the endpoints given