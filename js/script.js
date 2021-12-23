document.addEventListener("keydown", e => {
        new Audio(`keys/${e.key.toUpperCase()}.mp3`).play();
    }
)