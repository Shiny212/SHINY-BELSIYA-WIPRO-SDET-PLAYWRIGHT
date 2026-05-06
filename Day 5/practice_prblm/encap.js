class BankAccount {
    #balance = 0;

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}. Current Balance: ₹${this.#balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}. Current Balance: ₹${this.#balance}`);
        } else {
            console.log("Withdrawal amount must be positive and less than or equal to the current balance.");
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const ShinyAccount = new BankAccount();

ShinyAccount.deposit(1000);
ShinyAccount.withdraw(200);

console.log(`Final Balance: ₹${ShinyAccount.getBalance()}`);

const SindhuAccount = new BankAccount();

SindhuAccount.deposit(500);
SindhuAccount.withdraw(1000);

console.log(`Final Balance: ₹${SindhuAccount.getBalance()}`);