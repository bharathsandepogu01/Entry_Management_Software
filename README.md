# Entry_Management_Software

## Installations and How to Run
   1. Clone the web application from https://github.com/BHARATHS0101/Entry_Management_Software.git
   2. In backend directory run **npm install** to install all dependencies and run **node server.js** to run the server.
   3. In entry_management directory run **npm install** to install all depedencies and run **npm start** to run the react(frontend).
   4. Install mongoDB.

## Workflow
  1. This is the web application developed using **MERN(Mongodb,Express,React,Node)** stack and third party services **(SMS: NEXMO, Email:SMTP(nodemailer))** for Entry Management System.
  2. In this application : 
     1. host can register the multiple events to be conducted with the details(event name, host email, phone, address).
     2. visitors can check into the specified event with visitor details and event's name and host email. Once, he check into the                  event both SMS and email sent to host with visitors details and database is updated.
     3. when visitor check out of the event with details(Event name, host mail, visitor mail), visitor will recieve an SMS and Email                regarding his visit and database is updated.
          
## Validations          
  1. Host with unique email can register multiple unique events.
  2. Visitor can check in and check out in particular event only once.
  3. All the required details must be filled in the form.
  
## Note
  As this application using third party service for sending SMS, we need to configure apikey, apisecret(from nexmo account) in web           application to use there service and add user phone number as a test number in nexmo account dashboard inorder to send SMS to user. 
