//"use strict";//https://learn.javascript.ru/strict-mode

let showMoney = document.getElementsByClassName("Money")[0].style.visibility = "hidden";
let currentCoins = 0;

let strawCount = 0;
let raspCount = 0;
let grapeCount = 0;
let blackCount = 0;
let swordCount =0;

document.getElementById('increaseItems').onclick = function(){
    strawCount +=1;
    document.getElementById('incrementStraw').innerHTML=strawCount;
    if (strawCount!=0){
        showMoney = document.getElementsByClassName("Money")[0].style.visibility = "visible";
    }
} //increaseItems

document.getElementById('inventory').onclick = () => {
    (strawCount!=0) ? alert(`you have\n${strawCount} sb\n${raspCount} rb\n${grapeCount} grp\n${blackCount} bb`) : alert('you have nothing to lose');
} //inventory

document.getElementById('sell').onclick = function() {
    let sellItem = document.getElementById('selectSell').value
    if (sellItem == 'strawSell') {
        if (strawCount==0){
            alert("not enough strawies")
        } else if (Number.isInteger(strawCount/5)){
            coinsAvailable = strawCount/5;
            currentCoins += coinsAvailable;
            document.getElementById('valueCoin').innerHTML=currentCoins;
            strawCount=0;
            document.getElementById('incrementStraw').innerHTML=strawCount;
        }
         else if (strawCount>5){
            coinsAvailable = strawCount/5;
            coinsAvailable = Math.floor(coinsAvailable);
            currentCoins += coinsAvailable;
            document.getElementById('valueCoin').innerHTML=currentCoins;
            strawCount-=coinsAvailable*5;
            document.getElementById('incrementStraw').innerHTML=strawCount;
        } else {
            alert("not enough strawbies")
        }
    }
    else if (sellItem == 'raspSell'){
        if (raspCount==0){
            alert("not enough raspies")
        } else if(Number.isInteger(raspCount/5)){
            coinsAvailable = raspCount/5;
            currentCoins += coinsAvailable;
            document.getElementById('valueCoin').innerHTML=currentCoins;
            raspCount=0;
            document.getElementById('incrementRasp').innerHTML=raspCount;

        }
         else if (raspCount>5){
            coinsAvailable = raspCount/5;
            coinsAvailable = Math.floor(coinsAvailable);
            currentCoins += coinsAvailable;
            document.getElementById('valueCoin').innerHTML=currentCoins;
            raspCount-=coinsAvailable*5;
            document.getElementById('incrementRasp').innerHTML=raspCount;
        } else {
            alert("not enough raspies")
        }
    }
    else if (sellItem == 'grapeSell'){
        if (grapeCount==0){
            alert("not enough grapes")
        } else if(Number.isInteger(grapeCount/5)){
            coinsAvailable = grapeCount/5;
            currentCoins += coinsAvailable;
            document.getElementById('valueCoin').innerHTML=currentCoins;
            grapeCount=0;
            document.getElementById('incrementGrape').innerHTML=grapeCount;
        }
         else if (grapeCount>5){
            coinsAvailable = grapeCount/5;
            coinsAvailable = Math.floor(coinsAvailable);
            currentCoins += coinsAvailable;
            document.getElementById('valueCoin').innerHTML=currentCoins;
            grapeCount-=coinsAvailable*5;
            document.getElementById('incrementGrape').innerHTML=grapeCount;
        } else {
            alert("not enough grapes")
        }
    }
    else if (sellItem == 'blackSell'){
        if (blackCount==0){
            alert("not enough blackies")
        } else if(Number.isInteger(blackCount/5)){
        coinsAvailable = blackCount/5;
        currentCoins += coinsAvailable;
        document.getElementById('valueCoin').innerHTML=currentCoins;
        blackCount=0;
        document.getElementById('incrementBlack').innerHTML=blackCount;}
         else if (blackCount>5){
            coinsAvailable = blackCount/5;
            coinsAvailable = Math.floor(coinsAvailable);
            currentCoins += coinsAvailable;
            document.getElementById('valueCoin').innerHTML=currentCoins;
            blackCount-=coinsAvailable*5;
            document.getElementById('incrementBlack').innerHTML=blackCount;
        } else {
            alert("not enough blackbies")
        }

    }
}

let shopBtn = document.getElementById('Shop').innerHTML
document.getElementById('Shop').onclick = () => {
    let shopItem = document.getElementById('selectShop').value;
    swordCount = document.getElementById('incrementSword').innerHTML;
    if (shopItem == 'raspShop')
    {(currentCoins >=1) ? (++raspCount &&
        (document.getElementById('incrementRasp').innerHTML = raspCount) &&
        (document.getElementById('valueCoin').innerHTML = --currentCoins)) : alert('not enough money')}
    else if (shopItem == 'grapeShop')
    {(currentCoins >=3) ? (++grapeCount &&
        (document.getElementById('incrementGrape').innerHTML = grapeCount) &&
        (document.getElementById('valueCoin').innerHTML = (currentCoins -= 3))) : alert('not enough money')}
    else if(shopItem == 'blackShop')
    {(currentCoins >=5) ? (++blackCount &&
        (document.getElementById('incrementBlack').innerHTML = blackCount) &&
        (document.getElementById('valueCoin').innerHTML = (currentCoins -= 5))) : alert('not enough money')}
    else if(shopItem == 'sword')
    {(currentCoins >=10) ? (++swordCount &&
        (document.getElementById('incrementSword').innerHTML = swordCount) &&
        (document.getElementById('valueCoin').innerHTML = (currentCoins -= 10))) : alert('not enough money')}
}


/*while (raspCount >0) {
    setTimeout(() => {
        ++strawCount
        document.getElementById('incrementStraw').innerHTML = strawCount
    }, '1000')
}*/