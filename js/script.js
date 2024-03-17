var userName = "Muhammad Abubakar"
document.getElementById("alertName").onclick = function () {
    alert(userName);
    let statement= 'alert("Muhammad Abubakar")'
    document.getElementById("statement").innerText = statement;
}
document.getElementById("clearStatement").onclick=function(){
    document.getElementById("statement").innerText = ""

}
document.getElementById("alertNumber").onclick = function () {
    let number = 195525;
    alert(number);
    let alertNumber= 'alert(number)'
    document.getElementById("statement").innerText = alertNumber;

}
document.getElementById("varName").onclick = function () {
    document.getElementById("output").innerHTML = ("<ul><li>Validity: Variable names can consist of letters (both uppercase and lowercase), digits (0-9), underscores (_), and dollar signs ($). However, they cannot begin with a digit.</li> <li>Case sensitivity: JavaScript is case-sensitive, so myVariable and myvariable would be considered different variables.</li> <li>Keywords: You cannot use reserved keywords as variable names. Keywords are predefined words that have special meaning in JavaScript, such as if, else, for, while, function, etc.</li> <li>Meaningful names: It's good practice to use descriptive and meaningful names for variables. This improves code readability and maintainability.</li> <li>CamelCase convention: While not strictly enforced, it's a common convention in JavaScript to use camelCase for variable names (e.g., myVariableName). This convention helps improve readability.</li > <li>Constancy: Use const for variables that won't be reassigned and let for variables that will be reassigned. This helps to prevent accidental reassignments and makes your code more predictable.</li></ul >")
    document.getElementById("output").style.textAlign= "left"
    document.getElementById("statement").innerHTML= "<b>Variable Name Conditions</b>"

}
document.getElementById("clearOutput").onclick=function(){
    document.getElementById("output").innerText = ""
    document.getElementById("statement").innerText = ""
}
document.getElementById("camelCase").onclick=function(){
    document.getElementById("statement").innerHTML=""
    document.getElementById("output").innerHTML="<ol> <li>javaScript</li> <li>monDay</li> <li>abuBakar</li> </ol>"
}
document.getElementById("sumTwoNumbers").onclick=function(){
    let a=10
    let b=111
    let sum= a+b
    console.log(sum)
    document.getElementById("statement").innerHTML= "let a = "+ "10" + "<br/> let b = " + "111" + " <br/>let sum = a+b"
    document.getElementById("output").innerHTML= sum
}
document.getElementById("subTwoNumbers").onclick=function(){
    let a=10
    let b=111
    let sub= a-b
    console.log(sub)
    document.getElementById("statement").innerHTML= "let a = "+ "10" + "<br/> let b = " + "111" + " <br/>let sub = a-b"
    document.getElementById("output").innerHTML= sub
}
document.getElementById("mulTwoNumbers").onclick=function(){
    let a=10
    let b=111
    let mul= a*b
    console.log(mul)
    document.getElementById("statement").innerHTML= "let a = "+ "10" + "<br/> let b = " + "111" + " <br/>let mul = a*b"
    document.getElementById("output").innerHTML= mul
}
document.getElementById("divTwoNumbers").onclick=function(){
    let a=10
    let b=111
    let div= a/b
    console.log(div)
    document.getElementById("statement").innerHTML= "let a = "+ "10" + "<br/> let b = " + "111" + " <br/>let div = a/b"
    document.getElementById("output").innerHTML= div
}
document.getElementById("someNumbers").onclick=function(){
    let someCal = 44 / 4 * 4 + 10 ** 4 - 20 + (3 + 9)
    console.log(someCal)
    document.getElementById("statement").innerHTML= "let someCal = 44 / 4 * 4 + 10 ** 4 - 20 + (3 + 9)";
    document.getElementById("output").innerHTML= someCal
}