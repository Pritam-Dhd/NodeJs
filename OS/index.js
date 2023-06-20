// ❗ Operating System Information
const os =require("os");

// ❓ Get the operating system CPU architecture
console.log(os.arch());

// ❓ Get the Free memory available in the system in GB
console.log(os.freemem()/(1024*1024*1024));

// ❓ Get the Total memory available in the system in GB
console.log(os.totalmem()/(1024*1024*1024));

// ❓ Get the hostname of the system
console.log(os.hostname());

// ❓ Get the operating system name
console.log(os.platform());

// ❓Get the user in
console.log(os.userInfo());
