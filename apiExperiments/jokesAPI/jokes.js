fetch('https://official-joke-api.appspot.com/random_joke')
 .then(res => res.json())
.then(json => {
  console.log(json.setup)
  setTimeout(()=>{
    console.log(json.punchline)
  }, 3000)
})
.finally(() => {
  
  setTimeout(() => console.log("bazinga!"), 4000)
})
