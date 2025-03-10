// 1. Deposit some money
// 2. Determine # of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if won
// 6. Give user winnings
// 7. Play again


//Importing the package -- just like import in python
const prompt = require("prompt-sync")();

const deposit = () => {
   while (true){
    const depositAmount = prompt("Enter a deposit amount: ")
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("Invalid deposit amount, try again")
        } else {
            return numberDepositAmount;
        }
    }
        
};

const getNumberOfLines = () => {
    while (true){
        const lines = prompt("Enter a number of lines 1-3: ")
            const numberOfLines = parseFloat(lines);
    
            if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
                console.log("Invalid number of lines , try again")
            } else {
                return numberOfLines;
            }
        }
}

const getBet = (balance) => {
    while (true){
        const bet = prompt("Enter the total bet: ")
            const numberBet = parseFloat(bet);
    
            if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance){
                console.log("Invalid bet, try again")
            } else {
                return numberBet;
            }
        }
}

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance);