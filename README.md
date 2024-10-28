# MongoDB Country Database Application

## Overview

This project is a CRUD API for managing country data, built with **Node.js**, **Express**, **MongoDB**, and **Mongoose**. It allows users to create, read, update, and delete information about countries, including details like continent, capital city, population, and languages.

The application can be easily extended with additional collections, like cities or languages, and serves as a foundational example of a database-driven RESTful API.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete country data.
- **MongoDB Indexing**: Optimized queries using indexes on frequently queried fields.
- **Mongoose**: 
- **Data Validation**: Ensures data consistency with schema validation.
- **Error Handling**: Handles common errors and returns appropriate HTTP responses.
- **RESTful API**: Follows REST standards for intuitive interaction.

## Prerequisites

- **Node.js** (v14+)
- **MongoDB** (local or remote instance, e.g., MongoDB Atlas)
- **Mongoose**
- **Git**

## Setup

1. **Clone the repository**:
   ````
   git clone https://github.com/swelbeck/sba319.git
   cd sba319
   ```

2. **Install dependencies**:
   `npm install`

3. **Configure environment variables**:

- Create a `.env` file in the root directory with the following content:

    ```
    mongoURI=your_mongoDB_connection_string
    PORT=3001
    ```

4. **Seed the Database** (Optional):
- Seed script at the following endpoint: `/seed`

5. **Start the server**:
`npm start`
- This will start running the server on the specified port (default: 3000).

## API Documentation

### Base URL
- Local: `http://localhost:3000`

### Endpoints
| **Endpoint**           | **Method** | **Description**                                       | **Request Body**                                                                                                                                                                               | **Response**                                                                                                                                                     |
|------------------------|------------|-------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/`                    | GET        | Returns a welcome message to confirm the server is running. | None                                                                                                                                                                                            | `"Welcome to the server!"`                                                                                                                                       |
| `/countries`           | GET        | Retrieves a list of all countries.                    | None                                                                                                                                                                                            | Array of country objects                                                                                                                                         |
| `/countries/:id`       | GET        | Retrieves details for a specific country by ID.       | None                                                                                                                                                                                            | JSON object of the requested country                                                                                                                             |
| `/countries`           | POST       | Adds a new country to the database.                   | ```json { "name": "Australia", "continent": "Oceania", "capitalCity": "Canberra", "languages": { "officialLanguage": "English", "otherLanguages": [] }, "population": 25499884 } ```             | JSON object of the newly created country                                                                                                                         |
| `/countries/:id`       | PATCH      | Updates information for a specific country by ID.     | ```json { "population": 25500000 } ```                                                                                                                                                          | JSON object of the updated country                                                                                                                               |
| `/countries/:id`       | DELETE     | Removes a specific country from the database by ID.   | None                                                                                                                                                                                            | `{ "message": "Country deleted successfully" }`                                                                                                                 |

## Technologies Used
- Node.js and Express for server and routing.
- MongoDB and Mongoose for database and schema management.
- dotenv for environment variable management.

## Project Structure
- /models: Mongoose schema definitions.
- /routes: Express route definitions.
- /db: Database connection file.
- /data: Sample data for seeding the database.
- /scripts: Utility scripts (e.g., database seeding).

## Future Enhancements

- Add collections for cities or languages to demonstrate MongoDB relations.
- Implement more detailed data validation with Mongoose validators.
- Add pagination to the /countries GET endpoint.