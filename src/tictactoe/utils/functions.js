export const checkWin = (boxes) => {

    // Could optimize here

    // Horizontal lines 
    if (boxes[0] == boxes[1] && boxes[0] == boxes[2] && boxes[0] != "") {
        return boxes[0] 
    }
    if (boxes[3] == boxes[4] && boxes[3] == boxes[5] && boxes[3] != "") {
        return boxes[3] 
    }
    if (boxes[6] == boxes[7] && boxes[6] == boxes[8] && boxes[6] != "") {
        return boxes[6]
    }

    // Vertical lines 
    if (boxes[0] == boxes[3] && boxes[0] == boxes[6] && boxes[0] != "") {
        return boxes[0] 
    }
    if (boxes[1] == boxes[4] && boxes[1] == boxes[7] && boxes[1] != "") {
        return boxes[1] 
    }
    if (boxes[2] == boxes[5] && boxes[2] == boxes[8] && boxes[2] != "") {
        return boxes[2] 
    }

    // Diagonals
    if (boxes[0] == boxes[4] && boxes[0] == boxes[8] && boxes[0] != "") {
        return boxes[0] 
    }
    if (boxes[2] == boxes[4] && boxes[2] == boxes[6] && boxes[2] != "") {
        return boxes[2]
    }

    return ""
}

export const checkGameOver = (boxes) => {

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i] == "") {
            return false
        }
    }
    return true
}
