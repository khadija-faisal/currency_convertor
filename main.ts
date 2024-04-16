#!/usr/bin/env node

import inquirer from "inquirer";

const currencies: any = {
    USD: 1.00,	 //United States Dollar: USD
    EUR: 0.93,   //Euro: EUR
    PKR: 278,    //pakistani rupees: PKR
    GBP: 0.80,   //British Pound: GBP
    INR: 83.56,  //Indian Rupee: INR
    AUD: 1.55,   //Australian Dollar: AUD
    CAD: 1.37,	 //Canadian Dollar: CAD
    SGD: 1.36,	 //Singapore Dolllor: SGD
    CHF: 0.91,	 //Swiss Franc: CHF
    MYR: 4.79,   //Malaysian Ringit: MYR
    JPY: 154,	 //Japanese Yen: JPY
    CNY: 7.237874,  //China Yuan Renminbi: CNY
}

let user_Ans  = await inquirer.prompt(
  [ 
    {
        name: "from",
        message: "Enter from currency:",
        type: "list",
        choices: ["USD","EUR","PKR","GBP","INR","AUD","CAD","SGD","CHF","MYR","JPY","CNY"]
    },
    {
        name: "to",
        message: "Enter to currency:",
        type: "list",
        choices: ["USD","EUR","PKR","GBP","INR","AUD","CAD","SGD","CHF","MYR","JPY","CNY"]
    },
    {
        name: "amount",
        message: "Enter your amount:",
        type: "number",
    }
  ]  
);
let fromAmount = currencies[user_Ans.from]
let toAmount = currencies[user_Ans.to]
let amount = user_Ans.amount
let baseAmount = amount / fromAmount //convert selected from currency to basecurrency
let exchangeAmount = baseAmount * toAmount // convert base amount to your to currency
console.log(exchangeAmount.toFixed(2)); //tofixed used used to round off a decimal number to specific decimal places. 
                                