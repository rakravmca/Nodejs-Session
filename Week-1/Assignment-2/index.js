
const { items, billingAmount, getPrice } = require('./models/Products');  

const inquirer = require('inquirer');
const questions = [
    {
      type : 'input',
      name : 'id',
      message : 'What do you want to purchase today ?'

    },
    {
      type : 'input',
      name : 'qty',
      message : 'How many ?'
    },
    {
      type : 'input',
      name : 'nextitem',
      message : 'Anything else ?'
    }
];
console.log("")
console.log('Hey there, We have the following items in our shop.')

let answerItems = [];

let questionPrompt = function()
{
    console.log("")
    console.log('1) Soap - 10 rupees/item')
    console.log('2) Tooth Paste 20 rupees/item')
    console.log('3) Ice cream 30 rupees/item')
    console.log("")
    inquirer.prompt(questions)
    .then(answers => {
        answers.price = getPrice(answers.id)
        answerItems.push(answers)
        if(answers.nextitem != 'Yes')
        {
            console.log('calculating your bill...')
            console.log('')
            console.info('Your bill is ', billingAmount(answerItems), ' rupees');
            console.log('')
        }
        else{
            questionPrompt();
        }
    });
}

questionPrompt()