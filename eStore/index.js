
    let sum = document.querySelector('.totalPrice').innerText =
[...document.querySelectorAll('.price')].reduce((acc, n) => acc + +n.innerText, 0);

function changePrice() {
    let change = document.getElementById('totalPrice');
    //console.log(change.textContent);
    let priceSum = +change.textContent / 100 *80;
    change.textContent = priceSum;
    

    let change1 = document.getElementById('price1');
    //console.log(change1.textContent);
    let priceSum1 = +change1.textContent / 100 *80;
    change1.textContent = priceSum1;

    let change2 = document.getElementById('price2');
    let priceSum2 = +change2.textContent / 100 *80;
    change2.textContent = priceSum2;

    let change3 = document.getElementById('price3');
    //console.log(change3.textContent);
    let priceSum3 = +change3.textContent / 100 *80;
    change3.textContent = priceSum3;

    let change4 = document.getElementById('price4');
    //console.log(change4.textContent);
    let priceSum4 = +change4.textContent / 100 *80;
    change4.textContent = priceSum4;
    
    changePrice = function(){}
}