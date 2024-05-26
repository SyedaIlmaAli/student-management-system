import inquirer from "inquirer";
const randomNum = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: "Enter Student Name:",
        validate: function (item) {
            if (item.trim() !== "") {
                return true;
            }
            return "Please Enter Non-Empty Value";
        }
    },
    {
        name: "courses",
        type: "list",
        message: "Please Select A Course",
        choices: ["Basic Programming", "Digital Marketing", "Artificial Intelligence", "Metaverse", "Blockchain", "E-commerce"]
    }
]);
const coursePrices = {
    "Basic Programming": 2000,
    "Digital Marketing": 6000,
    "Artificial Intelligence": 15000,
    "Metaverse": 20000,
    "Blockchain": 20000,
    "E-commerce": 15000
};
console.log(`\nTution Fees : ${coursePrices[answer.courses]}}`);
console.log(`Balance : ${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select Payment Method",
        choices: ["Bank Transfer", "EasyPaisa", "JazzCash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Tranfer Money",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            else {
                return "Please Enter Non-Empty Value";
            }
        }
    }
]);
console.log(`\nYour selected Payment Method is ${paymentType.payment}\n`);
const tutionFees = coursePrices[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tutionFees === paymentAmount) {
    console.log(`Congratulation! You have successfully enrolled in ${answer.courses}.\n`);
    let ans = await inquirer.prompt([
        {
            name: "selection",
            type: "list",
            message: `What would you like to do next?`,
            choices: ["View Status", "Exit"]
        }
    ]);
    if (ans.selection === "View Status") {
        console.log(`\n*******Status*******\n`);
        console.log(`Student Name: ${answer.student}`);
        console.log(`Student ID: ${randomNum}`);
        console.log(`Course: ${answer.courses}`);
        console.log(`Tution Fees Paid: ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }
    else {
        console.log(`\nExiting Student Management System.\n`);
    }
}
else {
    console.log(`Invalid amount.\n`);
}
