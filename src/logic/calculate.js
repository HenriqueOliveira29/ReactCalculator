import isNumber from "./isNumber";
import operate from "./operate";
import Big from "big.js";

export default function calculate(obj, buttonName){
    if(buttonName==="AC"){
        return{
            total: null,
            next: 0,
            operation: null
        };
    }

    if(isNumber(buttonName)){
        if(buttonName==="0" && obj.next==="0"){
            return {}
        }
    
        //Exise operação
        if (obj.operation){
            if(obj.next){
                return {next: obj.next+ buttonName}
            };
            return{next:buttonName}
        }

        //sem operação associada
        if(obj.next){
            const next= obj.next==="0"? buttonName: obj.next+buttonName;
            return {
                next,
                total: null,
            };
        }
        return{
            next:buttonName,
            total: null,
        };
    }
    //percentagem
    if (buttonName==="%"){
        if(obj.operation && obj.next){
            const result = operate(obj.total, obj.next, obj.operation)
            return{
                total: Big(result)
                .div(Big("100"))
                .toString(),
                next: null,
                operation: null
            }
        }
        if(obj.next){
            return{
                next:Big(obj.next).div(Big("100")).toString(),
            };
        }
        return{};
    }

    //tratar botao .
    if(buttonName==="."){
        if(obj.next){
            if(obj.next.includes(".")){
                return {};
            }
            return {next: obj.next+"."};
        }
        return{
            next: "0."
        };
    }

    //butao igual 
    if(buttonName ==="="){
        if(obj.next && obj.operation){
            return{
                total: operate(obj.total, obj.next, obj.operation),
                next: null,
                operation: null
            };
        }
        else{
            return{};
        }
    }
    //botao +/-
    if(buttonName ==="+/-"){
        if(obj.next){
            return {next: (-1*parseFloat(obj.next)).toString()};
        }
        if(obj.total){
            return {total: (-1*parseFloat(obj.total)).toString()};
        }
        return {};
    }

    //operacao~
    if(obj.operation){
        return {
            total: operate(obj.total, obj.next, obj.operation),
            next: null,
            operation: buttonName,
        };
    }

    if(!obj.next){
        return{operation: buttonName};
    }

    return {total: obj.next,
            next: null,
            operation: buttonName
        };
}