function onlyNumber(){
    if (event.keyCode < 48 || event.keyCode > 57)
    event.returnValue= false;
}

function change() {
    let inputNumber = document.getElementById('number');
    ///alert(inputNumber.value);
    let result = inputNumber.value ** 2;
    //alert(result);
    document.getElementById('resultHere').value = result;
}