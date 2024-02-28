function parent(){
    var a = 10;
    function child(){
        var b = 20;
        console.log(a)

        function child2(){
            console.log(a+b)
        }
        return child2
    }
    return child
}
let functionReceived = parent()
console.log(functionReceived)

let child2Recieved = functionReceived()
child2Recieved()