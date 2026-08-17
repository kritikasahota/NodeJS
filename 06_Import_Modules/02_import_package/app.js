// ==========================================
// IMPORTING AN NPM PACKAGE USING ES MODULES
// ==========================================

// NPM packages can also be imported using the 'import' keyword.
// First, the package must be installed using: npm install figlet
// After installation, the package is stored inside the node_modules folder.

import figlet from "figlet";

// ------------------------------------------
// Using the Imported Package
// ------------------------------------------

// figlet converts normal text into ASCII-style text.

figlet("Hello Node.js", function (err, data) {

    // Check if an error occurred.

    if (err) {
        console.log("Something went wrong");
        return;
    }

    // Display the generated ASCII text.

    console.log(data);
});