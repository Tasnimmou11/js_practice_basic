//of array
const arr = ["a", "b", "c", "d", 1, 2, 3];
for (item of arr) {
  console.log(item);
}

const str = "HELLO WORLD";
for (item of str) {
  console.log(item);
}

//in object
const obj = {
  name: "Tasnim Mou",
  age: 18,
  address: "Dhaka",
};
for (item in obj) {
  console.log(item);
}

///function
function showMessage() {
  console.log("Hello everyone!");
}

showMessage();
showMessage();

function showMessage() {
    let message = "Hello, I'm JavaScript!"; // local variable
  
   console.log( message );
  }
  
  showMessage(); // Hello, I'm JavaScript!
  