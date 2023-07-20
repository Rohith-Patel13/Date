/*
->The above line of code you provided is used to include the "express" module, which is a popular Node.js
 web application framework used for building server-side applications and APIs.
->express: This is the name of the module you are importing, which is the Express.js framework.
*/
const express = require("express"); // importing the Express.js framework.

/*
It appears you are creating an instance of an Express server by calling the express() function. This instance allows you to configure and define routes for your web application.
The line of code const expressServerInstance = express(); creates an instance of the Express application and stores it in a constant variable named expressServerInstance.
This instance represents your entire web application and allows you to use various methods and middleware provided by Express.
*/
const app = express();

/*
The code you provided sets up an Express.js route that responds to incoming GET requests to the root path ("/"). When a client makes a GET request to your server, the server will respond with the current date and time as a response.
*/
app.get("/date", (requestBody, responseBody) => {
  const todayDate = new Date();
  responseBody.send(
    `${todayDate.getDate()}-${
      todayDate.getMonth() + 1
    }-${todayDate.getFullYear()}`
  );
});
module.exports = app;
