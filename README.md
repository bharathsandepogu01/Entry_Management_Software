# Entry_Management_Software

## Workflow
  1. This is the web application developed using **MERN(Mongodb,Express,React,Node)** stack and third party service **(SMS: NEXMO, Email:SMTP)** for Entry Management System.
  2. In this application : 
     1. host can register the multiple events to be conducted with the details(event name, host email, phone, address).
     2. visitors can check into the specified event with visitor details and event's name and host email. Once, he check into the                  event both SMS and email sent to host with visitors details and database is updated.
     3. when visitor check out of the event with details(Event name, host mail, visitor mail), visitor will recieve an SMS and Email                regarding his visit and database is updated.
          
## Validations          
  1. Host with unique email can register multiple events.
  2. Visitor can check in and check out in particular event only once.
  3. All the required details must be filled in the form.
  
## Note
  As this application using third party service for sending SMS,we need to add user phone number as a test number in nexmo dashboard         inorder to send it to user. 
