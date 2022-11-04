let ranNum = Math.floor(Math.random() * 5)

fetch("https://opentdb.com/api.php?amount=10")
.then(response => response.json())
.then(json => {
  console.log(json.results[ranNum].question)
  console.log(json.results[ranNum].correct_answer)
} )
