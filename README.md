# MongoDB Country Database Application

## Overview

This project is a CRUD API for managing country data, built with **Node.js**, **Express**, and **MongoDB**. It allows users to create, read, update, and delete information about countries, including details like continent, capital city, population, and languages.

The application can be easily extended with additional collections, like cities or languages, and serves as a foundational example of a database-driven RESTful API.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete country data.
- **MongoDB Indexing**: Optimized queries using indexes on frequently queried fields.
- **Data Validation**: Ensures data consistency with schema validation.
- **Error Handling**: Handles common errors and returns appropriate HTTP responses.
- **RESTful API**: Follows REST standards for intuitive interaction.

## Prerequisites

- **Node.js** (v14+)
- **MongoDB** (local or remote instance, e.g., MongoDB Atlas)
- **Git**

## Setup

1. **Clone the repository**:
   ````bash
   git clone https://github.com/swelbeck/sba319.git
   cd sba319```

2. **Install dependencies**:
   `npm install`

3. **Configure environment variables**:

- Create a `.env` file in the root directory with the following content:

```mongoURI=your_mongoDB_connection_string
PORT=3001```

4. **Seed the Database** (Optional):

5.
