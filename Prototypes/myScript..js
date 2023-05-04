function BankAccount(initialBalance) {
    this.balance = initialBalance;
  }
  
  BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
    console.log(amount + " has been deposited to your account. Current balance is " + this.balance);
  };
  
  BankAccount.prototype.withdraw = function(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds. Current balance is " + this.balance);
    } else {
      this.balance -= amount;
      console.log(amount + " has been withdrawn from your account. Current balance is " + this.balance);
    }
  };
 // Bank account prototype
function BankAccount(initialBalance) {
    this.balance = initialBalance;
  }
  
  BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
    console.log("Deposited " + amount + " into account. New balance is " + this.balance);
  };
  
  BankAccount.prototype.withdraw = function(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds. Cannot withdraw " + amount + ". Current balance is " + this.balance);
    } else {
      this.balance -= amount;
      console.log("Withdrew " + amount + " from account. New balance is " + this.balance);
    }
  };
  
  // Creating new bank accounts
  var account1 = new BankAccount(1000);
  var account2 = new BankAccount(500);
  
  BankAccount.prototype.withdraw = function(amount) {
    if (amount > this.balance) {
      console.log("Sorry, you do not have sufficient funds for this transaction.");
    } else {
      this.balance -= amount;
      console.log("$" + amount + " has been withdrawn from your account. Your new balance is $" + this.balance + ".");
    }
  }
    