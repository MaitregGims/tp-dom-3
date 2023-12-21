let body = document.querySelector("body");
let main = document.createElement("main");
let h1 = document.createElement("h1");
let count = 0;
let p = document.createElement('p');
let nopeCount = 0;

body.appendChild(main);
main.style.width = "46%";
main.style.margin = "0 auto";
main.style.backgroundColor = "grey";
main.style.borderRadius = "30px"
main.style.height = "875px";
for (let i = 0; i < 8; i++) {
     for (let b = 0; b < 8; b++) {
          let div = document.createElement("div");
          div.style.width = "70px";
          div.style.height = "70px";
          div.style.margin = "2.25%";
          div.style.borderRadius = "10px"
          div.style.display = "inline-block"
          div.style.backgroundColor = "darkgrey";
          div.textContent = '.'
          main.appendChild(div);
     }
}

let div = document.querySelectorAll('div');

let mouse = i => {
     if (div[i].style.backgroundColor === "black") {
          div[i].style.backgroundColor = "darkgrey";
     } else if (div[i].style.backgroundColor === "white") {
          div[i].style.backgroundColor = "white";
     } else {
          div[i].style.backgroundColor = "black";
     }
}

let divDestroy = i => {
     div[i].style.backgroundColor = "white";
     count++;
     if (div[i].textContent != '.') {
          return null;
     } else {
          if (div[i] == div[0]) {
               div[i].textContent = "QUOI ?"
          } else if (i % 5 === 0) {
               div[i].textContent = "NO"
               nopeCount++;
          } else if (i % 7 === 0) {
               div[i].textContent = "LOL"
               div[i].style.backgroundColor = "purple";
               div[i].style.color = "white";
          } else if (i % 3 === 0) {
               div[i].textContent = Math.floor(Math.random() * 100)
               if (div[i].textContent == 42) {
                    main.style.backgroundColor = "pink";
                    for (let y = 0; y < 64; y++) {
                         div[y].remove();
                    }
                    main.appendChild(h1);
                    h1.textContent = "42, bravo ! La réponse à la vie, l'univers et le reste...";
                    setTimeout(() => {
                         location.reload();
                    }, "5000");
               } else if (div[i].textContent == 10) {
                    main.style.backgroundColor = "pink";
                    for (let y = 0; y < 64; y++) {
                         div[y].remove();
                    }
                    main.appendChild(h1);
                    h1.textContent = "Bingo ! vous avez gagner.";
                    setTimeout(() => {
                         location.reload();
                    }, "5000");
               }

          }
     }

     if (nopeCount === 3) {
          count = 64;
     }

     if (count == 64) {
          main.style.backgroundColor = "pink";
          for (let i = 0; i < count; i++) {
               main.removeChild(div[i]);
          }
          main.appendChild(h1);
          h1.textContent = "fin de partie rafraichissement auto.";
          setTimeout(() => {
               location.reload();
          }, "5000");
     }
}



for (let i = 0; i < 64; i++) {
     div[i].addEventListener("mouseover", function () {
          mouse(i);
     });
     div[i].addEventListener('click', function () {
          divDestroy(i);
     })
}
