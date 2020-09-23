export const generateRandomColor = () => {

    // 4 colors possibles - success danger info warning
    let color = ""
    const random = Math.floor(Math.random() * Math.floor(4)) + 1 

    switch (random) {
        case 1 : color = "success"
            break;
        case 2 : color = "danger"
            break;
        case 3 : color = "info"
            break;
        case 4 : color = "warning"
            break;
    }

    return color
}

export const checkMatchSequence = (playerSequence, originalSequence) => {

    for (let i = 0 ; i < playerSequence.length ; i++) {
        if (playerSequence[i] != originalSequence[i]) {
            return false
        }
    }

    return true
}