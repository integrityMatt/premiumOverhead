const ratingStars = [...document.getElementsByClassName("rating__star")];
let button = document.querySelector("button");
button.disabled = true;

function executeRating(stars) {
  const starClassActive = "rating__star fas fa-star";
  const starClassInactive = "rating__star far fa-star";
  const starsLength = stars.length;
  let i;
  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);
      button.disabled = false;
      button.classList.add("btn-1");

      if (star.className===starClassInactive) {
        for (i; i >= 0; --i) stars[i].className = starClassActive;
      } else {
        for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
      }
    };
  });
}

executeRating(ratingStars);

let redirect = document.querySelector(".redirect");
let formReview = document.querySelector(".formReview");
let seconds = 5;
let foo; 

button.onclick = () => {
  const starClassActive = [...document.getElementsByClassName("fas")];
  let count = starClassActive.length;
  button.style = "display: none";
  ratingStars.map((star) => {
    star.style = "pointer-events: none";
  })
  console.log(count);
  if (count === 5) {
    redirect.style = "display: block";
    function updateSecs() {
      document.getElementById("seconds").innerHTML = seconds;
      seconds--;
      if (seconds == -1) {
          clearInterval(foo);
          window.location.href = "https://g.page/r/CT6PKSLmuLwGEB0/review";
      }
  }
    function countdownTimer() {
      foo = setInterval(function () {
          updateSecs()
      }, 1000);
  }
  
  countdownTimer();
  }
  else if (count < 5) {
    formReview.style = "display: block;"
  }
}

