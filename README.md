# Social Network API

Welcome to the documentation for the Social Network API! This API empowers you to manage users, thoughts, reactions, and friendships within a social network platform. Follow the instructions below to get started.

## Getting Started
https://drive.google.com/file/d/19dxfnHZjG8rzMnruq2dX49AohLXyA86Z/view

### Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory using your command line.
3. Run `npm install` to install the required dependencies.

### Starting the Server

To start the server and sync the Mongoose models with the MongoDB database, follow these steps:


1. Make sure your MongoDB server is up and running.
2. In the project directory, run `npm start` or `node server.js`.

## API Routes

### Users

- **GET /api/user**: Retrieve a list of all users in the database.
- **GET /api/user/:id**: Retrieve a specific user by their ID.
- **POST /api/user**: Create a new user. Include user details in the request body.
- **PUT /api/user/:id**: Update user information by their ID. Include user details in the request body.

### Thoughts

- **GET /api/thought**: Retrieve a list of all thoughts in the database.
- **GET /api/thought/:id**: Retrieve a specific thought by its ID.
- **POST /api/thought**: Create a new thought. Include thought details in the request body.
- **PUT /api/thought/:id**: Update a thought by its ID. Include thought details in the request body.
- **DELETE /api/thought/:id**: Delete a thought by its ID.

### Reactions

- **POST /api/thoughts/:thoughtId/reactions**: Create a new reaction for a specific thought. Include reaction details in the request body.
- **DELETE /api/thoughts/:thoughtId/reactions/:reactionId**: Delete a reaction from a specific thought by providing the thought ID and reaction ID.

## Testing

To test the API routes, you can use tools like Insomnia or Postman. Follow these steps:

1. Open your preferred testing tool.
2. Set the HTTP method (GET, POST, PUT, DELETE) and enter the appropriate route from the [API Routes](#api-routes) section.
3. Set any required headers or request bodies.
4. Send the request to the server.
5. Receive and review the server's response.

Make sure you have your server running and the MongoDB database connected before testing the routes.

Enjoy using the Social Network API to build and manage your social networking platform! If you encounter any issues or have questions, feel free to refer to this documentation or contact our support team.
