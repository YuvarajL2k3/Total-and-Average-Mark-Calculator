var num1=document.getElementById("num1")
var num2=document.getElementById("num2")
var num3=document.getElementById("num3")
var num4=document.getElementById("num4")
var num5=document.getElementById("num5")

var result1=document.getElementById("result1")
var result2=document.getElementById("result2")



function total()

{
    var num1val=Number(num1.value)
    var num2val=Number(num2.value)
    var num3val=Number(num3.value)
    var num4val=Number(num4.value)
    var num5val=Number(num5.value)

    if
    (
        num1val>=0 && num1val<=100 &&
        num2val>=0 && num2val<=100 &&
        num3val>=0 && num3val<=100 &&
        num4val>=0 && num4val<=100 &&
        num5val>=0 && num5val<=100 
    )
    {
     var total=num1val+num2val+num3val+num4val+num5val
     result1.textContent="Total Marks is "+total
     
    }
    else{
        result1.textContent="Invalid Mark"
    }
}

function avg(){
    var num1val=Number(num1.value)
    var num2val=Number(num2.value)
    var num3val=Number(num3.value)
    var num4val=Number(num4.value)
    var num5val=Number(num5.value)

    if
    (
        num1val>=0 && num1val<=100 &&
        num2val>=0 && num2val<=100 &&
        num3val>=0 && num3val<=100 &&
        num4val>=0 && num4val<=100 &&
        num5val>=0 && num5val<=100 
    )
    {
        var total=num1val+num2val+num3val+num4val+num5val
        var avg=total/5
        result2.textContent="Average Marks is "+avg
    }

    else{
        result2.textContent="Invalid Data"
    }

}