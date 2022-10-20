const join = document.querySelector(".join");
const tweet = document.querySelector(".tweet")
let newTweet = document.querySelector(".twitter");
const twitlist = document.querySelector(".twitclone");

join.addEventListener("click", (e) => {
  alert("Thanks for joining!")
})

tweet.addEventListener("click", (e) => {
  if (newTweet.value != ""){
    let myTweet = document.createElement("p")
    myTweet.innerHTML =  newTweet.value;
    twitlist.append(myTweet)
    
  }
  newTweet.value = "";

})