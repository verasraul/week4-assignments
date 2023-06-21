
class BankAccount {
    constructor(type, money, accountBackUp=null){
        this.type = type;
        this.money = money;
        this.transactionHistory = []
        this.accountBackUp = accountBackUp;
    }
    
    withdrawal(amount) {
        const previousBalance = this.money
        this.money = this.money - amount
        
        this.transactionHistory.push({
            previousBalance: this.previousBalance;
            transactionType: 'withdrawal',
            transactionAmount: amount,
            endingBalance: this.money
        })
       
        if (this.money < 0 ){
        let overDrawnAmount = this.money *-1;
        this.accountBackUp.withdrawal(overDrawnAmount);
        this.deposit(overDrawnAmount);
        console.log(`Over draft`);
        }
    }

    deposit(amount) {
        const previousBalance = this.money
        this.money = this.money - amount
        this.transactionHistory.push({
            previousBalance: this.previousBalance;
            transactionType: 'deposit',
            transactionAmount: amount,
            endingBalance: this.money
        })
    }


    showBalance(){
        return this.money;
    }


}

const checkingAccount = new BankAccount('checking', 0, savingsAccount)
