export const checkWin = (boxes) => {
    console.log("I am checking if you won")
    return ""
}

export const checkGameOver = (boxes) => {

    for (let i = 0; i < boxes.length ; i++) {
        if (boxes[i] == "") {
            return false
        }
    }
    return true
}
