const followBtn = document.querySelectorAll(".follow");

followBtn.forEach(btn => btn.addEventListener("click", (e) => {
  let followed = e.target;
  followed.innerHTML = "Followed!"
  setTimeout(take, 1500)
  console.log("clicked");

  function take(){
    followed.parentElement.parentElement.remove();
  }

}))

