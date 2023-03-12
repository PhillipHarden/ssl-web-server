## Web Server


# Week 3: Branch 'dev1'

##### NPM, Express, Nodemon


##### NPM
**Note**: Remember to test your npm and node before installing packages.
When we install node in our system, it comes with a built-in tool called, node package manager (NPM). This tool is design to install libraries and modules required for our code to run.

Here it is a sample npm command.

> sudo npm install -g express;

##### Express
Express is web application framework design for node. You can take a look at the documentation here. [Express](https://expressjs.com/)

This is where you start building MEAN (Mongo,Express, Angular,Node) stack apps. You don't have to use Angular since there are a lots of alternatives available today.

Once you install Express using the framework is pretty easy

var express=require('express'); // tell our application we will use express framework so bring the source

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



















