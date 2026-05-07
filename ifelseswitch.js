function checkAge(age) {
    if (age >= 18) {
        console.log("You are old enough to vote.");
    } else {
        console.log("Sorry you must be 18 or older to vote");
    }
}

checkAge(20); // You are old enough to vote.
checkAge(16); // Sorry you must be 18 or older to vote  

function checkNumber(num) {
    if (num > 0) {
        console.log("The number is positive.");
    } else if (num < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}

checkNumber(5); // The number is positive.
checkNumber(-3); // The number is negative.
checkNumber(0); // The number is zero.

// Nested if-else
function checkGrade(score) {
    let grade;
    if (score >= 90) {
        grade = "A";
    }
    else {
        if (score >= 80) {
            grade = "B";
        }
        else {
            if (score >= 70) {
                grade = "C";
            }
            else {
                grade = "D";
            }
        }
    }
    console.log("Grade: " + grade);

}

checkGrade(95); // Grade: A
checkGrade(85); // Grade: B
checkGrade(75); // Grade: C
checkGrade(65); // Grade: D

// switch statement
function getDayName(day) {
    let dayName;
    switch (day) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day";
    }
    return "Day: " + dayName;
}

console.log(getDayName(0)); // Day: Sunday
console.log(getDayName(3)); // Day: Wednesday
console.log(getDayName(6)); // Day: Saturday
console.log(getDayName(7)); // Day: Invalid day

let browser = "Opera";
switch (browser) {
    case "Edge":
        console.log("You've got the Edge!");
        break;
    case "Chrome":
        console.log("You've got Chrome!");
        break;
    case "Firefox":
        console.log("You've got Firefox!");
        break;
    case "Safari":
        console.log("You've got Safari!");
        break;
    default:
        console.log("plz pass the right browser...." + browser);
}

// multi env: dev, staging, prod
// multi user: admin, editor, viewer , customer , seller, gueset