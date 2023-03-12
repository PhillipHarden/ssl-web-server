//^ tell our application we will use express framework so bring the source
//? This line imports the express module and assigns it to the variable express. This line is required at the beginning of any Node.js file that uses the Express framework.
var express = require("express");
//^ tell our application that use the framework's features by referring to "app"
//? This line creates an instance of the Express application and assigns it to the variable app. The app variable will be used to define routes and start the server.
var app = express();
//^ tell framework that when someone types the root domain name or localhost use this action
//? This line sets up a route handler for GET requests to the root URL (/). When a client makes a GET request to the root URL, the function specified in the second argument of app.get() will be called. In this case, the function sends the string 'Hello SSL Students!' as the response to the client.
app.get("/", function (req, res) {

  //^ show users a message when the get("/") is called
  res.send("Hello SSL Students!");
});
//^ start the server by using the previous instructions.
//? This line starts the server and tells it to listen for incoming requests on port 3000. The second argument is a callback function that will be called once the server has started listening for requests. In this example, the function is empty, so it doesn't do anything. However, you could use this callback function to log a message or perform other setup tasks. The server variable is used to keep a reference to the server instance, which can be useful for stopping the server later on.
var server = app.listen(3000, function () {});

