// Declare your variable here
var myGlobal; //se declara una variable global
myGlobal =10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5; //se declara variable dentro de función sin la palabra var 
  //su alcance pasa a ser global y se puede invocar desde el resto del código.
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output); //outputs myGlobal: 10 oopsGlobal: 5
}
