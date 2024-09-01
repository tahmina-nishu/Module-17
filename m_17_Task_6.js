var age = 39;
var is_student = false;
var regular_fare = 800;
var ticket_fare;

if(age < 10)
    ticket_fare = 0;
else if(is_student)
    ticket_fare = regular_fare * 0.5;
else if(age >= 60)
    ticket_fare = regular_fare * 0.85;
else
    ticket_fare = regular_fare;

    console.log("The ticket fare is: " + ticket_fare + " tk");