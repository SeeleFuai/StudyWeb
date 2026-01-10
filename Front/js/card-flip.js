const cardFlip = document.querySelectorAll(".card-flip");

cardFlip.forEach((item)=>{
  item.addEventListener('click',()=>{
    item.classList.toggle('flipped');
  });
});

