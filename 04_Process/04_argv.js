// ==========================================
// NODE.JS - PROCESS.ARGV
// ==========================================

// process.argv is an array provided by Node.js.
// It contains the command-line arguments passed when the Node.js process is started.
// argv stands for "argument vector".

// ------------------------------------------
// Displaying process.argv
// ------------------------------------------

// We can print the complete process.argv array.

console.log(process.argv);


// ------------------------------------------
// Running the File
// ------------------------------------------

// Run the file normally:
// node 04_argv.js

// Then run it with an argument:
// node 04_argv.js hello

// Or with multiple arguments:
// node 04_argv.js hello node


// ------------------------------------------
// Understanding the Array
// ------------------------------------------

// When we run:
// node 04_argv.js hello

// process.argv contains:
// process.argv[0] → path of the Node.js executable
// process.argv[1] → path of the JavaScript file
// process.argv[2] → "hello"

// Additional arguments are stored at:
// process.argv[3], process.argv[4], etc.


// ------------------------------------------
// Example
// ------------------------------------------

// Command:
// node 04_argv.js hello node

// The important arguments are:
// process.argv[2] → "hello"
// process.argv[3] → "node"


// ------------------------------------------
// Important
// ------------------------------------------

// process.argv is useful when we want to pass information to a Node.js program through the terminal.