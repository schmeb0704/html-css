const shibeImg = document.querySelector(".shibe")

fetch("https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true")
.then(res => res.json())
.then(json => {
  shibeImg.setAttribute("src", json[0])
  shibeImg.style.width= "200px"
})
