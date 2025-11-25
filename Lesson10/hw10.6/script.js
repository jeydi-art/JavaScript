const input = document.getElementById('converter');
const resultDiv = document.getElementById('result');
input.oninput = function () {
    //стрингу переводим в число
    const kilos = +this.value;
    let result = kilos * 2.2;
    //меняем текст внутри div
    resultDiv.textContent = result;
};

//или короче
//input.oninput = function () {
//resultDiv.innerText = +this.value * 2.2;
//};
