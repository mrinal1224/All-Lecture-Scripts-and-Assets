
const p = new Promise(function(resolve , reject){
    setTimeout(function(){
       resolve('Promise Resolved')
    } , 30000)
})

const p2 = new Promise(function(resolve , reject){
    setTimeout(function(){
       resolve('Promise 2 Resolved')
    } , 40000)
})

// console.log('Hello')

// async function getData(){
//     return 'Scaler'
// }


// async function getData(){
//     return p
// }

// const data = getData()

// console.log(data)


// data.then(function(result){
//     console.log(result)
// })


async function handlePromise(){
    console.log("hello World")
    // JS engine was waiting for Promise to resolve
    const val = await p;
    console.log('Scaler')
    console.log(val)

    const val2 = await p2;
    console.log('Scaler 2')
    console.log(val2)
}

console.log("Bye World")


function getData(){
    // JS Engine will not wait for promise
    p.then(function(res){
        console.log(res)
    })

    console.log('Hi')
}

handlePromise()

//  getData()


