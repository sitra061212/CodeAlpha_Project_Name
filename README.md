# URL Shortener

## Overview

This project is a simple URL shortening service built with Node.js, Express, and MongoDB. The application allows users to input a long URL and get a shortened version, which can be used to redirect to the original URL.

## Features

- **Shorten URLs**: Convert a long URL into a shorter, more manageable format.
- **Redirect to Long URLs**: Use the shortened URL to redirect to the original long URL.
- **Persistent Storage**: URLs are stored in a MongoDB database for persistent access.

## Prerequisites

- **Node.js** (v12 or later)
- **npm** (v6 or later)
- **MongoDB** (local or Atlas)

## Getting Started

### 1. Clone the Repository

```
git clone https://github.com/sitra061212/CodeAlpha_Url_Shortener-.git
cd url-shortener
```

### 2. Install Dependencies

```
npm install
```

### 3. Set Up the Database

Ensure MongoDB is running on your system. The application assumes MongoDB is available at `mongodb://localhost:27017/urlshortener`. You can modify the connection string in `config/db.js` if necessary.

### 4. Start the Server

```
npm run dev
```

The server will start on `http://localhost:7000`.

## API Endpoints

### 1. Shorten a URL

- **Endpoint**: `POST /api/url/shorten`
- **Description**: Shortens a given long URL.
- **Request Body**:
  ```
  {
    "longUrl": "https://www.example.com"
  }
  ```
- **Response**:
  ```
  {
    "_id": "6108e4f9e7a0f22b5c27b4f5",
    "longUrl": "https://www.example.com",
    "shortUrl": "http://localhost:7000/api/url/MYdQcDyuV",
    "urlCode": "MYdQcDyuV",
    "date": "2023-08-31T12:34:56.789Z"
  }
  ```

### 2. Redirect to Long URL

- **Endpoint**: `GET /:shortcode`
- **Description**: Redirects to the original long URL using the shortened code.
- **Example**: `GET http://localhost:7000/api/url/MYdQcDyuV` will redirect to `https://www.example.com`.

## Project Structure

```
url-shortener/
├── config/
│   └── db.js           # MongoDB connection configuration
├── models/
│   └── Url.js          # Mongoose schema for URL storage
├── routes/
│   └── url.js          # Routes for URL shortening and redirection
├── .gitignore
├── package.json
├── server.js           # Main server file
└── README.md           # Project documentation
```

