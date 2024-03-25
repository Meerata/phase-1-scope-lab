// index.js

var customerName = "bob";

function upperCaseCustomerName() {
  if (customerName) {
    customerName = customerName.toUpperCase();
  }
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
}

const leastFavoriteCustomer = "someone";

function changeLeastFavoriteCustomer() {
  throw new Error("Assignment to constant variable.");
}

module.exports = {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  changeLeastFavoriteCustomer,
};
