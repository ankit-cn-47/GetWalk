The application is built using following technologies :
* Angular 7
* Node 10
* MongoD 3.2.6
* Express Generator 4.16


* Ensure Node Package Manager, Node and MongoDB is installed on the system.
* Run Mongo Daemon tool, using command 'mongod' in a terminal window to listen for connection on default port(port - 27017) with default settings
* Extract the zip file provided in the attachment.


* It contains 3 folder :
  Build - Final build of MEAN stack app.
  Front-end - The Angular app source code.
  Output - Contains screenshots of the application running on my machine


* Open the Build folder in a new terminal.
* Run 'npm install' in the terminal.
* Run 'npm run serve' to run the script used to run the application on port - http://localhost:3000


* First add offers through the web interface to db.
* Add users using post-man.


* To add users using post-man :
  Send POST request on : http://localhost:3000/users/new-user
  Body as raw JSON, example :{
	
	"location":{

		"latitude":90,

		"longitude": 10
	},

	"phone_number": 7892234674,

	"detection_time": "1234567"

       }


* To send offers to a particular user, click on send offer button in the interface.
* Click send button next to offer to send particular offer.

* The automatic message sending is not added as the minimum distance criteria to automatically send offers,
  and the number of offers that should be sent was not defined in the problem statement.	

