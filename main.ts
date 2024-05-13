#! /usr/bin/env  node


import { Console } from 'console';
import inquirer from 'inquirer';

let bal = 25000;

let pin = 1256;

let answer = await inquirer.prompt([
    {
        name: "pincode",
        type: "number",
        message: "Enter your pin number"
    }

]);

if (answer.pincode === pin) {
    // console.log("pin is correct");
    // console.log(`current account bal is ${bal}`)


    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation",
            choices: ["Withdraw" , "CheckBal"  ]

        }
    ])

    if (operationAns.operation === "Withdraw") {
        
        let amount1 = await inquirer.prompt([
              {
                name: "amount",
                type: "number",
                message: "Enter your amount to Withdraw"
              }
        ])
    
      if (amount1.amount > bal) {
        console.log("Insufficient bal")
      }
     

      else{
        bal -= amount1.amount;
        console.log(`${amount1.amount} Withdraw successful`);
        console.log(`Remaining balance is : ${bal}`);
     }
    }
  else if (operationAns.operation === "CheckBal"){
      console.log(`Your amount is : ${bal}`)
  }
}
else {
    console.log("Invalid pin code ")
}

