<!-- ABOUT THE PROJECT -->
## About The Project

This project is the product of my take on a technical assessment in order to gain skills in:
* Angular CLI projects using typescript
* Routing with typescript
* Connecting MongoDB database to the application
* API calls with Node.js and express
* State management with NGrX

<br>

>**The application is a platform to act as a type of school database interface which displays a table of students and subjects which the user can view and make changes to. CRUD operations are available excpect for update and application is not completely stateless.** 

<br>

### Built With

* Typescript
* Express
* Javascript
* CSS
* HTML
* Node.js
* NgRX/NxJS


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites and Installation

* Download nodejs
* Use npm to install correct versions of:
    - nodemon
    - mongodb
    - angular
    - typescript
* Ensure versions of your software align with those detailed in the package.json file

1. Get the backend server running on local:3000 by going to the command line in your terminal and typing:
    ```
    npm run dev
    ```
    This is equivalent to running nodemon api/server.js or node api/server.js. A successful connection will output 
    ```
    Angular app listening at http://localhost:3000
    ```

2. Create a **new terminal**. This will host the frontend server and open the Angular application. Type in:
    ```
    npm run start
    ```
    This is equivalent to running ng serve and will open a new window in your browser with the app hosted on localhost:4200. If this doesn't happen automatically, type localhost:4200 into your browser to connect.

3. Make use of the interface buttons or endpoints to navigate the app.

<!-- USAGE EXAMPLES -->
## Usage

Make use of the navigation bar to view each table, where you will find the following operations available:

1. Read: Find a student or subject
    This feature appears by default. Enter the ID for the entry you are looking for in the one line text box and click submit. The find button will then appear, which will display the rest of the associated information.

2. Delete a student or subject
    Clicking submit will also reveal the delete button which will permanently remove the entry from the school database.  Successful deletion will display an empty table after the process.

3. Create a student or subject
    Directly below the navigation bar is the Create button. Pressing this will open a form to type in the new entry's details. Then proceed to click 'Create Subject' or 'Creat Student'.

<br>
**NB** Due to Lack of statelessness: To view the updates tables after creating and deleting, please go to the home page refresh the application. 

<p align="right">(<a href="#About-The-Project">back to top</a>)</p>
