// const express = require('express');
// const router = express.Router();

var change = 0;
var insertedCoins = 0;
var messageEl = document.getElementById("message");
// var messageEl = document.getElementById("coin-refresh container");

msg = "";

var totalPaid = 0;
var products = ["Coke","Fanta", "Sprite",];
const price = 12;

const R5coin = 5;
const R2coin = 2;
const R1coin = 1;
const R050coin = 0.5;
const R020coin = 0.2;

function computeTotal() {
    var R5coins = Number(document.getElementById("fiverand").value);
    var R2coins = Number(document.getElementById("tworand").value);
    var R1coins = Number(document.getElementById("onerand").value);
    var R050coins = Number(document.getElementById("fiftycent").value);

    if (R5coins > 0) {
        R5coins = R5coins * R5coin;
    }

    if (R2coins > 0) {
        R2coins = R2coins * R2coin;
    }

    if (R1coins > 0) {
        R1coins = R1coins * R1coin;
    }

    if (R050coins > 0) {
        R050coins = R050coins * R050coin;
    }

    // if (R020coins > 0) {
    //     R020coins = R020coins * R020coin;
    // }

    totalPaid = R5coins + R2coins + R1coins + R050coins;

    return totalPaid.toFixed(2);
}

function tally() {
    insertedCoins = computeTotal();
    document.getElementById("paid").innerHTML = insertedCoins;
}

function clearTally() {
    insertedCoins = 0;
    document.getElementById("paid").innerHTML = insertedCoins;
}

function clearForm() {
    document.getElementById("fiverand").value = 0;
    document.getElementById("tworand").value = 0;
    document.getElementById("onerand").value = 0;
    document.getElementById("fiftycent").value = 0;
    // document.getElementById("twentycent").value = 0;
}

function cancel(){
    computeTotal();

    if (totalPaid > 0) {
        msg = "Purchase cancelled. R " + totalPaid.toFixed(2) + "has been refunded in coin pocket.";

        clearForm();
        clearTally();

        messageEl.innerHTML = msg;

    } else if (totalPaid == 0) {
        msg = "Insert coins and select product.";

        messageEl.innerHTML = msg;
    }   
}

function computeChange() {
    var tempchange = 0;

    if (computeTotal() != 0) {
        return (tempchange = (computeTotal() - price).toFixed(2));
    }

    return tempchange.toFixed(2);
}

function refund() {
    if (totalPaid > 0){
        msg = "No product was selected. R" + totalPaid.toFixed(2) + " has been returned to coin pocket.";

        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();

        messageEl.innerHTML = msg;
    }
}

//setTimeout(refund(), 1000);

function refresh(){
    alert("Refreshing coins...");
    const xhr = new XMLHttpRequest();
    const container = document.getElementById("coin-refresh container");

    xhr.onload = function(){
        if (this.status === 200) {
            container.innerHTML = xhr.responseText;
        } else {
            console.warn('Status NOT 200! Coins not refreshed.')
        }
    }

  xhr.open('get', 'vend.html')
  xhr.send();
} 

function refresh_products(){
    alert("Refreshing products...");
    const xhr = new XMLHttpRequest();
    const containers = document.getElementById("drinks-refresh container");

    xhr.onload = function(){
        if (this.status === 200) {
            containers.innerHTML = xhr.responseText;
        } else {
            console.warn('Status NOT 200! Coins not refreshed.')
        }
    }

  xhr.open('get', 'prods.html')
  xhr.send();
} 

function refresh_table(){
    alert("Refreshing...");
    const xhr = new XMLHttpRequest();
    const container = document.getElementById("table container");

    xhr.onload = function(){
        if (this.status === 200) {
            container.innerHTML = xhr.responseText;
        } else {
            console.warn('Status NOT 200! Coins not refreshed.')
        }
    }

  xhr.open('get', 'data_table.html')
  xhr.send();
} 


function dispenseProduct(product) {
    messageEl.innerHTML ="";
    change = 0;

    var selectedProduct = products[product];

    change = computeChange();

    if(change < 0) {
        msg = "Not enough credit. R" + totalPaid.toFixed(2) + " has been refunded.";

        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();

        messageEl.innerHTML = msg;

    } else if(change > 0){
        msg = "Purchase successful. Your drink has been dispensed. Enjoy!! R" + change + " has been returned to coin pocket.";

        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();

        messageEl.innerHTML = msg;

    } else if(totalPaid == 0){
        msg = "No credit has been loaded. Insert coins and select product.";
        messageEl.innerHTML = msg;

    } else if(change == 0){
        msg = "Purchase successful! Your beverage has been dispensed. Enjoy!!";

        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();

        messageEl.innerHTML = msg;
    }
}

//module.exports = router;