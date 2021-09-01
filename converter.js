// Binary Converter

const resultFormat = document.getElementById('userNumber');
const resultOut = document.getElementById('result');

const inputFormat = document.getElementById('selective');

function converter(format) {

    let userNum = resultFormat.value; // user input. STRING
    let code = "";

    if(format == "2") {
        code = `<a> Decimal(10진수) : ${parseInt(userNum, 2)} <br> </a><a> Hex(16진수) : ${parseInt(userNum, 2).toString(16).toUpperCase()} </a>`
        resultOut.innerHTML = code;
    } else if(format == "10") {
        code = `<a> Binary(2진수) : ${parseInt(userNum).toString(2)} <br> </a><a> Hex(16진수) : ${parseInt(userNum).toString(16)} </a>`
        resultOut.innerHTML = code;
    } else if(format == "16") {
        if(!userNum.includes("0x")) userNum = "0x" + userNum;
        code = `<a> Binary(2진수) : ${parseInt(userNum).toString(2)} <br> </a><a> Decimal(10진수) : ${parseInt(userNum).toString(10)} </a>`
        resultOut.innerHTML = code;
    } else {
        code = `알맞은 입력을 넣어주세요!`
        resultOut.innerHTML = code;
    }
}

inputFormat.addEventListener('click', function (event){
    event.preventDefault();
    converter(inputFormat.value);
});

inputFormat.addEventListener('change', function (event){
    event.preventDefault();
    converter(inputFormat.value);
});