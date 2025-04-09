class BankAccount {
    #balance;
    #acc_id;
    constructor(name, acc_id, type, balance) {
        this.name = name;
        this.#acc_id = acc_id;
        this.type = type;
        this.#balance = balance
    }
    display_details = () => console.log(`Account Holder: ${this.name}
        Account ID: ${this.#acc_id}
        Account type: ${this.type}
        Account Balance: ${this.#balance}`);
    deposit_money = (amount) => {
        this.#balance += amount;
        console.log(`Amount deposited: ${amount}`);
        console.log(`New balance = ${this.#balance}`);
    }
    withdraw_money = (amount) => {
        if (amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Amount withdrawn: ${amount}`);
            console.log(`New balance = ${this.#balance}`);
        }
        else {
            console.log(`${amount}!? Bro you are broke haha`);
        }
    }
    display_balance = () => console.log(`Your current balance is = ${this.#balance}`);
};
const acc1 = new BankAccount("Gunna", 101, "Savings", 300000);
acc1.display_details();
acc1.deposit_money(20000);
acc1.withdraw_money(10000000);
acc1.withdraw_money(43210);
acc1.display_balance();