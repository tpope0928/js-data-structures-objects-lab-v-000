// Write your solution in this file!

let driver = {name: 'Driver'};

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, {[key]:value});
};
