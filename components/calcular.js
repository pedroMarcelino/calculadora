// This is a JavaScript file

//Declarando variaveis
var valor = "";
var opr = "";
var limpaTela = "";
var x  = 0;
var valor2 = "";
var result  = "";

//incluindo numeros no input
$(document).on("click","#btn1", function(){
    
    if(x<=0){
        valor += '1';
        $("#result").val(valor);
    }
    
    if(x > 0){
        valor2 += '1';
        $("#result").val(valor2);
    }
});

$(document).on("click","#btn2", function(){
     if(x<=0){
        valor += '2';
        $("#result").val(valor);
    }
    
    if(x > 0){
        valor2 += '2';
        $("#result").val(valor2);
    }
});

$(document).on("click","#btn3", function(){
     if(x<=0){
        valor += '3';
        $("#result").val(valor);
    }
    
    if(x > 0){
        valor2 += '3';
        $("#result").val(valor2);
    }
});

$(document).on("click","#btn4", function(){
     if(x<=0){
        valor += '4';
        $("#result").val(valor);
    }
    
    if(x > 0){
        valor2 += '4';
        $("#result").val(valor2);
    }
});


$(document).on("click","#btn5", function(){
     if(x<=0){
        valor += '5';
        $("#result").val(valor);
    }
    
    if(x > 0){
        valor2 += '5';
        $("#result").val(valor2);
    }
});


$(document).on("click","#btn6", function(){
     if(x<=0){
        valor += '6';
        $("#result").val(valor);
    }
    
    if(x > 0){
        valor2 += '6';
        $("#result").val(valor2);
    }
});

$(document).on("click","#btn7", function(){
     if(x<=0){
        valor += '7';
        $("#result").val(valor);
    }
    
    if(x > 0){
        valor2 += '7';
        $("#result").val(valor2);
    }
});

$(document).on("click","#btn8", function(){
     if(x<=0){
        valor += '8';
        $("#result").val(valor);
    }
    
    if(x > 0){
        valor2 += '8';
        $("#result").val(valor2);
    }
});

$(document).on("click","#btn9", function(){
     if(x<=0){
        valor += '9';
        $("#result").val(valor);
    }
    
    if(x > 0){
        valor2 += '9';
        $("#result").val(valor2);
    }
});

$(document).on("click","#btn0", function(){
     if(x<=0){
        valor += '0';
        $("#result").val(valor);
    }
    
    if(x > 0){
        valor2 += '0';
        $("#result").val(valor2);
    }
});

//checando se o valor é double
$(document).on("click","#btnPonto", function(){
     if(x<=0){
        valor += '.';
        $("#result").val(valor);
    }
    
    if(x > 0){
        valor2 += '.';
        $("#result").val(valor2);
    }
});

//verificando operacao
$(document).on("click","#btnMais", function(){
    opr  = "+";
    x++;
    $("#result").val(limpaTela);
});

$(document).on("click","#btnMenos", function(){
    opr  = "-";
    x++;
    $("#result").val(limpaTela);
});

$(document).on("click","#btnMult", function(){
    opr  = "*";
    x++;
    $("#result").val(limpaTela);
});

$(document).on("click","#btnDividir", function(){
    opr  = "/";
    x++;
    $("#result").val(limpaTela);
});

//fazendo conta final
$(document).on("click","#btnIgual", function(){
    if(opr == "+"){
        result = parseFloat(valor) + parseFloat(valor2);
        $("#result").val(result);   
    }
    else if(opr == "-"){
        result = parseFloat(valor) - parseFloat(valor2);
        $("#result").val(result);   
    }
    else if(opr == "*"){
        result = parseFloat(valor) * parseFloat(valor2);
        $("#result").val(result);   
    }
    else if(opr == "/"){
        result = parseFloat(valor) / parseFloat(valor2);
        $("#result").val(result);   
    }
});



$(document).on("click","#btnClear", function(){
    valor = "";
    valor2 = "";
    x = "";
    opr =  "";
    
    $("#result").val(valor);
});
