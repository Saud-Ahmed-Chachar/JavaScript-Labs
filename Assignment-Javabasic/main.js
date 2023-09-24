
const tasks = {
    task1: () => {
        
        return { solution: `Task 1 solution code here
        let myInteger = 42;
        let myBoolean = true;
        let myString = "Hello, World!";
        let myDate = new Date();
        let myUndefined;
        let myIntArray = [1, 2, 3, 4, 5];
        let myStringArray = ["apple", "banana", "cherry"];
        let myMixedArray = [1, "two", true, null];
        let myObject = {
            ID: 1,
            Name: "ABC"
        }`, output: "no need of output it is just declaration task" };
    },

    task2: () => {
        // Task 2: Number, parseInt, parseFloat
        const num1 = Number("123");
        const num2 = Number("123.45");
        const num3 = Number("abc");
        const parsedNum1 = parseInt(num1);
        const parsedNum2 = parseFloat(num2);
        const parsedNum3 = parseInt(num3);
        return {
            solution: ` Task 2 solution code here
        const num1 = Number("123");
        const num2 = Number("123.45");
        const num3 = Number("abc");
        const parsedNum1 = parseInt(num1);
        const parsedNum2 = parseFloat(num2);
        const parsedNum3 = parseInt(num3);`,
            output: `Parsed Num1: ${parsedNum1}\nParsed Num2: ${parsedNum2}\nParsed Num3: ${parsedNum3}`
        };
    },

    task3: () => {
        // Task 3: Function to print string properties of an object
        const object = {
            name: "John",
            age: 30,
            city: "New York"
        };
        const stringProperties = Object.keys(object).filter(key => typeof object[key] === "string");
        return {
            solution: `Task 3 solution code here\n\nconst object = ${JSON.stringify(object, null, 2)};\nconst stringProperties = ${JSON.stringify(stringProperties)};`,
            output: `String Properties: ${stringProperties.join(", ")}`
        };
    },

    task4: () => {
        // Task 4: Function to check odd or even numbers
        function checkOddOrEven(number) {
            if (number % 2 === 0) {
                return "Even";
            } else {
                return "Odd";
            }
        }
        const num1 = 42;
        const num2 = 17;
        return {
            solution: `Task 4 solution code here\n\nfunction checkOddOrEven(number) {\n    if (number % 2 === 0) {\n        return "Even";\n    } else {\n        return "Odd";\n    }\n}\n\nconst num1 = 42;\nconst num2 = 17;`,
            output: `Number 1 is ${checkOddOrEven(num1)}\nNumber 2 is ${checkOddOrEven(num2)}`
        };
    },

    task5: () => {
        // Task 5: Function to check speed limit violations
        function checkSpeed(speed) {
            const speedLimit = 70;
            const penaltyPoints = Math.floor((speed - speedLimit) / 5);
            if (speed <= speedLimit) {
                return "Good Safe Driving";
            } else if (penaltyPoints <= 10) {
                return `Speed Limit Crossed by Penalty Point ${penaltyPoints}`;
            } else {
                return "License Suspended";
            }
        }
        const speed1 = 60;
        const speed2 = 80;
        const speed3 = 130;
        return {
            solution: `Task 5 solution code here\n\nfunction checkSpeed(speed) {\n    const speedLimit = 70;\n    const penaltyPoints = Math.floor((speed - speedLimit) / 5);\n    if (speed <= speedLimit) {\n        return "Good Safe Driving";\n    } else if (penaltyPoints <= 10) {\n        return "Speed Limit Crossed by Penalty Point " + penaltyPoints;\n    } else {\n        return "License Suspended";\n    }\n}\n\nconst speed1 = 60;\nconst speed2 = 80;\nconst speed3 = 130;`,
            output: `Speed 1: ${checkSpeed(speed1)}\nSpeed 2: ${checkSpeed(speed2)}\nSpeed 3: ${checkSpeed(speed3)}`
        };
    },

    task6: () => {
        // Task 6: Arrow function to calculate grades
        const calculateGrade = (marks) => {
            const totalMarks = marks.reduce((acc, val) => acc + val, 0);
            const average = totalMarks / marks.length;
            let grade;
            if (average >= 90) {
                grade = "A+";
            } else if (average >= 80) {
                grade = "A";
            } else if (average >= 70) {
                grade = "B";
            } else if (average >= 60) {
                grade = "C";
            } else {
                grade = "F";
            }
            return grade;
        };
        const marks = [85, 92, 78, 88, 95];
        return {
            solution: `Task 6 solution code here\n\nconst calculateGrade = (marks) => {\n    const totalMarks = marks.reduce((acc, val) => acc + val, 0);\n    const average = totalMarks / marks.length;\n    let grade;\n    if (average >= 90) {\n        grade = "A+";\n    } else if (average >= 80) {\n        grade = "A";\n    } else if (average >= 70) {\n        grade = "B";\n    } else if (average >= 60) {\n        grade = "C";\n    } else {\n        grade = "F";\n    }\n    return grade;\n};\n\nconst marks = ${JSON.stringify(marks)};`,
            output: `Average Marks: ${marks.reduce((acc, val) => acc + val, 0) / marks.length}\nGrade: ${calculateGrade(marks)}`
        };
    },

    task7: () => {
        // Task 7: Anonymous function to reverse a string
        const reverseString = function (str) {
            return str.split("").reverse().join("");
        };
        const inputString = "Hello, World!";
        return {
            solution: `Task 7 solution code here\n\nconst reverseString = function (str) {\n    return str.split("").reverse().join("");\n};\n\nconst inputString = "${inputString}";`,
            output: `Input String: ${inputString}\nReversed String: ${reverseString(inputString)}`
        };
    },

    task8: () => {
        // Task 8: Function to filter elements with digits
        const containsDigit = function (element) {
            return /\d/.test(element);
        };
        const elements = ["apple", "banana", "cherry", "12345", "grape"];
        const filteredElements = elements.filter(containsDigit);
        return {
            solution: `Task 8 solution code here\n\nconst containsDigit = function (element) {\n    return /\\d/.test(element);\n};\n\nconst elements = ${JSON.stringify(elements)};\nconst filteredElements = elements.filter(containsDigit);`,
            output: `Elements with Digits: ${filteredElements.join(", ")}`
        };
    },

    task9: () => {
        // Task 9: Function to check and display object properties
        const isEmptyObject = function (obj) {
            return Object.keys(obj).length === 0;
        };

        const displayObjectProperties = function (obj) {
            let output = "";
            for (const key in obj) {
                if (typeof obj[key] === "object") {
                    output += `Key: ${key}\n`;
                    output += displayObjectProperties(obj[key]);
                } else {
                    output += `Key: ${key}, Value: ${obj[key]}\n`;
                }
            }
            return output;
        };

        const sampleObject = {
            name: "John",
            age: 30,
            address: {
                street: "123 Main St",
                city: "New York"
            }
        };

        return {
            solution: `Task 9 solution code here\n\nconst isEmptyObject = function (obj) {\n    return Object.keys(obj).length === 0;\n};\n\nconst displayObjectProperties = function (obj) {\n    let output = "";\n    for (const key in obj) {\n        if (typeof obj[key] === "object") {\n            output += "Key: " + key + "\\n";\n            output += displayObjectProperties(obj[key]);\n        } else {\n            output += "Key: " + key + ", Value: " + obj[key] + "\\n";\n        }\n    }\n    return output;\n};\n\nconst sampleObject = ${JSON.stringify(sampleObject, null, 2)};`,
            output: `Is Object Empty: ${isEmptyObject(sampleObject)}\nObject Properties:\n${displayObjectProperties(sampleObject)}`
        };
    },

    task10: () => {
        // Task 10: Replace minimum occurrences with -1
        const numbersList = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
        const minValue = Math.min(...numbersList);
        const count = numbersList.reduce((acc, val) => (val === minValue ? acc + 1 : acc), 0);
        const replacedList = numbersList.map(val => (val === minValue ? -1 : val));
        return {
            solution: `Task 10 solution code here\n\nconst numbersList = ${JSON.stringify(numbersList)};\nconst minValue = Math.min(...numbersList);\nconst count = numbersList.reduce((acc, val) => (val === minValue ? acc + 1 : acc), 0);\nconst replacedList = numbersList.map(val => (val === minValue ? -1 : val));`,
            output: `Number of occurrences of the minimum value (${minValue}): ${count}\nList after replacement: ${replacedList}`
        };
    }
};

const taskSelect = document.getElementById("taskSelect");
const solutionBtn = document.getElementById("solutionBtn");
const outputBtn = document.getElementById("outputBtn");
const outputDiv = document.getElementById("output");

taskSelect.addEventListener("change", () => {
    const selectedTask = taskSelect.value;
    const taskFunction = tasks[selectedTask];
    if (taskFunction) {
        outputDiv.textContent = taskFunction().solution;
    }
});

outputBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default behavior of the button click
    const selectedTask = taskSelect.value;
    const taskFunction = tasks[selectedTask];
    if (taskFunction) {
        outputDiv.textContent = taskFunction().output;
    }
});

solutionBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default behavior of the button click
    const selectedTask = taskSelect.value;
    const taskFunction = tasks[selectedTask];
    if (taskFunction) {
        outputDiv.textContent = taskFunction().solution;
    }
});
