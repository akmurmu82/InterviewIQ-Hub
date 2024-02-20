# InterviewIQ Backend

This repository contains the backend code for the InterviewIQ application.

## Description

InterviewIQ is a web application designed to help users prepare for technical interviews. The backend provides the necessary APIs and functionality to support user authentication, CRUD operations for interview questions, user profiles, and more.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT) for authentication
- Bcrypt for password hashing

## Folder Structure

```
InterviewIQ/backend
│   README.md           # This file
│   server.js           # Main entry point for the server
│   package.json        # npm package configuration
│   .env                # Environment variables configuration
└───src                 # Source code directory
    │
    ├───configs         # Configuration files
    │   │   db.js       # Database connection setup
    │   │   ...
    │
    ├───controllers     # Request handlers
    │   │   userController.js    # Controller for user-related operations
    │   │   questionController.js   # Controller for question-related operations
    │   │   ...
    │
    ├───middleware      # Middleware functions
    │   │   authMiddleware.js     # Authentication middleware
    │   │   ...
    │
    ├───models          # Mongoose models
    │   │   userModel.js   # User schema and model
    │   │   questionModel.js   # Question schema and model
    │   │   ...
    │
    ├───routes          # Route definitions
    │   │   userRoutes.js    # User-related routes
    │   │   questionRoutes.js    # Question-related routes
    │   │   ...
    │
    └───utils           # Utility functions
        │   authUtils.js   # Utility functions for authentication
        │   ...
```

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/InterviewIQ-backend.git
   ```

2. Navigate to the backend directory:

   ```bash
   cd InterviewIQ/backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables by creating a `.env` file in the root directory:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/interviewiq
   JWT_SECRET=mysecretkey
   ```

5. Run the server:

   ```bash
   npm start
   ```

## API Routes

- **Fetch Guests List**:
  - Endpoint: `http://localhost:8080/admin/guests`
  - Method: GET
  - Description: Fetches the list of guests

- **Register Guest**:
  - Endpoint: `http://localhost:8080/guests/register`
  - Method: POST
  - Description: Registers a new guest

- **Login Guest**:
  - Endpoint: `http://localhost:8080/guests/login`
  - Method: POST
  - Description: Logs in a guest

## Author

- Amit Kumar Murmu

---
