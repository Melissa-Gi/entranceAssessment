# Technical Assessment Document

## Project Overview

### FrontEnd

The goal of this technical assessment is to evaluate the candidate's ability to develop a basic Angular application with two pages. The first page will display a table of school subjects with CRUD operations, and the second page will display a table of students with similar CRUD operations. The candidate is required to use NgRx for state management, including actions and effects.

### Backend

In addition to the frontend development requirements outlined above, candidates are encouraged to enhance the project by incorporating a backend using Node.js and Express for server-side functionality. This integration will provide a more comprehensive full-stack development experience.

## Frontend Requirements

### First Page - School Subjects

1. **Display Table:**

    - Create a page that displays a table of school subjects.
    - Display the following information for each subject:
        - Subject ID
        - Subject Name
        - Teacher Name

2. **CRUD Operations:**
    - Implement functionality to create, update, and delete subjects.
    - Include a form for adding/editing subjects with appropriate validation.
    - Use NgRx actions and effects to handle these operations and manage the state.

### Second Page - Students

1. **Display Table:**

    - Create a second page that displays a table of students.
    - Display the following information for each student:
        - Student ID
        - First Name
        - Last Name
        - List of enrolled subjects

2. **CRUD Operations:**

    - Implement functionality to create, update, and delete students.
    - Include a form for adding/editing students with appropriate validation.
    - Use NgRx actions and effects to handle these operations and manage the state.

3. **Subject Enrollment:**
    - When creating or updating a student, provide an option to add or remove subjects from the student's list of enrolled subjects.

## Backend Requirements

1. **API Endpoints:**

    - Implement RESTful API endpoints to handle CRUD operations for both school subjects and students.
    - Use the following routes as a guideline:
        - Subjects:
            - `GET /api/subjects`: Retrieve all subjects.
            - `GET /api/subjects/:id`: Retrieve a specific subject.
            - `POST /api/subjects`: Create a new subject.
            - `PUT /api/subjects/:id`: Update a specific subject.
            - `DELETE /api/subjects/:id`: Delete a specific subject.
        - Students:
            - `GET /api/students`: Retrieve all students.
            - `GET /api/students/:id`: Retrieve a specific student.
            - `POST /api/students`: Create a new student.
            - `PUT /api/students/:id`: Update a specific student.
            - `DELETE /api/students/:id`: Delete a specific student.

2. **Authentication (Bonus Points):**

    - Implement user authentication with the following features:
        - User signup.
        - User login, which returns a JWT (JSON Web Token).
        - Passwords are hashed in the database.
        - JWT is required in the form of a bearer token when making requests.
        - Apply appropriate validation in API requests, incoming data, and ensure the user is valid.

3. **Database Integration:**

    - Integrate a database to persist data. Candidates can choose between using a Faker library for generating mock data or integrating a database like Firebase or MongoDB for storing real data.
    - If using a Faker library, ensure that the data is consistent and realistic.

### Database Options (Choose One):

#### Option 1: Faker Library (For Mock Data)

1. Integrate a Faker library to generate realistic mock data for subjects and students.
2. Seed the database with this mock data when the application starts.

#### Option 2: MongoDB Integration

1. Integrate MongoDB as the database for the application.
2. Use Mongoose or a similar library to interact with MongoDB.
3. Design and implement appropriate schemas for subjects and students.

#### Option 3: Firebase Integration

1. Integrate Firebase as the backend for the application.
2. Set up Firestore to store data for subjects and students.
3. Configure Firebase SDK for server-side interactions.

## Technical Specifications

1. **Angular Version:**

    - Use Angular 10 or later for the development of the application.

2. **NgRx State Management:**

    - Utilize NgRx for state management.
    - Implement actions and effects to handle asynchronous operations.

3. **GitHub Repository:**

    - Create a GitHub repository for the project.
    - Implement proper branching strategies (e.g., feature branches, develop, master).
    - Make incremental commits with meaningful commit messages.

4. **Documentation:**
    - Include a README.md file in the repository with instructions on how to run the application locally.
    - Provide any necessary setup steps and dependencies.
    - Include information on how to test the application.

## Evaluation Criteria

Candidates will be evaluated based on the following criteria:

1. **Functionality:**

    - The application meets the specified requirements.
    - CRUD operations work correctly for both subjects and students.
    - Subject enrollment for students is implemented as specified.
    - The backend should correctly handle CRUD operations for both subjects and students.
    - API endpoints should follow RESTful conventions.

2. **NgRx Implementation:**

    - Proper use of NgRx actions and effects.
    - State management is effective and well-organized.

3. **Code Quality:**

    - Clean, well-structured code.
    - Proper use of Angular best practices.
    - Clean and modular backend code.
    - Proper error handling and validation for API requests.

4. **Bonus Points:**

    - Candidates will receive bonus points for integrating a real database (MongoDB or Firebase) and successfully persisting data.

5. **GitHub Repository:**

    - Proper branching strategies are implemented.
    - Incremental commits with meaningful messages are present.

6. **Documentation:**

    - README.md provides clear instructions for setting up and running the application.
    - Any additional documentation on design decisions or considerations is a plus.

## Submission Instructions

1. **GitHub Repository:**

    - Provide the link to the GitHub repository.

2. **Documentation:**

    - Include any additional documentation or comments within the code as needed.
    - Include any necessary setup instructions for the backend (database setup, environment variables, etc.).
    - Clearly specify the chosen database option and justify the choice.

3. **Code Files:**
    - Ensure that both frontend and backend code files are included in the repository.

## Conclusion

This technical assessment aims to evaluate the candidate's proficiency in developing an Angular application with NgRx state management. The criteria mentioned above will be used to assess the candidate's technical skills and ability to meet the specified requirements.
