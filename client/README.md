# Installation for Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 1) Open command prompt/Terminal. At root of this directory and run the following commands

### `npm install`

Install all project dependencies/libaries

## 2) Create .env file

This app uses Cloudinary(free tier) for products image hosting so an API key is require. Register for one here: https://cloudinary.com/users/register/free<br />

**_In file create:_**
<br/>
REACT_APP_CLOUDINARY_CLOUD_NAME=your cloud name
<br/>
REACT_APP_CLOUDINARY_UPLOAD_PRESET=your preset

## 3) Run the app

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Installation for Production

[TODO]
Plan to deploy application on Docker

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
