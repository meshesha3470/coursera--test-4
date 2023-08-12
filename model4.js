// Array of names
var names = ["John", "Jane", "Jason", "Jill", "James", "Mary"];

// Loop over the names
for (var i = 0; i < names.length; i++) {
  var name = names[i];
  var firstLetter = name.charAt(0).toLowerCase();
  
  if (firstLetter === 'j') {
    // Print Goodbye message
    console.log("Goodbye " + name);
    // You can replace this with your external library printing function if needed
  } else {
    // Print Hello message
    console.log("Hello " + name);
    // You can replace this with your external library printing function if needed
  }
}
