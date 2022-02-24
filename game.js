var cookies = 0;
var milestones = [1, 10, 100, 500, 1000, 5000, 69420];
var multi = 1;
var value = 1;
var multiPrice = [64, 128, 256, 512, 1024, 2048, 4096, 8192];
var valuePrice = [10, 100, 1000, 10000, 100000, 1000000];
var multiUpgrades = 0;
var valueUpgrades = 0;
var bots = 0;
var botsPrice = [1000,10,100,1000];
var quickerUpgrades = 0;
var quickerPrice = [100,10,100,10,100,10,1001,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];
var bottime = 1000
var efficientUpgrades = 0;
var efficientPrice=[10,99,10,10,10,10,10,10,10,100]
var botEfficiency = 1;
var cookiesPerMs = 0;
var cookieOriginal = 0;
var prestigeLevel = 0;
var prestigeCost = [1000000,1000000000,1000000000000]

function moreCookies() {
  cookies = cookies + multi * value;
  document.getElementById("display").textContent = "Cookies : " + cookies;
  if (milestones.includes(cookies)) {
    GG(cookies);
  }
}

function GG(count) {
  infobox("GG! You have reached a milestone: " + count + " cookies!");
}

function upgradeMulti() {
  if (cookies >= multiPrice[multiUpgrades]) {
    cookies = cookies - multiPrice[multiUpgrades];
    multi++;
    infobox("You bought the multi upgrade for " + multiPrice[multiUpgrades] + " cookies! You now have " + multi + " multis !");
    multiUpgrades++;
    document.getElementById("shopMulti").textContent = "Cost: " + multiPrice[multiUpgrades];
    document.getElementById("multiButton").value = "Multi cookies (" + multiUpgrades + ")";
  } else {
    infobox(
      "You don't have enough cookies! This upgrade costs " + multiPrice[multiUpgrades] + " cookies! ");
  }
}

function upgradeValue() {
  if (cookies >= valuePrice[valueUpgrades]) {
    cookies = cookies - valuePrice[valueUpgrades];
    value++;
    infobox("You bought the value upgrade for " + valuePrice[valueUpgrades] + " cookies! You now have " + value + " value !");
    valueUpgrades++;
    document.getElementById("shopValue").textContent = "Cost: " + valuePrice[valueUpgrades];
    document.getElementById("valueButton").value = "More value (" + valueUpgrades + ")";
  } else {
    infobox("You don't have enough cookies! This upgrade costs " + valuePrice[valueUpgrades] + " cookies! ");
  }
}
function quickerBot(){
	if (cookies >= quickerPrice[quickerUpgrades]) {
		cookies = cookies - quickerPrice[quickerUpgrades];
    if (bottime >= 100){
		bottime -= 50;
  } else if (bottime <= 100){
    bottime -= 5;
  } else if (bottime <= 10){
    bottime -= 1;
  }

  if (bottime < 0){
    bottime = 1;

  }
		quickerUpgrades++;
		infobox("You bought the quicker bots upgrade for " + quickerPrice[quickerUpgrades] + " cookies! You now have " + quickerUpgrades + " quicker upgrades! !");
		document.getElementById("shopQuicker").textContent = "Cost: " + quickerPrice[quickerUpgrades];
		document.getElementById("quickerButton").value = "Quicker bots! (" + quickerUpgrades + ")";
	} else {
		infobox("You don't have enough cookies! This upgrade costs " + quickerPrice[quickerUpgrades] + " cookies! ");
	}

}

function efficientBot() {
  if (cookies >= efficientPrice[efficientUpgrades]) {
    cookies = cookies - efficientPrice[efficientUpgrades];
    botEfficiency++;
    infobox("You bought the efficient bot upgrade for " + efficientPrice[efficientUpgrades] + " cookies! You now have " + efficientUpgrades + " efficient bots upgrades !");
    efficientUpgrades++;
    document.getElementById("shopEfficient").textContent = "Cost: " + efficientPrice[efficientUpgrades];
    document.getElementById("efficientButton").value = "More efficient cookie bots (" + efficientUpgrades + ")";
  } else {
    infobox("You don't have enough cookies! This upgrade costs " + efficientPrice[efficientUpgrades] + " cookies! ");
  }
}


function newCookieBot(){
		if (cookies >= botsPrice[bots]){
			cookies = cookies - botsPrice[bots];
			bots++;
			infobox("You bought a cookie bot! You now have " + bots + " cookies bots !");
			document.getElementById("shopBot").textContent = "Cost: " + botsPrice[bots];
			document.getElementById("botButton").value = "Cookie bot (" + bots + ")";
      document.getElementById("quickerButton").disabled = false
      document.getElementById("efficientButton").disabled = false

		} else {
			infobox("You don't have enough cookies to buy a bot! It costs " + botsPrice[bots] + " !")
		}
}

function prestige(){
  if (cookies >= prestigeCost[prestigeLevel]){
    var choice = prompt("Are you sure you wanna prestige? Write yes to confirm");
    if (choice == "yes"){
      infobox("You just prestiged! Everything is now reset, but you get a bonus!")
      reset();
      prestigeLevel += 1;
      document.getElementById("shopPrestige").textContent = "Cost : " + prestigeCost[prestigeLevel];
      document.getElementById("prestigeButton").value = "Prestige (" + prestigeLevel + ")";
      switch (prestigeLevel) {
        case 1:
          bottime = 500;
          cookies = 10000;
          break;
        case 2:
          bottime = 200;
          cookies = 100000;
          break;
        case 3:
          bottime = 1;
          cookies = 1000000;
          value = 15;
          multi = 15;
          break;


      }
    } else {
      infobox("You cancelled the prestige!")
    }
  } else {
    infobox("you don't have enough cookies to prestige!")
  }



}


function update(){
	document.getElementById("display").textContent = "Cookies : " + cookies;
	document.getElementById("cookieBots").textContent = "Bots : " + bots;
	document.getElementById("cookiesPerClick").textContent = "Cookies / click : " + (multi * value);
  document.getElementById("cookiesPerSecond").textContent = "Cookies / harvest : " + bots * botEfficiency;


}
setInterval(update,50);

function cookieBot(){
  setTimeout(function(){
    cookies = cookies + bots * botEfficiency;
  	console.log("cookie!");
    cookieBot();
  },bottime)
}
cookieBot();
function infobox(msg) {
  document.getElementById("infobox").textContent = ">>>  " + msg;
  console.log(">>>  " + msg);
}
function reset(){
  cookies = 0;
  multi = 1;
  value = 1;
  multiUpgrades = 0;
  valueUpgrades = 0;
  bots = 0;
  quickerUpgrades = 0;
  bottime = 1000
  efficientUpgrades = 0;
  botEfficiency = 1;
  cookiesPerMs = 0;

}
infobox(
  "Welcome to CCECO+ !This is the infobox, important info will appear here. You can open the console (F12 then Console) to see the message history of the infobox!"
);
