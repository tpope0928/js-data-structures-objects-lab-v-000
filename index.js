// Write your solution in this file!

let driver = {name: 'Driver'};

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, {[key]:value});
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
};

function deleteFromDriverByKey(driver, key){
  let newDriver = Object.assign({}, driver);
  delete newDriver[key];
  return newDriver
};
