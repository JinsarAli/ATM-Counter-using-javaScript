const total = prompt("Enter your Amount");

let Fivethousand = Math.floor(total / 5000);
console.log(`the 5000 cashes are: ${Fivethousand}`);

let thousand = Math.floor((total % 5000) /1000 );
console.log(`the 1000 cashes are: ${thousand}`);

let fiveHun = Math.floor(((total % 5000) % 1000) / 500);
console.log(`the 500 cashes are: ${fiveHun}`);

let hundered = Math.floor((((total % 5000) % 1000) % 500) / 100) ;
console.log(`the 100 cashes are: ${hundered}`);

let fifty = Math.floor(((((total % 5000) % 1000) % 500) % 100) / 50) ;
console.log(`the 50 cashes are: ${fifty}`);

let twenty = Math.floor((((((total % 5000) % 1000) % 500) % 100) % 50 ) / 20) ;
console.log(`the 20 cashes are: ${twenty}`);

let ten = Math.floor(((((((total % 5000) % 1000) % 500) % 100) % 50 ) % 20) / 10) ;
console.log(`the 10 cashes are: ${ten}`);


let five = Math.floor((((((((total % 5000) % 1000) % 500) % 100) % 50 ) % 20) % 10) / 5)  ;
console.log(`the 5 cashes are: ${five}`);

let two = Math.floor(((((((((total % 5000) % 1000) % 500) % 100) % 50 ) % 20) % 10) % 5) / 2)  ;
console.log(`the 2 cashes are: ${two}`);

let one = Math.floor((((((((((total % 5000) % 1000) % 500) % 100) % 50 ) % 20) % 10) % 5) % 2) / 1)  ;
console.log(`the 1 cashes are: ${one}`);


let Fivethousandtd = document.createElement("td")
Fivethousandtd.innerHTML =Fivethousand;
document.getElementById("result").append(Fivethousandtd);

let thousandtd = document.createElement("td")
thousandtd.innerHTML =thousand;
document.getElementById("result").append(thousandtd);

let fiveHuntd = document.createElement("td")
fiveHuntd.innerHTML =fiveHun;
document.getElementById("result").append(fiveHuntd);

let hunderedtd = document.createElement("td")
hunderedtd.innerHTML =hundered;
document.getElementById("result").append(hunderedtd);

let fiftytd = document.createElement("td")
fiftytd.innerHTML =fifty;
document.getElementById("result").append(fiftytd);

let twentytd = document.createElement("td")
twentytd.innerHTML =twenty;
document.getElementById("result").append(twentytd);


let tentd = document.createElement("td")
tentd.innerHTML =ten;
document.getElementById("result").append(tentd);


let fivetd = document.createElement("td")
fivetd.innerHTML =five;
document.getElementById("result").append(fivetd);


let twotd = document.createElement("td")
twotd.innerHTML =two;
document.getElementById("result").append(twotd);


let onetd = document.createElement("td")
onetd.innerHTML =one;
document.getElementById("result").append(onetd);






