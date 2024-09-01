var height_in_m = 1.7;
var weight_in_kg = 60;
const BMI = weight_in_kg / (height_in_m * height_in_m)
if(BMI < 18.5)
    console.log("You are underweight");
else if(BMI >= 18.5 && BMI <= 24.9)
    console.log("You are normal");
else if(BMI >= 25 && BMI <= 29.9)
    console.log("You are overweight");
else
    console.log("You are obese");