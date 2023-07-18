Question: "Build a blogging platform API using Node.js and Express that utilizes JWT for authentication and integrates with a database. Implement the following endpoints:

1. **POST /api/auth/register**: Accepts a JSON payload containing 'username' and 'password' fields. It should create a new user account, hash the password using bcrypt, and store the user details in the database. Return a JSON response with a success message.

2. **POST /api/auth/login**: Accepts a JSON payload containing 'username' and 'password' fields. It should validate the credentials against the existing user accounts, generate a JWT token upon successful authentication, and return it in the response.

3. **GET /api/posts**: Requires authentication via a JWT token. It should verify the token, retrieve all blog posts from the database, and return a JSON response with the posts.

4. **POST /api/posts**: Requires authentication via a JWT token. Accepts a JSON payload containing 'title' and 'content' fields. It should create a new blog post associated with the authenticated user and store it in the database. Return a JSON response with the newly created post.

5. **GET /api/posts/:id**: Requires authentication via a JWT token. Accepts a blog post ID as a parameter. It should verify the token, retrieve the blog post from the database that matches the provided ID, and return a JSON response with the post details.

6. **PUT /api/posts/:id**: Requires authentication via a JWT token. Accepts a blog post ID as a parameter and a JSON payload containing 'title' and/or 'content' fields. It should verify the token, find the blog post in the database that matches the provided ID and belongs to the authenticated user, update the post with the new details, and return a JSON response with the updated post.

7. **DELETE /api/posts/:id**: Requires authentication via a JWT token. Accepts a blog post ID as a parameter. It should verify the token, find the blog post in the database that matches the provided ID and belongs to the authenticated user, delete the post, and return a JSON response indicating success.

8. **GET /api/users**: Requires authentication via a JWT token. It should verify the token, retrieve all user profiles from the database, and return a JSON response with the user profiles.

9. **GET /api/users/:id**: Requires authentication via a JWT token. Accepts a user ID as a parameter. It should verify the token, retrieve the user profile from the database that matches the provided ID, and return a JSON response with the user profile.

10. **PUT /api/users/:id**: Requires authentication via a JWT token. Accepts a user ID as a parameter and a JSON payload containing 'username' and/or 'email' fields. It should verify the token, find the user profile in the database that matches the provided ID, update the profile with the new details, and return a JSON response with the updated user profile.

Ensure that you use the 'jsonwebtoken' package for JWT handling, the 'bcrypt' package for password hashing either 'joi' or 'zod' for validation of inputs, and a suitable database package (e.g., 'mongoose') for interacting with the database.

Write the code for these API endpoints, ensuring proper authentication, database integration, and error handling.
