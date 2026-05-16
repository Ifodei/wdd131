// 1. Get the current year and output it to the element with id "currentyear"
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// 2. Get the last modified date/time and output it to the element with id "lastModified"
document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;
