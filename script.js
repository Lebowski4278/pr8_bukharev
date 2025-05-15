function GeneratePassword() {
    lcase = document.getElementById("lcase");
    resultText = document.getElementById("resultText");
    count = document.getElementById("count");
    let lcasesym = "abcdefghijklmnopqrstuvwxyz";
    let available = "";
    if(count.value==""){
        return;
    }
    let index = Number(count.value);
    if (lcase.checked) {
        available = available + lcasesym;
    }
    if (available.length == 0) return;
    let result = "";
    for (let i = 0; i < index; i++) {
        result = result + available[random(0, available.length)];
    }
    resultText.value = result;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

