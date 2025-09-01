// const bcrypt = require("bcrypt");


// async function run() {
//     try {
//         // Generate salt (async)
//         const salt = await bcrypt.genSalt(10);

//         // Hash password (async)
//         const hashed = await bcrypt.hash("1234", salt);

//         console.log("Salt:", salt);
//         console.log("Hashed Password:", hashed);
//     } catch (err) {
//         console.error("Error:", err.message);
//     }
// }

// run();
// const bcrypt = require("bcrypt");
// async function run() {

//     //generate salt
//     const salt = await bcrypt.genSalt(11);
//     //hashpassword
//     const hashed = await bcrypt.hash("12343", salt);
//     console.log(`salt:${salt}`);
//     console.log(`hashed${hashed}`);
// }
// run();
const bcrypt = require("bcrypt");
async function run() {
    const salt = await bcrypt.genSalt(10);
    console.log(salt);
    const hashed = await bcrypt.hash("12334455", salt);
    console.log(hashed);


}
run();