function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "আরো পড়ুন";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "পূর্বে ফিরে যান";
    moreText.style.display = "inline";
  }
}
