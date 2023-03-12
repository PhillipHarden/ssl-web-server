## Web Server


# Week 3: Branch 'dev1'

##### NPM, Express, Nodemon


##### NPM
**Note**: Remember to test your npm and node before installing packages.
When we install node in our system, it comes with a built-in tool called, node package manager (NPM). This tool is design to install libraries and modules required for our code to run.

Here it is a sample npm command.

> sudo npm install -g express

##### Express
Express is web application framework design for node. You can take a look at the documentation here. [Express](https://expressjs.com/)

To install Express use the terminal command:
`sudo npm install -g express`


This is where you start building MEAN (Mongo,Express, Angular,Node) stack apps. You don't have to use Angular since there are a lots of alternatives available today.

Once you install Express using the framework is pretty easy

`var express=require('express'); `
`// tell our application we will use express framework so bring the source`
`// tell our application that use the framework's features by referring to "app"`
`var app=express(); `
`// tell framework that when someone types the root domain name or localhost use this action`
`app.get('/',function(req,res) `
`{`
`// show users a message when the get("/") is called`
`res.send('Hello SSL Students!'); `
`});`
`// start the server by using the previous instructions.`
`var server=app.listen(3000,function() {}); `

##### Requests
Requests are calls made to target destination like Twitter,Google API, or your own server-side. There are several request packages for Node. However, we will use "request" for this lecture. Go ahead and install it then continue with the lecture video.

> sudo npm install request;

##### Nodemon
Nodemon is service that monitors your node application and detects changes to your code. If there is change in the code it automatically restarts the server saving you from manually doing the work.

[Nodemon](https://www.npmjs.com/package/nodemon), also research about EJS for our lecture content.

> sudo npm install -g nodemon

to start server Via the CLI, use either --legacy-watch or -L for short:

> nodemon app.js -L

or

> nodemon server.js -L

Now you don't have to keep restarting the app manually. Nodemon keep tracks of the code changes!

##### Display html page
Now let's create and html login form and display it in our application. [Follow me here](https://www.youtube.com/watch?v=CEmoFPWXc4c)
Add this to top of your `app.js"use strict";`


___

### EJS

**EJS** (Embedded JavaScript) is a popular templating engine for Node.js applications that allows you to generate dynamic HTML pages using JavaScript code. It is a simple, flexible, and widely used templating engine that is compatible with most web frameworks and is easy to learn.

EJS allows you to embed JavaScript code directly into your HTML templates, making it easy to generate dynamic content and handle complex logic. With EJS, you can easily create reusable components, pass data to templates, and control the layout and structure of your pages.

To install EJS use the terminal command: `sudo npm install -g ejs`

EJS supports a range of features, including:

* Embedding JavaScript code in HTML templates
* Conditional statements and loops
* Template inheritance and partials
* Support for layout files
* Data injection and processing
* Support for custom tags and filters

EJS is widely used in the Node.js community and is compatible with most web frameworks, including Express, Koa, and Hapi. It is a popular choice for building dynamic web applications and generating HTML pages on the server-side.


### Body Parser

To install, use the terminal command: `sudo npm install -g body-parser`

**body-parser** is a middleware module for Express, a popular web framework for Node.js. It helps to parse incoming request bodies in a middleware before your handlers, available under the req.body property.

In simpler terms, when a user submits data via a form or sends data through an HTTP request, the **body-parser** middleware helps to extract the data from the request and make it available in a format that's easier for you to work with in your code.

**body-parser** supports parsing of various request data types including JSON and url-encoded data. The package provides several middleware functions that can be used based on the type of data being submitted. Some of the middleware functions provided by body-parser include json(), urlencoded(), and raw().

**body-parser** is widely used in the Node.js and Express community and is considered a standard middleware for handling form data in Express applications. It makes it easier to work with incoming request data, reduces boilerplate code, and simplifies data validation and error handling.


























