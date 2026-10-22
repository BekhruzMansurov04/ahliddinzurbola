let deposit = document.getElementById("deposit");
let btn = document.getElementById("btn")
let balance = document.getElementById("balance");
let currentBalance = 1000;
deposit.addEventListener("click", function(){
    let add = Number(document.getElementById("add").value);
    currentBalance += add;
    alert(`Hisobingizga ${add} summa qushildi, hozirgi balans: ${currentBalance}`)
})
btn.addEventListener("click", function(){
    let withdraw = Number(document.getElementById("withdraw").value);
    if(withdraw > currentBalance){
        alert(`Hisobingizda mablag' yetarli emas, hozirgi balans: ${currentBalance}`)
        return;
    }
    currentBalance -= withdraw;
    alert(`Hisobingizdan ${withdraw} summa yechildi, hozirgi balans: ${currentBalance}`)
})
balance.addEventListener("click", function(){
    let result = document.getElementById("result")
    result.innerHTML = `hozirgi balans: ${currentBalance} so'm`
})
