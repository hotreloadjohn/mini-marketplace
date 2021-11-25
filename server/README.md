# Installation for Development

## 1) Open command prompt/Terminal. At root of this directory and run the following commands

### `npm install`

Install all project dependencies/libaries

## 2) Create .env file

This app uses jsonwebtoken and Sequelize. Enter your mysql credentials and jwt token secret.<br />

ACCESS_TOKEN_SECRET=\
REFRESH_TOKEN_SECRET=\
DB_USERNAME=\
DB_PASSWORD=\
DB_DATABASE=

## 3) Run the app

### `npm run dev`

Runs the app in the development mode.

# API documentation

Added Swagger-doc (read-only) \
http://localhost:5000/api-docs/#/

# Installation for Production

[TODO]
Plan to deploy application on Docker
