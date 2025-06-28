

window.onload = function () {
    let button = document.getElementById("calculate");
    button.addEventListener("click", calculateLove);
}


function calculateDatePer(yearDiff) {
    let resultP = 0
    if (yearDiff === 0) {
        resultP = 32
    }
    else if (yearDiff <= 3) {
        resultP = 29
    }
    else if (yearDiff >= 10) {
        resultP = 3
    }
    else {
        resultP = 25
    }
    return resultP
}

function calculateNamePer(name1, name2) {
    let resultN = 0
    let value = Math.abs(name1.charCodeAt(0) - name2.charCodeAt(0))
    if (name1.length === name2.length) {
        resultN = +5
    }
    if (value === 0) {
        resultN += 26
    }
    else if (value < 3) {
        resultN += 24
    }
    else if (value < 9) {
        resultN += 20
    }
    else if (value < 15) {
        resultN += 17
    }
    else {
        resultN += 9
    }
    return resultN
}


function calculateLove() {
    let yourName = document.getElementById("your-name").value;
    let crushName = document.getElementById("crush-name").value;
    let yourBD = new Date(document.getElementById("Your-Birthdate").value).getFullYear();
    let crushBD = new Date(document.getElementById("Crush's-Birthdate").value).getFullYear();
    let yourSt = document.getElementById("Your-State").value;
    let crushSt = document.getElementById("Crush's-State").value;
    if (yourName != "" && crushName != "" && yourSt!=="" && crushSt!=="" &&yourBD!=="" && crushBD!=="" ) {
    let percentage = 0
    let behaviour=""
    const yearDiff = Math.abs(yourBD - crushBD)
    percentage += calculateDatePer(yearDiff)
    percentage += calculateNamePer(yourName, crushName)
    percentage += calculateNamePer(yourSt, crushSt)
    if(percentage>75){
        behaviour="excellent😊😊"
    }
    else if(percentage>50){
        behaviour="Good😊"
    }
    else if(percentage>25){
        behaviour="Average👌"
    }
    else{
        behaviour="Below Average😒😒"
    }
    document.getElementById("result-message").innerText = yourName + " and " + crushName + "'s chance of love:";
    document.getElementById("result-percentage").innerText = percentage.toString() + "%";
    document.getElementById("result-behaviour-message").innerText = yourName + " and " + crushName + "'s Match of love:" +behaviour;
    }
}