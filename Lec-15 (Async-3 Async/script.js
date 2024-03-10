const p = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve('Promise Resolved')
    } , 10000)
  })
  
  async function handlePromise() {
    const val = await p
    console.log('Create Impact')
    console.log(val)
  }
  
  handlePromise() 