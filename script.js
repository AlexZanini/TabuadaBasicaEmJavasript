var num = document.getElementById('num')
//var resposta = document.getElementById('resposta')
var  sel = document.getElementById('sel')

function clicar(){
    

    if (num.value.length == 0) {
        alert("Por favor digite um número")
    } else {
        var num1 =  Number(num.value)
        for (var x = 1; x <= 10; x++ ) {
            var tab = document.createElement('option')
            tab.text = `${num1} x ${x} = ${num1 * x}`
            sel.appendChild(tab)


           }      
        }   

}