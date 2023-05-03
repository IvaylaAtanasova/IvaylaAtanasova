// Bank account object
let bankAccount = {
    accountNumber: '123456789',
    balance: 1000,
    accountHolderName: 'John Doe',
    deposit: function(amount) {
      this.balance += amount;
      console.log(`Deposit successful. New balance is ${this.balance}.`);
    },
    withdraw: function(amount) {
      if (amount > this.balance) {
        console.log(`Withdrawal failed. Insufficient funds. Current balance is ${this.balance}.`);
      } else {
        this.balance -= amount;
        console.log(`Withdrawal successful. New balance is ${this.balance}.`);
      }
    }
  };
  
  // Testing the bank account methods
  bankAccount.deposit(500); // Output: Deposit successful. New balance is 1500.
  bankAccount.withdraw(2000); // Output: Withdrawal failed. Insufficient funds. Current balance is 1500.
  bankAccount.withdraw(800); // Output: Withdrawal successful. New balance is 700.
  