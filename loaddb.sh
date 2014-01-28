#!/bin/bash

curl --header 'Content-Type: application/json' --request POST --data '{"name":"John Smith", "email":"jsmith@yahoo.com", "guests":2, "attend":true}' http://localhost:8080/spring-data-rest-1.0/rsvps
curl --header 'Content-Type: application/json' --request POST --data '{"name":"Jane Doe", "email":"jdoe@yahoo.com", "guests":1, "attend":true}' http://localhost:8080/spring-data-rest-1.0/rsvps
