const words = ["javascript"];
 
        let word = words[Math.floor(Math.random() * words.length)];
 
        let guessed = Array(word.length).fill("_");
 
        let attempts = 8;
       
        document.getElementById("word").innerText = guessed.join(" ");
 
        function checkLetter(letter) {
            if (word.includes(letter)) {
                for (let i = 0; i < word.length; i++) {
                    if (word[i] === letter) guessed[i] = letter;
                }
            } else {
                attempts--;
                document.getElementById("attempts").innerText = attempts;
            }
            document.getElementById("word").innerText = guessed.join(" ");
            checkGameOver();
        }
 
        function checkGameOver() {
            if (guessed.join("") === word) {
                document.getElementById("message").innerText = "Você venceu!";
                disableLetters();
            } else if (attempts === 0) {
                document.getElementById("message").innerText = "Você perdeu! A palavra era " + word;
                disableLetters();
            }
        }
 
        function disableLetters() {
            document.querySelectorAll(".letter").forEach(btn => btn.disabled = true);
        }
 
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        const lettersDiv = document.getElementById("letters");
        alphabet.split("").forEach(letter => {
            let btn = document.createElement("button");
            btn.innerText = letter;
            btn.className = "letter";
            btn.onclick = function () { checkLetter(letter); this.disabled = true; };
            lettersDiv.appendChild(btn);
        });