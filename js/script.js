function toggleTheme() {
    if (document.body.classList.contains("dark"))
        document.body.classList.remove("dark");
    else
        document.body.classList.add("dark");
}

const words = ["FED", "RJ14","FED", "RJ14","FED", "RJ14","FED", "RJ14",];

!function newWord() {
  const randomWord = Math.floor(Math.random() * words.length);
  document.getElementById('wordDisplay').innerHTML = words[randomWord];
}();