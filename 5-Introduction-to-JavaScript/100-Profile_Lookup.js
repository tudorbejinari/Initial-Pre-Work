// I found this challenge quiet hard but sudo coding helps a lot.
// first step we need a for loop that runs through the contacts list
// 1 st checks if the firstName mathces the value of the firstName key in the first object
// hasOwnProperty is a method to check if theres a given property and returns true the value of prop.
// if the 2nd if fails we return a message
// if the 1st if fails the for loop goes to next object in the contacts list.
// and at the end if firstName  isnt matched the for loop exit and message is returned.
/Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
for (var i = 0; i < contacts.length; i++){
    if (contacts[i].firstName === firstName) {
        if (contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop];
        } else {
            return "No such property";
        }
    }
}
return "No such contact";
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
