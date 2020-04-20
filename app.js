function getYearOfBirth(age){
    if (age < 0) {
        throw new Error("Age cannot be negative");
    }
    return 2020 - age;
}

function createGreeting(name, age){
    const yearOfBirth = getYearOfBirth(age);
    if (name === false || age === false) {
        throw new Error('Arguments not valid');
    }
    else if (typeof name !== "string" || typeof age !== "number") {
        throw new TypeError();
    }
    else {
    return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}.`;
}
}


try {
    const greeting1 = createGreeting();
} catch (e) {
    console.log(`${e.name}: ${e.message}`)
}    
console.log(greeting1);

