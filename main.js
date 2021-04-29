function submit(){
    var a = prompt("enter first number")
    var b = prompt("enter second number")
    function u(a,b){
        let temp =a;
    a=b;
    b=temp;
    }
    u(a,b)
    alert("Check out your answer on console")
    console.log("after call by value")
    console.log(a,b)
}
function Submit(){
    var obj = {
        a: prompt("enter first number"),
        b: prompt("enter second number")
    }
    function u(obj){
        let temp = obj.a;
        obj.a = obj.b;
        obj.b = temp;
    }
    u(obj)
    alert("check out your answer on console")
    console.log("afer the call by refernce")
    console.log(obj)
}
