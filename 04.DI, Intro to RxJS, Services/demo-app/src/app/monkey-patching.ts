//Zone.js detecting changes through monkey-patching

//Standard console.log
console.log('123');

//Monkey-patched console.log
//creates a copy
const originalConsoleLog = console.log;

console.log = (...args) => {
  //invokes the original copy
  originalConsoleLog(...args);

  //any other logic
  console.warn('This method has been monkey-patched!');
};

//invokes the monkey-patched function
console.log('345');
