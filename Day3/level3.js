
let  currentDate = new Date();
let year = currentDate.getFullYear();
let month = String(currentDate.getMonth() + 1).padStart(2, '0');
let day = String(currentDate.getDate()).padStart(2, '0');
let hours = String(currentDate.getHours()).padStart(2, '0');
let minutes = String(currentDate.getMinutes()).padStart(2, '0');
let format = `${year}-${month}-${day} ${hours}:${minutes}`;
console.log("YYY-MM-DD HH:mm:", format);
