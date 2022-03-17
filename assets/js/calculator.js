let user_input = "";
let numbers_given = [];
let symbols_given = [];
let counter = 0;
let equal_is_pressed = false;
function getData(id){
    if(equal_is_pressed){
        equal_is_pressed = false;
        numbers_given =[];
        symbols_given = [];
        user_input = "";
        counter = 0;
        document.getElementById("result-text").innerHTML = "";
    }

    if(id=="+" || id=="-" || id=="x" || id =="/"){
        symbols_given[counter] = id;
        numbers_given[counter] = parseFloat(user_input.replace(/,/g, '.'));
      
        counter++;
        user_input = "";
        document.getElementById("result-text").innerHTML = "";
    }else if(id == "="){
        equal_is_pressed = true;
        numbers_given[counter] = parseFloat(user_input.replace(/,/g, '.'));
        counter++;
        user_input = "";
        getResult(); 
    }else if(id == "C"){
        numbers_given =[];
        symbols_given = [];
        user_input = "";
        counter = 0;
        document.getElementById("result-text").innerHTML = "";
    }else{
        user_input = user_input.concat(id);
        document.getElementById("result-text").innerHTML = user_input;
    }
   


}



function getResult(){
    let result = 0;
    if(symbols_given[0] == "+"){
        result = numbers_given[0] + numbers_given[1];
    }else if(symbols_given[0] == "-"){
        result = numbers_given[0] - numbers_given[1];
    }else if(symbols_given[0] == "x"){
        result = numbers_given[0] * numbers_given[1];
    }
    else if(symbols_given[0] == "/"){
        result = numbers_given[0] / numbers_given[1];
    }
    document.getElementById("result-text").innerHTML = result;
    
    numbers_given =[];
    symbols_given = [];
    user_input = "";
    counter = 0;

    

}