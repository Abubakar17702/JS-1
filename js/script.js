
// ALERT NAME 
document.getElementById("alertName").onclick=function(){
    let fullName= "Muhammad Abubakar"
    alert(fullName)
    let statement= 'alert("Muhammad Abubakar")'
    document.getElementById("statement").innerText = statement;
    document.getElementById("output").innerText = fullName;
}
document.getElementById("clearStatement").onclick=function(){
    document.getElementById("statement").innerHTML= ""
}
document.getElementById("clearOutput").onclick=function(){
    document.getElementById("output").innerHTML= ""
}

// ALERT NUMBER
document.getElementById("alertNumber").onclick=function(){
    let number= 195525
    alert(number)
    let statement= 'alert(number)'
    document.getElementById("statement").innerText = statement;
    document.getElementById("output").innerText = number;
}

// Variable Names Legal and Illegal
document.getElementById("showVar").onclick=function(){
    document.getElementById("statement").innerHTML= "<h5>Variable Names Legal and Illegal</h5>"
    let html= "<ul>  <li>A variable name can't contain any spaces. </li> <li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li> <li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords.For example, <code> userAlert</code> and <code> myVar</code> are legal.</li> <li>Capital letters are fine, but be careful. Variable names are case sensitive. A <code> rose </code> is not a <code> Rose</code>. If you assign the string 'Floribundas' to the variable <code> rose</code>, and then ask JavaScript for the value assigned to <code> Rose</code>, you'll come up empty.</li> <li>I teach the camelCase naming convention. Why 'camelCase'? Because there is a hump or two (or three) in the middle if the name is formed by more than one word. A camelCase name begins in lower case. If there's more than one word in the name, each subsequent word gets an initial cap, creating a hump. If you form a variable name with only one word, like <code> response</code>, there's no hump. It's a camel that's out of food. Please adopt the camelCase convention. It'll make your variable names more readable, and you'll be less likely to get variable names mixed up.</li></ul>"
    document.getElementById("output").innerHTML= html;
    document.getElementById("output").style.textAlign= "left"
    document.getElementById("output").style.lineHeight= "2"
}

// SHOW CAMEL CASE EXAMPLES
document.getElementById("showCamelCase").onclick=function(){

    document.getElementById("statement").innerHTML= ""
    document.getElementById("statement").innerHTML= "<h5>Examples Of camelCase</h4>"
    let html2= "<ul> <li><code>userName</code></li> <li><code>fullName</code></li> <li><code>watchTime</code></li> </ul>";
    document.getElementById("output").innerHTML= html2;
}


// SUM OF TWO NUMBERS
document.getElementById("sumOfTwo").onclick=function(){
    let a= 100;
    let b= 55;
    let sum= a+b;

    console.log("a=", a)
    console.log("b=", b)
    console.log("sum=", sum)

    document.getElementById("statement").innerHTML= "let a = "+ a + "<br/> let b = " + b + " <br/>let sum = a+b"
    document.getElementById("output").innerHTML= sum

}

// SUBSTRACTION OF TWO NUMBERS
document.getElementById("subOfTwo").onclick=function(){
    let a= 100;
    let b= 55;
    let sub= a-b;

    console.log("a=", a)
    console.log("b=", b)
    console.log("sub=", sub)
    document.getElementById("statement").innerHTML= "let a = "+ a + "<br/> let b = " + b + " <br/>let sub = a-b"
    document.getElementById("output").innerHTML= sub

}

// MULTIPLY TWO NUMBERS
document.getElementById("mulOfTwo").onclick=function(){
    let a= 100;
    let b= 55;
    let mul= a*b;

    console.log("a=", a)
    console.log("b=", b)
    console.log("mul=", mul)
    document.getElementById("statement").innerHTML= "let a = "+ a + "<br/> let b = " + b + " <br/>let mul = a*b"
    document.getElementById("output").innerHTML= mul
}


// DIVIDE TWO NUMBERS
document.getElementById("divOfTwo").onclick=function(){
    let a= 100;
    let b= 55;
    let div= a/b;

    console.log("a=", a)
    console.log("b=", b)
    console.log("div=", div)
    document.getElementById("statement").innerHTML= "let a = "+ a + "<br/> let b = " + b + " <br/>let div = a/b"
    document.getElementById("output").innerHTML= div
}


// CALCULATE SOME NUMBERS
document.getElementById("someCal").onclick=function(){
    let someCal = 44 / 4 * 4 + 10 ** 4 - 20 + (3 + 9)
    console.log('someCal=', someCal )
    document.getElementById("statement").innerHTML= "let someCal = 44 / 4 * 4 + 10 ** 4 - 20 + (3 + 9)";
    document.getElementById("output").innerHTML= someCal
}