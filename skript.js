
$("button").on("click", function(e) {
    let color = e.target.className
    $("body").css("background", color)
    $("h1").text(color)
})


$(".img").on("click", function () {
    $("body").css({
        "background" : "url(./img.jpg)" , 
        "background-size" : "cover"
    })
})
let colors = ["red", "green", "grey", "black"]
console.log(Math.floor(Math.random() * 256))

//$(".random").on("click", function() {
  //  $("body").css("background", colors[Math.floor(Math.random() * 256)])
//})

$(".random").on("click", function() {
    $("body").css("background", `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`)
})