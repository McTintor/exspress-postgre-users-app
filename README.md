# Usernames Database App

This is a simple Node.js app that interacts with a PostgreSQL database to manage usernames. The app allows you to add, search, and delete usernames using routes powered by Express.js. The database seeding, querying, and deletion is all done using SQL.

## Features

- **Seeding the database**: Populate the database with predefined usernames.
- **Search**: Search for usernames using query parameters (e.g., `/?search=sup`).
- **Delete**: Delete all usernames from the database.

## Requirements

- Node.js (v14 or higher)
- PostgreSQL

## Installation

### 1. Clone the repository

git clone https://github.com/McTintor/express-postgre-users-app.git
cd usernames-db-app

### 2. Install dependencies

npm install

### 3. Set up your `.env` file

Create a `.env` file in the root directory and add the following:

```env
DB_URL=your_database_url_here
```
### 4. Running the application
To start the app:

npm start

### 5. Seeding the database
To populate the database with initial usernames:

node db/populatedb.js <your_database_connection_string>

### 6. Routes
 - GET /: Get all usernames from the database. You can also search for usernames by adding a query parameter, e.g., /?search=sup.
 - GET /delete: Delete all usernames from the database.

## Usage
 - Search: Visit GET /?search=sup to search for usernames that contain "sup".
 - Delete all: Visit GET /delete to remove all usernames from the database.
