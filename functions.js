export const randumNum = (num1, num2) => {
    const rnmNum = num1 + num2
    return (Math.round(Math.random() * rnmNum + 1))
}


export const firstbuchtaben = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export const Big = (letter) => {
    return letter.toUpperCase()
}

export const lastLetterCheck = (string, letter) => {
    const lastLetter = string.charAt(string.length - 1);
    return lastLetter.toLowerCase() === letter.toLowerCase();
};
